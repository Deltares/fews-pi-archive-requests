import RequestedAttributes from "@/requestbuilder/RequestedAttributes";

export default interface LocationsRequest {
    requestedAttribute: RequestedAttributes;
    parameters: string[];
}
