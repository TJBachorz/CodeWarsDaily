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
# 10/10/20

def friend(x):
    return [name for name in x if len(name) == 4]

#--------------------------------------------
# 10/11/20

def array_diff(a, b):
    return [num for num in a if num not in b]

#--------------------------------------------
# 10/26/20

def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"

def sum_array(arr):
    if (arr == None or len(arr) < 3):
        return 0
    return sum(arr, 0) - max(arr) - min(arr) 

#--------------------------------------------
# 10/28/20

def find_average(list):
    return sum(list) / len(list)

#---------------------------------------------
# 10/29/20

def find_uniq(arr):
    arr.sort()
    return arr[0] if arr.count(arr[0]) == 1 else arr[-1]

#--------------------------------------------------------
