const Form = ({onChange, onClick, startedGame}) => {
    
    const preventMinus = (e) => {
        const exceptThisSymbols = ["e", "E", "+", "-", "."];
        if(exceptThisSymbols.includes(e.key)) {
            e.preventDefault();
        }
    };

    return(
        <form id="score-board-form">
            <div>
                <label>
                    Home team:
                    <input id="homeTeamName" type="text" name="homeTeamName" disabled={startedGame} onChange={onChange}/>
                </label>
                <label>
                    Away team:
                    <input id="awayTeamName" type="text" name="awayTeamName" disabled={startedGame} onChange={onChange} />
                </label>
            </div>
            <div>
                <label>
                    Home team score:
                    <input id="homeTeamScore" type="number" min={0} name="homeTeamScore" defaultValue={startedGame ? 0 : undefined} disabled={!startedGame} onChange={onChange} onKeyDown={preventMinus} />
                </label>
                <label>
                    Away team score:
                    <input id="awayTeamScore" type="number" min={0} name="awayTeamScore" defaultValue={startedGame ? 0 : undefined} disabled={!startedGame} onChange={onChange} onKeyDown={preventMinus} />
                </label>
            </div>
            <div>
            <label>
                <input type="button" onClick={onClick} value={`${startedGame ? "Finish" : "Start"} game`}/>
            </label>
            </div>
        </form>
    )
}

export default Form;