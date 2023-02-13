def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# Melhor caso: O(n log n)
# Pior caso: O(n log n)
# Caso médio: O(n log n)
