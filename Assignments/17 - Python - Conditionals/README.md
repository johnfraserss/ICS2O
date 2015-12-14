Task(s)
-------
**UPDATE DEC 14 - Check the submissables and where/how to hand in your work for this unit**


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

* Create a program that compares two integers that were input by the user (using input()), then outputs which one is the greater value. Save the file as 'if001.py'

* Create a program that takes in five integers between 0 and 100, then outputs the letter value of their **average** grade (A = 80-100, B = 70-79.9, C = 60-69.9, D = 50-59.9, F = any value less than 50).  If the user inputs a value that is outside of the range (less than 0, or greater than 100), have the program output some sort of error message and do not calculate the marks. Save the file as 'if002.py'

Submissables
------------
**UPDATE: DEC 14**

Hand in your work to the IN drive.  

* If you have an odd numbered student number, then hand in "if001.py"
* If you have an even numbered student number, then hand in "if002.py"

~~Do **not** submit any of the work from this section.  Your teacher will randomly choose a few programs to evaluate.~~

Due Date(s)
----------
**UPDATE: DEC 14**
December 15th, 2015 to the IN drive

~~Marking will begin on December 4th, 2015.~~

#####Credits
Some of the work here is based on the work written by Peter Beens found throughout [this website](http://www2.beens.org/ics/python)
