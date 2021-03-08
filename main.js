let body = document.querySelector('body')
let colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let showCode = document.getElementById('colorCode')
let click1 = document.querySelector('button')

// click1.addEventListener('click', createColorCode)

function createColorCode() {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * (colorCode.length))
        hexCode += colorCode[index]
    }

    showCode.textContent = hexCode
    body.style.backgroundColor = hexCode
}

setInterval(createColorCode,1010)