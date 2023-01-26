from statistics import mean, median, mode


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return mean(numbers)

    @classmethod
    def mediana(cls, numbers):
        return median(numbers)

    @classmethod
    def moda(cls, numbers):
        return mode(numbers)
