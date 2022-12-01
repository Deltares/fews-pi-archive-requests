export default class RequestedAttributes {
    private readonly attributes = new Map<string, Set<string>>();

    public add(key: string, values: string[]): void {
        if (!this.attributes.has(key)) {
            this.attributes.set(key, new Set<string>());
        }
        const valueSet = this.attributes.get(key);
        if (valueSet === undefined) return;
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            valueSet.add(value);
        }
    }


    public createRequestParameters(): string {
        let requestParameters = "";
        for (const attributeId of this.attributes.keys()) {
            const values = this.attributes.get(attributeId);
            if (values === undefined) continue;
            for (const value of values) {
                requestParameters = requestParameters + "&attribute(" + encodeURIComponent(attributeId) + ")=" + encodeURIComponent(value);
            }
        }
        return requestParameters;
    }

}
