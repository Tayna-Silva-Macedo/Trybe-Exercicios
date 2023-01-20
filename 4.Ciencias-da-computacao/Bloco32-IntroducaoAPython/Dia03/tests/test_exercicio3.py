from src.exercicio3 import validate_email
import pytest


def test_username_can_only_contain_letters():
    assert validate_email("nomeusuario@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("nomeusuario1996@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("nome-usuario1996@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("nome-usuario_1996@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("nomeusuario@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1nomeusuario@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a*a@nomewebsite.ext")


def test_website_contains_only_letters_and_digits():
    assert validate_email("nomeusuario@nomewebsite123.ext") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("nomeusuario@nome!website.ext")


def test_extension_should_contain_only_three_chars():
    assert validate_email("nomeusuario@nomewebsite.ext") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("nomeusuario@nomewebsite.exte")
