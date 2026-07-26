# ================================
#       Calculator - Python
# ================================

a = int(input("Enter Your Number : "))
b = int(input("Enter Your Number : "))
c = input("Enter Your Operator (+  -  *  /) : ")

if c == '+':
    print("Result :", a + b)        # means add

elif c == '-':
    print("Result :", a - b)        # means subtract

elif c == '*':
    print("Result :", a * b)        # means multiply

elif c == '/':
    if b == 0:
        print("Error: Cannot divide by zero ❌")
    else:
        print("Result :", a / b)    # means divide

else:
    print("Something went wrong.... ❌")