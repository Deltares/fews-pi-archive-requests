import {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()
import expectedResponse from '../mock/parser/parameters.json'
import ParametersParser from "../../../src/parser/parameters-parser";


describe('parameter parser tests', () => {
    it('parse parameters', async () => {
        const parser = new ParametersParser();
        const parameters = parser.parse(expectedResponse);
        expect(parameters.size).toBe(8);

        const allParameters = parameters.values();
        const firstParameter = allParameters.next().value;
        expect(firstParameter.parameterId).toBe("RP");

    })
})
