import { useState } from 'react';
import Form from './components/Form';

function App() {
  const[startedGame, setStartedGame] = useState(false);

  const onChange = (event) => {
    console.log("App onChange", event);
  }

  const onClick = (event) => {
    event.preventDefault();
    if(startedGame){
      document.getElementById("score-board-form").reset();
    }
    setStartedGame((prevState) => !prevState);
    console.log("App onSubmit", event, startedGame);
  }

  return (
    <div className="App">
      <Form onChange={onChange} onClick={onClick} startedGame={startedGame} />
    </div>
  );
}

export default App;
