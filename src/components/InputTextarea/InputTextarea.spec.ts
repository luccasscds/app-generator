import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { InputTextarea } from './InputTextarea';

describe('InputTextarea Component', () => {
    it('deve renderizar com texto', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste" }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com valor inicial', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", value: "Valor Inicial" }));

        // Act
        expect(screen.getByDisplayValue('Valor Inicial')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com número de linhas especificado', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", rows: 4 }));

        // Act
        const textarea = screen.getByRole('textbox');
        expect(textarea).toHaveAttribute('rows', '4');

        // Assert
    });

    it('deve renderizar com número de colunas especificado', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", cols: 4 }));

        // Act
        const textarea = screen.getByRole('textbox');
        expect(textarea).toHaveAttribute('cols', '4');

        // Assert
    });

    it('deve estar desabilitado', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", disabled: true }));

        // Act
        expect(screen.getByRole('textbox')).toBeDisabled();

        // Assert
    });

    it('deve ser somente leitura', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", readOnly: true }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('readonly');

        // Assert
    });

    it('deve ser obrigatório', () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", required: true }));

        // Act
        expect(screen.getByRole('textbox')).toHaveAttribute('required');

        // Assert
    });

    it('deve aplicar estilos customizados', () => {
        // Arrange
        const customStyle = { backgroundColor: '#f00' };
        render(React.createElement(InputTextarea, { text: "Teste", style: customStyle }));

        // Act
        const textarea = screen.getByRole('textbox');

        // Assert
        expect(textarea).toHaveStyle(customStyle);
    });

    it('deve aplicar classes customizadas', () => {
        // Arrange
        const customClass = 'custom-textarea';
        render(React.createElement(InputTextarea, { text: "Teste", className: customClass }));

        // Act
        const textarea = screen.getByRole('textbox');

        // Assert
        expect(textarea).toHaveClass(customClass);
    });

    it('deve aumentar o tamanho automaticamente', async () => {
        // Arrange
        render(React.createElement(InputTextarea, { text: "Teste", rows: 1, autoResize: true }));
        const textarea = screen.getByRole('textbox');

        // Act
        expect(textarea).toHaveClass('p-inputtextarea-resizable');

        // Assert
    });

    it('deve chamar onChange ao alterar o valor', async () => {
        // Arrange
        const mockOnChange = vi.fn();
        render(React.createElement(InputTextarea, { text: "Teste", onChange: mockOnChange }));
        const textarea = screen.getByRole('textbox');

        // Act
        fireEvent.change(textarea, { target: { value: 'Novo valor' } });

        // Assert
        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(textarea).toHaveValue('Novo valor');
        });
    });
});