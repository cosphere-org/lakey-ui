import requests
from io import StringIO
import pandas as pd
import ipywidgets as widgets
from IPython.display import display

from .widgets.explorer import Explorer

class Lakey:
    def __init__(
        self,
        access_token,
        lakey_service_url='http://localhost:8887'
    ):
        self.lakey_service_url = lakey_service_url
        self.access_token = access_token

    def explore(self):
        display(Explorer(lakey_service_url=self.lakey_service_url, access_token=self.access_token))

    def download(self, download_spec=None, url=None):
        if url:
            return self._download_by_url(url)
        elif(download_spec):
            return self._download_by_spec(download_spec)

    def _download_by_spec(self, download_spec):
        response_1 = requests.post(
            f'{self.lakey_service_url}/downloader/requests/',
            json={
                'spec': download_spec['spec'],
                'catalogue_item_id': download_spec['id'],
            },
            headers={'Authorization': f'Bearer {self.access_token}'}
        )

        uri = response_1.json()['uri']

        response_2 = requests.get(uri)

        if download_spec['executor_type'] == 'ATHENA':
            return pd.read_csv(StringIO(response_2.content.decode('utf8')))

    def _download_by_url(self, url, download_spec=None):
        response = requests.get(url)

        # TODO: consider how to differentiate not ATHENA executor in case of 
        # by url

        # if download_spec['executor_type'] == 'ATHENA':
        return pd.read_csv(StringIO(response.content.decode('utf8')))