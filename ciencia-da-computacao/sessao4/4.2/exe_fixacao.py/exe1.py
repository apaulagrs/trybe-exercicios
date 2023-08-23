class Conjunto():
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def __str__(self):
        string = "{"
        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)
        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)
        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)
        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False
        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False
        return True


if __name__ == "__main__":
    conjA = Conjunto()
    conjB = Conjunto()

    for i in range(1, 11):
        conjA.add(i)
    for i in range(10, 21):
        conjB.add(i)

    conj_union = conjA.intersection(conjB)
    print(conj_union)

    # for item in [1, 2, 3]:
    #     conj.add(item)

    # print(conj)
    # print(1 in conj)
    # print(0 in conj)

    # conj2 = Conjunto()
    # for item in [1, 2, 3]:
    #     conj2.add(item)

    # print(conj2)

    # conj3 = Conjunto()
    # for item in [7, 2, 10]:
    #     conj3.add(item)

    # print(conj3)

    # conj4 = Conjunto()
    # print(conj4)
