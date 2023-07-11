num = input("Insira os valores aqui, separados por espaço: ")

nums_arr = num.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores: {num} não é válido")
    sum += int(num)

print(f"A soma dos valores é: {sum}")
