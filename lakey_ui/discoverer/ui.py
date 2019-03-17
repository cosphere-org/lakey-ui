
import os

from IPython.display import Image


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def ui():

    return Image(os.path.join(BASE_DIR, 'discover.png'))
