def find_first_bad_version(array):
    start = 0
    end = len(array) - 1

    while start <= end:
        mid = (start + end) // 2

        if array[mid] is False:
            end = mid - 1
        else:
            start = mid + 1

    return start


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]

print("Saída array1:", find_first_bad_version(array1))
print("Saída array2:", find_first_bad_version(array2))
