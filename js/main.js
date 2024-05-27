// navbar logic

let navBar = document.querySelector('.navigation-wrap');
console.log(navBar)
document.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        navBar.classList.add('scroll-on')
    } else {
        navBar.classList.remove('scroll-on')
    }
}



// navbar hide when click on any navitem in responsive view 

const navBarItems = document.querySelectorAll('.nav-item');
navBarItems.forEach((curItem) => {
    curItem.addEventListener("click", () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
    })
})

// counter logic 
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, startNum, endNum, duration) {
        let elm = document.getElementById(id),
            currentNum = startNum,
            range = endNum - startNum,
            increment = endNum > startNum ? 1 : -1,
            timing = Math.abs(Math.floor(duration / range)),
            // console.log(timing)
            timer = setInterval(() => {
                currentNum += increment
                elm.textContent = currentNum
                if (currentNum === endNum) {
                    clearInterval(timer)
                }
            }, timing)
    }

    counter("count1", 0, 100, 2000)
    counter("count2", 0, 100, 2000)
    counter("count3", 0, 100, 2000)
    counter("count4", 0, 100, 2000)
})

// theme switch 

const themeBtn = document.getElementById('themeSwitcher');

themeBtn.addEventListener('click', () => {
    let randomColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty('--primary-color', randomColor);
    console.log(document.documentElement)
})
