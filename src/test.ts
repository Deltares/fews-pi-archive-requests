import Test2 from "./test2";
import 'isomorphic-fetch'

export default class Test {
    public async retrieve(): Promise<any> {
        return await this.myRetrieve();
    }

    public async myRetrieve(): Promise<any> {
        const data = await fetch("http://localhost:8080");
        const res = data.json();
        return res;
    }
}
