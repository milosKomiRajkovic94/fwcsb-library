const ScoreList = ({ sortedScores }) => {
    return (
        <div>
            {sortedScores.length ?
                <>
                    <h1>Football world cup score board</h1>
                    {sortedScores.map((score, index) => {
                        return (
                            <p>{index + 1}. {score.homeTeamName} - {score.awayTeamName}: {score.homeTeamScore} - {score.awayTeamScore} </p>
                        )
                    })}
                </>
                :
                <h1>Football world cup score board is currently empty</h1>}
        </div>
    )
}

export default ScoreList;