import 'isomorphic-fetch';
import ArchivePiRestService from "../../../src/archivepirestservice/ArchivePiRestService";
import RequestedAttributes from "../../../src/requestbuilder/RequestedAttributes";
import 'dotenv/config'
import LocationsRequest from "../../../src/archivepirestservice/requests/LocationsRequest";
import ParametersRequest from "../../../src/archivepirestservice/requests/ParametersRequest";
import AttributesRequest from "../../../src/archivepirestservice/requests/AttributesRequest";
import {ArchiveLocation} from "../../../src/data/ArchiveLocationsResponse";
import {ArchiveParameter} from "../../../src/data/ArchiveParametersResponse";
import {ArchiveAttribute} from "../../../src/data/ArchiveAttributesResponse";

describe('pi rest service tests', () => {
    it('query locations with parameters', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const parameters: string[] = [];
        parameters.push("discharge_stat_bias");
        const locationRequest = {} as LocationsRequest;
        locationRequest.parameters = parameters;
        locationRequest.requestedAttribute = new RequestedAttributes();
        const locationsResponse = await restService.getLocations(locationRequest);
        const locationsSet = locationsResponse.data as ArchiveLocation[];
        expect(locationsSet.length).toBeGreaterThan(55);
    })

    it('query locations with parameters and attributes', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const parameters: string[] = [];
        parameters.push("discharge_stat_bias");
        const requestedAttributes = new RequestedAttributes();
        const values: string[] = [];
        values.push("DWD_ICON")
        requestedAttributes.add("source", values);
        const locationRequest = {} as LocationsRequest;
        locationRequest.parameters = parameters;
        locationRequest.requestedAttribute = requestedAttributes;
        const locationsResponse = await restService.getLocations(locationRequest);
        const locationsSet = locationsResponse.data as ArchiveLocation[];
        expect(locationsSet.length).toBe(37);
    })

    it('query parameters with locations', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const parameterRequest = {} as ParametersRequest;
        parameterRequest.requestedAttribute = new RequestedAttributes();
        parameterRequest.locations = locations;
        const parameterResponse = await restService.getParameters(parameterRequest);
        const parameters = parameterResponse.data as ArchiveParameter[];
        expect(parameters.length).toBe(12);
    })

    it('query parameters with locations and attributes', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const requestedAttributes = new RequestedAttributes();
        const values = [];
        values.push("DWD_ICON");
        const parameterRequest = {} as ParametersRequest;
        parameterRequest.requestedAttribute = requestedAttributes;
        parameterRequest.locations = locations;
        const parameterResponse = await restService.getParameters(parameterRequest);
        const parameters = parameterResponse.data as ArchiveParameter[];
        expect(parameters.length).toBe(12);
    })

    it('query attributes for location', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const attributeQuery = {} as AttributesRequest;
        attributeQuery.locations = locations;
        attributeQuery.parameters = [];
        attributeQuery.attributes = [];
        const attributeResponse = await restService.getAttributes(attributeQuery);
        const parameters = attributeResponse.data as ArchiveAttribute[];
        expect(parameters.length).toBeGreaterThan(42);
    })

    it('query attributes for location and parameters', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const locations: string[] = [];
        locations.push("H-MS-0008");

        const parameters: string[] = [];
        parameters.push("discharge_arma_sim_analysed");

        const attributeQuery = {} as AttributesRequest;
        attributeQuery.locations = locations;
        attributeQuery.parameters = parameters;
        attributeQuery.attributes = [];
        const attributeResponse = await restService.getAttributes(attributeQuery);
        const attributes = attributeResponse.data as ArchiveAttribute[];
        expect(attributes.length).toBe(43);
    })

    it('query attributes for location and parameters and attributes', async () => {
        const url: string = process.env.PI_WEBSERVICE_URL !== undefined ? process.env.PI_WEBSERVICE_URL : '';
        const restService = new ArchivePiRestService(url);
        const locations: string[] = [];
        locations.push("H-MS-0008");

        const parameters: string[] = [];
        parameters.push("discharge_arma_sim_analysed");

        const requestedAttributes: string[] = [];
        requestedAttributes.push("source");
        const attributeQuery = {} as AttributesRequest;
        attributeQuery.parameters = parameters;
        attributeQuery.locations = locations;
        attributeQuery.attributes = requestedAttributes;

        const attributeResponse = await restService.getAttributes(attributeQuery);
        const attributes = attributeResponse.data as ArchiveAttribute[];
        expect(attributes.length).toBeGreaterThan(6)
    })
})
