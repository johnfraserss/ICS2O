Task(s)
-------
The programs you have created up until now tend to do things once, and then shut down.  What if we want to do things multiple times? What if we want to run a program until a certain key is pressed?  This is where an **iterator** comes in.  In Python there are numerous ways to create an iterator.  We will be focusing on two types here; a **while** loop, and a **for** loop.

####While loops
Let's take a look at an example quickly to get a feel for what is happening.
```python
n = 5
while (n > 0):
    print (n)
    n = n - 1
print ('Blastoff!')
```
In the above example, there are a few new concepts happening.  The first is the ```while``` loop.  It is set up similarly to a conditional statement (if statement), in that it will continue to run as long as it's condition is true (in this case, while ```n > 0```, keep going).  The second is the idea of changing a variable over time (n).  The statement ```n = n - 1``` updates the value of ```n``` by subtracting 1 every time the while loop happens.

Another way to set up a while loop is to have it run forever until a certain condition happens; at which point, you ```break``` out of it.

```python
while (True):
  num = float(input("Enter a number between 0 and 100: "))
  if (num >= 0 and num <= 100):
    break
  else:
    print ('Please enter a valid value')

print ('The value you entered was ' + str(num))
```

In the above example, we are forcing the user to enter a number that is between 0 and 100; otherwise, we continue to ask for the number.  Once we have the correct value (the number is between 0 and 100), then we ```break``` out of the while loop.

####For loops (also known as Counted Loops)
Let's take a look a quick example of how a counted loop is set up, and how we can use it.
```python
#Example 1
for i in range(0, 5, 1):
  print (i)

>>>0
>>>1
>>>2
>>>3
>>>4

#Example 2
for i in range(1, 10, 2):
  print (i)
  
>>>1
>>>3
>>>5
>>>7
>>>9

#Example 3
for i in range(5, 1, -1):
  print (i)

>>>5
>>>4
>>>3
>>>2
```
Let's take a look at what is happening from the three examples above.  In _Example #1_ we have a for loop set up that creates the variable _i_ has a range of (0, 5, 1).  These range values have the following properties:
- ```i``` will start at 0
- ```i``` will increment by 1s every time the loop restarts
- ```i``` will end at (5 - 1).  So in this case, it ends at 4.

If we compare that to _Example #2_, the range values have the following properties instead:
- ```i``` will start at 1
- ```i``` will increment by 2s every time the loop restarts
- ```i``` will end at (10 - 1) at most.  So in this case, it ends at 9.
  
Finally, if we compare that to _Example #3_, the range values have the following properties:
- ```i``` will start at 5
- ```i``` will increment by -1 every time (so it will go down by 1 every time) the loop restarts
- ```i``` will end at (1 + 1). So in this case it ends at 2.
  
From the example ranges above, we can gather the following information from the set up of a for loop.  If we are *counting up*, then the first value is the start, the (second value - 1) is the end, and the third value is how much we count up by.  If we *counting down*, then the first value is the start, the (second value + 1) is the end, and the third value is how much we count down by.

We tend to use counted loops when we know how many times we have to iterate ahead of time.

####Files to create

* Create a program using a _for_ loop that prints out a table of temperature conversions from 0 Celsius up to 100 Celsius, and also prints out the equivalent Fahrenheit temperatures.  Have this table only print out every 5th degree.  Save your work as 'iter001.py'.  See example below for what the input and output would look like.
* Create a program that uses _while_ loops and _for loops_.  You are to take in two integer values, where the first value is always smaller than the second.  Once this has been established, your program should pass these two values on to a function that calculates the addition of all numbers within that range.  Once your function has this calculated, return the value and print it to the screen. Save your work as 'iter002.py'.  See example below for what the input and output would look like.
* Create a program that takes in two numbers and then displays a menu of options.  Your menu will have 5 choices to choose from: addition, subtraction, multiplication, division, or exit.  Based on the user's choice, have the computer compute the result, display it to the screen, and then loop around to get two new numbers and display the menu again.  If the user chooses exit, have the program end.  Save this file as 'iter003.py'

```python
#Example output for iter001.py

>>> 0C = 32F
>>> 5C = ...
>>> 10C = ...
...
>>> 100C = ...


#Example input/output for iter002.py
>>> Enter the first number: 5
>>> Enter the second number: 10

>>> The total calculated value is: 45


#Example input/output for iter003.py
Enter a number: 10
Enter another number: 5

Menu of choices:
1. Add
2. Subtract
3. Multiply
4. Divide
Choice: 2
Answer: 5

Enter a number: ... #loops around back to the top
```

Due Date(s) & Submissables
----------
See your teacher for due dates and how to submit your work
