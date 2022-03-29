"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestOptions {
    constructor() {
        this._mode = "cors";
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
    generateOptions() {
        return Object.assign({}, this);
    }
}
exports.default = RequestOptions;
//# sourceMappingURL=request-options.js.map