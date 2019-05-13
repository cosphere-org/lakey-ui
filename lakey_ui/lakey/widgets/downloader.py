import ipywidgets as widgets
import json
from IPython.display import display

from .sampling import Sampling
from .filters import Filters
from .columns import Columns


class Downloader:
    def __init__(
        self,
        name=None,
        catalog_item=None,
        display_value=False,
        display_widget=False,
    ):
        self.catalog_item = catalog_item
        self.columns = Columns(
            spec=self.catalog_item['spec'],
            display_widget=False
        )
        self.filters = Filters(
            spec=self.catalog_item['spec'],
            display_widget=False
        )
        self.sample_ratio = Sampling(display_widget=False)

        self.value = widgets.ValueWidget()

        # self.download_button = widgets.Button(
        #     description="Download",
        #     icon='plus'
        # )

        # self.generator = widgets.interactive_output(generate_cell, {})

        # def on_button_clicked(b):
        #     with self.generator:
        #         get_ipython().set_next_input(f'spec = 1')#{self.spec}')
        #     pass

        # self.download_button.on_click(on_button_clicked)

        self.widgets = [
            self.columns.widget_container,
            self.filters.widget_container,
            self.sample_ratio.widget_container,
            # self.download_button,
            # self.generator,
        ]

        def update_output(*args):
            self.value.value = self.spec

        update_output()

        self.columns.value.observe(update_output, 'value')
        self.filters.value.observe(update_output, 'value')
        self.sample_ratio.value.observe(update_output, 'value')

        if display_value:
            def display_value(spec):
                download_spec = json.dumps(
                    {
                        'id': catalog_item['id'],
                        'executor_type': catalog_item['executor_type'],
                        'spec': spec
                    },
                    indent=4
                )

                print(
                    'to get date copy to next cell:\n\n'
                    f"""df = lakey.download({download_spec})"""
                )

            self.output = widgets.interactive_output(
                display_value,
                {'spec': self.value}
            )
            self.widgets.append(self.output)

        self.widget_container = widgets.VBox(
            self.widgets
        )

        if display_widget:
            display(self.widget_container)

    @property
    def spec(self):
        return {
            'columns': self.columns.selected_columns,
            'filters': self.filters.filters,
            'randomize_ratio': self.sample_ratio.sampling_ratio
        }
