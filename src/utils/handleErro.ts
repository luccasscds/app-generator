import _ from "lodash";
import { ZodError } from "zod";

export function handleError(error: any) {
    console.error("handleError:", error);
    if (error instanceof ZodError) {
        return { message: _.first(error.issues)?.message };
    } else if (error instanceof Error) {
        return { message: error.message, stack: error.stack };
    } else if (error && _.has(error, 'message')) {
        return { message: _.get(error, 'message') };
    } else if (_.isString(error)) {
        return { message: error };
    } else {
        return { message: "Ocorreu um erro desconhecido" };
    };
};