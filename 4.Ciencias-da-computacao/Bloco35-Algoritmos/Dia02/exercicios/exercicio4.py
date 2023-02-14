def mdc_calculator(first_number, second_number):
    if second_number == 0:
        return first_number
    return mdc_calculator(second_number, first_number % second_number)


print(mdc_calculator(30, 54))
