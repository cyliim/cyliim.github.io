function logIterations() {
    let heads = tails = 0
    let num = document.getElementById("int").value;
    for (let i = 0; i < num; ++i) {
        Math.floor(Math.random() * 2) + 1 == 1 ? ++heads : ++tails
    }
    document.getElementById("output").innerHTML = `${heads} heads | ${tails} tails`
    document.getElementById("percentage").innerHTML = `${Math.trunc((heads / num) * 100)}% heads | ${Math.trunc((tails / num) * 100)}% tails`
}
