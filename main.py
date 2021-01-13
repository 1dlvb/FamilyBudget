import eel


eel.init('web')


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
def tag_select_inc_py(tag_inc_js):                               # get Inc tag from js
    tag = tag_inc_js
    print("Tag is: {}".format(tag))
    return 'Py says whats up.'


@eel.expose
def tag_money_get_amount_py(ags_js):                            # get Amount of money get
    ags = round(float(ags_js), 2)
    print("You got: {}".format(ags))


eel.start('index.html', size=(750, 900))
