class Conjunto:
    def __init__(self):
        self.set = [False for _ in range(1001)]
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
        self.set[item] = True

        if item > self.last_element:
            self.last_element = item

    def union(self, conjuntoB):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_set.add(index)

        return new_set

    def intersection(self, conjuntoB):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_set.add(index)

        return new_set

    def difference(self, conjuntoB):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_set.add(index)

        return new_set

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conjunto1 = Conjunto()
    for item in [0, 10, 100, 1000]:
        conjunto1.add(item)
    print(conjunto1)
    print(10 in conjunto1)
    print(5 in conjunto1)

    conjunto2 = Conjunto()
    for item in [1, 2, 3]:
        conjunto2.add(item)
    print(conjunto2)

    conjunto3 = Conjunto()
    for item in [7, 2, 10]:
        conjunto3.add(item)
    print(conjunto3)

    conjunto4 = Conjunto()
    print(conjunto4)

    conjunto5 = Conjunto()
    for item in range(1, 11):
        conjunto5.add(item)

    conjunto6 = Conjunto()
    for item in range(10, 21):
        conjunto6.add(item)

    conjunto7 = conjunto5.union(conjunto6)
    print(conjunto7)

    conjunto8 = conjunto5.intersection(conjunto6)
    print(conjunto8)

    conjunto9 = conjunto5.difference(conjunto6)
    print(conjunto9)
