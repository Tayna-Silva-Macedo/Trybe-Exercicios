from conjunto import Conjunto

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

conj_estudantes = Conjunto()
conj_lista1 = Conjunto()
conj_lista2 = Conjunto()

for item in estudantes:
    conj_estudantes.add(item)

for item in lista1_entregues:
    conj_lista1.add(item)

for item in lista2_entregues:
    conj_lista2.add(item)

# Quem ainda não entregou a lista1?
print(f"Não entregaram a lista 1: {conj_estudantes.difference(conj_lista1)}")

# Quem já entregou as duas listas?
print(f"Já entregaram as 2 listas: {conj_lista1.intersection(conj_lista2)}")

# Quem já entregou qualquer uma das duas listas?
print(
    f"Quem já entregou pelo menos uma lista: {conj_lista1.union(conj_lista2)}"
)

# Quem ainda não entregou nenhuma das listas?
print(
    f"Quem não entregou nenhuma lista: "
    f"{conj_estudantes.difference(conj_lista1.union(conj_lista2))}"
)
