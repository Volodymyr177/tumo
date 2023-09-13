user_input = input("Введіть ваш рядок: ")

text_to_combine = input("Введіть рядок для об'єднання з вашим: ")
combined_text = user_input + text_to_combine
print("Об'єднані рядки:", combined_text)

repetition_count = int(input("Скільки разів ви хочете повторити ваш рядок: "))
repeated_text = user_input * repetition_count
print("Повторений рядок:", repeated_text)

position = int(input("На яку позицію вставити символ: "))
inserted_text = input("Введіть символ для вставки: ")
modified_text = user_input[:position] + inserted_text + user_input[position:]
print("Змінений рядок:", modified_text)

replace_position = int(input("На якій позиції замінити символ: "))
replacement_char = input("На який символ замінити: ")
new_text = user_input[:replace_position] + replacement_char + user_input[replace_position + 1:]
print("Результат заміни:", new_text)