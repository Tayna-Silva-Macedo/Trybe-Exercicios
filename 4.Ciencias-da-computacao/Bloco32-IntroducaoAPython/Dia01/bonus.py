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
    return sum(range(1, n + 1))


print(summation(5))


# Exercício 4


def final_price(liters, fuel_type):
    if fuel_type == "A":
        price_per_liter = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif fuel_type == "G":
        price_per_liter = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06

    total = price_per_liter * liters
    total_with_discount = total * (1 - discount)
    return round(total_with_discount, 2)


print(final_price(1, "A"))
print(final_price(1, "G"))
print(final_price(21, "A"))
print(final_price(21, "G"))
