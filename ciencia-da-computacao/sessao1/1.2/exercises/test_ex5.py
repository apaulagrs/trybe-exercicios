from ex5 import fizz_buzz


def test_fizz_buz_retorna_lista_de_numeros():
    'Deve retornar uma lista de números'
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_retorna_fizz():
    'Para números divisiveis por 3 deve retornar "Fizz"'
    assert fizz_buzz(3)[-1] == "Fizz"


def test_fizz_buzz_retorna_buzz():
    'Para números divisiveis por 3 deve retornar "Buzz"'
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_retorna_fizz_buzz():
    'Para números divisiveis por 3 deve retornar "FizzBuzz"'
    assert fizz_buzz(15)[-1] == "FizzBuzz"
