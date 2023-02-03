import requests


def get_content(url: str, headers: dict):
    response = requests.get(url, headers=headers)
    return response.text


if __name__ == "__main__":
    content = get_content(
        "https://scrapethissite.com/pages/advanced/?gotcha=headers",
        {"user-agent": "Mozilla/5.0", "accept": "text/html"},
    )
    assert "bot detected" not in content
