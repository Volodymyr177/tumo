while True:
    x1 = int(input("Введіть координату x1 (в діапазоні 1-8): "))
    y1 = int(input("Введіть координату y1 (в діапазоні 1-8): "))
    x2 = int(input("Введіть координату x2 (в діапазоні 1-8): "))
    y2 = int(input("Введіть координату y2 (в діапазоні 1-8): "))

    if 1 <= x1 <= 8 and 1 <= y1 <= 8 and 1 <= x2 <= 8 and 1 <= y2 <= 8:

        if (x1 == x2 or y1 == y2) or (abs(x2 - x1) == abs(y2 - y1)):
            print(f"Ферзь може перейти з поля ({x1},{y1}) на поле ({x2},{y2}) за один хід.")
        else:
            print(f"Ферзь не може перейти з поля ({x1},{y1}) на поле ({x2},{y2}) за один хід.")


