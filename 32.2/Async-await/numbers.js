let url = "http://numbersapi.com";
let number = 3;

/// Part 1
async function favNumber(){
    let getNum = await $.getJSON(`${url}/${number}?json`);
    let numPart1 = document.getElementById('part1');
    let newPart1 = document.createElement('p');
    let numVal = getNum.text;
    newPart1.textContent = numVal;
    numPart1.appendChild(newPart1);
    console.log(getNum)
}
favNumber();


/// Part 2
const multNumbers = [9, 34, 8, 15];
async function multNum(){
    let getNum = await $.getJSON(`${url}/${multNumbers}?json`);
    let numPart1 = document.getElementById('part2');
    let newPart1 = document.createElement('p');
    let numVal = getNum.text;
    newPart1.textContent = numVal;
    numPart1.appendChild(newPart1);
    console.log(getNum)
}
multNum();


/// Part 3
async function numFacts(){
    let facts = await Promise.all(
        Array.from({length:4}, () => $.getJSON(`${url}/${number}?json`))
    )
    facts.forEach(data => {
        $('body').append(`<p>${data.text}`)
    })}
numFacts();