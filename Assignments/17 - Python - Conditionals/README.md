Task(s)
-------
Complete the following tasks as described (there are multiple).  Each major bullet point is a new program to create:

####Conditionals

Conditional statements are used when there is a comparison required.  For example, if we wanted to compare a variable with certain numerical values, we can see if that number is positive, negative, or has a value of zero.

```python
number = int(input("Enter a number"))
if (number > 0):
  print (str(number) + ' is a positive number!')
elif (number < 0):
  print (str(number) + ' is a negative number!')
else:
  print (str(number) + ' has no value.')
```

As you can see in the above example there are multiple ways to compare a value (we used the 'greater than' and 'less than' symbols).  Below is a chart that shows all of the comparison operators available in Python.

|Operation| Meaning|
|-----|-----|
|<| less than|
|<=| less than or equal to|
|>| greater than|
|>=| greater than or equal to|
|==| equal|
|!=| not equal|

* Create a program that compares two integers that were input by the user (using ```input()```), then outputs which one is the greater value. Save the file as 'if001.py'

* Create a program that takes in five integers between 0 and 100, then outputs the letter value of their **average** grade (A = 80-100, B = 70-79.9, C = 60-69.9, D = 50-59.9, F = any value less than 50).  If the user inputs a value that is outside of the range (less than 0, or greater than 100), have the program output some sort of error message and do not calculate the marks. Save the file as 'if002.py'

Due Date(s) & Submissables
----------
See your teacher for due dates and how to submit your work

#####Credits
Some of the work here is based on the work written by Peter Beens found throughout [this website](http://www2.beens.org/ics/python)
