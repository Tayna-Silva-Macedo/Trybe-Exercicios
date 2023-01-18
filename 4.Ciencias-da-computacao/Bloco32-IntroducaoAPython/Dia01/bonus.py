# Exercício 1


def smallest_element(numbers: list):
    return min(numbers)


print(smallest_element([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2


def print_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


print_triangle(5)


# Exercício 3


def summation(n):
    total = 0
    for number in range(1, n + 1):
        total += number
    return total


print(summation(5))


# Exercício 4
