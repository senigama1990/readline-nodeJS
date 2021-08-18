const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let questions = [
    "What's your name?",
    "What's your surname?",
    "How old are you?"
]

let answers = []

function setPrompt (word) {
    rl.setPrompt(word)    
    rl.prompt()
}

let i = 0
setPrompt(questions[i])

rl.on('line', function (data) {
    answers.push(data);
    if (questions.length === answers.length) {
        console.log(answers);
        rl.close()
    } else {
        setPrompt(questions[++i])
    }
})