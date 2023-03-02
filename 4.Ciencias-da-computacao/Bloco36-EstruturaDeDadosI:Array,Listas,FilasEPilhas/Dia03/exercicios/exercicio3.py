def good_pairs(numbers):
    counter = 0

    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] == numbers[j]:
                counter += 1

    return counter


def test_good_pairs():
    assert good_pairs([1, 3, 1, 1, 2, 3]) == 4
    assert good_pairs([1, 1, 2, 3]) == 1
