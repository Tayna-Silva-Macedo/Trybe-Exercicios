def students_in_instant(arrivals, departures, instant):
    counter = 0

    for arrival, departure in zip(arrivals, departures):
        if arrival < instant < departure:
            counter += 1

    return counter


def test_students_in_instant():
    assert students_in_instant([1, 2, 3], [3, 2, 7], 4) == 1
