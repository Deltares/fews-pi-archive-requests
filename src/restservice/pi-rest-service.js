"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_request_result_1 = __importDefault(require("./data-request-result"));
const axios = require('axios').default;
class PiRestService {
    constructor(webserviceUrl) {
        this.webserviceUrl = webserviceUrl;
    }
    getData(url, requestOption, parser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestUrl = this.webserviceUrl + "/" + url;
                let axiosconfig = {};
                axiosconfig.url = url;
                axiosconfig.method = "get";
                const responseJson = yield axios(axiosconfig);
                const responseCode = responseJson.status;
                const dataRequestResult = new data_request_result_1.default(responseCode);
                if (!responseJson.ok) {
                    dataRequestResult.errorMessage = yield responseJson.text();
                    return dataRequestResult;
                }
                const response = responseJson.json();
                dataRequestResult.data = parser.parse(response);
                return dataRequestResult;
            }
            catch (exception) {
                const dataRequestResult = new data_request_result_1.default(-1);
                console.log(exception);
                return dataRequestResult;
            }
        });
    }
}
exports.default = PiRestService;
//# sourceMappingURL=pi-rest-service.js.map