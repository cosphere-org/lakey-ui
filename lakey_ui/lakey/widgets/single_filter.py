import ipywidgets as widgets
from IPython.display import display


class SingleFilter():
    def __init__(
        self,
        id=None,
        spec=[],
        display_widget=False,
        display_value=False
    ):
        self.id = id

        self.columns_spec = {column['name']: column['type'] for column in spec}

        self.name_widget = widgets.Dropdown(
            name='column',
            options=self.columns_spec.keys(),
            disabled=False,
        )

        self.operator_widget = widgets.Dropdown(
            options=self.OPERATORS,
            disabled=False,
        )
        self.value_widget = widgets.Text()
        self.value = widgets.ValueWidget()
        self.generate_filter()

        self.name_widget.observe(self.generate_filter, names='value')
        self.operator_widget.observe(self.generate_filter, names='value')
        self.value_widget.observe(self.generate_filter, names='value')

        if display_value and display_widget:
            def display_value(filter):
                print(filter)

            self.output = widgets.interactive_output(
                display_value,
                {'filter': self.value}
            )
            self.widget = widgets.VBox([
                widgets.HBox([
                    self.name_widget,
                    self.operator_widget,
                    self.value_widget,

                ]),
                self.output
            ])

        else:
            self.widget = widgets.HBox(children=[
                self.name_widget,
                self.operator_widget,
                self.value_widget
            ])

        if display_widget:
            display(self.widget)

    BOOL_OPERATORS = ['=', '!=']
    OPERATORS = ['>=', '>', '<', '<=', '=', '=!']

    def generate_filter(self, change=None):
        is_boolean = self.columns_spec[self.name_widget.value] == 'BOOLEAN'

        self.operator_widget.options = (
            self.BOOL_OPERATORS if is_boolean else self.OPERATORS
        )

        self.value.value = {
            'name': self.name_widget.value,
            'operator': self.operator_widget.value,
            'value': self.value_widget.value
        }
