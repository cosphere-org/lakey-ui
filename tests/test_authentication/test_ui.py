
from unittest import TestCase

from lakey_ui.authentication.ui import ui


class UITestCase(TestCase):

    def test_ui(self):
        ui('uri')
