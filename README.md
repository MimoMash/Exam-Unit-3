# Exam-Unit-3

# Second Commit, File: alchemy.mjs:
I made a function for both submitting answer and fetching data, using the try and catch error method we were shown in class. 

# Third Commit, File: alchemy.mjs:
I searched the code to decipher on google and found this wikipedia page: https://en.wikipedia.org/wiki/Planetary_symbols and found the symbols associated with the different types of metals. I then made a function to loop through the different symbols and push the metals associated into an array, which I then submitted as an answer. I initially had trouble, getting the incorrect answer message, even though the metals were correct. This was due to my alchemy function being async, which in the way i wrote the code, meant it didn't submit anything. By trial and error i fixed it and completed the first challenge.

# Fourth Commit, File: alchemy.mjs:
For the second challenge I searched the new code to decipher on the internet but nothing came up. After looking at the capital letters in the text, I noticed that they spell silver. After this discovery, I made a function to find all the capital letters inside the poem and push it to an array. The function is directly copied from the code i wrote in our first exam unit "TDD_Assignment" task b. That saved me alot of time, and on the first try i recieved the message SILVER. I noticed that when running the code once you have already solved a task, it remembers the previous challenges completed, so i got incorrect answer since the submission of challenge 1 also ran. To temporarily fix this, I made a conditional logic to prevent the code from running again, but it didn't work so I had to manually change the boolean values. I know it doesn't work as intended, due to the server remembering which stage of the task you're on, so the way i wrote it doesn't quite work, but I wanted to include the logic for future tweaking and improvement, as I suspect it's not too far from the correct method. 

# Fifth Commit, File: alchemy.mjs:
For the third challenge it was a very challenging and confusing one. When reading the message, I searched the book on the internet and found a copy on the internet archive: https://archive.org/details/chirurgischebuch00para/page/n5/mode/2up. After looking at the sequence of numbers I realized that the numbers are probably letters and they form words in a sentence. Initially I thought that it would be the page letters and something there would indicate which letter the number represents, but after looking at the pages, I didn't find anything that would resemble any english words. That's when I checked the first page, and counted the position of the letters and saw that some of them make actual words. I then copied everything from the page six and made it a variable. I made a function to remove all the special characters from the number sequence and loop through the page six letters and see what message reveals. But it was a very incomplete sentence with multiple spelling mistakes. I spent hours trying to tweak the code and see if that would change anything, but it didn't and that's when I gave up on page six letters, and used logic from the broken sentence to form what probably would be the correct sentence. After making an object with numbers representing the letters, I ended up with a sentence that had several elements in them. I then wrote some code to extract the element words, and convert them to the symbols, a reverse effect on what I did on task 1. I then submitted, after tweaking the datatype of the answer and eventually got it correct. I forgot to mention that I found other symbols for this challenge from this Wikipedia page, as some elements were new: https://en.wikipedia.org/wiki/Alchemical_symbol. 

Additionally, I fixed the logic of skipping past completed challenges by checking if the current message includes unique identifiers. Now, it correctly skips past challenges and only displays current challenge message.

# Sixth Commit, File: alchemy.mjs
For the the fourth challenge, I got a very large challenge text which seems to be broken in to multiple steps. I looked through the first poem and saw that it's the same problem as the challenge 2, so I used my task 2 function and extracted the capital letters from the poem. After a couple see throughs, I realized it's a jumbled alphabet. It tied into the next next which were words written in jibberish. I remembered I did something similar in one of our weekly tasks from the previous semester, so I knew how to solve this task. I made a nested for loop to check which letters matched the jumbled letters, and took that index and pushed the letter from an ordinary alphabet, which gave me a string of elements. I also found a new code that let's you remove all whitespace characters: https://stackoverflow.com/questions/28127794/difference-between-split-s-and-split.