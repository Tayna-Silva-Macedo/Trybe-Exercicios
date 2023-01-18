# Exercício 1


def biggest_number(first_number, second_number):
    return max(first_number, second_number)


print(biggest_number(50, 10))


# Exercício 2


def average(numbers_list: list):
    total = 0
    length = len(numbers_list)
    for number in numbers_list:
        total += number
    return total / length


print(average([2, 5, 7, 10, 3]))

# Exercício 3


def print_square(n):
    for row in range(n):
        print(n * "*")


print_square(5)


# Exercício 4


def biggest_name(names_list: list):
    return max(names_list, key=len)


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5

# Exercício 6
