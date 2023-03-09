double = {key: key * 2 for key in range(3, 21)}

print(double)

for key in double.keys():
    if key % 2 == 1:
        double[key] = key * 3

print(double)
