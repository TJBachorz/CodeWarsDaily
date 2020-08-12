require 'pry'

#CODEWARS CHALLENGES

#-----------------------
# 8/7/20

def opposite_num num
    num * (-1)
end

#-----------------------
# 8/8/20

def series_sum(n)
    return "0.00" if n == 0
    numerator = 1
    denom = 1
    total = 0.to_f
    n.times do
      total += (numerator / denom.to_f).round(2)
      denom += 3
    end
    total.to_s
end

#-----------------------
#8/9/20

def find_short(string)
  string.split(" ").min {|a, b| a.length <=> b.length}.length
end

#-----------------------
#8/10/20

def no_space(x)
  x.split(" ").join("")
end

#-----------------------
#8/11/20


def litres(time)
  (time * 0.5).floor
end

#-----------------------
#8/12/20

def filter_list(l)
  l.select {|item| item.class == Integer}
end

#-----------------------