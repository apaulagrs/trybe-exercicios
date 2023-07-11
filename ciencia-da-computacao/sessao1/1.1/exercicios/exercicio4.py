def bigger_name(lista):
    first = lista[0]
    for list in lista:
        if len(list) > len(first):
            first = list
    return first


# bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
