import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import ScoreBoard from "./components/Scoreboard.jsx";
import { fetchPokémonPicture } from "./fetchPokémonPicture.js";

function App() {
    const [pokémonPictures, setPokémonPictures] = useState([]);
    const [pokémonNamesArray, setPokémonNamesArray] = useState([
        "ditto",
        "starly",
        "pawniard",
        "sawk",
        "pancham",
        "camerupt",
        "glastrier",
        "passimian",
        "swablu",
        "sinistea",
        "jirachi",
        "smeargle",
    ]);

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }

    const shufflePokémonNames = () => {
        const shuffledArray = shuffle([...pokémonNamesArray]);
        setPokémonNamesArray(shuffledArray);
    };

    useEffect(() => {
        const fetchPictures = async () => {
            const pictures = await Promise.all(
                pokémonNamesArray.map((name) => fetchPokémonPicture(name))
            );
            setPokémonPictures(pictures);
        };
        fetchPictures();
    }, [pokémonNamesArray]);

    return (
        <>
            <header>
                <div className="left-header">
                    <h1>Pokémon Memory Game</h1>
                    <p>
                        Get points by clicking on an image but don't click on
                        any more than once!
                    </p>
                </div>
                <ScoreBoard />
            </header>
            <div className="cards">
                {pokémonPictures.map((picture, index) => (
                    <Card
                        onClick={shufflePokémonNames}
                        key={index}
                        picture={picture}
                        name={
                            pokémonNamesArray[index][0].toUpperCase() +
                            pokémonNamesArray[index].slice(1)
                        }
                    ></Card>
                ))}
            </div>
        </>
    );
}

export default App;
