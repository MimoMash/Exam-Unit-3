import fetch from "node-fetch";

const PLAYER_NAME = "mohammaa@uia.no";
const API = "https://alchemy-kd0l.onrender.com";
const startPlayer = "/start?player=";
const POST = "/answer";

const firstChallengeCode = "☉☿☽♂☉";
const secondChallengeCode = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
const thirdChallengeCode = 
    `\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   
    4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   
    127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   
    24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '`;

async function start() {
    const currentChallenge = await fetchData();
    console.log(currentChallenge);
    let challengeCompletion = checkChallengesCompleted(currentChallenge.challenge);
   
    //First Challenge
    if (challengeCompletion === 0) {
        const firstAnswer = await submitAnswer(alchemicalSymbolsDecipher(firstChallengeCode));
        console.log(firstAnswer);
    }
    //Second Challenge
    if (challengeCompletion === 1) {
        const secondAnswer = await submitAnswer(poemDecipherer(secondChallengeCode));
        console.log(secondAnswer);
    }
    //Third Challenge
    if (challengeCompletion === 2) {
        const thirdAnswer = await submitAnswer(transcriptDecipherer(thirdChallengeCode));
        console.log(thirdAnswer);
    }
}

function checkChallengesCompleted(task) {
    task = task.toLowerCase();
    if(task.includes("i can taste success on the wind, we finally located"))
        return 0;
    else if(task.includes("your work was") && task.includes("still flows the"))
        return 1;
    else if(task.includes("damn it!") && task.includes("poem") && task.includes("1618"))
        return 2;
    else if(task.includes("element that opens gates."))
        return 3;
    return -1;
}

function transcriptDecipherer(transcript) {

    const numberToLetters = {
        1: { letter: "E" },
        2: { letter: "F" },
        4: { letter: "I" },
        5: { letter: "G" },
        8: { letter: "S" },
        9: { letter: "P" },
        10: { letter: "H" },
        12: { letter: "L" },
        17: { letter: "T" },
        20: { letter: "O" },
        23: { letter: "R" },
        24: { letter: "A" },
        29: { letter: "B" },
        34: { letter: "N" },
        38: { letter: "M" },
        45: { letter: "U" },
        46: { letter: "X" },
        48: { letter: "V" },
        108: { letter: "Y" },
        127: { letter: "C" },
        131: { letter: "D" },
        270: { letter: "W" }
    };

    const alchemicalSymbols = {
        "Silver": "☽",
        "Mercury": "☿",
        "Copper": "♀",
        "Gold": "☉",
        "Iron": "♂",
        "Tin": "♃",
        "Lead": "♄",
        "Sulfur": "🜍",
        "Air": "🜁",
        "Heat": "🜂",
        "Water": "🜄",
        "Salt": "🜔"
    };

    let numberGroups = transcript.split("   "); 
    let numberArray = [];
    let message = [];
    let secretMessage = [];

    for (let i = 0; i < numberGroups.length; i++) {
        let numbers = numberGroups[i].replaceAll("'", "").split(" ")
        .map(Number).filter(num => num > 0 && Number.isInteger(num));

        if (numbers.length > 0) {
            numberArray.push(numbers);
        }
    }

    for (let i = 0; i < numberArray.length; i++) {
        let group = numberArray[i];
        let word = "";
    
        for (let j = 0; j < group.length; j++) {
            let num = group[j];
            
            if (numberToLetters[num]) {
                word += numberToLetters[num].letter;
            }
        }
    
        message.push(word);
    }
    
    message.forEach(word => {
        for (let element in alchemicalSymbols) {
            if (word.toLowerCase() === element.toLowerCase()) {
                secretMessage.push(alchemicalSymbols[element]);
            }
        }
    });

    return secretMessage.join("");
    
}

function poemDecipherer(poem) {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let secretMessage = [];

    poem = poem.trim();

    if (poem === "") {
        return "";
    }

    poem = poem.split("");

    for (let i = 0; i < poem.length; i++) {
        if(capitalLetters.includes(poem[i])) {
            secretMessage.push(poem[i])
        }
    }

    secretMessage = secretMessage.join("");

    return secretMessage;
}

function alchemicalSymbolsDecipher(code) {
    let metals = [];
    const currentSymbols = [...code]; 

    const alchemicalSymbols = {
        "☽": "Silver",
        "☿": "Quicksilver",
        "♀": "Copper",
        "☉": "Gold",
        "♂": "Iron",
        "♃": "Tin",
        "♄": "Lead",
    };

    for (let i = 0; i < currentSymbols.length; i++) {
        let symbol = currentSymbols[i];

        if (alchemicalSymbols[symbol]) {
            metals.push(alchemicalSymbols[symbol]); 
        }
    }

    return metals;
}

async function fetchData() {
    try {
        const response = await fetch(`${API}${startPlayer}${PLAYER_NAME}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to start game", error)
        return null;
    } 
}

async function submitAnswer(userAnswer) {
    try {
        const response = await fetch(`${API}${POST}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ player: PLAYER_NAME, answer: userAnswer })
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to submit answer:", error);
        return null;
    }
}

start();