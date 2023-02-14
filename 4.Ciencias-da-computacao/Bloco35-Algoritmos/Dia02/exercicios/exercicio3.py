def max_int(numbers):
    if len(numbers) == 1:
        return numbers[0]
    else:
        max_in_list = max_int(numbers[1:])
        return max_in_list if max_in_list > numbers[0] else numbers[0]


print(max_int([40, 20, 40, 140, 94, 5, 90]))
