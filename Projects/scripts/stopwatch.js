const startButton = document.querySelector('.js-start-button');
const stopButton = document.querySelector('.js-stop-button')
const myParagraph = document.querySelector('p')
const resetButton = document.querySelector('.reset-button')
const lapButton = document.querySelector('.lap-button')
const lapDisplay = document.querySelector('.lap-display')
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
}

const resetTimer = () => {
    /// Reset Variable
    
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
    lapNumber++;
    lapDisplay.innerHTML += `<p class = 'lap-display-text lap-number'>Lap${lapNumber}</p><p class = 'lap-display-text'>${tensMinutes}${unitsMinutes}:${tensSeconds}${unitsSeconds}.${tensMilliseconds}${unitsMilliseconds}</p>`
}


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

        (lapButton.classList).forEach((element) => {
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


*/