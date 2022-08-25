### Tests
Describes: accountInput()

Test: "It should return not valid when nothing is in the input"
Code:
const number = ""
accountInput(number)
Expected Output: "This is not a valid input"

Test: "It should return not a valid when a letter is in the input"
Code:
const number = "a"
accountInput(number)
Expected Output: "This is not a valid input"

Test:
Code:
Expected Output: