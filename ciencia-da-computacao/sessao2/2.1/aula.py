# def print_zero_to_ten():
#     for number in range(0, 11):
#         print(number)


# print_zero_to_ten()


# def count_zero_to_ten(n):
#     if n == 11:  # caso base
#         print("FIM!")
#     else:
#         print(n)
#         count_zero_to_ten(n + 1)  # caso recursivo


# count_zero_to_ten(0)


# def saudacao():
#     print("Oi")


# def despedida():
#     print("Tchau")


# def init():
#     print("Inicio")
#     saudacao()
#     print("Fim")
#     despedida()


# init()


# minha solução deu errado!:
# def fatorial_soma(n):
#     if n == 0:
#         print("FIM")
#     else:
#         counter = [number for number in range(0, n + 1)]
#         new_sum = sum(counter)

#         print(new_sum)
#         # fatorial_soma(n - 1)


# fatorial_soma(4)


def soma_recursiva(n):
    if n == 0:
        return 0
    else:
        return n + soma_recursiva(n-1)


print(soma_recursiva(4))

# solução proposta pelo curso da o mesmo resultado que o meu!
# def sum_recursive(n):
#     if n == 0:
#         return 0
#     else:
#         print(n)
#         return n + sum_recursive(n - 1)


# sum_recursive(4)
