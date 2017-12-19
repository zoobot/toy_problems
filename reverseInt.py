# Get the sign, get the reversed absolute integer, and return their product if r didn't "overflow".

def reverse(self, x):
    s = cmp(x, 0)
    r = int(`s*x`[::-1])
    return s*r * (r < 2**31)
# As compressed one-liner, for potential comparison:

def reverse(self, x):
    s=cmp(x,0);r=int(`s*x`[::-1]);return(r<2**31)*s*r


