import { z } from "zod"

export const handleZod = {
    ...z,
    date(name = 'Data') {
        return z.string(params(name, 'tipo data')).regex(/^\d{4}-\d{2}-\d{2}$/g, 'O formato Data esperado é YYYY-MM-DD');
    },
    time(fieldName: string) {
        return z.string(params(fieldName, 'no formato 00:00 ou 00:00:00')).regex(/^(\d{2}:\d{2}:\d{2})|(\d{2}:\d{2})$/, 'O formato Hora esperado é HH:mm ou HH:mm:ss')
    },
    dateTime(fieldName: string) {
        return z.string(params(fieldName, 'no formato 0000-00-00 00:00:00')).regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g, 'O formato Data/Hora esperado é YYYY-MM-DD HH:mm:ss');
    },
    cpf() {
        return z.string('CPF').min(11).max(11).regex(/^\d{11}$/g, 'O formato CPF esperado é 00000000000');
    },
    cep() {
        return z.string('CEP').min(8).max(8).regex(/^\d{8}$/g, 'O formato CEP esperado é 00000000');
    },
}

function params(fieldName: string, type: string) {
    return {
        error: (issue: any) => {
            return issue.input ? `O Campo ${fieldName} precisa ser ${type}` : `O Campo ${fieldName} é obrigatório`;
        },
    };
};