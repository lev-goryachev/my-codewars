#################################
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
# Additionally, if the number is negative, return 0.
# Note: If the number is a multiple of both 3 and 5, only count it once.

def solution(number):
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)


# def solution(number):
#     # number -= 1

#     # check not negative, not 3 or 5
#     if number <= 0 or number == 3:
#         print(f"num is 0 or 3")
#         return 0

#     # define initial values
#     list_sum = []
#     x = number - 1

#     # main loop
#     while x >= 3:
#         print(f"Number is {x}")
#         # 3 and 5
#         if x % 3 == 0 and x % 5 == 0:
#             list_sum.append(x)
#             x -= 1
#             print(f"3 and 5, new number {x}")
#             pass

#         # 3 not 5
#         if x % 3 == 0 and x % 5 != 0:
#             list_sum.append(x)
#             x -= 1
#             print(f"3 not 5, new number {x}")
#             pass

#         # 5 not 3
#         if x % 3 != 0 and x % 5 == 0:
#             list_sum.append(x)
#             x -= 1
#             print(f"5 not 3, new number {x}")
#             pass

#         else:
#             x -= 1

#     # output
#     print(f"list --> {list_sum}")
#     return sum(list_sum)

# print(solution(6), 8)

# print(solution(15), 45)
# print(solution(0), 0)
# print(solution(-1), 0)
# print(solution(10), 23)
# print(solution(20), 78)
# print(solution(200), 9168)

# print(solution(5), 3)
# print(solution(3), 0)
# print(solution(4), 3)
# print(solution(16), 60)

#################################

#################################
# Can you find the needle in the haystack?
# Write a function findNeedle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:

# def find_needle(haystack):
#     return f"found the needle at position {haystack.index('needle')}"

# # Tests
# print(find_needle(['3', '123124234', None, 'needle', 'world',
#       'hay', 2, '3', True, False]), 'found the needle at position 3')
# print(find_needle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5')
# print(find_needle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]), 'found the needle at position 30')
#################################

#################################
# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

# def get_count(sentence):
#     # create counter
#     counter = 0

#     # create vowels list
#     vowels_list = ("a", "e", "i", "o", "u")

#     # remove spaces
#     sentence.replace(" ", '')

#     # loop
#     for el in sentence:
#         counter += 1 if el in vowels_list else 0

#     # return
#     return counter

# print(get_count("aeiou"), 5)
# print(get_count("y"), 0)
# print(get_count("bcdfghjklmnp qrstvwxz y"), 0)
# print(get_count(""), 0)
# print(get_count("abra ca dabra"), 5)
#################################
