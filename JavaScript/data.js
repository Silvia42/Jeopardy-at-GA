////////////////// JSON file, DATA  //////////////////////

//////////////////////////////////////////////////////////////////////////////////
// Quiz material is made by informations from: https://www.w3schools.com      ////
// https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML                 ////
//////////////////////////////////////////////////////////////////////////////////

// “Talk is cheap. Show me the code.” 
// ― Linus Torvalds
const puzzleAnswer= ["    Talk is    ","     cheap     ","    Show me    ","   the code    "];

// category / answer / qBegin / qEnd / options 4x
// correct option is starting with *
const answersQuestions='["skeleton",\
                "HTML element for the largest heading.",\
                "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "It indicates an end tag.",\
                "What does character "," indicate?","slash","<",">","*backslash"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "skin",\
                "HTML element for the largest heading.",\
                "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "It indicates an end tag.",\
                "What does character "," indicate?","slash","<",">","*backslash"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "Cross-Origin Resource Sharing",\
                "What is ","of a web browser?","a safe feature","portability","*vulnerability","an antifragile feature"\
                ,\
                "brain",\
                "HTML element for the largest heading.",\
                "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "It indicates an end tag.",\
                "What does character "," indicate?","slash","<",">","*backslash"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "HTML element for inserting a line break.",\
                "What is "," ?","<break>","*<br>","<lb>","<bl>"\
                ,\
                "Using variables and functions even before they are declared.",\
                "What is "," ?","*hoisting","compiled language","interpreted language","declaration"\
            ]'

// Parsing doesn't work ............ yet

// myObj = ["skelet",{name: "John", age: 31, city: "New York"}];
// myJSON = JSON.stringify(myObj);
// alert(myJSON);
// alert(JSON.parse(myJSON))

// const AnswersQuestions='["skeleton",\
//                 [{"answer":"HTML element for the largest heading.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<h6>","<heading>","*<h1>","<head>"]}\
//                 ,\
//                 {"answer":"HTML element for inserting a line break.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<break>","*<br>","<lb>","<bl>"]}\
//                 ,\
//                 {"answer":"It indicates an end tag.",\
//                 "qBegin":"What does character ","qEnd":" indicate?","options":["/","<",">","*backslash"]}\
//                 ,\
//                 {"answer":"HTML element for inserting a line break.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<break>","*<br>","<lb>","<bl>"]}\
//                 ,\
//                 {"answer":"HTML element for inserting a line break.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<break>","*<br>","<lb>","<bl>"]}\
//                 ,\
//                 {"answer":"HTML element for inserting a line break.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<break>","*<br>","<lb>","<bl>"]}\
//                 ,\
//                 {"answer":"HTML element for inserting a line break.",\
//                 "qBegin":"What is ","qEnd":" ?","options":["<break>","*<br>","<lb>","<bl>"]}\
//             ]]'

// ///////////////////////////////////////  BACKUP of the correct data
// const AnswersQuestions='["skeleton",\
//                 "HTML element for the largest heading.",\
//                 "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "It indicates an end tag.",\
//                 "What does character "," indicate?","slash","<",">","*backslash"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "skin",\
//                 "HTML element for the largest heading.",\
//                 "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "It indicates an end tag.",\
//                 "What does character "," indicate?","slash","<",">","*backslash"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "brain",\
//                 "HTML element for the largest heading.",\
//                 "What is "," ?","<h6>","<heading>","*<h1>","<head>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "It indicates an end tag.",\
//                 "What does character "," indicate?","slash","<",">","*backslash"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//                 ,\
//                 "HTML element for inserting a line break.",\
//                 "What is "," ?","<break>","*<br>","<lb>","<bl>"\
//             ]'


