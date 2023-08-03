const startButton = document.querySelector('.js-start-button');
const stopButton = document.querySelector('.js-stop-button')
const myParagraph = document.querySelector('p')
const resetButton = document.querySelector('.reset-button')
const lapButton = document.querySelector('.lap-button')
const lapDisplay = document.querySelector('.lap-display')
let lapStopwatch;
let myArray = [];
let myArray2 = [];

// Main display variables

let lapNumber = 0;
let idnumber;
let i;
let j;
let k;
let l;
let m;
let unitsMilliseconds;
let tensMilliseconds;
let unitsSeconds;
let tensSeconds;
let unitsMinutes;
let tensMinutes;
let timeOut;

// Lap display variables

let idnumber1;
let i1;
let j1;
let k1;
let l1;
let m1;
let unitsMilliseconds1;
let tensMilliseconds1;
let unitsSeconds1;
let tensSeconds1;
let unitsMinutes1;
let tensMinutes1;
let timeOut1;
let compareValue = 0;
let objectIndex = 0;


const startTimer = () => {
    
    i = i || 0;
    j = j || 0;
    k = k || 0;
    l = l || 0;
    m = m || 0;
    unitsMilliseconds = unitsMilliseconds || 0;
    tensMilliseconds = tensMilliseconds || 0;
    unitsSeconds = unitsSeconds || 0;
    tensSeconds = tensSeconds || 0;
    unitsMinutes = unitsMinutes || 0;
    tensMinutes = tensMinutes || 0;
    timeOut = 10;

    idnumber = setInterval(() => {

        unitsMilliseconds++;

        myParagraph.innerHTML = `${tensMinutes}${unitsMinutes}:${tensSeconds}${unitsSeconds}.${tensMilliseconds}${unitsMilliseconds}`

        
        if (unitsMilliseconds === 10){

            if (i === 9){
                i = -1
            }

            i++;

            myParagraph.innerHTML = `${tensMinutes}${unitsMinutes}:${tensSeconds}${unitsSeconds}.${i}0`

            unitsMilliseconds = 0;
        
            tensMilliseconds++;
            
        }

        if (tensMilliseconds === 10){

            if (j === 9){
                j = -1
            }

            j++; 

            myParagraph.innerHTML = `${tensMinutes}${unitsMinutes}:${tensSeconds}${j}.00`
            
            tensMilliseconds = 0;
        
            unitsSeconds++;  
    
        }

        if (unitsSeconds === 10){

            if (k === 9){
                k = -1
            }

            k++;

            myParagraph.innerHTML = `${tensMinutes}${unitsMinutes}:${k}0.00`
            
            unitsSeconds = 0;
        
            tensSeconds++;  
            
        }

        if (tensSeconds === 6){

            if (l === 5){
                l = -1
            }

            m++;

            myParagraph.innerHTML = `${tensMinutes}${l}:00.00`
            
            tensSeconds = 0;
        
            unitsMinutes++;  

        }

        if (unitsMinutes === 10){

            if (m === 9){
                m = -1
            }

            n++;

            myParagraph.innerHTML = `${m}0:0.00`
        
            unitsMinutes = 0;
        
            tensMinutes++;  
            
        }

        if (tensMinutes === 6){
            reDirect();
        }


    }, timeOut);
}

const stopTimer = () => {
    clearInterval(idnumber)
    clearInterval(idnumber1)
}

const resetTimer = () => {
    /// Reset Variables
    
    i = 0;
    j = 0;
    k = 0;
    l = 0;
    m = 0;
    unitsMilliseconds = 0;
    tensMilliseconds = 0;
    unitsSeconds = 0;
    tensSeconds = 0;
    unitsMinutes = 0;
    tensMinutes = 0;
    lapNumber = 0;

    i1 = 0;
    j1 = 0;
    k1 = 0;
    l1 = 0;
    m1 = 0;
    unitsMilliseconds1 = 0;
    tensMilliseconds1 = 0;
    unitsSeconds1 = 0;
    tensSeconds1 = 0;
    unitsMinutes1 = 0;
    tensMinutes1 = 0;
    compareValue = 0;

    /// Reset Display

    myParagraph.innerHTML = `00:00.00`;
    
    /// Reset -> Inactive lap

    lapButton.innerHTML = 'Lap'
    lapButton.classList.add('lap-button-inactive');
    lapButton.classList.remove('lap-button-active');
    lapButton.classList.remove('reset-button');

    lapDisplay.innerHTML = '';

}

