const wordText = document.querySelector('.word')
const hintText = document.querySelector('.hint span')
const refreshBtn = document.querySelector('.refresh-word')
const checkBtn = document.querySelector('.check-word')
const inputField = document.querySelector('input')
const timeText = document.querySelector('.time b')
const answer = document.getElementById('answer')
let correctWord, timer

const initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval(() => {
        if(maxTime > 0) {
            timeText.classList.remove('less') 
            maxTime--
            if(maxTime < 6) {
                timeText.classList.add('less')
            }
            return timeText.innerText = maxTime
        }
        clearInterval(timer)
        alert(`Time Over! ${correctWord.toUpperCase()} was the correct word`)
        initGame()
    }, 1000)
}

const initGame = () => {
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split("")
    for(let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        let temp = wordArray[i]
        wordArray[i] = wordArray[j]
        wordArray[j] = temp
    }
    wordText.innerText = wordArray.join('')
    hintText.innerText = randomObj.hint
    correctWord = randomObj.word.toLocaleLowerCase()
    inputField.value = ''
    inputField.setAttribute("maxlength", correctWord.length)
}
initGame()

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase()
    if(!userWord) return alert(`Please enter a word check`)
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`)
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)
    initGame()
}

refreshBtn.addEventListener('click', initGame)
checkBtn.addEventListener('click', checkWord)