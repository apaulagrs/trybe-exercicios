employee_registry = {}


employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"
print(employee_registry)


employee_registry[10] = "name30"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")


dict1 = {}
dict2 = dict()


dict3 = {1: "name1", 2: "name2"}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

dict1[14] = "name1"
print(f"Novo dicionário 1, após inserção/alteração: {dict1}")


name = dict1[14]
del dict1[14]
print(f"Dicionário 1 após consulta e deleção: {dict1}")
