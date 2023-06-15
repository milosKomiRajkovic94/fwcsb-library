const Form = ({ onChange, onClick, startedGame }) => {

    const preventMinus = (e) => {
        const exceptThisSymbols = ["e", "E", "+", "-", "."];
        if (exceptThisSymbols.includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <form id="score-board-form" className="form-grid">
            <div className="form-row">
                <label htmlFor="homeTeamName" className="form-label">
                    Home team:
                </label>
                <input id="homeTeamName" type="text" name="homeTeamName" className="formInput" disabled={startedGame} onChange={onChange} />
            </div>
            <div className="form-row">
                <label htmlFor="awayTeamName" className="form-label">
                    Away team:
                </label>
                <input id="awayTeamName" type="text" name="awayTeamName" className="formInput" disabled={startedGame} onChange={onChange} />
            </div>
            <div className="form-row">
                <label htmlFor="homeTeamScore" className="form-label">
                    Home team score:
                </label>
                <input id="homeTeamScore" type="number" min={0} name="homeTeamScore" defaultValue={startedGame ? 0 : undefined} className="formInput" disabled={!startedGame} onChange={onChange} onKeyDown={preventMinus} />
            </div>
            <div className="form-row">
                <label htmlFor="awayTeamScore" className="form-label">
                    Away team score:
                </label>
                <input id="awayTeamScore" type="number" min={0} name="awayTeamScore" defaultValue={startedGame ? 0 : undefined} className="formInput" disabled={!startedGame} onChange={onChange} onKeyDown={preventMinus} />
            </div>
            <div className="form-row">
                <input type="button" onClick={onClick} value={`${startedGame ? "Finish" : "Start"} game`} />
            </div>
        </form>
    );

}

export default Form;