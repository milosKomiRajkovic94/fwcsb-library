const Form = ({onChange, onClick, startedGame}) => {
    console.log('Form started game', startedGame);
    return(
        <form>
            <label>
                Home team:
                <input id="homeTeamName" type="text" name="homeTeamName" disabled={startedGame} onChange={onChange} />
            </label>
            <label>
                Away team:
                <input id="awayTeamName" type="text" name="awayTeamName" disabled={startedGame} onChange={onChange} />
            </label>
            <div>
            <label>
                
                <input type="button" onClick={onClick} value={`${startedGame ? "Finish" : "Start"} game`}/>
            </label>
            </div>
        </form>
    )
}

export default Form;