import { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const currentScoreSkeleton = {
    homeTeamName: '',
    awayTeamName: '',
    homeTeamScore: 0,
    awayTeamScore: 0,
  }
  const[startedGame, setStartedGame] = useState(false);
  const[currentScore, setCurrentScore] = useState(currentScoreSkeleton)
  const[scoreTableData, setScoreTableData] = useState([]);

  const onChange = (event) => {
    setCurrentScore((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onClick = (event) => {
    event.preventDefault();
    if(startedGame){
      setScoreTableData((prevState) => [...prevState, currentScore])
      document.getElementById("score-board-form").reset();
    }
    setStartedGame((prevState) => !prevState);
    console.log("App onSubmit", event, startedGame);
  }

  console.log('Updated scoreTableData', scoreTableData, JSON.stringify(scoreTableData));

  return (
    <div className="App">
      <Form onChange={onChange} onClick={onClick} startedGame={startedGame} />
    </div>
  );
}

export default App;
