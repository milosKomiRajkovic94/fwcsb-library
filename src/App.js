import { useState } from 'react';
import Form from './components/Form';

function App() {
  const[startedGame, setStartedGame] = useState(false);

  const onChange = (event) => {
    console.log("App onChange", event);
  }

  const onClick = (event) => {
    event.preventDefault();
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
