import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { InputSwitch } from './InputSwitch';

describe('InputSwitch Component', () => {
    it('deve renderizar com texto', () => {
        // Arrange
        render(React.createElement(InputSwitch, { text: "Teste", checked: false }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve alternar o estado quando clicado', async () => {
        // Arrange
        const mockOnPress = vi.fn();
        render(React.createElement(InputSwitch, { text: "Teste", checked: false, onChange: mockOnPress }));
        const input = screen.getByRole('switch');

        // Act
        fireEvent.click(input);

        // Assert
        await waitFor(() => {
            expect(mockOnPress).toHaveBeenCalledTimes(1);
            expect(mockOnPress).toHaveBeenCalledWith(
                expect.objectContaining({ value: true })
            );
        });
    });

    it('deve estar desabilitado', () => {
        // Arrange
        render(React.createElement(InputSwitch, { checked: false, disabled: true }));

        // Act
        expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('deve aplicar classes personalizadas', () => {
        // Arrange
        render(React.createElement(InputSwitch, { checked: false, className: 'custom-class' }));

        // Act
        const switchElement = screen.getByRole('checkbox');

        // Assert
        expect(switchElement).toHaveClass('custom-class');
    });

    it('deve ser somente leitura', () => {
        // Arrange
        render(React.createElement(InputSwitch, { checked: false, readOnly: true }));
        const input = screen.getByRole('checkbox');

        // Act
        expect(input).toHaveAttribute('readonly');
    });

    it('deve ser obrigatório', () => {
        // Arrange
        render(React.createElement(InputSwitch, { checked: false, required: true }));
        const input = screen.getByRole('checkbox');

        // Act
        expect(input).toHaveAttribute('required');
    });
});