import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/Form';

describe('Form tests', () => {
  test('should disable first two and enable last two inputs when startedGame prop is true', () => {
    const { container } = render(<Form startedGame={true} />);
    const homeTeamNameIE = container.querySelector('#homeTeamName');
    const awayTeamNameIE = container.querySelector('#awayTeamName');
    const homeTeamScoreIE = container.querySelector('#homeTeamScore');
    const awayTeamScoreIE = container.querySelector('#awayTeamScore');

    expect(homeTeamNameIE).toBeDisabled();
    expect(awayTeamNameIE).toBeDisabled();
    expect(homeTeamScoreIE).not.toBeDisabled();
    expect(awayTeamScoreIE).not.toBeDisabled();
  });

  test('should enable first two and disable last two inputs when startedGame prop is false', () => {
    const { container } = render(<Form startedGame={false} />);
    const homeTeamNameIE = container.querySelector('#homeTeamName');
    const awayTeamNameIE = container.querySelector('#awayTeamName');
    const homeTeamScoreIE = container.querySelector('#homeTeamScore');
    const awayTeamScoreIE = container.querySelector('#awayTeamScore');

    expect(homeTeamNameIE).not.toBeDisabled();
    expect(awayTeamNameIE).not.toBeDisabled();
    expect(homeTeamScoreIE).toBeDisabled();
    expect(awayTeamScoreIE).toBeDisabled();
  });
});
