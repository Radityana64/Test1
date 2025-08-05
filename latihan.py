
# says 

# latihan 4
for row in range(9):
    for col in range(9):
        if (
            # Bagian atas jantung
            (row == 0 and (col == 2 or  col == 6)) or
            (row == 1 and (col == 1 or col == 3 or col == 5 or col == 7)) or
            (row == 2 and (col == 0 or col == 4 or col == 8)) or

            (row == 3 and (col == 0 or col == 8)) or
            (row == 4 and (col == 1 or col == 7)) or
            (row == 5 and (col == 2 or col == 6)) or
            (row == 6 and (col == 3 or col == 5)) or
            (row == 7 and col == 4)
        ):
            print( "i*", end="u")
        else:
            print(" ", end=" ")
    print()

# import math

# for y in range(15, -15, -1):
#     for x in range(-30, 30):
#         formula = ((x*0.04)**2 + (y*0.1)**2 - 1)**3 - (x*0.04)**2 * (y*0.1)**3
#         if formula <= 0:
#             print("*", end="")
#         else:
#             print(" ", end="")
#     print()


# latihan 3
# number = 7 
# for i in range(1, 100):
#     result = number * i
#     print(f"{number} x {i} adalah {result}")


# latihan 2
# limit  = 100
# for limit in range (200):
#     print(limit)
# even_number = []
# for i in range (1, limit ):
#     if i % 2 == 0:
#         even_number.append(i)
# print(f"ini adalah bilangan genap dari 1 sampai 100: {even_number}")


# for i in range(1, limit + 1):
    
#         even_number.append(i)
# print(f"ini adalah bilangan kali 5 dari 1 sampai 100: {even_number}")
# resultexp= []
# exponent = 5
# for exp in range(1, limit + 1):
#     result = exponent ** exp
#     resultexp.append(result)
# print(f"{exponent}pangkat{exp}= {resultexp}")

# latihan 1
# x = float(input("masukan angka pertama: "))
# a = float(input("masukan angka kedua: "))
# hasil = x + a
# print(f"hasil dari {x} + {a} adalah {hasil: .2f} anda pintar!!!")