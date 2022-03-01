import JsonParser from "./json-parser";
import ArchiveLocation from "../data/archive-location";

export default class LocationsParser implements JsonParser<Set<ArchiveLocation>> {
    parse(response: any): Set<ArchiveLocation> {
        const locationsArray = response.locations;
        const locations: Set<ArchiveLocation> = new Set();
        for (const location of locationsArray) {
            if (location.locationId.length == 0) continue;
            const newLocation = {} as ArchiveLocation;
            newLocation.lat = location.lat;
            newLocation.lon = location.lon;
            newLocation.shortName = location.shortName;
            newLocation.locationId = location.locationId;
            locations.add(newLocation);
        }
        return locations;
    }

}
