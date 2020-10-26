import pdb

#---------------------------------------------
# 8/16/20 

def reverse(string):
    return string[::-1]

#--------------------------------------------
# 8/24/20

def get_sum(a,b):
    if a < b:
        return sum(range(a, b+1, 1))
    else:
        return sum(range(b, a+1, 1))

#--------------------------------------------
# 8/30/20

def bool_to_word(boolean):
    return "Yes" if boolean else "No"

#--------------------------------------------
# 10/26/20

def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"

    