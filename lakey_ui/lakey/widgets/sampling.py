import ipywidgets as widgets
from IPython.display import display


class Sampling():
    def __init__(self, display_widget=True, display_value=False):
        self.sampling_widgets = widgets.IntText(
            value=50,
            min=0,
            max=100,
            description='[%]',
            disabled=False
        )

        self.widgets = [
            widgets.Label('sampling ratio'),
            self.sampling_widgets
        ]

        self.value = widgets.ValueWidget()

        def update_output(*args):
            self.value.value = self.sampling_ratio

        update_output()

        self.sampling_widgets.observe(update_output, 'value')

        if display_value and display_widget:
            def display_value(ratio):
                print(f'{ratio} [%]')

            self.output = widgets.interactive_output(
                display_value,
                {'ratio': self.value}
            )
            self.widgets.append(self.output)

        self.widget_container = widgets.VBox(
            self.widgets
        )

        if display_widget:
            display(self.widget_container)

    @property
    def sampling_ratio(self):
        return self.sampling_widgets.value
