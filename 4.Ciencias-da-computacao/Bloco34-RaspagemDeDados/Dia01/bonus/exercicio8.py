import requests
from parsel import Selector


def get_content(url: str):
    response = requests.get(url)
    return response.text


def get_flags_url(content: str):
    selector = Selector(content)
    flags_url = selector.css("li.gallerybox a.image > img::attr(src)").getall()
    return ["https:" + flag_url for flag_url in flags_url]


def save_flags_url(flags_url: list[str]):
    for flag_url in flags_url:
        filename = flag_url.split("/")[-1]
        image_content = requests.get(flag_url).content

        with open("./country_flags/" + filename, "wb") as file:
            file.write(image_content)


if __name__ == "__main__":
    content = get_content(
        "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
    )
    flags_url = get_flags_url(content)
    save_flags_url(flags_url)
