import RequestedAttributes from "../requestbuilder/requested-attributes";
import ArchivePiRestService from "../archivepirestservice/archive-pi-rest-service";

export default class ParameterRequestBuilder {
    public static createParameterRequest(requestedAttribute: RequestedAttributes, parameters: string[]): string {
        let query = ArchivePiRestService.parametersRequestPath;
        for (const parameter of parameters) {
            query = query + "&locationIds=" + parameter;
        }
        return query + requestedAttribute.createRequestParameters();
    }
}
