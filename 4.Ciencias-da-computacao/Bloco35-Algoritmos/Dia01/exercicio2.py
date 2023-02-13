def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False


grid = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]]
print(battleship(grid, 0, 4))
print(battleship(grid, 1, 1))


# Complexidade de tempo: O(1)
# Complexidade de espaço: O(1)
