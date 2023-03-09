def count_chars(string):
    count_chars = {}

    for char in string:
        if char not in count_chars:
            count_chars[char] = 1
        else:
            count_chars[char] += 1

    return count_chars


string1 = "bbbbaaaacccaaaaaaddddddddccccccc"
string2 = "coxinha"

print(count_chars(string1))
print(count_chars(string2))
