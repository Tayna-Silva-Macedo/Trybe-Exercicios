def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time > max_time:
            max_time = current_time

    return max_time


def test_verify_max_time_ok():
    assert verify_max_time_ok([0, 1, 1, 1, 0, 0, 1, 1]) == 3
    assert verify_max_time_ok([1, 1, 1, 1, 0, 0, 1, 1]) == 4
