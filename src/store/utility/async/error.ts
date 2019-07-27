export interface ErrorState {
    code: number;
    message: string;
}

export function createErrorObject(error): ErrorState {
    if (!error || !error.errorCode) {
        console.error(error);
    }

    return {
        code: error && error.errorCode ? error.errorCode : 0,
        message: error && error.message ? error.message : "Unknown Error"
    };
}
