import eel

eel.init('web')


@eel.expose
def tag_select_py(tag_js):
    tag = tag_js
    print("Tag is: {}".format(tag_js))
    return 'Py says getta fuck out.'


eel.start('index.html', size=(900, 900))
