def start_number(person1, person2):
    return max(person1.difference(person2))


def reductor_number(person1, person2):
    return min(person1.difference(person2))


def individual_result(person1, person2):
    set_person1 = set(person1)
    set_person2 = set(person2)

    return start_number(set_person1, set_person2) - reductor_number(
        set_person1, set_person2
    )


def blefe(names_and_numbers):
    player1, player2 = list(names_and_numbers.keys())

    result_player1 = individual_result(
        names_and_numbers[player1], names_and_numbers[player2]
    )

    result_player2 = individual_result(
        names_and_numbers[player2], names_and_numbers[player1]
    )

    if result_player1 > result_player2:
        return player1
    elif result_player1 < result_player2:
        return player2
    else:
        return None


def test_blefe():
    assert (
        blefe({"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]})
        == "Marco"
    )
