from stack import Stack


def reverse_word(stack):
    char = ""
    reversed_word = []

    while char != "(":
        char = stack.pop()

        if char != "(":
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()

    for char in phrase:
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []

    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return "".join(reversed(reversed_phrase))


def test_reverse_word():
    assert reverse_letters("teste(lagel)") == "testelegal"
    assert reverse_letters("(abcd)") == "dcba"
    assert reverse_letters("(u(love)i)") == "iloveu"
    assert reverse_letters("(ed(et(oc))el)") == "leetcode"
    assert reverse_letters("a(bcdefghijkl(mno)p)q") == "apmnolkjihgfedcbq"
