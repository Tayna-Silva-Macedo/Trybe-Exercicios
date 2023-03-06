class Stack:
    def __init__(self):
        self.__data = []

    def __str__(self):
        return str(self.__data)

    def push(self, value):
        self.__data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        return self.__data.pop()

    def peek(self):
        if self.is_empty():
            return None

        return self.__data[-1]

    def is_empty(self):
        return not len(self.__data)

    def size(self):
        return len(self.__data)

    def min_value(self):
        if self.is_empty():
            return None

        return min(self.__data)


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.min_value())

    content_stack.push(-5)
    print(content_stack.min_value())
