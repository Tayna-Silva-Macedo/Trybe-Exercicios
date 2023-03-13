def longer_no_repeating_substring_len(string):
    biggest = 0

    for index in range(len(string)):
        substr = set()

        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)

        if len(substr) > biggest:
            biggest = len(substr)

    return biggest


def test_longer_no_repeating_substring_len():
    assert (
        longer_no_repeating_substring_len(
            "serdevemuitolegalmasehprecisoestudarbastante"
        )
        == 9
    )
