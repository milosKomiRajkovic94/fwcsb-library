import { useState } from 'react';
import Form from './components/Form';
import ScoreList from './components/ScoreList';
import './styles/App.css';

const App = () => {
  const currentScoreSkeleton = {
    homeTeamName: '',
    awayTeamName: '',
    homeTeamScore: 0,
    awayTeamScore: 0,
  }
  const [startedGame, setStartedGame] = useState(false);
  const [currentScore, setCurrentScore] = useState(currentScoreSkeleton)
  const [scoreTableData, setScoreTableData] = useState([]);

  function sortGamesByScore(games) {
    games.sort((game1, game2) => {
      const totalScore1 = Number(game1.homeTeamScore) + Number(game1.awayTeamScore);
      const totalScore2 = Number(game2.homeTeamScore) + Number(game2.awayTeamScore);

      if (totalScore1 === totalScore2) {
        return games.indexOf(game2) - games.indexOf(game1);
      }

      return totalScore2 - totalScore1;
    });

    return games;
  }

  const onChange = (event) => {
    setCurrentScore((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onClick = (event) => {
    event.preventDefault();
    if (startedGame) {
      setScoreTableData((prevState) => [...prevState, currentScore])
      document.getElementById("score-board-form").reset();
    }
    setStartedGame((prevState) => !prevState);
  }

  return (
    <div className="App">
      <Form onChange={onChange} onClick={onClick} startedGame={startedGame} />
      <ScoreList sortedScores={sortGamesByScore(scoreTableData)} />
    </div>
  );
}

export default App;
