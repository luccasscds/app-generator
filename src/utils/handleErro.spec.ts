import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ZodError } from 'zod';
import { handleError } from './handleErro';

describe('handleError', () => {
    let consoleErrorSpy: any;

    beforeEach(() => {
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it('deve lidar com ZodError e retornar a primeira mensagem de issue', () => {
        // Arrange
        const zodError = new ZodError([
            { message: 'First error message', code: 'invalid_type', expected: 'string', path: ['field1'] },
            { message: 'Second error message', code: 'invalid_type', expected: 'number', path: ['field2'] }
        ]);

        // Act
        const result = handleError(zodError);

        // Assert
        expect(result).toEqual({ message: 'First error message' });
    });

    it('deve lidar com ZodError vazio', () => {
        // Arrange
        const zodError = new ZodError([]);

        // Act
        const result = handleError(zodError);

        // Assert
        expect(result).toEqual({ message: undefined });
    });

    it('deve lidar com Error padrão e retornar message e stack', () => {
        // Arrange
        const error = new Error('Test error message');
        error.stack = 'Error stack trace';

        // Act
        const result = handleError(error);

        // Assert
        expect(result).toEqual({
            message: 'Test error message',
            stack: 'Error stack trace'
        });
    });

    it('deve lidar com Error sem stack', () => {
        // Arrange
        const error = new Error('Test error without stack');
        delete error.stack;

        // Act
        const result = handleError(error);

        // Assert
        expect(result).toEqual({
            message: 'Test error without stack',
            stack: undefined
        });
    });

    it('deve lidar com string como erro', () => {
        // Arrange
        const stringError = 'String error message';

        // Act
        const result = handleError(stringError);

        // Assert
        expect(result).toEqual({ message: 'String error message' });
    });

    it('deve lidar com string vazia', () => {
        // Arrange
        const emptyString = '';

        // Act
        const result = handleError(emptyString);

        // Assert
        expect(result).toEqual({ message: '' });
    });

    it('deve lidar com erro desconhecido (object)', () => {
        // Arrange
        const unknownError = { someProperty: 'value' };

        // Act
        const result = handleError(unknownError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });

    it('deve lidar com undefined', () => {
        // Arrange
        const undefinedError = undefined;

        // Act
        const result = handleError(undefinedError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });

    it('deve lidar com null', () => {
        // Arrange
        const nullError = null;

        // Act
        const result = handleError(nullError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });

    it('deve lidar com number', () => {
        // Arrange
        const numberError = 123;

        // Act
        const result = handleError(numberError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });

    it('deve lidar com boolean', () => {
        // Arrange
        const booleanError = false;

        // Act
        const result = handleError(booleanError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });

    it('deve lidar com array', () => {
        // Arrange
        const arrayError = ['error1', 'error2'];

        // Act
        const result = handleError(arrayError);

        // Assert
        expect(result).toEqual({ message: 'Ocorreu um erro desconhecido' });
    });
});