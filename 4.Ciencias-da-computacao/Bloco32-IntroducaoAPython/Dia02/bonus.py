import json
import random


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0

    while wrong_shot:
        num_of_shots += 1
        response = input("Quem é esse pokemon? ")
        if response == pokemon_name:
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print(f"Você errou! A resposta correta era: {pokemon_name}")
            break
        else:
            print("Dica: ", end="")
            for index in range(0, num_of_shots):
                print(pokemon_name[index], end="")
            print("")


if __name__ == "__main__":
    with open("data/pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]
    shot(pokemon_name)
