const balls = document.querySelectorAll(".ball")

balls.forEach(ball => {
    ball.textContent = Math.floor(Math.random() * 20)
})