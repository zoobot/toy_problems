# def getCount(inputStr):
#   num_vowels = 0
#   for i in inputStr:
#     if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
#       num_vowels = num_vowels + 1
#   return num_vowels

# def getCount(inputStr):
#     num_vowels = 0
#     for c in inputStr:
#         if c is 'a' or c is 'e' or c is 'i' or c is 'o' or c is 'u':
#             num_vowels+=1
#     return num_vowels


# getCount("aeebracadabra")


def getCount(s):
    return sum(c in 'aeiou' for c in s)
print(getCount("aeebracadabra"))

def getCount(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")

def getCount(string):
    return sum([i in list('euioa') for i in string])

# import re
# def getCount(str):
#     return len(re.findall('[aeiou]', str, re.IGNORECASE))