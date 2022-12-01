import ArchivePiRestService from "../archivepirestservice/ArchivePiRestService";
import LocationsRequest from "@/archivepirestservice/requests/LocationsRequest";

export default class LocationsRequestBuilder {
    public static createLocationRequest(locationsRequest: LocationsRequest): string {
        let query = ArchivePiRestService.locationsRequestPath;
        for (const parameter of locationsRequest.parameters) {
            query = query + "&parameterIds=" + encodeURIComponent(parameter);
        }
        return query + locationsRequest.requestedAttribute.createRequestParameters();
    }
}
