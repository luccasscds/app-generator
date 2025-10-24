import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Calendar } from './Calendar';
import dayjs from 'dayjs';

describe('Calendar Component', () => {
    it('deve renderizar com texto', () => {
        // Arrange
        render(React.createElement(Calendar, { text: 'Teste' }));

        // Act
        expect(screen.getByLabelText('Teste')).toBeInTheDocument();

        // Assert
    });

    it('deve renderizar com valor inicial', () => {
        // Arrange
        const date = dayjs('2023-02-01');
        render(React.createElement(Calendar, { value: date.toDate() }));

        // Act
        expect(screen.getByRole('combobox')).toHaveValue(date.format('MM/DD/YYYY'));

        // Assert
    });

    it('deve parecer placeholder', () => {
        // Arrange
        render(React.createElement(Calendar, { placeholder: 'Selecione uma data' }));

        // Act
        expect(screen.getByPlaceholderText('Selecione uma data')).toBeInTheDocument();

        // Assert
    });

    it('deve estar com formato da data correta', () => {
        // Arrange
        const date = dayjs('2023-02-01');
        render(React.createElement(Calendar, { value: date.toDate(), dateFormat: 'mm/dd' }));

        // Act
        expect(screen.getByRole('combobox')).toHaveValue(date.format('MM/DD'));

        // Assert
    });

    it('deve estar desabilitado', () => {
        // Arrange
        render(React.createElement(Calendar, { disabled: true }));

        // Act
        expect(screen.getByRole('combobox')).toBeDisabled();

        // Assert
    });

    it('deve ser somente leitura', () => {
        // Arrange
        render(React.createElement(Calendar, { readOnlyInput: true }));

        // Act
        expect(screen.getByRole('combobox')).toHaveAttribute('readonly');

        // Assert
    });

    it('deve aplicar estilos customizados', () => {
        // Arrange
        const customStyle = { backgroundColor: '#f00' };
        render(React.createElement(Calendar, { style: customStyle }));

        // Act
        const calendar = document.querySelector('[data-pc-name="calendar"]');

        // Assert
        expect(calendar).toHaveStyle(customStyle);
    });

    it('deve mostrar botão de calendário quando showIcon é true', () => {
        // Arrange
        render(React.createElement(Calendar, { value: dayjs().toDate(), showIcon: true }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');

        // Assert
        expect(button).toBeInTheDocument();
    });

    it('não deve mostrar botão de calendário quando showIcon é false', () => {
        // Arrange
        render(React.createElement(Calendar, { value: dayjs().toDate(), showIcon: false }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');

        // Assert
        expect(button).not.toBeInTheDocument();
    });

    it('deve mostrar os meses quando view é "month"', () => {
        // Arrange
        render(React.createElement(Calendar, { view: 'month' }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');

        // Assert
        fireEvent.click(button!);
        expect(screen.getByText('Jan')).toBeInTheDocument();
    });

    it('deve mostrar os botões "Today" e "Clear" quando showButtonBar é true', () => {
        // Arrange
        render(React.createElement(Calendar, { showButtonBar: true }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const todayButton = screen.getByLabelText('Today');
        const clearButton = screen.getByLabelText('Clear');

        // Assert
        expect(todayButton).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();
    });


    it('deve mostrar o botão do tempo quando showTime é true', () => {
        // Arrange
        render(React.createElement(Calendar, { showTime: true }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const timeButton = document.querySelector('.p-timepicker');

        // Assert
        expect(timeButton).toBeInTheDocument();
    });

    it('deve mostrar somente tempo sem data quando timeOnly é true', () => {
        // Arrange
        render(React.createElement(Calendar, { timeOnly: true }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const timeButton = document.querySelector('.p-timepicker');
        const calendar = document.querySelector('.p-datepicker-group-container');

        // Assert
        expect(timeButton).toBeInTheDocument();
        expect(calendar).not.toBeInTheDocument();
    });

    it('deve mostrar hora no formato 12 horas quando hourFormat é "12"', () => {
        // Arrange
        render(React.createElement(Calendar, { value: dayjs('2023/01/01 10:00').toDate(), hourFormat: '12', timeOnly: true }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const timeButton = document.querySelector('.p-timepicker');

        // Assert
        expect(timeButton).toHaveTextContent('AM');
    });

    it('deve acionar onChange quando a data for alterada', () => {
        // Arrange
        const mockOnChange = vi.fn();
        const date = dayjs('2023/01/01');
        render(React.createElement(Calendar, { value: date.toDate(), onChange: mockOnChange }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const select = screen.getByLabelText('01/01/2023').querySelector('span');
        fireEvent.click(select!);

        // Assert
        expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ value: date.toDate() }));
    });

    it('deve desabilitar dias específicos', () => {
        // Arrange
        const disabledDays = [0, 6]; // Domingos e Sábados
        render(React.createElement(Calendar, { value: dayjs('2023/01/01').toDate(), disabledDays }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const selectedSunday = screen.getByLabelText('01/01/2023').querySelector('span');
        const selectedSaturday = screen.getByLabelText('01/07/2023').querySelector('span');

        // Assert
        expect(selectedSunday).toHaveClass('p-disabled');
        expect(selectedSaturday).toHaveClass('p-disabled');
    });

    it('deve desabilitar datas específicas', () => {
        // Arrange
        const disabledDates = [dayjs('2023/01/01').toDate(), dayjs('2023/01/07').toDate()];
        render(React.createElement(Calendar, { value: dayjs('2023/01/01').toDate(), disabledDates }));

        // Act
        const button = document.querySelector('button.p-datepicker-trigger');
        fireEvent.click(button!);

        const selectedSunday = screen.getByLabelText('01/01/2023').querySelector('span');
        const selectedSaturday = screen.getByLabelText('01/07/2023').querySelector('span');

        // Assert
        expect(selectedSunday).toHaveClass('p-disabled');
        expect(selectedSaturday).toHaveClass('p-disabled');
    });
});