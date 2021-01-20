import eel
import sqlite3 as sq


"""MAIN LOGIC"""


@eel.expose
def incomes(tag_inc_js, amg_js, date_js_inc):           # incomes logic. tag, profit, date
    tag = tag_inc_js
    amount = round(float(amg_js), 2)
    date = str(date_js_inc)

    # add values to database
    cur.execute("INSERT INTO incomes (tag_incomes, profit_amount, date_income) VALUES (?, ?, ?)", (tag, amount, date))
    db.commit()

    print(tag, amount, date)
    return tag, amount, date


@eel.expose
def expenses(tag_exp_js, ams_js, date_js_exp):          # expenses logic. tag, profit, date
    tag = tag_exp_js
    amount = round(float(ams_js), 2)
    date = str(date_js_exp)

    # add values to database
    cur.execute("INSERT INTO expenses (tag_expenses, spent_amount, date_expense) VALUES(?,?, ?)", (tag, amount, date))
    db.commit()

    print(tag, amount, date)
    return tag, amount, date


@eel.expose
def debts(moneylenders_name_js, amount_of_debt_js, date_js_debt):   # debts logic. tag, profit, date
    name = moneylenders_name_js
    amount = round(float(amount_of_debt_js), 2)
    date = str(date_js_debt)

    # add values to database
    cur.execute("INSERT INTO debts (moneylenders_name, debt_amount, date_debt) VALUES(?,?, ?)", (name, amount, date))
    db.commit()

    print(name, amount, date)
    return name, amount, date


"""DATABASE"""


with sq.connect("family_budget.db") as db:
    cur = db.cursor()  # Cursor

    cur.execute("DROP TABLE IF EXISTS users")

    # budget table
    cur.execute("""CREATE TABLE IF NOT EXISTS budget(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        zero INTEGER,
        rest_money BIGINT DEFAULT 1

    )""")

    # incomes table
    cur.execute("""CREATE TABLE IF NOT EXISTS incomes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tag_incomes TEXT DEFAULT 'Salary',
        profit_amount FLOAT DEFAULT 0,
        date_income TEXT DEFAULT '0000-00-00'

    )""")

    # expenses table
    cur.execute("""CREATE TABLE IF NOT EXISTS expenses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tag_expenses TEXT DEFAULT 'Other',
        spent_amount FLOAT DEFAULT 0,
        date_expense TEXT DEFAULT '0000-00-00'

    ) """)

    # debts table
    cur.execute("""CREATE TABLE IF NOT EXISTS debts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        moneylenders_name TEXT DEFAULT '',
        debt_amount FLOAT DEFAULT 0,
        date_debt TEXT DEFAULT '0000-00-00'

        ) """)


eel.init('web')


eel.start('index.html', size=(750, 900))

