def tipo_triangulo(lado1, lado2, lado3):
    # Verificar se os lados formam um triângulo
    if (lado1 + lado2 > lado3) and (lado1 + lado3 > lado2) and (lado2 + lado3 > lado1):
        # Verificar o tipo de triângulo
        if lado1 == lado2 == lado3:
            return "Triângulo Equilátero"
        elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "Não é triângulo"


# Exemplo de uso
lado1 = 3
lado2 = 4
lado3 = 5
print(tipo_triangulo(lado1, lado2, lado3))
