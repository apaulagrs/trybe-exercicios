def fizz_buzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        if number % 3 == 0:
            numbers.append("Fizz")
        if number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers
