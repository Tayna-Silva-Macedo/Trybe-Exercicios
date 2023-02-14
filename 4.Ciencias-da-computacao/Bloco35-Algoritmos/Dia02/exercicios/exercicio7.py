def tower_of_hanoi(disks_number, first_column, second_column, third_column):
    if disks_number == 1:
        print(
            f"Move disco {disks_number} de {first_column} para {third_column}"
        )
    else:
        tower_of_hanoi(
            disks_number - 1, first_column, third_column, second_column
        )
        print(
            f"Move disco {disks_number} de {first_column} para {third_column}"
        )
        tower_of_hanoi(
            disks_number - 1, second_column, first_column, third_column
        )


tower_of_hanoi(3, "primeiro", "segundo", "terceiro")
