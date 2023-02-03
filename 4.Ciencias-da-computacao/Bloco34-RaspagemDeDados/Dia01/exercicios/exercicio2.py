import requests


def get_content(url: str):
    response = requests.get(url)
    return response.json()


def get_username_and_url(content: list[dict]):
    for user in content:
        print(f"{user['login']} {user['url']}")


if __name__ == "__main__":
    content = get_content("https://api.github.com/users")
    get_username_and_url(content)
