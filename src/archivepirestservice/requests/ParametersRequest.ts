import RequestedAttributes from "@/requestbuilder/RequestedAttributes";

export default interface ParametersRequest {
    requestedAttribute: RequestedAttributes;
    locations: string[];
}
