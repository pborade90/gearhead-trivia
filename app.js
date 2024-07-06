const form = document.querySelector("#quiz-form")
const scoreEl = document.querySelector(".score")

const correctAnswers = ["Sports Utility Vehicle", "Audi", "Germany", "Tesla", "Dodge", "Internal Combustion Engine", "Anti-Lock Braking System", "Lamborghini", "Porsche", "Suzuki"]

form.addEventListener("submit", e => {
    e.preventDefault()

    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]
    
    userAnswers.forEach( (answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10
        }
    })

    // console.log(score)

    scrollTo(0, 0)
    scoreEl.style.display = "block"

    let output = 0

    const timer = setInterval(() => {
        scoreEl.querySelector(".score-percent").textContent = `${output}%`

        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 10) //miliseconds
})