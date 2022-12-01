import RequestedAttributes from "../requestbuilder/RequestedAttributes";
import ArchivePiRestService from "../archivepirestservice/ArchivePiRestService";
import ParametersRequest from "@/archivepirestservice/requests/ParametersRequest";

export default class ParameterRequestBuilder {
    public static createParameterRequest(parametersRequest: ParametersRequest): string {
        let query = ArchivePiRestService.parametersRequestPath;
        for (const location of parametersRequest.locations) {
            query = query + "&locationIds=" + encodeURIComponent(location);
        }
        return query + parametersRequest.requestedAttribute.createRequestParameters();
    }
}
