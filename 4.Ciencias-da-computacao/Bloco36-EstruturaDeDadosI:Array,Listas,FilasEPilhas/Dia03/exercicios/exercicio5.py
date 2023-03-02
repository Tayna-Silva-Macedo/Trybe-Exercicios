def count_servers(grid):
    rows, columns = len(grid), len(grid[0])

    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    counter = 0

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                counter += 1

    return counter


def test_count_servers():
    assert count_servers([[1, 0], [0, 1]]) == 0
    assert count_servers([[1, 0], [1, 1]]) == 3
    assert count_servers([[1, 0, 0], [1, 0, 0], [0, 0, 1]]) == 2
