
# Lakey-UI

The jupyter notebook UI widgets for communication with `lakey-service`.


## Discovery

In order to discover some of the existing (and registered) data run the following:

```python
from lakey_ui import discover

discover()
```


## Downloader

In order to download samples of the data on which one can perform various analytical tasks run the following:

```python
from lakey_ui import download

df = download()
```