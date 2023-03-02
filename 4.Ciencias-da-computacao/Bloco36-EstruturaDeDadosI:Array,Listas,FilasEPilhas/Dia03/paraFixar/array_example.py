import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def update(self, index, value):
        self.data[index] = value


array = ListaArray()

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "Felipe")
array.set(1, "Ana")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(2, "Shirley")
array.set(3, "Miguel")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.update(0, "Tayná")

print(array.get(0))
print(array.get(2))
print("-----")

index = 0
while index < len(array):
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
