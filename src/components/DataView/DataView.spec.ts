import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { DataView } from './DataView';

describe('DataView Component', () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    const itemTemplate = (item: any) => (
        React.createElement("p", {"aria-label": item.name}, `${item.name}`)
    );
    const mockLoadOptionsLazy = vi.fn().mockImplementation((data: any) => {
        return new Promise(resolve => {
            setTimeout(() => {
                let items = new Array(data.rows).fill(0).map((_, i) => ({
                    id: i + data.first,
                    name: `Item ${i + data.first}`
                }));

                resolve(items);
            }, 500);
        });
    });

    beforeEach(() => {
        mockLoadOptionsLazy.mockClear();
    });

    it('deve renderizar os itens corretamente', () => {
        // Arrange
        render(React.createElement(DataView, { items, itemTemplate }));

        // Act

        // Assert
        items.forEach((item) => {
            expect(screen.getByLabelText(item.name)).toBeInTheDocument();
        });
    });
    
    it('deve renderizar a mensagem de vazio quando não houver itens', () => {
        // Arrange
        render(React.createElement(DataView, { items: [], itemTemplate, emptyMessage: "Nenhum item disponível" }));

        // Assert
        expect(screen.getByText("Nenhum item disponível")).toBeInTheDocument();
    });

    it('deve renderizar o cabeçalho quando fornecido', () => {
        // Arrange
        const header = React.createElement("div", null, "Cabeçalho Teste");
        render(React.createElement(DataView, { items, itemTemplate, header }));

        // Assert
        expect(screen.getByText("Cabeçalho Teste")).toBeInTheDocument();
    });

    it('deve renderizar a paginação quando habilitada', () => {
        // Arrange
        render(React.createElement(DataView, { items, itemTemplate, paginator: true }));

        // Assert
        expect(screen.queryByLabelText("Previous Page")).toBeInTheDocument();
        expect(screen.queryByLabelText("Next Page")).toBeInTheDocument();
    });

    it('não deve renderizar a paginação quando desabilitada', () => {
        // Arrange
        render(React.createElement(DataView, { items, itemTemplate, paginator: false }));

        // Assert
        expect(screen.queryByLabelText("Previous Page")).not.toBeInTheDocument();
        expect(screen.queryByLabelText("Next Page")).not.toBeInTheDocument();
    });

    it('deve renderizar a paginação na posição correta', () => {
        // Arrange
        render(React.createElement(DataView, { items, itemTemplate, paginatorPosition: "top" }));

        // Assert
        const paginator = document.querySelector('.p-paginator-top');
        expect(paginator).toBeInTheDocument();
        expect(screen.queryByLabelText("Previous Page")).toBeInTheDocument();
        expect(screen.queryByLabelText("Next Page")).toBeInTheDocument();
    });

    it('deve carregar itens com lazy true', async () => {
        // Arrange
        render(React.createElement(DataView, { items: mockLoadOptionsLazy, itemTemplate, lazy: true }));

        // Act
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
        }, { timeout: 2000 });

        // Assert
        await waitFor(() => {
            expect(screen.queryByLabelText("Item 0")).toBeInTheDocument();
            expect(screen.queryByLabelText("Item 9")).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve carregar itens novos ao mudar de página com lazy true', async () => {
        // Arrange
        render(React.createElement(DataView, { items: mockLoadOptionsLazy, itemTemplate, lazy: true, totalItems: 20 }));
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
            expect(screen.queryByLabelText("Item 0")).toBeInTheDocument();
            expect(screen.queryByLabelText("Item 9")).toBeInTheDocument();
        }, { timeout: 2000 });

        // Act
        const nextButton = screen.getByLabelText('Next Page');
        fireEvent.click(nextButton);

        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(2);
            expect(screen.queryByLabelText("Item 10")).toBeInTheDocument();
            expect(screen.queryByLabelText("Item 19")).toBeInTheDocument();
        }, { timeout: 2000 });
    });

});