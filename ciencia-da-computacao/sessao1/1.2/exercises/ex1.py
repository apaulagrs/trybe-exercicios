# name = input("Digite um nome: ")

# for na in name:
#     *first, last = name
#     print(f"{first}")
#     *first, last = first
#     print(f"{first}")


def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


if __name__ == '__main__':
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
