while True:
    x = int(input("Введіть координату x (в діапазоні 1-8): "))
    y = int(input("Введіть координату y (в діапазоні 1-8): "))

    if 1 <= x <= 8 and 1 <= y <= 8:
        is_white = (x + y) % 2 == 0

        if is_white:
            print(f"Поле з координатами ({x},{y}) є білим.")
        else:
            print(f"Поле з координатами ({x},{y}) є чорним.")
    else:
        print("Введені недійсні координати. Будь ласка, введіть числа в діапазоні від 1 до 8.")

    restart = input("Бажаєте ввести нові координати? (так/ні): ").strip().lower()
    if restart != "так":
        break

