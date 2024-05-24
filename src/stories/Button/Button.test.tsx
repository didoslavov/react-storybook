import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('triggers onClick event', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button label="Click me" onClick={handleClick} />);
        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
