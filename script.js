const homeButton = document.querySelector('.button')
const home = document.querySelector('.home')
const welcomeText = document.querySelector('.welcome-text')
const homeText = document.querySelectorAll('.home__content span')

const audio = new Audio('assets/audd.mp3')
const playButton = document.querySelector('.music-play')
const pauseButton = document.querySelector('.music-pause')
const musicText = document.querySelector('.music p')
const controller = document.querySelector('.controller-music')

const particle1 = document.querySelectorAll('.particle-1')
const particle2 = document.querySelectorAll('.particle-2')
const particle3 = document.querySelectorAll('.particle-3')
const particle4 = document.querySelectorAll('.particle-4')
const particle5 = document.querySelectorAll('.particle-5')

//HOME ANIM
homeButton.addEventListener('click', function () {
    this.style.animationFillMode = 'backwards'

    setTimeout(() => {
        welcomeText.style.transform = 'translateY(-50px)'
        welcomeText.style.opacity = '0'
    }, 500);

    
    setTimeout(() => {
        home.classList.add('hasBeenClicked')
    }, 1000);

})


//AUDIO MANIP

playButton.addEventListener('click', () => {
    audio.currentTime = 123
    audio.play()
    
    playButton.style.display = 'none'
    pauseButton.style.display = 'flex'

    for (i = 0; i < particle1.length; i++) {
        particle1[i].classList.add('musicOnPart1')
        particle2[i].classList.add('musicOnPart2')
        particle3[i].classList.add('musicOnPart3')
        particle4[i].classList.add('musicOnPart4')
        particle5[i].classList.add('musicOnPart5')
    }

    musicText.innerHTML = 'AuDD'
})

pauseButton.addEventListener('click', () => {
    audio.pause()

    musicText.innerHTML = 'Replay Music for supporters !'

    
    playButton.style.display = 'block'
    pauseButton.style.display = 'none'

    for (i = 0; i < particle1.length; i++) {
        particle1[i].classList.remove('musicOnPart1')
        particle2[i].classList.remove('musicOnPart2')
        particle3[i].classList.remove('musicOnPart3')
        particle4[i].classList.remove('musicOnPart4')
        particle5[i].classList.remove('musicOnPart5')
    }
})