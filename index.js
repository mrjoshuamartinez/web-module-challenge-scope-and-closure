// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 has the var "count" inside the scope of the function, as counter 2 has "count" globally.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 1, var count is inside.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter 1 in a resetting count to 0 each time, counter 2 if you want to no have count reset to 0.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
let homeTeam = [null];
let awayTeam = [null];
function inning(){
  for (let i = 0; i < 9; i++){
    homeTeam.push(Math.floor(Math.random() * Math.floor(3)));
    awayTeam.push(Math.floor(Math.random() * Math.floor(3)));
  }
  console.log("Home : ", homeTeam);
  console.log("Away : ", awayTeam);
}

inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(funcName, specificInning) {
  console.log("Home : ", homeTeam[specificInning]);
  console.log("Away : ", awayTeam[specificInning]);
}

finalScore(inning, 5);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(funcName) {
  function awayTeamFinal(total, num) {
    return total + Math.round(num);
  }
  function homeTeamFinal(total, num) {
    return total + Math.round(num);
  }
  console.log(`1st inning: ${awayTeam[1]} - ${homeTeam[1]}`);
  console.log(`2nd inning: ${awayTeam[2]} - ${homeTeam[2]}`);
  console.log(`3rd inning: ${awayTeam[3]} - ${homeTeam[3]}`);
  console.log(`4th inning: ${awayTeam[4]} - ${homeTeam[4]}`);
  console.log(`5th inning: ${awayTeam[5]} - ${homeTeam[5]}`);
  console.log(`6th inning: ${awayTeam[6]} - ${homeTeam[6]}`);
  console.log(`7th inning: ${awayTeam[7]} - ${homeTeam[7]}`);
  console.log(`8th inning: ${awayTeam[8]} - ${homeTeam[8]}`);
  console.log(`9th inning: ${awayTeam[9]} - ${homeTeam[9]}`);
  console.log(' ');
  console.log(`Final Score: ${awayTeam.reduce(awayTeamFinal, 0)} - ${homeTeam.reduce(homeTeamFinal, 0)}`);
}

scoreboard(inning);


