export default class RequestOptions {
    private _mode = "cors";

    get mode(): string {
        return this._mode;
    }

    set mode(value: string) {
        this._mode = value;
    }

    public generateOptions(): any {
        return Object.assign({},this);
    }
}
