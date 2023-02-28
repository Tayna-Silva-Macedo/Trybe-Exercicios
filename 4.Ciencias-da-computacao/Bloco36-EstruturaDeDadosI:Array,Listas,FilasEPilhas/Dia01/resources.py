from subprocess import check_output

cpu_information = check_output("lscpu").decode("UTF-8").split("\n")

requested_cpu_information = {
    "nome do modelo": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz máx.": "Velocidade máxima (MHz)",
    "cpu mhz mín.": "Velocidade mínima (MHz)",
    "cache de l1d": "Cache L1d",
    "cache de l1i": "Cache L1i",
    "cache de l2": "Cache L2",
    "cache de l3": "Cache L3",
}

for requested_name, requested_description in requested_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(requested_name):
            information = information.split("  ")
            information = information[-1].strip()
            print(f"{requested_description}: {information}")

memory_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information
]

total_memory = int(memory_information[1]) / 1000
used_memory = int(memory_information[2]) / 1000

print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)
