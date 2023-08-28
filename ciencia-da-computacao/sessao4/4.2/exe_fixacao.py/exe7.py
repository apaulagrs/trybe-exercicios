from exe1 import Conjunto


if __name__ == "__main__":
    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    for elem in estudantes:
        conj_estudantes.add(elem)

    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Quem ainda não entregou a lista1?",
          conj_estudantes.difference(conj_lista1))
    print("Quem já entregou as duas listas?",
          conj_lista1.intersection(conj_lista2))
    print("Quem já entregou qualquer uma das duas listas?",
          conj_lista1.union(conj_lista2))
    print("Quem ainda não entregou nenhuma das listas?",
          conj_estudantes.difference(conj_lista1.union(conj_lista2)))


# para add
