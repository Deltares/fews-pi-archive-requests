"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataRequestResult {
    constructor(responseCode) {
        this._errorMessage = "";
        this._responseCode = responseCode;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get responseCode() {
        return this._responseCode;
    }
}
exports.default = DataRequestResult;
//# sourceMappingURL=data-request-result.js.map