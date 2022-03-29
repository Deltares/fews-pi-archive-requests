import JsonParser from "./JsonParser";
import ArchiveLocation from "../data/ArchiveLocation";

export default class LocationsParser implements JsonParser<ArchiveLocation[]> {
    parse(response: any): ArchiveLocation[] {
        const locationsArray = response.locations;
        const locations: ArchiveLocation[] = [];
        for (const location of locationsArray) {
            if (location.locationId.length == 0) continue;
            locations.push(location);
        }
        return locations;
    }

}
