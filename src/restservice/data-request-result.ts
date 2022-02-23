export default class DataRequestResult<T> {
    private readonly _responseCode: number;
    private _errorMessage = "";
    private _data: T | undefined ;


    constructor(responseCode: number) {
        this._responseCode = responseCode;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    set errorMessage(value: string) {
        this._errorMessage = value;
    }


    get data(): T | undefined {
        return this._data;
    }

    set data(value: T | undefined) {
        this._data = value;
    }

    get responseCode(): number {
        return this._responseCode;
    }

}
