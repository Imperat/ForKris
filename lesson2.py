def is_even(a):
	if a % 2 == 1:
		return True


l = [1,2,3,4,5,6,7,8,9,10]
print filter(is_even, l)

#Print the poslendiy element of lists:
print l[-1]
l.append(34)

#slises
s = "ABCDEFGHR12345"
print s[1:5]
print s[1:5:2]
print s[1:] #All elements without first
print s[:-3]

