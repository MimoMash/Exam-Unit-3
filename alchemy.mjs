import fetch from "node-fetch";

const PLAYER_NAME = "mohammaa@uia.no";
const API = "https://alchemy-kd0l.onrender.com";
const startPlayer = "/start?player=";
const POST = "/answer";

const firstChallengeCode = "☉☿☽♂☉";

async function start() {
    const startingChallenge = await fetchData();

    //First Challenge
    console.log(startingChallenge);
    const firstAnswer = await submitAnswer(alchemicalSymbolsDecipher(firstChallengeCode));
    console.log(firstAnswer);

    
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