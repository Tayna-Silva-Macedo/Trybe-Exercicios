import requests
from parsel import Selector


def get_content(url: str):
    response = requests.get(url)
    return response.text


def get_title(content: str):
    selector = Selector(content)
    title = selector.css("div.col-sm-6.product_main > h1::text").get()
    return title


def get_price(content: str):
    selector = Selector(content)
    price = selector.css(
        "div.col-sm-6.product_main > p.price_color::text"
    ).re_first(r"£\d+\.\d{2}")
    return price


def get_description(content: str):
    selector = Selector(content)
    description = selector.css("article > p::text").get()
    suffix = "...more"
    if description.endswith(suffix):
        description = description[: -len(suffix)]
    return description


def get_url_image(content: str):
    selector = Selector(content)
    url_image = selector.css("div.item.active > img::attr(src)").get()
    return url_image


def get_available_quantity(content: str):
    selector = Selector(content)
    available_quantity = selector.css(
        "div.col-sm-6.product_main > p.instock.availability::text"
    ).re_first(r"\d")
    return available_quantity


if __name__ == "__main__":
    URL_BASE = (
        "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
    )
    content = get_content(URL_BASE)

    title = get_title(content)
    price = get_price(content)
    description = get_description(content)
    url_image = URL_BASE + get_url_image(content)
    available_quantity = get_available_quantity(content)

    print(title, price, description, url_image, available_quantity, sep=",")
