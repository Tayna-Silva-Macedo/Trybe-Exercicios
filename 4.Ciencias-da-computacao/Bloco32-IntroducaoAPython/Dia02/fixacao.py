# Entrada e saída
# Exercício 1


def print_name_vertical():
    name = (input("Digite seu nome:")).upper()
    for letter in name:
        print(letter)


print_name_vertical()

# Exercício 2


def sum_natural_numbers():
    numbers_string = input(
        "Digite os números que deseja somar separados por espaço:"
    )
    numbers_list = numbers_string.split()

    sum = 0
    for number in numbers_list:
        if not number.isdigit():
            print(f"Erro ao somar valores, {number} é um valor inválido")
        else:
            sum += int(number)

    print(f"A soma dos valores válidos é: {sum}")


sum_natural_numbers()


# Lidando com exceções
# Exercício 3


def file_disapproved_people():
    disapproved_people = []
    with open("data/file.txt") as file:
        for line in file:
            person = line.split(" ")
            if int(person[1]) < 6:
                disapproved_people.append(f"{person[0]}\n")

    with open("data/disapproved_people.txt", mode="w") as file:
        print(disapproved_people)
        file.writelines(disapproved_people)


file_disapproved_people()
