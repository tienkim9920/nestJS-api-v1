export type ResponseType<D> = {
    data?: D | D[],
    statusCode?: number,
    message?: string,
};

export enum ServerStatus {
    OK = 200,
    ERROR = 404,
};

export enum ServerMessage {
    OK = 'Server Response Success!',
    ERROR = 'Server Internal Error!',
};
