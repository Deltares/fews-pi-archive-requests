import 'isomorphic-fetch';

import Test from "../src/test";

describe('backend/PiRestServiceArchiveQueryBuilder',  () => {
    it('build parameter query', async () => {
        try {
            const testje = new Test();
            const res = await testje.retrieve();
        }catch (e){
            console.log(e)
        }

    })
})
