import eel
from datetime import *
import sqlite3 as sq


"""DATABASE"""
with sq.connect("family_budget.db") as db:
    cur = db.cursor()  # Cursor

    # budget table
    cur.execute("""CREATE TABLE IF NOT EXISTS budget(
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           rest_money REAL DEFAULT 0 NOT NULL, 
           profit REAL DEFAULT 0 NOT NULL
           

       )""")

    # incomes table
    cur.execute("""CREATE TABLE IF NOT EXISTS incomes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tag_incomes TEXT DEFAULT 'Salary',
        profit_amount REAL DEFAULT 0,
        date_income TEXT NOT NULL

    )""")

    # expenses table
    cur.execute("""CREATE TABLE IF NOT EXISTS expenses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tag_expenses TEXT DEFAULT 'Other',
        spent_amount REAL DEFAULT 0,
        date_expense TEXT NOT NULL

    ) """)

    # debts table
    cur.execute("""CREATE TABLE IF NOT EXISTS debts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        moneylenders_name TEXT DEFAULT '',
        debt_amount REAL DEFAULT 0,
        date_debt TEXT NOT NULL

        ) """)

    if cur.execute("SELECT Count() FROM budget").fetchone()[0] <= 0:
        cur.execute("INSERT INTO budget (rest_money, profit) VALUES (?, ?)", (0, 0))

"""MAIN LOGIC"""
eel.init('web')


# auxiliary functions
def get_num_of_rows_inc():                            # Get number of incomes table rows
    rows_query_inc = "SELECT Count() FROM incomes"
    cur.execute(rows_query_inc)
    number_of_rows_inc = cur.fetchone()[0]
    print(number_of_rows_inc)
    return number_of_rows_inc


def get_num_of_rows_exp():                            # Get number of expenses table rows
    rows_query_exp = "SELECT Count() FROM expenses"
    cur.execute(rows_query_exp)
    number_of_rows_exp = cur.fetchone()[0]
    print(number_of_rows_exp)
    return number_of_rows_exp


def get_num_of_rows_exp():                            # Get number of expenses table rows
    rows_query_debt = "SELECT Count() FROM expenses"
    cur.execute(rows_query_debt)
    number_of_rows_debt = cur.fetchone()[0]
    print(number_of_rows_debt)
    return number_of_rows_debt


def get_num_of_rows_budget():                            # Get number of budget table rows
    rows_query_budget = "SELECT Count() FROM budget"
    cur.execute(rows_query_budget)
    number_of_rows_budget = cur.fetchone()[0]
    print(number_of_rows_budget)
    return number_of_rows_budget


def shorten_the_date_list(date_to_shorten):
    date_to_shorten = str(date_to_shorten).split(' ')
    shorted_date = date_to_shorten[0].split('-')
    print("Shorted date is {0}". format(shorted_date))
    return shorted_date


# Get incomes from db
def get_incomes_from_db():
    l_entry_list = []

    l_entry = cur.execute("SELECT * FROM incomes WHERE id=?", [l_id_inc()]).fetchall()
    for value1 in l_entry:
        for value2 in value1:
            l_entry_list.append(value2)
        print(l_entry_list)
    month_db = l_entry_list[3]
    shorten_the_date_list(month_db)

    inc = l_entry_list[2]
    return inc


# last id inc
def l_id_inc():
    m_id = cur.execute("SELECT max(id) FROM incomes")
    l_id = m_id.fetchone()[0]
    return l_id


# last id exp
def l_id_exp():
    m_id = cur.execute("SELECT max(id) FROM expenses")
    l_id = m_id.fetchone()[0]
    return l_id


# last id debts
def l_id_debts():
    m_id = cur.execute("SELECT max(id) FROM debts")
    l_id = m_id.fetchone()[0]
    return l_id


# now date
now = datetime.now()
shorten_the_date_list(now)

# JavaScript functions
# incomes logic. tag, profit, date
@eel.expose
def incomes_py(tag_inc_js, amg_js, date_js_inc):
    tag = tag_inc_js
    amount = round(float(amg_js), 2)
    date = str((date_js_inc))
    num_of_rows = get_num_of_rows_inc()

    # add values to database
    cur.execute("INSERT INTO incomes (tag_incomes, profit_amount, date_income) VALUES (?, ?, ?)", (tag, amount, date))
    db.commit()

    if num_of_rows > 0:
        amount = cur.execute("SELECT profit_amount FROM incomes WHERE id=?", [l_id_inc()]).fetchone()[0]
        print("AMOUNT IS: {0}".format(amount))
        cur.execute("UPDATE budget SET profit = profit + (?)", [amount])
        db.commit()
    else:
        print("Table is empty!")

    print(tag, date, amount)
    return tag, amount, date


# expenses logic. tag, profit, date
@eel.expose
def expenses_py(tag_exp_js, ams_js, date_js_exp):
    tag = tag_exp_js
    amount = round(float(ams_js), 2)
    date = str((date_js_exp))
    num_of_rows = get_num_of_rows_exp()

    # add values to database
    cur.execute("INSERT INTO expenses (tag_expenses, spent_amount, date_expense) VALUES(?,?, ?)", (tag, amount, date))
    db.commit()

    if num_of_rows > 0:
        amount = cur.execute("SELECT spent_amount FROM expenses WHERE id=?", [l_id_exp()]).fetchone()[0]
        print("AMOUNT IS: {0}".format(amount))
        cur.execute("UPDATE budget SET rest_money = rest_money + (?)", [amount])
        db.commit()
    else:
        print("Table is empty!")

    print(tag, amount, date)
    return tag, amount, date

# Show total profit
@eel.expose
def show_total_profit_py():
    return cur.execute("SELECT profit FROM budget").fetchone()[0]


# total profit
@eel.expose
def show_rest_money_py():
    profit = cur.execute("SELECT profit FROM budget").fetchone()[0]
    amount_of_spent = cur.execute("SELECT rest_money FROM budget").fetchone()[0]
    rest = profit - amount_of_spent
    return rest


# debts logic. tag, profit, date
@eel.expose
def debts_py(moneylenders_name_js, amount_of_debt_js, date_js_debt):
    name = moneylenders_name_js
    amount = round(float(amount_of_debt_js), 2)
    date = str((date_js_debt))


    # add values to database
    cur.execute("INSERT INTO debts (moneylenders_name, debt_amount, date_debt) VALUES(?,?, ?)", (name, amount, date))
    db.commit()

    print(name, amount, date)
    return name, amount, date


eel.start('index.html', size=(750, 900))
