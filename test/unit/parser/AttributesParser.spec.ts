import {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()
import expectedResponse from '../mock/parser/attributes.json'
import AttributesParser from "../../../src/parser/AttributesParser";


describe('attribute parser tests', () => {
    it('parse attribute', async () => {
        const parser = new AttributesParser();
        const attributes = parser.parse(expectedResponse);
        expect(attributes.length).toBe(2);

        const allAttributes = attributes.values();
        const firstAttribute = allAttributes.next().value;
        expect(firstAttribute.name).toBe("Comment");
        expect(firstAttribute.value).toBe("none.");

    })
})
