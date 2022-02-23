"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestedAttributes {
    constructor() {
        this.attributes = new Map();
    }
    add(key, values) {
        if (!this.attributes.has(key)) {
            this.attributes.set(key, new Set());
        }
        const valueSet = this.attributes.get(key);
        if (valueSet === undefined)
            return;
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            valueSet.add(value);
        }
    }
    createRequestParameters() {
        let requestParameters = "";
        for (const attributeId of this.attributes.keys()) {
            const values = this.attributes.get(attributeId);
            if (values === undefined)
                continue;
            for (const value of values) {
                requestParameters = requestParameters + "&attribute(" + attributeId + ")=" + value;
            }
        }
        return requestParameters;
    }
    createQualifiers() {
        let qualfiers = "";
        for (const attributeId of this.attributes.keys()) {
            const values = this.attributes.get(attributeId);
            if (values === undefined)
                continue;
            for (const value of values) {
                qualfiers = qualfiers + "&qualifierIds=" + value;
            }
        }
        return qualfiers;
    }
}
exports.default = RequestedAttributes;
//# sourceMappingURL=requested-attributes.js.map