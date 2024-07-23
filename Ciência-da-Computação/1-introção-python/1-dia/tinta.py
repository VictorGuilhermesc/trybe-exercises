def calcular_tinta(tamanho_parede_m2):
    cobertura_por_litro = 3  # Cobertura de 1 litro para cada 3 m²
    litros_por_lata = 18
    preco_por_lata = 80.00

    # Calcular a quantidade de litros necessários
    litros_necessarios = tamanho_parede_m2 / cobertura_por_litro

    # Calcular a quantidade de latas necessárias, arredondando para cima
    import math

    latas_necessarias = math.ceil(litros_necessarios / litros_por_lata)

    # Calcular o preço total
    preco_total = latas_necessarias * preco_por_lata

    return latas_necessarias, preco_total


# Exemplo de uso
tamanho_parede = 50  # Tamanho da parede em m²
quantidade_latas, preco_total = calcular_tinta(tamanho_parede)
print(f"Quantidade de latas necessárias: {quantidade_latas}")
print(f"Preço total: R$ {preco_total:.2f}")
