import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
    const options = [
        { label: 'Opção 1', value: 'opcao1' },
        { label: 'Opção 2', value: 'opcao2' },
        { label: 'Opção 3', value: 'opcao3' }
    ];
    const mockLoadOptionsLazy = vi.fn().mockImplementation((data: any) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(new Array(data.rows).fill(0).map((_, i) => ({
                    label: `Opção ${i + data.first}`,
                    value: `opcao${i + data.first}`
                })));
            }, 500);
        });
    });

    beforeEach(() => {
        mockLoadOptionsLazy.mockClear();
    });

    it('deve parecer o placeholder', () => {
        // Arrange
        const placeholder = 'Selecione uma opção';
        render(React.createElement(Dropdown, { placeholder }));

        // Act
        const dropdownPlaceholder = document.querySelector('.p-dropdown-label');

        // Assert
        expect(dropdownPlaceholder).toHaveTextContent(placeholder);
    });
    
    it('deve parecer um título', () => {
        // Arrange
        const label = 'teste';
        render(React.createElement(Dropdown, { title: label }));

        // Act
        const dropdownLabel = screen.getByTitle(label);

        // Assert
        expect(dropdownLabel).toBeInTheDocument();
    });

    it('deve renderizar as opções corretamente', async () => {
        // Arrange
        render(React.createElement(Dropdown, { options, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));
        await waitFor(() => {
            options.forEach(option => {
                expect(screen.getByText(option.label)).toBeInTheDocument();
            });
        });
    });

    it('deve selecionar uma opção corretamente', async () => {
        // Arrange
        const mockOnChange = vi.fn();
        render(React.createElement(Dropdown, { options, onSelect: mockOnChange, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));

        // Assert
        fireEvent.click(screen.getByText('Opção 1'));
        expect(screen.getByRole('combobox')).toHaveTextContent('Opção 1');
        expect(mockOnChange).toHaveBeenCalledWith(options[0]);
    });

    it('deve ficar desabilitado', () => {
        // Arrange
        render(React.createElement(Dropdown, { options, disabled: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));

        // Assert
        options.forEach(option => {
            expect(screen.queryByText(option.label)).not.toBeInTheDocument();
        });
    });

    it('deve estar obrigatório', () => {
        // Arrange
        render(React.createElement(Dropdown, { options, required: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        expect(screen.getByRole('combobox')).toBeRequired();

        // Assert
    });

    it('deve mostrar o filtro corretamente', async () => {
        // Arrange
        render(React.createElement(Dropdown, { options, filter: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));
        const input = document.querySelector('.p-dropdown-filter');
        fireEvent.change(input!, { target: { value: 'Opção 1' } });

        // Assert
        await waitFor(() => {
            expect(screen.getByText('Opção 1')).toBeInTheDocument();
            expect(screen.queryByText('Opção 2')).not.toBeInTheDocument();
            expect(screen.queryByText('Opção 3')).not.toBeInTheDocument();
        });
    });

    it('deve limpar o filtro corretamente', async () => {
        // Arrange
        render(React.createElement(Dropdown, { options, filter: true, showFilterClear: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));
        const input = document.querySelector('.p-dropdown-filter');
        fireEvent.change(input!, { target: { value: 'Opção 1' } });

        // Assert
        await waitFor(() => {
            expect(screen.getByText('Opção 1')).toBeInTheDocument();
            expect(screen.queryByText('Opção 2')).not.toBeInTheDocument();
            expect(screen.queryByText('Opção 3')).not.toBeInTheDocument();
        });
        const clearButton = screen.getByLabelText('Clear');
        expect(clearButton).toBeInTheDocument();
        fireEvent.click(clearButton);

        await waitFor(() => {
            options.forEach(option => {
                expect(screen.queryByText(option.label)).toBeInTheDocument();
            });
        });
    });

    it('deve limpar valor selecionado', async () => {
        // Arrange
        const mockOnChange = vi.fn();
        render(React.createElement(Dropdown, { options, onSelect: mockOnChange, showClear: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        const combobox = screen.getByRole('combobox');
        fireEvent.click(combobox);
        fireEvent.click(screen.getByText('Opção 1'));
        expect(combobox).toHaveTextContent('Opção 1');
        const clearButton = screen.getByLabelText('Clear');
        expect(clearButton).toBeInTheDocument();
        await userEvent.click(clearButton);

        await waitFor(() => {
            expect(combobox).toHaveTextContent('...');
        });
    });

    it('deve carregar as opções corretamente em modo lazy', async () => {
        // Arrange
        render(React.createElement(Dropdown, { options: mockLoadOptionsLazy, lazy: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));

        // Assert
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalled();
            expect(screen.getByText('Opção 0')).toBeInTheDocument();
            expect(screen.getByText('Opção 1')).toBeInTheDocument();
            expect(screen.getByText('Opção 2')).toBeInTheDocument();
        }, { timeout: 2000 });
    });

    it('deve filtrar as opções corretamente em modo lazy', async () => {
        // Arrange
        render(React.createElement(Dropdown, { options: mockLoadOptionsLazy, lazy: true, filter: true, optionLabel: 'label', optionValue: 'value' }));

        // Act
        fireEvent.click(screen.getByRole('combobox'));
        await waitFor(async () => {
            const input = document.querySelector('.p-dropdown-filter');
            expect(input).toBeInTheDocument();
        }, { timeout: 2000 });
        
        const input = document.querySelector('.p-dropdown-filter');
        fireEvent.change(input!, { target: { value: 'Opção 0' } });

        // Assert
        await waitFor(() => {
            expect(mockLoadOptionsLazy).toHaveBeenCalled();
            expect(screen.queryByText('Opção 0')).toBeInTheDocument();
            expect(screen.queryByText('Opção 1')).not.toBeInTheDocument();
            expect(screen.queryByText('Opção 2')).not.toBeInTheDocument();
        }, { timeout: 2000 });
    });

    // it('deve carregar mais informação ao chegar perto do fim da lista', async () => {
    //     // Arrange
    //     render(React.createElement(Dropdown, { options: mockLoadOptionsLazy, lazy: true, optionLabel: 'label', optionValue: 'value' }));

    //     // Act
    //     fireEvent.click(screen.getByRole('combobox'));
    //     await waitFor(() => {
    //         expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(1);
    //     }, { timeout: 2000 });

    //     const opcao9 = await screen.findByText('Opção 9');
    //     await userEvent.hover(opcao9);
    //     // TODO: verificar o pq nos testes o scroll não funciona
        
    //     // Assert
    //     // await waitFor(() => {
    //         // expect(mockLoadOptionsLazy).toHaveBeenCalledTimes(2);
    //         // expect(screen.queryByText('Opção 10')).toBeInTheDocument();
    //         // expect(screen.queryByText('Opção 11')).toBeInTheDocument();
    //         // expect(screen.queryByText('Opção 12')).toBeInTheDocument();
    //     // }, { timeout: 3000 });
    // });
});