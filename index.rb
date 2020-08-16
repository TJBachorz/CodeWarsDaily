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