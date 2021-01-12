import eel

eel.init('web')


@eel.expose
def tag_select_py(tag_js):                               # get tag from js
    tag = tag_js
    print("Tag is: {}".format(tag))
    return 'Py says whats up.'


@eel.expose
def tag_money_spend_amount_py(ams_js):                   # get Amount of money spent
    ams = ams_js
    print("You spent: {}".format(ams))


eel.start('index.html', size=(900, 900))
