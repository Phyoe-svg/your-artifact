import db from "../Model.js";
const quiz = new db.quiz();

quiz.insert({
  title: "Node JS",
  questions: [
    {
      id: 0,
      question: "Q 1 - Which method of fs module is used to open a file?",
      answer: "A - fs.open(path, flags[, mode], callback)",
      choices: [
        "A - fs.open(path, flags[, mode], callback)",
        "B - fs.openFile(path, flags[, mode], callback)",
        "C - fs.openPath(path, flags[, mode], callback)",
      ],
    },
    {
      id: 1,
      question: "Q 2 - Which of the following code prints current directory?",
      answer: "Converter of Code",
      choices: [
        "A - console.log('Current directory: ' + process.cwd());",
        "B - console.log('Current directory: ' + console.cwd());",
        "D - None of the above",
      ],
    },
    {
      id: 2,
      question:
        "Q 3 - Which of the following code print the platform of operating system? ",
      answer: "B - console.log('platform : ' + os.platform());",
      choices: [
        "A - console.log('platform : ' + os.platform);",
        "B - console.log('platform : ' + os.platform());",
        "C - console.log('platform : ' + os.getPlatform());",
      ],
    },
    {
      id: 3,
      question:
        "Q 4 - Which of the following code can make a request to a web server?",
      answer: "C - http.request(options, callback)",
      choices: [
        "A - http.createRequest(options, callback)",
        "B - http.makeRequest(options, callback)",
        "C - http.request(options, callback)",
      ],
    },
    {
      id: 4,
      question: "Q 5 - What is Node.js? ",
      answer: "C. A JavaScript runtime built on Chrome's V8 JavaScript engine",
      choices: [
        "A. A front-end framework",
        "B. A back-end framework",
        "C. A JavaScript runtime built on Chrome's V8 JavaScript engine",
      ],
    },
    {
      id: 5,
      question: "Q - 6  How can you initiate a project using npm?",
      answer: "B. npm init",
      choices: ["A. npm start", "B. npm init", "C. npm run"],
    },
    {
      id: 6,
      question: "Q - 7 Which method is used in Node.js to include modules?",
      answer: "A. require()",
      choices: ["A. require()", "B. include()", "C. import"],
    },
    {
      id: 7,
      question:
        "Q - 8 Which core module in Node.js provides asynchronous file operations?",
      answer: "C.fs",
      choices: ["A. http", "B.url", "C.fs"],
    },
    {
      id: 8,
      question:
        "Q - 9 In Node.js, which of the following is an in-built event emitter?",
      answer: "A. EventEmitter",
      choices: ["A. EventEmitter", "B. Events", "C. EventLoop"],
    },
    {
      id: 9,
      question:
        "How can you read command-line arguments in a Node.js application?",
      answer: "B. process.argv",
      choices: ["A. argv", "B. process.argv", "C. arguments"],
    },
  ],
});
quiz.insert({
  title: "PHP",
  questions: [
    {
      id: 0,
      question:
        "Which of the following type of variables are special type that only has one value: NULL?",
      answer: "NULL",
      choices: ["Strings", "Booleans", "NULL"],
    },
    {
      id: 1,
      question:
        "Which of the following magic constant of PHP returns class method name?",
      answer: "_METHOD_",
      choices: ["_METHOD_", "_FUNCTION_", "__CLASS"],
    },
    {
      id: 2,
      question:
        " Which of the following variable is used to generate random numbers using PHP?",
      answer: "rand()",
      choices: ["srand()", "rand()", "random()"],
    },
    {
      id: 3,
      question: "Which statement will output $x on the screen ?",
      answer: ' echo "$x";',
      choices: ['echo "/$x";', ' echo "$x";', 'echo "$$x";'],
    },
    {
      id: 4,
      question: "Which of the below symbols is a newline character ?",
      answer: " \n",
      choices: [" \n", "/n", "/r"],
    },
    {
      id: 5,
      question: "Which of the conditional statements is/are supported by PHP ?",
      answer: " All of the Above",
      choices: ["switch statements", " if statements", " All of the Above"],
    },
    {
      id: 6,
      question:
        "Which one of the following is the right way of defining a function in PHP ?",
      answer: "",
      choices: [
        "data type functionName(parameters) { function body }",
        " function fumctionName(parameters) { function body }",
        "functionName(parameters) { function body }",
      ],
    },
    {
      id: 7,
      question: "Type Hinting was introduced in which version of PHP ?",
      answer: " PHP 5",
      choices: [" PHP 5", "PHP 5.3", "PHP 6"],
    },
    {
      id: 8,
      question: "A PHP script should start with _____ and end with _____.",
      answer: "<?php ?>",
      choices: ["< php >", "< ? php ?>", "<?php ?>"],
    },
    {
      id: 9,
      question:
        "Which of the following function is used to locate a string within a string ?",
      answer: "",
      choices: [" strpos()", "None of the above", "search()"],
    },
  ],
});
export default quiz;