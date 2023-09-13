first_name = input("Введіть своє ім'я (обов'язково): ")
last_name = input("Введіть своє прізвище (обов'язково): ")
phone_number = input("Введіть номер телефону (не обов'язково): ")

if first_name and last_name:
    print("Спасибі")
else:
    print("Не залишайте всі поля порожніми")