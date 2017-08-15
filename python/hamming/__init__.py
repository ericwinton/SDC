# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(strand1,strand2):
    hammingDistance = 0
    s1 = list(strand1)
    s2 = list(strand2)
    
    if (len(s1) == len(s2)):
        for index, letter in enumerate(s1):
            if (letter != s2[index]):
                hammingDistance += 1

        return hammingDistance
    else:
        raise ValueError('DNA strands must be of equal length.')