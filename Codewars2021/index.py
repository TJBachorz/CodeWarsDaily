#------------------------------------
# 1/2/21

def sum_digits(number):
    return sum(int(i) for i in str(abs(number)))

#------------------------------------
# 1/5/21

def capitals(word):
    return [i for i in range(len(word)) if word[i].isupper()]

def divisors(n):
    return len([num for num in range(1, n+1) if n % num == 0])

#-------------------------------------
# 1/29/21

def remove_url_anchor(url):
    return url.split("#")[0]

#-------------------------------------