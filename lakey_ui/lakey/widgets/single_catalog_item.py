import ipywidgets as widgets

from .downloader import Downloader

lorem = 'bazinga trolo i jakis inny placeholder za opis catalogu'

class SingleCatalogItem:
    def __init__(self, catalog_item, display_widget=True):
        self.catalog_item = catalog_item
        self.main_widget = widgets.Tab()

        self._1 = widgets.widgets.VBox()
        self._2 = widgets.widgets.VBox()
        self._3 = widgets.widgets.VBox()

        # _1 START ####################################
        self._1__description_widget = widgets.Output()

        with self._1__description_widget:
            print(
                self.catalog_item.get('description') or
                lorem
            )
        self._1__widgets = [
            self._1__description_widget
        ]
        self._1.children = self._1__widgets
        # _1 END  ####################################
        ##############################################

        # _2 START ####################################
        self._2__description_widget = widgets.Output()
        
        with self._2__description_widget:
            print('TBD')
        self._2__widgets = [
            self._2__description_widget
        ]
        self._2.children = self._2__widgets
        # _2 END  ####################################
        ##############################################

        # _3 START ####################################
        self._3__downloader = Downloader(catalog_item=self.catalog_item, display_value=True)
        
        self._3__widgets = [
            self._3__downloader.widget_container
        ]
        self._3.children = self._3__widgets
        # _2 END  ####################################
        ##############################################


        self.main_widget.children = [
            self._1,
            self._2,
            self._3
        ]

        self.main_widget.set_title(0, self.catalog_item['name'])
        self.main_widget.set_title(1, 'SAMPLE')
        self.main_widget.set_title(2, 'DOWNLOAD')

        if display_widget:
            display(self.main_widget)


# scil = SingleCatalogItemLabel(some_catalog_item)      