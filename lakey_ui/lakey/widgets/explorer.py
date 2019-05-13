import ipywidgets as widgets
import requests

from .single_catalog_item import SingleCatalogItem

interact = widgets.interactive.factory()
custom_interact_manual = interact.options(manual=True, manual_name="search")


class Explorer:
    def __init__(self, lakey_service_url, access_token):
        self.lakey_service_url = lakey_service_url
        self.access_token = access_token
        self.main_widget = widgets.VBox()
        self.widgets = []
        self.catalog_items = []

        self._w_search_input = widgets.Text()

        self.generate_catalog_item_list()

        def prepare_catalog_items(query):
            params = {'query': str(query)} if query else {}
            response = requests.get(
                f'{self.lakey_service_url}/catalogue/items/',
                params=params,
                headers={'Authorization': f'Bearer {self.access_token}'})

            self.catalog_items = response.json()['items']
            self.generate_catalog_item_list()
            return self._w_catalog_items

        custom_interact_manual(
            prepare_catalog_items,
            query=self._w_search_input,
        )

    def generate_catalog_item_list(self):
        self._w_catalog_items = widgets.VBox(
            [
                SingleCatalogItem(
                    catalog_item,
                    display_widget=False
                ).main_widget
                for catalog_item
                in self.catalog_items
            ]
        )
