def all_anagrams(string):
  if len(string) == 0:
    return ['']
  result = {}
  str_arr = string.split('')
  for i in range(str_arr):
    all_anagrams(str_arr.insert(i,0) + )