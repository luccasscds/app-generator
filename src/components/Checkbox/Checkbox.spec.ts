import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
    it('deve renderizar com texto', () => {
        // Arrange
        render(React.createElement(Checkbox, { text: 'Teste', checked: true }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve estar desabilitado', () => {
        // Arrange
        render(React.createElement(Checkbox, { text: 'Teste', checked: true, disabled: true }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeDisabled();

        // Assert
    });

    it('deve estar obrigatório', () => {
        // Arrange
        render(React.createElement(Checkbox, { text: 'Teste', checked: true, required: true }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeRequired();

        // Assert
    });

    it('deve ser somente leitura', () => {
        // Arrange
        render(React.createElement(Checkbox, { text: 'Teste', checked: true, readOnly: true }));

        // Act
        expect(screen.getByLabelText('Teste')).toHaveAttribute('readonly');

        // Assert
    });

    it('deve aplicar estilos customizados', () => {
        // Arrange
        const customStyle = { backgroundColor: '#f00' };
        render(React.createElement(Checkbox, { text: 'Teste', checked: true, style: customStyle }));

        // Act
        const checkbox = document.querySelector('[data-pc-name="checkbox"]');

        // Assert
        expect(checkbox).toHaveStyle(customStyle);
    });

    it('deve aplicar classes customizadas', () => {
        // Arrange
        const customClass = 'custom-checkbox';
        render(React.createElement(Checkbox, { text: 'Teste', checked: true, className: customClass }));

        // Act
        const checkbox = document.querySelector('[data-pc-name="checkbox"]');

        // Assert
        expect(checkbox).toHaveClass(customClass);
    });

    it('deve disparar o evento onChange ao selecionar', async () => {
        // Arrange
        const mockOnChange = vi.fn();
        render(React.createElement(Checkbox, { text: 'Teste', checked: false, onChange: mockOnChange }));

        // Act
        const checkbox = document.querySelector('[data-pc-name="checkbox"]');
        fireEvent.click(checkbox!);

        // Assert
        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ checked: true }));
        });
    });
});