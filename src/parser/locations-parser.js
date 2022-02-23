"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("../data/location"));
class LocationsParser {
    parse(response) {
        const locationsArray = response.locations;
        const locations = new Set();
        for (const location of locationsArray) {
            if (location.locationId.length == 0)
                continue;
            const locationItem = new location_1.default(location.locationId, location.shortName, location.lat, location.lon);
            locations.add(locationItem);
        }
        return locations;
    }
}
exports.default = LocationsParser;
//# sourceMappingURL=locations-parser.js.map