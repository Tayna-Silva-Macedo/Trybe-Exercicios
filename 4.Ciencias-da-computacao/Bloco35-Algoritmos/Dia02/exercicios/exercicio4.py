def mdc_calculator(number1, number2):
    if number2 == 0:
        return number1

    return mdc_calculator(number2, number1 % number2)


print(mdc_calculator(30, 54))
