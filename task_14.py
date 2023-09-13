for attempt in range(5):
    user_input = int(input("Введіть число: "))

    if user_input == 5:
        print("Ви ввели число 5. Вітаю!")
        break
    else:
        print(f"Спроба {attempt + 1}: Ви ввели число {user_input}.")
else:
    print("Ви вичерпали всі спроби. Число 5 не було введено.")
