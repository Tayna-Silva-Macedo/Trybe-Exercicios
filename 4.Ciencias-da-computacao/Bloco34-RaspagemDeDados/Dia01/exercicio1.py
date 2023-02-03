import requests


def get_content(url):
    response = requests.get(url)

    return response.text


if __name__ == "__main__":
    content = get_content("https://httpbin.org/encoding/utf8")
    print(content)
