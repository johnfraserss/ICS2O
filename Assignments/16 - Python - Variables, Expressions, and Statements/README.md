Task(s)
-------
Complete the following tasks as described (there are many).  Each major bullet point is a new program to create:

####Math & Documentation

* Every one of your programs going forward should have what's called a __header__.  Create a sample header for your own programs, and save the file as "Header.py".  **You will be using this header in all programs going forward.**

```python
# author: Jane Doe
# date: 2013-03-26
# filename: printName.py
# description: prints user’s name to the screen
```

* Create a program that prints out your name using __concatenation__.  An example of how concatenation works is below.  Save the file as "HelloWorld.py"
```python
print ('Mr.' + 'Seidel')

>>> Mr. Seidel
```

* Create a program that calculates the addition of 5 and 6.  An example is below.  Save the file as '001.py'.
```python
print (2 + 1)

>>> 3
```

* Create a program that calculates the sum (addition) of 5, 6, and 7.4, including some text explaining what you are doing.  An example is below.  Save the file as '002.py'.
```python
print ('The sum of 1, 2, and 3 is: ' + str(1 + 2 + 3))
                                      #the str() forces the information inside the parentheses to become a string

>>> The sum of 1, 2, and 3 is: 6
```

* Create a program that calculates the difference (subtraction) of 4 and 2.2.  An example is below.  Save the file as '003.py'
```python
print (2 - 1)

>>> 1
```

* Create a program that calculates the product (multiplication) of 2.2 and 3.4.  An example is below.  Save the file as '004.py'
```python
print (4 * 5)

>>> 20
```

* Create a program that calculates the quotient (division) of 4.4 and 2.21.  An example is below.  Save the file as '005.py'
```python
print (3.0 / 2.0)

>>> 1.5
```

* Create a program that calculates the **integer** quotient (division) of 15 and 2.  An example is below.  Save the file as '006.py'.  In your file, leave a comment explaining why you believe the answer is what it is.
```python
print (4 // 2)

>>> 2
```

* Create a program that calculates 5 squared (5²).  An example is below.  Save the file as '007.py'.
```python
print (2 ** 3)

>>> 8
```

* Create a program that uses order of operation in order to calculate an answer.  Your program should print out the equation, and the calculated answer to the equation.  Your equations to work with are below, and an example is just below that as well.  Save the file as '008.py'
  * 2 + 4 x 5
  * 2 x 6 - 6 / 2
  * 9 + 2
  * 3 x ( ( 2 + 12) - 2 x ( 5 - 1 ) )

```python
print ('1 + 2 x 3 / (4 + 2) = ' + str(1+2*3/(4+2)))

>>> 1 + 2 x 3 / (4 + 2) = 2
```

####Variables

Variable store data in temporary locations in memory.  The types of data they can store include numbers, text, and beyond.  Variable vary (hence their name) and are not constant as the program plays out.  Variable names can contain characters, digits, and underscores, but should **always** be named something that is understandable to what the variable is doing.  When comparing variables named ```n``` and ```numberOfCars```, it is much easier to tell what the variable is doing based on having the full word available.  A naming convention we will be using in this class for variables is called "Camel Case", where each new "word" in a variable's name would start with a capital letter (like the example ```numberOfCars```).

To assign a value to a variable we use the "=" such as:
```python
numberOfCars = 3
```

* Create a program that assigns the value 42 to a variable called ```theMeaningOfLife```, then prints out "The meaning of life is: <value of theMeaningOfLife variable>".  See example below.  Save this file as 'var001.py'
```python
numberOfCars = 3
print ('The number of cars in the parking lot is' + str(numberOfCars))

>>> The number of cars in the parking lot is 3
```

* Modify program 'var001.py' so that it prints out ```theMeaningOfLife``` * 2.  Save the file as 'var002.py'.

* Create a program that has three variables ```a```, ```b```, ```c``` that contain the values 2.2, 3.3, and 4.2 respectively.  Print the sum of all three values.  See example below. Save the file as 'var003.py'
```python
a = 1
b = 2
c = 3

print ('a + b + c = ' + str(a + b + c))

>>> a + b + c = 6
```

####Keyboard Input
Creating variable that never change seems very limiting.  Most programs do not just run on their own, and request input from the user to get values.  See examples below on how to give values to a variable based on user input.

```python
#Getting a string value from the user
name = input("Enter your name: ")

#Getting an integer value from the user
age = int(input("Enter your age: "))  #the int( ) forces the value to be an integer

#Getting a float value from the user
salary = float(input("Enter your salary: "))

#Outputting information based on the values above
print ('Hello, ' + name + '.  I noticed that you are ' + str(age) + ' years old, and have a salary of ' + str(salary) + '.')

>>> Enter your name: Mr. Seidel
>>> Enter your age: 100
>>> Enter your salary: 1000
>>> Hello, Mr. Seidel.  I noticed that you are 100 years old, and have a salary of 1000.
```

* Create a program that asks the user for 3 integer inputs, then output the sum of the numbers.  See example below.  Save the file as 'var004.py'

```python
#code omitted, only sample output given

>>> The sum of 3, 4, and 6 is 13
```

* Create a program that asks for your weight in kilograms, then outputs your equivalent weight in pounds.  Save the file as 'var005.py'

* Create a program that prompts for the length, width, and height of a box.  Calculate and output the surface are and the volume of this box.  Save the file as 'var006.py'

* Create a program that prompts for a name, address, city, country, and postal code.  Use appropriate variable names for all variables.  Print out the information as though it were an address label.  See [this](http://rlv.zcache.ca/canada_maple_leaf_flag_gray_and_black_design_label-ra2922e7f29604aa5af6d84b0298c203b_v1130_8byvr_324.jpg) image as a reference if you don't know how the wording should be set up.  Save the file as 'var007.py'


Due Date(s) & Submissables
----------
See your teacher for due dates and how to submit your work

#####Credits
Most of the work here is based on the work written by Peter Beens found throughout [this website](http://www2.beens.org/ics/python)
