a = int(input("Задайте число a: "))
b = int(input("Задайте число b: "))
c = int(input("Задайте число с: "))

if a < b < c:
    print("Умова 'a < b < c' є правильною")
else:
    print("Умова 'a < b < c' не виконується.")

if a > 0 or b > 0 or c > 0:
    print("Хоча б одне з чисел є додатнім.")
else:
    print("Ні одне з чисел не є додатнім")

if (a > 0 and b <= 0 and c <= 0) or (a <= 0 and b > 0 and c <= 0) or (a <= 0 and b <= 0 and c > 0):
    print("Рівно одне з чисел є додатнім.")




