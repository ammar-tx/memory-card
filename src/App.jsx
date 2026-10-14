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
    src: "/public/1.jpg"
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    src: "/public/2.jpg"
  },
  {
    id: 3,
    name: "Sakura Haruno",
    src: "/public/3.jpg"
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    src: "/public/4.jpg"
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    src: "/public/5.jpg"
  },
  {
    id: 6,
    name: "Gaara",
    src: "/public/6.jpg"
  },
  {
    id: 7,
    name: "Hinata Hyuga",
    src: "/public/7.jpg"
  },
  {
    id: 8,
    name: "Jiraiya",
    src: "/public/8.jpg"
  },
  {
    id: 9,
    name: "Orochimaru",
    src: "/public/9.jpg"
  },
  {
    id: 10,
    name: "Rock Lee",
    src: "/public/10.jpg"
  },
  {
    id: 11,
    name: "Shikamaru Nara",
    src: "/public/11.jpg"
  },
  {
    id: 12,
    name: "Madara Uchiha",
    src: "/public/12.jpg"
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
