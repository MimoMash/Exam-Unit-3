import fetch from "node-fetch";

const PLAYER_NAME = "mohammaa@uia.no";
const API = "https://alchemy-kd0l.onrender.com";
const startPlayer = "/start?player=";
const POST = "/answer";

async function start() {
    const startingChallenge = await fetchData();

    console.log(startingChallenge);
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
        const response = await fetch(`${POST}`, {
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