import math

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


def paint_costs(area):
    unit_price = 80
    unit_vol = 18

    total_vol = area / 3
    total_cans = math.ceil(total_vol / unit_vol)
    total_price = total_cans * unit_price

    return (total_cans, total_price)


print(paint_costs(250))

# Exercício 6


def triangle_type(side_1, side_2, side_3):
    is_triangle = (
        side_1 + side_2 > side_3
        and side_1 + side_3 > side_2
        and side_2 + side_3 > side_1
    )

    if not is_triangle:
        return "não é triângulo"
    elif side_1 == side_2 == side_3:
        return "triângulo equilátero"
    elif side_1 == side_2 or side_1 == side_3 or side_2 == side_3:
        return "triângulo isósceles"
    else:
        return "triângulo escaleno"


print(triangle_type(5, 4, 1))
print(triangle_type(5, 5, 5))
print(triangle_type(10, 10, 12))
print(triangle_type(5, 7, 8))
