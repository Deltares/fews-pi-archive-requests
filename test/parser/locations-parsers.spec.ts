import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()
import expectedResponse from '../mock/parser/parameters.json'
import LocationsParser from "../../src/parser/locations-parser";


describe('backend/PiRestServiceArchiveQueryBuilder', () => {
    it('build parameter query', async () => {
        const parser = new LocationsParser();
        const locations = parser.parse(expectedResponse);
        expect(locations.size).toBe(3);

    })
})
