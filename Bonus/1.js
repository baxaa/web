const msg = document.getElementById("msg")
const secunds = document.getElementById("time")
const inputvalue = document.getElementById("inputword")
const yourscore = document.getElementById("allscore")
const missword = document.getElementById("miss")
var parwords = []
const words = [
    'All the time I’ve been waiting for the sun Hailie, I know you miss your mom, and I know you miss your dad',
    "When I'm gone, but I'm tryna give you the life that I never had I can see you're sad even when you smile, even when you laugh",
    "His palms are sweaty, knees weak, arms are heavy There's vomit on his sweater already, mom's spaghett",
    "He opens his mouth, but the words won't come out Sometimes I just feel like quittin', I still might Why do I put up this fight? Why do I still write?",
    "I just can't do it, my whole manhood's Just been stripped, I have just been 'vict'd So I must then get off the bus, then split"
]

function refreshWords() {
    let randomNumber = Math.floor(Math.random() * words.length)
    msg.innerText = words[randomNumber]
    parwords = words[randomNumber].split(' ')
}

const btn = document.getElementById("btn")

btn.addEventListener('click', function () {
    if (this.innerText == "refresh") {
        refreshWords()
        timer(59, secunds)
    }
})

var inpcheck, cnt = 0
var score = 0, misses = 0
// secunds.innerText = 12
function timer(span, secunds) {
    var t = span
    interval = setInterval(function time() {
        secunds.innerText = t
        if (t == 0) {
            clearInterval(interval)
            var spd = (score + misses) / 60
            var acc = spd / misses
            yourscore.innerText = "Your score : " + score + ". And your typing speed " + spd.toFixed(1) + " characters per minute." + "Your accuracy is " + acc.toFixed(2) + "%. Wow, pretty fast. You can do even better!"
            parwords = []
            msg.innerText = ""
            return
        }
        t--
    }, 1000)
}

function play() {
    // secunds.innerText = 10
    refreshWords()
    timer(59, secunds)
}

function Check(event) {

    if (event.keyCode === 32) {
        inpcheck = inputvalue.value.trim()
        console.log(inpcheck, parwords[cnt])
        if (inpcheck == parwords[cnt]) {
            score++
            cnt++
            missword.innerText = ""
        } else {
            missword.innerText = parwords[cnt]
            misses++
        }
        inputvalue.value = ""
        console.log(score)
    }
}