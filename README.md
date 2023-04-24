[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pJv4oXRo)

# Assignment 5: Make your own sim game

## Question 1: Draw 5 bubbles
[LINK TO SKETCH](https://editor.p5js.org/maxxkeoni219/sketches/naRQlX03x)
For this sketch we were instructed to create 5 bubbles, stars in my case, and have them jiggle around randomly throught the canvas using object oriented programming (OOP). I wanted to create a star instead of a bubble for an added challenge of creating my stars with a loop using a basic triangle. I made my stars jiggle by adding a random speed of + or - 4 in any direction that will constantly change.

## Question 2: Draw 50 bubbles
[LINK TO SKETCH](https://editor.p5js.org/maxxkeoni219/sketches/2rGSu76CW)
For this sketch we built off the last sketch and created 50 bubbles instead of 5. Before, we were able to create 5 different new objects and call each of them seperately, but that would be time consuming with 50. So, we use loops, and arrays. Using a loop that will create a new object and add it to an empty list for however many times we want, in this case 50, we have an array full of stars that we can use another loop to call all the functionality of each item in the array. This allows us to create 50 stars in a compact manner.

## Question 3: Populate sim game
[LINK TO SKETCH](https://editor.p5js.org/maxxkeoni219/sketches/dBtelyHW7)
For this sketch, we have now moved on from the previous sketch and are now creating our game. I started by create my baby in a seperate file and then imported in into this sketch as class Baby. I gave class Baby 3 functions and then created my loops from question 2 to create multiple babies, I chose to show 3 since they're pretty big. Then I went through the same process again with my milk sprite and created class Milk. I utilized the code from the last two and created bubbles to be in the background because I thought it kind of fit with my theme of babies getting their milk? But, I honestly just couldn't think of anything else to put in the background and it was a requiremnet. 

I chose to have my milk move in all 4 directions and bounce off the walls because I liked how it looked. I chose to have my babies walk to the edge of the wall and then spawn on the other side because I tried to have them bounce off the wall and reflect, but couldnt figure out how to make it reflect, so they just spawn on the other side because it was easier. I also added animation to the legs so it looks like they're crawling by utilizing the % modulo and on every even count they legs will switch from one rotation to another creating the illusion of crawling.

## Question 4: Activate breeders
[LINK TO SKETCH](https://editor.p5js.org/maxxkeoni219/sketches/Zao6Y6CDc)
For this sketch, we now had to give our breeders functionality and be able to breed. I began by creating a loop that will check the distance between each milk object and then if the milk distance is less than my variable of spriteWidth, it will spawn a new milk object.

## Question 5: Activate catchers
[LINK TO SKETCH](https://editor.p5js.org/maxxkeoni219/sketches/4arGQ0Z-n)
For this sketch, I finished up the sim project by creating a new loop that detects the distance between the babies and the milk. This is similar to the last question and if the babies and milks overlap, the milk will disapear. I also created a life span for the babies, so if they do not catch a milk for 500 frames, they will disapear using the splice() function.
