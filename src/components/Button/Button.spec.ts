import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
    it('deve renderizar o botão com label padrão', () => {
        // Arrange
        render(React.createElement(Button, { label: "Teste" }));
        
        // Act
        expect(screen.getByRole('button')).toHaveTextContent('Teste');

        // Assert
    });

    it('deve renderizar com ícone', () => {
        // Arrange
        render(React.createElement(Button, { label: "Teste", icon: "pi pi-check" }));
        const icon = screen.getByRole('button').querySelector('.pi-check');

        // Act
        expect(icon).toBeInTheDocument();
    });

    it('deve aplicar estilos customizados', () => {
        const customStyle = { backgroundColor: '#f00' };
        render(React.createElement(Button, { label: "Teste", style: customStyle }));
        const button = screen.getByRole('button');
        expect(button).toHaveStyle(customStyle);
    });

    it('deve ficar desabilitado quando disabled=true', () => {
        // Arrange
        render(React.createElement(Button, { label: "Teste", disabled: true }));
        const button = screen.getByRole('button');

        // Assert
        expect(button).toBeDisabled();
    });

    it('deve executar onPress quando clicado', async () => {
        // Arrange
        const mockOnPress = vi.fn();
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress }));

        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(mockOnPress).toHaveBeenCalledTimes(1);
        });
    });

    it('deve mostrar loading quando showLoading=true', async () => {
        // Arrange
        const mockOnPress = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress, showLoading: true }));

        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        // Assert
        await waitFor(() => {
            expect(button).toHaveClass('p-disabled p-button-loading');
            expect(button.querySelector('svg')).toBeInTheDocument();
        });
    });

    it('não deve mostrar loading quando showLoading=false', async () => {
        // Arrange
        const mockOnPress = vi.fn();
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress, showLoading: false }));

        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(button).not.toHaveClass('p-disabled p-button-loading');
            expect(button.querySelector('svg')).not.toBeInTheDocument();
        });
    });

    it('deve mostrar modal de confirmação quando showRequireConfirmation=true', async () => {
        // Arrange
        const mockOnPress = vi.fn();
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress, showRequireConfirmation: true }));

        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(screen.getByText('Atenção')).toBeInTheDocument();
            expect(screen.getByText('Tem certeza que deseja continuar esta operação?')).toBeInTheDocument();
        });
        
        // onPress não deve ter sido chamado ainda
        expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('deve executar onPress após confirmar no modal', async () => {
        // Arrange
        const mockOnPress = vi.fn();
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress, showRequireConfirmation: true }));

        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Assert
        // Aguarda o modal aparecer
        await waitFor(() => {
            expect(screen.getByText('Atenção')).toBeInTheDocument();
        });
        
        // Clica no botão de confirmar (com ícone pi-check)
        const confirmButton = screen.getByRole('dialog').querySelector('button .pi-check');
        fireEvent.click(confirmButton!);
        
        await waitFor(() => {
            expect(mockOnPress).toHaveBeenCalledTimes(1);
        });
    });

    it('deve fechar modal ao rejeitar confirmação', async () => {
        const mockOnPress = vi.fn();
        render(React.createElement(Button, { label: "Teste", onPress: mockOnPress, showRequireConfirmation: true }));

        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        // Aguarda o modal aparecer
        await waitFor(() => {
            expect(screen.getByText('Atenção')).toBeInTheDocument();
        });
        
        // Clica no botão de rejeitar (com ícone pi-times)
        const rejectButton = screen.getByRole('dialog').querySelector('button .pi-times');
        fireEvent.click(rejectButton!);
        
        await waitFor(() => {
            expect(screen.queryByText('Atenção')).not.toBeInTheDocument();
        });
        
        // onPress não deve ter sido chamado
        expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('deve definir type do botão corretamente', () => {
        render(React.createElement(Button, { label: "Teste", type: "submit" }));
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });
});