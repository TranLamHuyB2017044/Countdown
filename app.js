const days = document.querySelector('#days')
const hours = document.querySelector('#Hours')
const minutes = document.querySelector('#Minutes')
const seconds = document.querySelector('#Seconds')

const CurrentYear = new Date().getFullYear()
const NewYear = new Date (`January 1 ${CurrentYear +1} 00:00:00`)

function Countdown(){
    const CurrentTime = new Date();
    const diff = NewYear - CurrentTime

    // tinh ngay gio countdown
    const d = Math.floor(diff / 1000 / 3600/ 24)
    const h = Math.floor(diff / 1000 / 3600) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60

    days.innerHTML = d 
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m   < 10 ? '0' + m : m
    seconds.innerHTML = s   < 10 ? '0' + s : s


}
setInterval(Countdown, 1000)

function changeBackground1(){
    document.querySelector('body').style.background = "url(./data/winter-2.png) center / cover no-repeat"
}
function changeBackground2(){
    document.querySelector('body').style.background = "url(./data/winter-1.png) center / cover no-repeat"
}
function changeBackground3(){
    document.querySelector('body').style.background = "url(./data/winter-8.png) center / cover no-repeat"
}

var changeOpen= document.querySelector('.changeOpen')
var changeClose = document.querySelector('.changeClose')
// var iconOpen = document.querySelector('#iconOpen')
// var iconClose = document.querySelector('#iconClose')

changeOpen.onclick = function(){
    var frame = document.querySelector('.back-frame')
    frame.style.display = "flex"
    changeOpen.style.display = "none"  
    changeClose.style.display = "inline-block"
}
changeClose.onclick = function(){
    var frame = document.querySelector('.back-frame')
    frame.style.display = "none"
    changeOpen.style.display = "inline-block"  
    changeClose.style.display = "none"

}


var audio = document.querySelector('#audio')
var musicPlay = document.querySelector('.music-play')
var musicPause = document.querySelector('.music-pause')
var playIcon = document.querySelector('#play-music')
var pauseIcon = document.querySelector('#pause-music')
musicPlay.onclick = function(){
    audio.play()
    musicPlay.style.display = "none"
    musicPause.style.display = "inline-block"
}

musicPause.onclick = function(){
    audio.pause()
    musicPlay.style.display = "inline-block"
    musicPause.style.display = "none"
}