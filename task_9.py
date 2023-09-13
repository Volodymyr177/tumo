N = int(input("Введіть число N так, що N > 0: "))
reversed_num = 0
while N > 0:
    last_digit = N % 10
    reversed_num = reversed_num * 10 + last_digit
    N = N // 10
print("Зворотне число:", reversed_num)