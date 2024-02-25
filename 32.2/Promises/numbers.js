let url = "http://numbersapi.com";
let number = 3;

/// Part 1
$.getJSON(`${url}/${number}?json`).then(data => {
    $('body').append(`<p>${data.text}</p>`);
})



/// Part 2
const multNumbers = [9, 34, 8, 15];
$.getJSON(`${url}/${multNumbers}?json`).then(data =>{
    console.log(data)
})


/// Part 3
Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${number}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });