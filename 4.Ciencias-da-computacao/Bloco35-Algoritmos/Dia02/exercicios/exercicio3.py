def max_int(numbers, index):
    if index == len(numbers) - 1:
        return 0
    else:
        max_in_list = max_int(numbers, index + 1)
        if max_in_list > numbers[index]:
            return max_in_list
        else:
            return numbers[index]


print(max_int([4, 20, 40, 140, 94, 5, 9], 0))
