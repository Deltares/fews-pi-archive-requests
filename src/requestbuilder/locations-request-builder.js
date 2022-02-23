"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pi_rest_service_archive_1 = __importDefault(require("../pi-rest-service-archive"));
class LocationsRequestBuilder {
    static createLocationRequest(requestedAttribute, parameters) {
        let query = pi_rest_service_archive_1.default.locationsRequestPath;
        for (const parameter of parameters) {
            query = query + "&parameterId=" + parameter;
        }
        return query + requestedAttribute.createRequestParameters();
    }
}
exports.default = LocationsRequestBuilder;
//# sourceMappingURL=locations-request-builder.js.map