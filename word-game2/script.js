const wordArea = document.querySelector('.word') 
const hint = document.querySelector(".hint span")
const inputField = document.querySelector('input')
const refreshBtn = document.querySelector('.new-word')
const submitBtn = document.querySelector('.submit')
const timer = document.querySelector(".timer span")
let correctWord, timerInterval

function startTimer(time) {
    clearInterval((timerInterval))
    timerInterval = setInterval(() => {
        if(time > 0) {
            timer.classList.remove('red')
            time--
            if(time < 6) {
                timer.classList.add('red')
            }
            return timer.innerText = time
        }
        clearInterval(timerInterval)
        alert(`Time Over! ${correctWord} was the correct word`)
        start()
    }, 1000)
}

function start() {
    startTimer(30)
    let randomWord = list[Math.floor(Math.random()*list.length)]
    let word = randomWord.word.split("")
    for( let i = word.length - 1 ; i > 0 ; i-- ) {
        let j = Math.floor(Math.random()*(i+1))
        let temp = word[i]
        word[i] = word[j]
        word[j] = temp
    } 
    wordArea.innerText = word.join('')
    hint.innerText = randomWord.hint
    correctWord = randomWord.word.toLocaleLowerCase()
    inputField.value = ''
    inputField.setAttribute("maxlength", correctWord.length)
}
start()

function wordCheck() {
    let inputWord = inputField.value.toLocaleLowerCase()
    if(!inputWord) return alert("Enter a word")
    if(correctWord != inputWord) return alert("Wrong!")
    alert("Right")
    start()
}

refreshBtn.addEventListener('click', start)
submitBtn.addEventListener('click', wordCheck)

