function timeToWords(timeStr){
    const [hourStr, minuteStr] = timeStr.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);


const hoursInWords =[
    'twelve', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
];

const minutesInWords =[
        'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
        'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 
        'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 
        'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty'
];


//convert hour to words
let hourWord = hoursInWords[hour % 12];
let period = hour < 12?'am':'pm';

// Convert minute to words
let minuteWord = minutesInWords[minute];
    if (minute >= 10 && minute <= 19) {
       
        minuteWord = minutesInWords[10 + (minute % 10)];
    } else if (minute >= 20) {
     
        minuteWord = minutesInWords[20 + Math.floor(minute / 10) - 2] + 
                     (minute % 10 !== 0 ? '-' + minutesInWords[minute % 10] : '');
    }

// Combine hour and minute words
let timeInWords = `${hourWord} ${minuteWord}`;
    if (minute === 0) {
        timeInWords += " o'clock";
    }
timeInWords += ` ${period}`;

return timeInWords;
}
