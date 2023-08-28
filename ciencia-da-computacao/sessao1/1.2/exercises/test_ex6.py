from ex6 import valid_email
import pytest


def test_valid_email_can_only_contain_letters():
    assert valid_email("aaaa@nomewebsite.ext") is None


def test_valid_email_can_only_contain_letters_and_digits():
    assert valid_email("a1997@nomewebsite.ext") is None


def test_valid_email_can_only_contain_letters_digits_and_dashes():
    assert valid_email("a1a-a_a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert valid_email("a1a-a_a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert valid_email("a@nomewebsite.ext") is None


def test_username_when_doesnt_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        valid_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exeption():
    with pytest.raises(ValueError):
        valid_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert valid_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        valid_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert valid_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        valid_email("abc@website123.pyth")
