nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

maiorNome = nomes[0]

for nome in nomes:
    if len(nome) > len(maiorNome):
        maiorNome = nome

print(f"O nome mais longo é: {maiorNome}")
