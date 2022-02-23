import ArchivePiRestService from "../archivepirestservice/archive-pi-rest-service";

export default class AttributesRequestBuilder {
    public static createAttributesRequest(parameters: string[], locations: string[], attributes: string[]): string {
        let query = ArchivePiRestService.attributesRequestPath;
        for (const parameter of parameters) {
            query = query + "&parameterId=" + parameter;
        }
        for (const location of locations) {
            query = query + "&locationId=" + location;
        }
        for (const attribute of attributes) {
            query = query + "&attributes=" + attribute;
        }
        return query;
    }
}
