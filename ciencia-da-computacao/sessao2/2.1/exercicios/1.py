def how_many_even(n):
    counter = []
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter.append(number)
    print(f"Existem {len(counter)} números pares na "
          f"sequencia de 1 a {n}.")


how_many_even(10)
