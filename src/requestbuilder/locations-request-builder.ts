import RequestedAttributes from "./requested-attributes";
import ArchivePiRestService from "../archivepirestservice/archive-pi-rest-service";

export default class LocationsRequestBuilder {
    public static createLocationRequest(requestedAttribute: RequestedAttributes, parameters: string[]): string {
        let query = ArchivePiRestService.locationsRequestPath;
        for (const parameter of parameters) {
            query = query + "&parameterIds=" + parameter;
        }
        return query + requestedAttribute.createRequestParameters();
    }
}
