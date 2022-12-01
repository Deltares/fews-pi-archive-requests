import LocationsParser from "../parser/LocationsParser";
import PiRestService from "../restservice/PiRestService";
import DataRequestResult from "../restservice/DataRequestResult";
import LocationsRequestBuilder from "../requestbuilder/LocationsRequestBuilder";
import RequestedAttributes from "../requestbuilder/RequestedAttributes";
import RequestOptions from "../restservice/RequestOptions";
import ParameterRequestBuilder from "../requestbuilder/ParameterRequestBuilder";
import ParametersParser from "../parser/ParametersParser";
import AttributesRequestBuilder from "../requestbuilder/AttributesRequestBuilder";
import AttributesParser from "../parser/AttributesParser";
import LocationsRequest from "@/archivepirestservice/requests/LocationsRequest";
import ParametersRequest from "@/archivepirestservice/requests/ParametersRequest";
import AttributesRequest from "@/archivepirestservice/requests/AttributesRequest";
import {ArchiveParameter} from "@/data/ArchiveParametersResponse";
import {ArchiveLocation} from "@/data/ArchiveLocationsResponse";
import {ArchiveAttribute} from "@/data/ArchiveAttributesResponse";

export default class ArchivePiRestService {
    private webserviceURL = "https://rwsos-dataservices-ont.avi.deltares.nl/matroos/FewsWebServices/rest/fewspiservice/v1";
    public static readonly parametersRequestPath = "/archive/parameters?documentFormat=PI_JSON";
    public static locationsRequestPath = "/archive/locations?documentFormat=PI_JSON";
    public static attributesRequestPath = "/archive/attributes?documentFormat=PI_JSON";


    constructor(webserviceURL: string) {
        this.webserviceURL = webserviceURL;
    }

    /**
     * gets the locations from the archive
     *
     * @param {LocationsRequest} locationsRequest the
     * @return {DataRequestResult} The result of the request.
     */
    public async getLocations(locationsRequest: LocationsRequest): Promise<DataRequestResult<ArchiveLocation[]>> {
        const request = LocationsRequestBuilder.createLocationRequest(locationsRequest);
        const piRestService = new PiRestService(this.webserviceURL);
        const requestOptions = new RequestOptions();
        const locationsParser = new LocationsParser();
        return await piRestService.getData(request, requestOptions, locationsParser);
    }

    /**
     * gets the parameters from the archive
     *
     * @param {ParametersRequest} parametersRequest An object containing the parameters for the query.
     * @return {DataRequestResult} The result of the request.
     */
    public async getParameters(parametersRequest: ParametersRequest): Promise<DataRequestResult<ArchiveParameter[]>> {
        const parameterRequest = ParameterRequestBuilder.createParameterRequest(parametersRequest);
        const piRestService = new PiRestService(this.webserviceURL);
        const requestOptions = new RequestOptions();
        const parametersParser = new ParametersParser();
        return await piRestService.getData(parameterRequest, requestOptions, parametersParser);
    }

    /**
     * gets the attributes from the archive
     *
     * @param {AttributesRequest } attributeRequest The requested parameter ids.
     * @return {DataRequestResult} The result of the request.
     */
    public async getAttributes(attributeRequest: AttributesRequest): Promise<DataRequestResult<ArchiveAttribute[]>> {
        const attributesRequest = AttributesRequestBuilder.createAttributesRequest(attributeRequest);
        const piRestService = new PiRestService(this.webserviceURL);
        const requestOptions = new RequestOptions();
        const attributesParser = new AttributesParser();
        return await piRestService.getData(attributesRequest, requestOptions, attributesParser);
    }
}
