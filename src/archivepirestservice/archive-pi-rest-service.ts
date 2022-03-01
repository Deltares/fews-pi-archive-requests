import ArchiveLocation from "../data/archive-location";
import LocationsParser from "../parser/locations-parser";
import PiRestService from "../restservice/pi-rest-service";
import DataRequestResult from "../restservice/data-request-result";
import LocationsRequestBuilder from "../requestbuilder/locations-request-builder";
import RequestedAttributes from "../requestbuilder/requested-attributes";
import RequestOptions from "../restservice/request-options";
import ParameterRequestBuilder from "../requestbuilder/parameter-request-builder";
import ArchiveParameter from "../data/archive-parameter";
import ParametersParser from "../parser/parameters-parser";
import AttributesRequestBuilder from "../requestbuilder/attributes-request-builder";
import Attribute from "../data/archive-attribute";
import AttributesParser from "../parser/attributes-parser";

export default class ArchivePiRestService {
    public static readonly webserviceURL = "https://rwsos-dataservices-ont.avi.deltares.nl/matroos/FewsWebServices/rest/fewspiservice/v1";
    public static readonly parametersRequestPath = "/archive/parameters?documentFormat=PI_JSON";
    public static locationsRequestPath = "/archive/locations?documentFormat=PI_JSON";
    public static attributesRequestPath = "/archive/attributes?documentFormat=PI_JSON";

    /**
     * gets the locations from the archive
     *
     * @param {RequestedAttributes} An object containing the requested attributes.
     * @param {string[] } The requested parameter ids.
     * @return {DataRequestResult} The result of the request.
     */
    public async getLocations(requestedAttribute: RequestedAttributes, parameters: string[]): Promise<DataRequestResult<Set<ArchiveLocation>>> {
        const request = LocationsRequestBuilder.createLocationRequest(requestedAttribute, parameters);
        const piRestService = new PiRestService(ArchivePiRestService.webserviceURL);
        const requestOptions = new RequestOptions();
        const locationsParser = new LocationsParser();
        return await piRestService.getData(request, requestOptions, locationsParser);
    }

    /**
     * gets the parameters from the archive
     *
     * @param {RequestedAttributes} An object containing the requested attributes.
     * @param {string[] } The requested locations ids.
     * @return {DataRequestResult} The result of the request.
     */
    public async getParameters(requestedAttribute: RequestedAttributes, selectedLocations: string[]): Promise<DataRequestResult<Set<ArchiveParameter>>> {
        const parameterRequest = ParameterRequestBuilder.createParameterRequest(requestedAttribute, selectedLocations);
        const piRestService = new PiRestService(ArchivePiRestService.webserviceURL);
        const requestOptions = new RequestOptions();
        const parametersParser = new ParametersParser();
        return await piRestService.getData(parameterRequest, requestOptions, parametersParser);
    }

    /**
     * gets the attributes from the archive
     *
     * @param {string[] } The requested parameter ids.
     * @param {string[] } The requested location ids.
     * @param {string[] } The requested attribute ids.
     * @return {DataRequestResult} The result of the request.
     */
    public async getAttributes(parameterIds: string[], locationIds: string[], attributes: string[]): Promise<DataRequestResult<Set<Attribute>>> {
        const attributesRequest = AttributesRequestBuilder.createAttributesRequest(parameterIds, locationIds, attributes);
        const piRestService = new PiRestService(ArchivePiRestService.webserviceURL);
        const requestOptions = new RequestOptions();
        const attributesParser = new AttributesParser();
        return await piRestService.getData(attributesRequest, requestOptions, attributesParser);
    }
}
