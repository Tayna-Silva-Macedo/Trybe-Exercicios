import requests
from bs4 import BeautifulSoup

URL_BASE = "https://pt.wikipedia.org"
page = requests.get(f"{URL_BASE}/wiki/Rock_in_Rio%22")
html_text = page.text

soup = BeautifulSoup(html_text, "html.parser")


def create_url(url, urn):
    url = url[:-1] if url[-1] == "/" else url
    urn = urn[1:] if urn[0] == "/" else urn

    return f"{url}/{urn}"


def transform_wiki_links(link):
    return link if link[:4] == "http" else create_url(URL_BASE, link)


links = [
    transform_wiki_links(link["href"])
    for link in soup.find_all("a")
    if link["href"] is not None
]

for link in links:
    print(link)
