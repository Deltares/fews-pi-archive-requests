import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()
import PiRestService from "../../../src/restservice/PiRestService";
import RequestOptions from "../../../src/restservice/RequestOptions";
import LocationsParser from "../../../src/parser/LocationsParser";


describe('pi rest service tests', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('build parameter query', async () => {
        fetchMock.mockResponse("error", {status: 404})
        const webservice = new PiRestService("http://localhost:8080");
        const locationsParser = new LocationsParser();
        const res = await webservice.getData("/dummy", new RequestOptions(), locationsParser);
        expect(res.responseCode).toBe(404);
        expect(res.errorMessage).toBe("error");
    })
})
