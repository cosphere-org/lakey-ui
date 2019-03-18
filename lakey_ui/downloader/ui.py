
import os

import pandas as pd
from IPython.display import display, Image


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def ui():

    display(Image(os.path.join(BASE_DIR, 'download.png')))

    return pd.DataFrame({
        'value': [134, 556, 466, 452, 123, 1235, 4893],
        'name': 7 * ['temperature']
    })
