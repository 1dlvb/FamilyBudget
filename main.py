import eel
import sqlite3 as sq



"""MAIN LOGIC"""


class Budget:
    def __init__(self, tagOrName, amount, date):
        self.tag = tagOrName
        self.amount = amount
        self.date = date


@eel.expose
def incomes(tag_inc_js, amg_js, date_js_inc):
    tag = tag_inc_js
    amount = round(float(amg_js), 2)
    date = str(date_js_inc)

    cur.execute("INSERT INTO incomes (tag_incomes, profit_amount, date_income) VALUES (?, ?, ?)", (tag, amount, date))
    db.commit()

    print(tag, amount, date)
    return tag, amount, date


@eel.expose
def tag_select_exp_py(tag_exp_js):                               # get Exp tag from js
    tag = tag_exp_js
    print("Tag is: {}".format(tag))
    return 'Py says whats up.'


@eel.expose
def tag_money_spend_amount_py(ams_js):                          # get Amount of money spent
    ams = round(float(ams_js), 2)
    print("You spent: {}".format(ams))


@eel.expose
def moneylenders_name_py(moneylenders_name_js):                 # Moneylender's name
    ml_name = moneylenders_name_js
    print("You borrowed money from: {}".format(ml_name))


@eel.expose
def amount_of_debt_py(amount_of_debt_js):                      # Amount of debt
    amd = round(float(amount_of_debt_js), 2)                   # amd - amount of money debt
    print("You borrowed: {}".format(amd))


@eel.expose
def date_exp_py(date_js_exp):
    date = str(date_js_exp)
    print("Date of expenditure: {}".format(date))


@eel.expose
def date_debt_py(date_js_debt):
    date = str(date_js_debt)
    print("Date of borrowing: {}".format(date))


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
        date_income TEXT DEFAULT '00-00-00'

    )""")

    # expenses table
    cur.execute("""CREATE TABLE IF NOT EXISTS expenses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tag_expenses TEXT DEFAULT 'Other',
        spent_amount FLOAT DEFAULT 0,
        date_expense TEXT DEFAULT '00-00-00'

    ) """)

    # debts table
    cur.execute("""CREATE TABLE IF NOT EXISTS debts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        moneylenders_name TEXT DEFAULT '',
        debt_amount FLOAT DEFAULT 0,
        date_debt TEXT DEFAULT '00-00-00'

        ) """)


eel.init('web')


eel.start('index.html', size=(750, 900))

