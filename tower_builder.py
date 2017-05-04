
#Tower builder (looks more like a Christmas tree with stars on it)
def tower_builder(n_floors):
  tower = []
  for i in range(1,(n_floors * 2) + 1, 2):
    s = " " * ((n_floors * 2) - 1)
    subberLen = (n_floors * 2) - 1
    stringLen = len("*" * i)
    howMany = int((subberLen - stringLen)/2)
    b = s[:howMany] + ("*" * i) + s[howMany:]
    d = b[0:subberLen]
    tower.append(d)

  return tower

print(tower_builder(8))

def tower_builder(n):
    return [("*" * (i*2-1)).center(n*2-1) for i in range(1, n+1)]

def tower_builder(n):
    return [" " * (n - i - 1) + "*" * (2*i + 1) + " " * (n - i - 1) for i in range(n)]