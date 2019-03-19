
import os

from IPython.display import display, Image


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def ui():

    display(Image(os.path.join(BASE_DIR, 'download.png')))

    return 'some dataframe'
