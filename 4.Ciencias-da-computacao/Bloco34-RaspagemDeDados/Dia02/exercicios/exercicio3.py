from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)


def scrape(url):
    firefox.get(url)

    posts = []

    for post in firefox.find_elements(
        By.CLASS_NAME, "inhype-grid-post.inhype-post.format-standard"
    ):
        new_item = {}

        new_item["title"] = (
            post.find_element(By.CLASS_NAME, "inhype-post-details")
            .find_element(By.CLASS_NAME, "post-title.entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_item["link"] = (
            post.find_element(By.CLASS_NAME, "inhype-post-details")
            .find_element(By.CLASS_NAME, "post-title.entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        posts.append(new_item)

    print(posts)


scrape("https://diolinux.com.br/%22")
