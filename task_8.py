A = int(input("Введіть перше ціле число A: "))
B = int(input("Введіть друге ціле число B: "))

if A >= B:
    print("Помилка: A має бути менше B.")
else:
    N = B - A + 1
    print(f"Цілі числа між {A} та {B} (включно):")
    for number in range(A, B + 1):
        print(number)
    print(f"Кількість чисел: {N}")