// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

let score = 0
let time = 6


let currentWord = document.querySelector("#current-word")
let wordInput = document.querySelector("#word-input")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")

// console.log(timeDisplay)
// console.log(scoreDisplay)
// console.log(wordInput)


function showWords(words){
    const randIndex = Math.floor(Math.random()*words.length) // 23
    // console.log(words[randIndex])
    currentWord.textContent = words[randIndex]
}

function matchWord(){
        if(wordInput.value == currentWord.textContent){
            return true
        }
        else
    return false
}

function startMatch(){
    if(matchWord()){
        showWords(words)
        wordInput.value = ''
        score++
        scoreDisplay.textContent = score
        time = 6
        message.textContent = "Correct"
    }else{
    message.textContent = "InCorrect"
    }
}

function countdown(){
    if(time>0) time--
    timeDisplay.textContent = time
    if(time==0)  {
        message.textContent = "Game Over!!!"
        score = 0
        scoreDisplay.textContent = score
    }


}

function init(){
    showWords(words)//get a Random word on the page from the array
    wordInput.addEventListener("input",startMatch) // when we input an anything on the input box startMatch function call
    setInterval(countdown,1000)
}   

// window.addEventListener('DOMContentLoaded',function(){
//     init()
// })
window.addEventListener("DOMContentLoaded",init)