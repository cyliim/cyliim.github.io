async function generate() {

let zero = '0'

    let first = Math.floor(Math.random() * 50) + 1
    let second = Math.floor(Math.random() * 50) + 1
    let third = Math.floor(Math.random() * 50) + 1
    let fourth = Math.floor(Math.random() * 50) + 1
    let fifth = Math.floor(Math.random() * 50) + 1
    let sixth = Math.floor(Math.random() * 50) + 1

    let powerball = Math.floor(Math.random() * 9) + 1

    if(first <= 9) first = zero + first
    if(second <= 9) second = zero + second
    if(third <= 9) third = zero + third
    if(fourth <= 9) fourth = zero + fourth
    if(fifth <= 9) fifth = zero + fifth
    if(sixth <= 9) sixth = zero + sixth
    if(powerball <= 9) powerball = zero + powerball
    
    if(second === first) second = Math.floor(second + 1)
    if(third === first || third === second) third = Math.floor(third + 1)
    if(fourth === first || fourth === second || fourth === third) fourth = Math.floor(fourth + 1)
    if(fifth === first || fifth === second || fifth === third || fifth === fourth) fifth = Math.floor(fifth + 1)
    if(sixth === first || sixth === second || sixth === third || sixth === fourth || sixth === fifth) sixth = Math.floor(sixth + 1)

    let final = first+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+"　"+powerball
    document.getElementById("lottoOutput").innerHTML = final
}
