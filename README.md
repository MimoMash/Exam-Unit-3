# Exam-Unit-3

Second Commit, File: alchemy.mjs:
I made a function for both submitting answer and fetching data, using the try and catch error method we were shown in class. 

Third Commit, File: alchemy.mjs:
I searched the code to decipher on google and found this wikipedia page: https://en.wikipedia.org/wiki/Planetary_symbols and found the symbols associated with the different types of metals. I then made a function to loop through the different symbols and push the metals associated into an array, which I then submitted as an answer. I initially had trouble, getting the incorrect answer message, even though the metals were correct. This was due to my alchemy function being async, which in the way i wrote the code, meant it didn't submit anything. By trial and error i fixed it and completed the first challenge.

Fourth Commit, File: alchemy.mjs:
For the second challenge I searched the new code to decipher on the internet but nothing came up. After looking at the capital letters in the text, I noticed that they spell silver. After this discovery, I made a function to find all the capital letters inside the poem and push it to an array. The function is directly copied from the code i wrote in our first exam unit "TDD_Assignment" task b. That saved me alot of time, and on the first try i recieved the message SILVER. I noticed that when running the code once you have already solved a task, it remembers the previous challenges completed, so i got incorrect answer since the submission of challenge 1 also ran. To temporarily fix this, I made a conditional logic to prevent the code from running again, but it didn't work so I had to manually change the boolean values. I know it doesn't work as intended, due to the server remembering which stage of the task you're on, so the way i wrote it doesn't quite work, but I wanted to include the logic for future tweaking and improvement, as I suspect it's not too far from the correct method. 