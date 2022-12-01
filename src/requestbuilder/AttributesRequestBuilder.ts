import ArchivePiRestService from "../archivepirestservice/ArchivePiRestService";
import AttributesRequest from "@/archivepirestservice/requests/AttributesRequest";

export default class AttributesRequestBuilder {
    public static createAttributesRequest(attributeRequest: AttributesRequest): string {
        let query = ArchivePiRestService.attributesRequestPath;
        for (const parameter of attributeRequest.parameters) {
            query = query + "&parameterId=" + encodeURIComponent(parameter);
        }
        for (const location of attributeRequest.locations) {
            query = query + "&locationId=" + encodeURIComponent(location);
        }
        for (const attribute of attributeRequest.attributes) {
            query = query + "&attributes=" + encodeURIComponent(attribute);
        }
        return query;
    }
}
