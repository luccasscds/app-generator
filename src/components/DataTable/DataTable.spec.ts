import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { DataTable } from './DataTable';

describe('DataTable Component', () => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    const columns = [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' }
    ];
    const mockLoadOptionsLazy = vi.fn().mockImplementation((data: any) => {
        return new Promise(resolve => {
            setTimeout(() => {
                let items = new Array(20).fill(0).map((_, i) => ({
                    id: i + 0,
                    name: `Item ${i + 0}`
                }));

                if (data.sortField) {
                    items.sort((a: any, b: any) => {
                        const aValue = a[data.sortField];
                        const bValue = b[data.sortField];
                        
                        let comparison = 0;
                        if (aValue > bValue) {
                            comparison = 1;
                        } else if (aValue < bValue) {
                            comparison = -1;
                        }
                        
                        return data.sortOrder === -1 ? comparison * -1 : comparison;
                    });
                };

                resolve(items.slice(data.first, data.first + data.rows));
            }, 500);
        });
    });

    beforeEach(() => {
        mockLoadOptionsLazy.mockClear();
    });

    it('deve renderizar a tabela com os dados corretos', () => {
        // Arrange
        render(React.createElement(DataTable, { data, columns }));

        // Act
        const columnHeaders = screen.getAllByRole('columnheader');
        const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');

        // Assert
        expect(columnHeaders).toHaveLength(columns.length);
        columns.forEach((col, index) => {
            expect(columnHeaders[index]).toHaveTextContent(col.title);
        });
        expect(rows).toHaveLength(data.length);
        data.forEach((item, index) => {
            const row = rows[index];
            expect(row).toHaveTextContent(item.id.toString());
            expect(row).toHaveTextContent(item.name);
        });
    });

    it('deve renderizar a tabela vazia quando não houver dados', () => {
        // Arrange
        const data: any[] = [];
        render(React.createElement(DataTable, { data, columns }));

        // Act
        const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');

        // Assert
        expect(rows).toHaveLength(0);
    });

    it('deve acionar onPress quando uma linha for clicada', async () => {
        // Arrange
        const onPress = vi.fn();
        render(React.createElement(DataTable, { data, columns, onPress }));

        // Act
        const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');
        fireEvent.click(rows[0]);

        // Assert
        expect(onPress).toHaveBeenCalledWith(data[0]);
    });

    it('deve renderizar a tabela corretamente com dados com lazy true', async () => {
        // Arrange
        render(React.createElement(DataTable, { data: mockLoadOptionsLazy, columns, lazy: true }));

        await waitFor(() => {
            // Act
            const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');

            // Assert
            expect(rows).toHaveLength(10);
            
            expect(screen.queryByText('0')).toBeInTheDocument();
            expect(screen.queryByText('Item 0')).toBeInTheDocument();

            expect(screen.queryByText('9')).toBeInTheDocument();
            expect(screen.queryByText('Item 9')).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve renderizar com paginação com lazy true', async () => {
        // Arrange
        render(React.createElement(DataTable, { data: mockLoadOptionsLazy, columns, lazy: true }));

        await waitFor(() => {
            // Act
            const rows = document.querySelector('[data-pc-name="paginator"]');

            // Assert
            expect(rows).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve renderizar dados novos quando mudar de página com lazy true', async () => {
        // Arrange
        render(React.createElement(DataTable, { data: mockLoadOptionsLazy, columns, lazy: true, totalItems: 20 }));

        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
            expect(document.querySelectorAll('[data-pc-section="bodyrow"]')).toHaveLength(10);
            expect(screen.queryByText('9')).toBeInTheDocument();
            expect(screen.queryByText('Item 9')).toBeInTheDocument();
        }, { timeout: 2000 });

        const nextButton = screen.getByLabelText('Next Page');
        fireEvent.click(nextButton);
        
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(2);
            expect(document.querySelectorAll('[data-pc-section="bodyrow"]')).toHaveLength(10);
            expect(screen.queryByText('19')).toBeInTheDocument();
            expect(screen.queryByText('Item 19')).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve mudar a quantidade de itens por página com lazy true', async () => {
        // Arrange
        render(React.createElement(DataTable, { data: mockLoadOptionsLazy, columns, lazy: true, totalItems: 20 }));

        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
            expect(document.querySelectorAll('[data-pc-section="bodyrow"]')).toHaveLength(10);
            expect(screen.queryByText('9')).toBeInTheDocument();
            expect(screen.queryByText('Item 9')).toBeInTheDocument();
        }, { timeout: 2000 });

        fireEvent.click(document.querySelector('[data-pc-name="dropdown"]')!);
        fireEvent.click(screen.getByText('20'));

        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(2);
            expect(document.querySelectorAll('[data-pc-section="bodyrow"]')).toHaveLength(20);
            expect(screen.queryByText('19')).toBeInTheDocument();
            expect(screen.queryByText('Item 19')).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve ordenar os dados quando clicar no cabeçalho da coluna com lazy true', async () => {
        // Arrange
        render(React.createElement(DataTable, { data: mockLoadOptionsLazy, columns, lazy: true }));

        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
            const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');
            expect(rows).toHaveLength(10);
            expect(rows[0]).toHaveTextContent('0');
            expect(rows[0]).toHaveTextContent('Item 0');
        }, { timeout: 2000 });

        const firstColumnHeader = await screen.findByRole('columnheader', { name: 'ID' });
        fireEvent.click(firstColumnHeader);

        await waitFor(() => {
            fireEvent.click(firstColumnHeader);
        }, { timeout: 2000 });
        
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(3);
            const rows = document.querySelectorAll('[data-pc-section="bodyrow"]');
            expect(rows).toHaveLength(10);
            expect(rows[0]).toHaveTextContent('19');
            expect(rows[0]).toHaveTextContent('Item 19');
        }, { timeout: 2000 });
    });
});