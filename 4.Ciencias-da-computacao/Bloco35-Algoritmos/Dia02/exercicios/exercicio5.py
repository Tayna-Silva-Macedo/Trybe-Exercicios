def has_divider(n, i, j):
    if i > j:
        return False
    elif n % i == 0:
        return True
    else:
        return has_divider(n, i + 1, j)


def is_prime_number(n):
    return n > 1 and not (has_divider(n, 2, n - 1))


print(is_prime_number(997))
