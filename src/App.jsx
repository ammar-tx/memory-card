import {useState} from "react";
import CardGrid from "./components/cardGrid"; 
import ScoreBoard from "./components/scoreBoard";
import "./App.css";

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}



function App() {

    const initialCards = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    src: "https://unsplash.com/photos/tabby-cat-on-wooden-floor-CYq1Jr-ccGc"
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    src: "https://unsplash.com/photos/ruddy-turnstone-calling-with-open-beak-l-I2kMq-M5Q"
  },
  {
    id: 3,
    name: "Sakura Haruno",
    src: "https://unsplash.com/photos/a-young-deer-with-spots-in-a-forest-jYUivBeOUaE"
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    src: "https://unsplash.com/photos/elk-with-antlers-in-snowy-forest-VIBM9Z5X1b4"
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    src: "https://unsplash.com/photos/juvenile-bald-eagle-in-flight-7lV4U_omwU0"
  },
  {
    id: 6,
    name: "Gaara",
    src: "https://unsplash.com/photos/a-small-hedgehog-sits-in-green-grass-with-snowdrops-A8nXliyqWKs"
  },
  {
    id: 7,
    name: "Hinata Hyuga",
    src: "https://unsplash.com/photos/alpine-ibex-in-mountain-meadow-JDF2VqH23qk"
  },
  {
    id: 8,
    name: "Jiraiya",
    src: "https://unsplash.com/photos/a-dragonfly-perched-on-a-stalk-of-golden-grass-uQ4AyR9bjUw
  },
  {
    id: 9,
    name: "Orochimaru",
    src: "https://unsplash.com/photos/red-panda-on-mossy-tree-branch-LAksYIVRjUs"
  },
  {
    id: 10,
    name: "Rock Lee",
    src: "https://unsplash.com/photos/a-small-hedgehog-hides-under-a-car-on-paving-stones-zGecii3rnxo"
  },
  {
    id: 11,
    name: "Shikamaru Nara",
    src: "https://unsplash.com/photos/a-red-chameleon-perched-on-a-tree-branch-zbKL8ZQQfWU"
  },
  {
    id: 12,
    name: "Madara Uchiha",
    src: "https://unsplash.com/photos/a-snarling-leopard-with-sharp-teeth-and-prominent-whiskers-loMAi6RfY1o"
  }
];

    const [cards, setCards] = useState(initialCards);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    

    function handleClick(id) {
        if (clickedCards.includes(id)) {
            // Game Over
            console.log('GameOver');
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
            setClickedCards([]);
            return;
        }

        setClickedCards([...clickedCards, id]);
        setScore(score + 1);
        const shuffledCards = shuffle(cards);
        setCards(shuffledCards);
        console.log(score)
        console.log(clickedCards)
    }


    return(
        <>
        <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
        <CardGrid cards={cards} onCardClick={handleClick}></CardGrid>
        </>
    );
}

export default App;
