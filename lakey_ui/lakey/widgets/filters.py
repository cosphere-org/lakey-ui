import ipywidgets as widgets
from uuid import uuid4
from IPython.display import display

from .single_filter import SingleFilter


class Filters():
    def __init__(self, spec, display_widget=True, display_value=False):
        self.counter = 0
        self.add_button = widgets.Button(description="Add filter", icon='plus')

        self.rows = []
        self.rows_box = widgets.VBox(self.rows)
        self.value = widgets.ValueWidget()

        self.widgets = [
            widgets.Label('filters'),
            self.rows_box,
            self.add_button
        ]

        def update_output(*args):
            self.value.value = self.filters

        update_output()

        if display_value and display_widget:
            def display_value(filters):
                print(filters or {})

            self.output = widgets.interactive_output(
                display_value,
                {'filters': self.value}
            )
            self.widgets.append(self.output)

        self.widget_container = widgets.VBox(
            self.widgets
        )

        if display_widget:
            display(self.widget_container)

        def on_delete_row(b):
            filters = [*self.rows_box.children]

            position = int([f.id for f in self.rows].index(b.model_id))

            del filters[position]
            del self.rows[position]
            self.rows_box.children = filters
            self.counter -= 1
            update_output()

        def on_add_row(b):
            id = str(uuid4())
            delete_button = widgets.Button(
                description="Remove filter",
                icon='minus',
                model_id=id
            )
            delete_button.on_click(on_delete_row)

            self.counter += 1
            row = SingleFilter(id=id, spec=spec)
            row.value.observe(update_output, 'value')
            self.rows.append(row)

            new_one = widgets.HBox(children=[row.widget, delete_button])

            self.rows_box.children = [*self.rows_box.children, new_one]
            update_output()

        self.add_button.on_click(on_add_row)

    @property
    def filters(self):
        return [
            row.value.value for row in self.rows
        ]
