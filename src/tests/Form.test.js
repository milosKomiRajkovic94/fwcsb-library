import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/Form';

describe('MyComponent', () => {
  test('should disable inputs when disabled prop is true', () => {
    const { container } = render(<Form startedGame={true} />);
    const homeTeamNameIE = container.querySelector('#homeTeamName');
    const awayTeamNameIE = container.querySelector('#awayTeamName');

    expect(homeTeamNameIE).toBeDisabled();
    expect(awayTeamNameIE).toBeDisabled();
  });

  test('should not disable inputs when disabled prop is false', () => {
    const { container } = render(<Form disabled={false} />);
    const homeTeamNameIE = container.querySelector('#homeTeamName');
    const awayTeamNameIE = container.querySelector('#awayTeamName');

    expect(homeTeamNameIE).not.toBeDisabled();
    expect(awayTeamNameIE).not.toBeDisabled();
  });
});
