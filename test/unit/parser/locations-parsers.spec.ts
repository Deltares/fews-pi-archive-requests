import {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()
import expectedResponse from '../mock/parser/locations.json'
import LocationsParser from "../../../src/parser/locations-parser";


describe('location parser tests', () => {
    it('parse locations', async () => {
        const parser = new LocationsParser();
        const locations = parser.parse(expectedResponse);
        expect(locations.size).toBe(2);

        const allLocations = locations.values();
        const firstLocation = allLocations.next().value;
        expect(firstLocation.locationId).toBe("Beerenplaat NAP -2.0 m");
        expect(firstLocation.shortName).toBe("Beerenplaat NAP -2.0 m");
        expect(firstLocation.lat).toBe("51.83986282348633");
        expect(firstLocation.lon).toBe("4.42064905166626");

    })
})
