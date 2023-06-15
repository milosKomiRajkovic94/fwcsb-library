import React from 'react';
import { render } from '@testing-library/react';
import ScoreList from '../components/ScoreList';

describe('ScoreList', () => {

    test('should render the score board with sorted scores', () => {
        const sortedScores = [
            { "homeTeamName": "Uruguay", "awayTeamName": "Italy", "homeTeamScore": "6", "awayTeamScore": "6" },
            { "homeTeamName": "Spain", "awayTeamName": "Brazil", "homeTeamScore": "10", "awayTeamScore": "2" },
            { "homeTeamName": "Mexico", "awayTeamName": "Canada", "homeTeamScore": "0", "awayTeamScore": "5" },
            { "homeTeamName": "Argentina", "awayTeamName": "Australia", "homeTeamScore": "3", "awayTeamScore": "1" },
            { "homeTeamName": "Germany", "awayTeamName": "France", "homeTeamScore": "2", "awayTeamScore": "2" }
        ];

        const { getByText } = render(<ScoreList sortedScores={sortedScores} />);

        const titleElement = getByText('Football world cup score board');
        expect(titleElement).toBeInTheDocument();

        sortedScores.forEach((score, index) => {
            const scoreText = `${index + 1}. ${score.homeTeamName} - ${score.awayTeamName}: ${score.homeTeamScore} - ${score.awayTeamScore}`;
            const scoreElement = getByText(scoreText);
            expect(scoreElement).toBeInTheDocument();
        });
    });


    test('should render the empty message when there are no scores', () => {
        const sortedScores = [];

        const { queryByText } = render(<ScoreList sortedScores={sortedScores} />);

        const emptyMessageElement = queryByText('Football world cup score board is currently empty');
        expect(emptyMessageElement).toBeInTheDocument();
    });
});
