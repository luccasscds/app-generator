import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input Component', () => {
    it('deve renderizar com placeholder', () => {
        // Arrange
        render(React.createElement(Input, { placeholder: "Teste" }));

        // Act
        expect(screen.getByPlaceholderText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com label', () => {
        // Arrange
        render(React.createElement(Input, { label: "Teste" }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com valor', () => {
        // Arrange
        render(React.createElement(Input, { value: "Teste" }));

        // Act
        expect(screen.getByDisplayValue('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com name', () => {
        // Arrange
        render(React.createElement(Input, { name: "Teste" }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('name', 'Teste');

        // Assert
    });

    it('deve renderizar com inputMode="numeric"', () => {
        // Arrange
        render(React.createElement(Input, { inputMode: "numeric" }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('inputMode', 'numeric');

        // Assert
    });

    it('deve renderizar desabilitado', () => {
        // Arrange
        render(React.createElement(Input, { disabled: true }));

        // Act
        expect(screen.getByRole('textbox')).toBeDisabled();

        // Assert
    });

    it('deve renderizar com maxLength=10', () => {
        // Arrange
        render(React.createElement(Input, { maxLength: 10 }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '10');

        // Assert
    });

    it('deve ser somente leitura', () => {
        // Arrange
        render(React.createElement(Input, { readOnly: true }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('readOnly');

        // Assert
    });

    it('deve aplicar estilos customizados', () => {
        // Arrange
        const customStyle = { backgroundColor: '#f00' };
        render(React.createElement(Input, { style: customStyle }));

        // Act
        const input = screen.getByRole('textbox');

        // Assert
        expect(input).toHaveStyle(customStyle);
    });

    it('deve renderizar com size="120"', () => {
        // Arrange
        render(React.createElement(Input, { size: "120" }));

        // Act
        const input = screen.getByRole('textbox');

        // Assert
        expect(input).toHaveAttribute('size', '120');
    });

    it('deve ser obrigatório', () => {
        // Arrange
        render(React.createElement(Input, { required: true }));

        // Act
        const input = screen.getByRole('textbox');

        // Assert
        expect(input).toHaveAttribute('required');
    });

    it('deve permitir digitar texto', () => {
        // Arrange
        render(React.createElement(Input, {}));
        const input = screen.getByRole('textbox');

        // Act
        fireEvent.change(input, { target: { value: 'Texto digitado' } });

        // Assert
        expect(input).toHaveValue('Texto digitado');
    });

    it('deve colocar modo password', () => {
        // Arrange
        render(React.createElement(Input, { password: true }));
        const input = document.querySelector('.p-password-input');

        // Assert
        expect(input).toHaveAttribute('type', 'password');
    });

    it('deve renderizar com toggleMask e alternar visibilidade da senha', async () => {
        // Arrange
        render(React.createElement(Input, { password: true, toggleMask: true }));

        const input = document.querySelector('.p-password-input');
        
        // Clica para mostrar senha
        fireEvent.click(document.querySelector('.p-input-icon svg') as HTMLElement);
        await waitFor(() => {
            expect(input).toHaveAttribute('type', 'text');
        });

        // Clica novamente para ocultar senha
        fireEvent.click(document.querySelector('.p-input-icon svg') as HTMLElement);
        await waitFor(() => {
            expect(input).toHaveAttribute('type', 'password');
        });
    });
});