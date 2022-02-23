import Test from "../src/test";
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import expectedResponse from './mock/parameters.json'


describe('backend/PiRestServiceArchiveQueryBuilder',  () => {
    beforeEach(() => {
                console.log("test")
    });

    it('build parameter query', async () => {
        fetchMock.mockResponse(JSON.stringify(expectedResponse), { status: 200})
        try {
            const testje = new Test();
            const res = await testje.retrieve();
            console.log(res)
        }catch (e){
            console.log(e)
        }

    })
})