const lapTimer = () => {

    // Stops previous Lap
    clearInterval(idnumber1)

    console.log(unitsMilliseconds1, tensMilliseconds1, unitsSeconds1, tensSeconds1, unitsMinutes1, tensMinutes1)

    lapDisplay.innerHTML = '';

    // Pushes compareValue into array

    myArray.push(compareValue)

    // Display laps

    lapNumber++;

    myArray2.push(`<p class = 'lap-display-text lap-number js-lap-${lapNumber}'>Lap${lapNumber}</p><p class = 'lap-display-text js-lap-stopwatch-${lapNumber}'>${tensMinutes1 || 0}${unitsMinutes1 || 0}:${tensSeconds1 || 0}${unitsSeconds1 || 0}.${tensMilliseconds1 || 0}${unitsMilliseconds1 || 0}</p>`)

    for (let i = myArray2.length; i > 0; i--){
        lapDisplay.innerHTML += myArray2[i - 1]
    }

    // Reset variables in preperation of new Lap

    i1 = 0;
    j1 = 0;
    k1 = 0;
    l1 = 0;
    m1 = 0;
    unitsMilliseconds1 = 0;
    tensMilliseconds1 = 0;
    unitsSeconds1 = 0;
    tensSeconds1 = 0;
    unitsMinutes1 = 0;
    tensMinutes1 = 0;
    compareValue = 0;

    // Start mini-timer

    lapStopwatch = document.querySelector(`.js-lap-stopwatch-${lapNumber}`);

    startLapTimer(lapStopwatch);

    compareLapTimer()
}

const compareLapTimer = () => {

    /// Queryselectorall returns an array
    let AllDisplay = document.querySelectorAll('.lap-display-text')

    let fastestIndex = 0;
    let slowestIndex = 0;

    //Find min and max

    myArray.forEach((element, i) => {
        if (element === Math.max(...myArray)){
            slowestIndex = i;
        }
        if (element === Math.min(...myArray)){
            fastestIndex = i;
        }
    })

    //Style

    // Reset css by removing .green and .red from all laps

    for (let i = 0; i < AllDisplay.length; i++){
        AllDisplay[i].classList.remove('green')
        AllDisplay[i].classList.remove('red')
        console.log(AllDisplay[i])
    }

    if (myArray.length > 1){

        // Add .green and .red to fastest and slowest laps

        const SlowestDisplayText = document.querySelector(`.js-lap-${slowestIndex}`)
        const SlowestDisplayTime = document.querySelector(`.js-lap-stopwatch-${slowestIndex}`)
        
        const FastestDisplayText = document.querySelector(`.js-lap-${fastestIndex + 1}`)
        const FastestDisplayTime =  document.querySelector(`.js-lap-stopwatch-${fastestIndex + 1}`)

        SlowestDisplayText.classList.add('red')
        SlowestDisplayTime.classList.add('red')

        FastestDisplayText.classList.add('green')
        FastestDisplayTime.classList.add('green')
    }

    console.log(fastestIndex)
    console.log(slowestIndex)
}

