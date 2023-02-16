from random import shuffle
from Cronometro import Cronometro


def selection_sort(array):
    for index in range(len(array)):
        minimum = index

        for search_index in range(index + 1, len(array)):
            if array[search_index] < array[minimum]:
                minimum = search_index

        array[minimum], array[index] = array[index], array[minimum]

    return array


def insertion_sort(array):
    for index in range(len(array)):

        current_value = array[index]
        current_position = index

        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value

    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]
        shuffle(random_numbers)

    with Cronometro(
        f"{algorithm_name} com entrada ordenada de " + f"{input} números"
    ):
        algorithm(sorted_numbers)

    with Cronometro(
        f"{algorithm_name} com entrada inversamente ordenada de "
        + f"{input} números"
    ):
        algorithm(reversed_sorted_numbers)

    with Cronometro(
        f"{algorithm_name} com entrada aleatória de " + f"{input} números"
    ):
        algorithm(random_numbers)

    print("*" * 50)
