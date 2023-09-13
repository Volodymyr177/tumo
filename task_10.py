arr = input("Введіть масив чисел, розділених пробілами: ")
arr = [float(i) for i in arr.split()]
mean = sum(arr) / len(arr)
result = []
for i in arr:
    if i > mean:
        result.append(i - 18)
    else:
        result.append(i)
print("Результат: ", result)