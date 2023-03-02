def shuffle(items):
    cards_shuffled = []

    mid = len(items) // 2

    for offset in range(mid):
        cards_shuffled.extend(items[offset::mid])

    return cards_shuffled


def test_shuffle():
    assert shuffle([2, 6, 4, 5]) == [2, 4, 6, 5]
    assert shuffle([1, 4, 4, 7, 6, 6]) == [1, 7, 4, 6, 4, 6]
