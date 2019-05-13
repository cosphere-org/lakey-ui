import ipywidgets as widgets
from IPython.display import display


class Columns():
    def __init__(self, spec, display_widget=True, display_value=False):
        self.columns = [
            widgets.Checkbox(
                value=False,
                description=column['name'],
                disabled=False
            ) for column in spec
        ]
        self.rows_box = widgets.VBox(self.columns)

        self.value = widgets.ValueWidget()

        def update_output(*args):
            self.value.value = self.selected_columns

        for column in self.columns:
            column.observe(update_output, 'value')

        self.widgets = [
            widgets.Label('columns'),
            self.rows_box
        ]

        update_output()

        if display_value and display_widget:
            def display_value(columns):
                print(columns)

            self.output = widgets.interactive_output(
                display_value,
                {'columns': self.value}
            )
            self.widgets.append(self.output)

        self.widget_container = widgets.VBox(
            self.widgets
        )

        if display_widget:
            display(self.widget_container)

    @property
    def selected_columns(self):
        return [
            children.description for children in self.columns if children.value
        ]
