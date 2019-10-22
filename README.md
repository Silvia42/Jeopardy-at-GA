This is a project 01 from Software Engineering Imersive bootcamp General Assembly 2019, cohort 23.

# Wheel Of Jeopardy

_crazy combination of two the most popular American TV Show Games_

```
Highlits specifications:
● One round game
● 3 players
● Collecting points
● Answering questions (as Jeopardy)
● Solving PUZZLE (as Wheel of Fortune)

```

<a href="https://github.com/Silvia42/Wheel-Of-Jeopardy/projects/1">Kanban Project Board</a>

<a href="https://silvia42.github.io/Wheel-Of-Jeopardy/">Application</a>

### GAME RULES of Wheel of Jeopardy (high level)
*Detailed rules are written in JavaScript Code*

This is a game for 3 player.

__Player 1__ is starting the game with choosing a consonant without Jeopardy Q/A.
If consonant is not in the Puzzle, he/she is loosing turn and __Player 2__ is continuing.

Game cycle is: 
#### TURN - CHOOSE LETTER - JEOPARDY Q/A - REPEAT

Player lost his/her turn when:
- wrong at Jeopardy Q/A
- letter is not in Puzzle

Player lost POINTS when:
- wrong at Jeopardy Q/A, lost amount equal to value on the wheel
- get BANKRUPT,

Player get POINTS when:
- correct at Jeopardy Q/A and letter is in PUZZLE, get amount equal to value on the wheel

#### Special fields on the Wheel:
##### BANKRUPT: 
lost everything, if she/he has negative value, "lost" it also, will have ZERO always after bankrupt
##### LOST A TURN: 
player lost a turn, but her/his points stay unchanged
##### FREE PLAY:
can choose letter without solving Jeopardy Q/A, If letter is in the Puzzle, will get  amount equal to value on the wheel

### WINNIG GAME
Player can solve PUZZLE only when he/she is ACTIVE (his/her regular turn).
If solution is correct, he/she is a WINNER. If solution is incorrect, game continuing, points are not changed.


### WireFrame
<img src="Documentation/MainScreenDiagram.001.png" alt="Main Screen Diagram">

### Screen Shots of Application

#### Screen at the beginning of the Game
<img src="Documentation/ScreenShot001-gameStart.png" alt="Screen-game start">

#### Screen at solving the Jeopardy - choosing the Correct Question for the given Answer
<img src="Documentation/ScreenShot002-jeopardyQA.png" alt="Screen-Jeopardy">

#### Screen after selecting the Correct Question for given Answer for Jeopardy 
<img src="Documentation/ScreenShot003-afterCorrectQA.png" alt="Screen-after Correct QA">

#### Screen at the middle of Game
<img src="Documentation/ScreenShot004-middleOfGame.png" alt="Screen-middle of Game">

#### Screen after BANKRUPT
<img src="Documentation/ScreenShot005-bankrupt.png" alt="Screen-bankrupt">

#### Screen at the middle of continuing Game
<img src="Documentation/ScreenShot006-gameContinuing.png" alt="Screen-game Continuing">

#### Screen later in the GameScreen with solving the main PUZZLE
<img src="Documentation/ScreenShot007-solvingPuzzle.png" alt="Screen-solving Puzzle">

#### Screen after Game - showing the Winner
<img src="Documentation/ScreenShot008-winner.png" alt="Screen-Winner">