const startLapTimer = (lapStopwatch) => {
    i1 = i1 || 0;
    j1 = j1 || 0;
    k1 = k1 || 0;
    l1 = l1 || 0;
    m1 = m1 || 0;
    unitsMilliseconds1 = unitsMilliseconds1 || 0;
    tensMilliseconds1 = tensMilliseconds1 || 0;
    unitsSeconds1 = unitsSeconds1 || 0;
    tensSeconds1 = tensSeconds1 || 0;
    unitsMinutes1 = unitsMinutes1 || 0;
    tensMinutes1 = tensMinutes1 || 0;
    timeOut1 = 10;

    idnumber1 = setInterval(() => {

        unitsMilliseconds1++;

        lapStopwatch.innerHTML = `${tensMinutes1}${unitsMinutes1}:${tensSeconds1}${unitsSeconds1}.${tensMilliseconds1}${unitsMilliseconds1}`

        
        if (unitsMilliseconds1 === 10){

            if (i1 === 9){
                i1 = -1
            }

            i1++;

            lapStopwatch.innerHTML = `${tensMinutes1}${unitsMinutes1}:${tensSeconds1}${unitsSeconds1}.${i1}0`

            unitsMilliseconds1 = 0;
        
            tensMilliseconds1++;
            
        }

        if (tensMilliseconds1 === 10){

            if (j1 === 9){
                j1 = -1
            }

            j1++; 

            lapStopwatch.innerHTML = `${tensMinutes1}${unitsMinutes1}:${tensSeconds1}${j1}.00`
            
            tensMilliseconds1 = 0;
        
            unitsSeconds1++;  
    
        }

        if (unitsSeconds1 === 10){

            if (k1 === 9){
                k1 = -1
            }

            k1++;

            lapStopwatch.innerHTML = `${tensMinutes1}${unitsMinutes1}:${k1}0.00`
            
            unitsSeconds1 = 0;
        
            tensSeconds1++;  
            
        }

        if (tensSeconds1 === 6){

            if (l1 === 5){
                l1 = -1
            }

            m1++;

            lapStopwatch.innerHTML = `${tensMinutes1}${l1}:00.00`
            
            tensSeconds1 = 0;
        
            unitsMinutes1++;  

        }

        if (unitsMinutes1 === 10){

            if (m1 === 9){
                m1 = -1
            }

            n1++;

            lapStopwatch.innerHTML = `${m1}0:0.00`
        
            unitsMinutes1 = 0;
        
            tensMinutes1++;  
            
        }

        if (tensMinutes1 === 6){
            reDirect();
        }

        compareValue++;

    }, timeOut1);

    objectIndex++;
}

// Onclick Stuffs
startButton.addEventListener('click', () => {

    if (startButton.innerHTML === 'Start'){ /// Switches start to stop
        
        // Start -> Stop

        startButton.innerHTML = 'Stop';
        startButton.classList.add('stop-button', 'js-stop-button');
        startButton.classList.remove('js-start-button');

        // Lapbutton inactive -> active

        lapButton.classList.add('lap-button-active');
        lapButton.classList.remove('lap-button-inactive');

        // Reset -> Lap

        if (lapButton.innerHTML === 'Reset'){
            lapButton.innerHTML = 'Lap';
            lapButton.classList.remove('reset-button');
            lapButton.classList.add('lap-button-active');
        }

        startTimer();

        if (lapNumber === 0){
            lapTimer()
        }

    }

    else if (startButton.innerHTML === 'Stop'){ /// Switches stop to start
        
        // Start -> Stop

        startButton.innerHTML = 'Start';
        startButton.classList.remove('stop-button', 'js-stop-button');
        startButton.classList.add('js-start-button');
        
        // Lap -> Reset

        lapButton.innerHTML = 'Reset';
        lapButton.classList.add('reset-button');
        
        stopTimer()
    }
});

lapButton.addEventListener('click', () => {
    
    if (lapButton.innerHTML === 'Reset'){
        resetTimer();
    }

    else{

        (lapButton.classList).forEach((element) => {  /// Loops through lap button class to check for lap-button-active
            if (element === 'lap-button-active'){
                lapTimer();
            }
        })

        return;
    }
})

function reDirect(){
    location.href = "Why.html";
}



/* 
Create start button, stop button. Done
    style it. Done
    script it. Done
Create count system.
    milleseconds. Done
    seconds. Done
    minutes. Done

    seconds round around 60 seconds.

    Let it run and use modulus --> REDO LOGIC PLEASE
Create Reset and Lap.
    Lap takes current variable and displays under buttons. Done
        Make display same line. Done
    Lap is dormant until Start starts (darker colors + inactive button). Done
    Lap turns to Reset when Start turns to Stop. Done
    Reset turns back to inactive lap. Done


    FIX LAP
    Lap is a mini-timer which intiates on start button, and displays new lap and resets mini-timer each time lap-button is clicked. Done
    Push Lap and 00:00.00 onto array, array returns array[0] so displays from start

*/