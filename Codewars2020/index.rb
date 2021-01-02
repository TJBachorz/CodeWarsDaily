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
#8/13/20

def order(words)
  words = words.split(" ")
  num = '1'
  reformmatted = []
  until num.to_i > words.length do
    reformmatted << words.find { |word| word.include? num }
    num = (num.to_i + 1).to_s
  end
  reformmatted.join(" ")
end

#p order("thi2s is3 my1 fake4 sente5nce")

#------------------------------
#8/14/20

def basic_op(operator, value1, value2)
  case operator
  when "+"
    value1 + value2
  when "-"
    value1 - value2
  when "*"
    value1 * value2
  when "/"
    value1 / value2
  end
end

def duplicate_encode(word)
  word.chars do |letter| 
    if word.count(letter.downcase) > 1 && letter != "(" && letter != ")"
      word = word.gsub(letter, ")")
    else 
      word = word.gsub(letter, "(")
    end
  end
  word
end

#------------------------------
# 8/15/20

def is_square(x)
  x >= 0 && Integer.sqrt(x)**2 == x
end

#------------------------------
# 8/16/20

def openOrSenior(data)
  data.map do |item|
    if item[0] >= 55 && item[1] > 7
      "Senior"
    else
      "Open"
    end
  end
end

#--------------------------------
# 8/17/20

def high_and_low(numbers)
  "#{numbers.split(' ').max {|a, b| a.to_i <=> b.to_i}} #{numbers.split(' ').min {|a, b| a.to_i <=> b.to_i}}"
end

#-----------------------------------
# 8/18/20

def nb_dig(n, d)
  total = 0
  i = 0
  until i > n do
    x = (i**2).to_s
    total += x.count(d.to_s)
    i += 1
  end
  total
end

#-----------------------------------
# 8/19/20

def sum_two_smallest_numbers(numbers)
  numbers.min(2).reduce(:+)
end

#-----------------------------------
# 8/20/20

def likes(names)
  case names.size
  when 0
    "no one likes this"
  when 1
    "#{names[0]} likes this"
  when 2
    "#{names[0]} and #{names[1]} like this"
  when 3
    "#{names[0]}, #{names[1]} and #{names[2]} like this"
  else
    "#{names[0]}, #{names[1]} and #{names.length - 2} others like this"
  end
end

#------------------------------------
# 8/22/20

def XO(str)
  x = 0
  o = 0
  str = str.split("")
  str.each do |char| 
    if char == "x" or char == "X"
      x += 1
    elsif char == "o" or char == "O"
      o += 1
    end
  end
  if x == o
    return true
  else 
    false
  end
end

#----------------------------------
# 8/23/20

def min_max(lst)
  return [lst.min, lst.max]
end

#----------------------------------
# 8/24/20

def get_sum(a,b)
  if a < b
    (a..b).reduce(:+)
  else
    (b..a).reduce(:+)
  end
end

#---------------------------------
# 8/25/20

def unique_in_order(iterable)
  return [] if iterable == []
  if iterable.class == Array && !(iterable.any? String)
    return iterable.map {|num| num.to_s}.join.squeeze.split("").map(&:to_i)
  elsif iterable.class == Array && !(iterable.any? Integer)
    iterable.join.squeeze.split('')
  else
    iterable.squeeze.split('')
  end
end

#--------------------------------
# 8/26/20

def delete_nth(order,max_e)
  order.reverse!.each_with_index do |num, index|
    if order.count(num) > max_e
      order.slice!(index)
    end
  end
  order.reverse!
end 

#-------------------------------
# 8/27/20

def count_chars(s)
  hash = Hash.new(0)
  s.split("").map { |char| hash[char] += 1 }
  hash
end

#------------------------------
# 8/30/20

def bool_to_word bool
  bool ? "Yes" : "No"
end

#-------------------------------
# 8/31/20

def binary_array_to_number(arr)
  index = 1
  multiplier = 1
  while index <= arr.length do
    arr[-index] *= multiplier
    multiplier *= 2
    index += 1
  end
  arr.reduce(:+)
end

#----------------------------
# 9/5/20

def square_digits num
  num.to_s.chars.map {|num| num.to_i ** 2 }.join().to_i
end

#-----------------------------