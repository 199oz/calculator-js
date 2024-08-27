let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operators')
let buttons = document.querySelectorAll('button')
let equals = document.querySelector('.equals')
let result = document.querySelector('.result')
let audio = document.querySelector('audio')
let allClear = document.querySelector('.AC')

numbers.forEach(element => {
    element.addEventListener('click', () => {
        result.innerText += element.textContent
    })
});
operators.forEach(element => {
    element.addEventListener('click', () =>{
        result.innerText += element.textContent
    })
});
allClear.addEventListener('click',() => {
    result.innerText =""
})

equals.addEventListener('click',() =>{
    if (result.innerHTML.includes('+')) {
        result.innerHTML = result.innerHTML.split('+').reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    }
    if (result.innerHTML.includes('-')) {
        result.innerHTML = result.innerHTML.split('-').reduce((a,b)=> a-b )
    }
    if (result.innerHTML.includes('%')) {
        result.innerHTML = result.innerHTML.split('%').reduce((a,b)=> a/b )
    }
    if (result.innerHTML.includes('X')) {
        result.innerHTML = result.innerHTML.split('X').reduce((a,b)=> a*b )
    }
    
})


buttons.forEach(element => {
    element.addEventListener('click',() => {
        audio.currentTime = 0
        audio.play()
    })
});

