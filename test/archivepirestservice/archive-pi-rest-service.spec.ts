import 'isomorphic-fetch';
import ArchivePiRestService from "../../src/archivepirestservice/archive-pi-rest-service";
import RequestedAttributes from "../../src/requestbuilder/requested-attributes";
import ArchiveLocation from "../../src/data/archive-location";
import ArchiveParameter from "../../src/data/archive-parameter";
import Attribute from "../../src/data/archive-attribute";

describe('pi rest service tests', () => {
    it('query locations with parameters', async () => {
        const restService = new ArchivePiRestService();
        const parameters: string[] = [];
        parameters.push("discharge_stat_bias");
        const locationsResponse = await restService.getLocations(new RequestedAttributes(), parameters);
        const locationsSet = locationsResponse.data as Set<ArchiveLocation>;
        expect(locationsSet.size).toBe(74);
    })

    it('query locations with parameters and attributes', async () => {
        const restService = new ArchivePiRestService();
        const parameters: string[] = [];
        parameters.push("discharge_stat_bias");
        const requestedAttributes = new RequestedAttributes();
        const values: string[] = [];
        values.push("DWD_ICON")
        requestedAttributes.add("source", values);
        const locationsResponse = await restService.getLocations(requestedAttributes, parameters);
        const locationsSet = locationsResponse.data as Set<ArchiveLocation>;
        expect(locationsSet.size).toBe(37);
    })

    it('query parameters with locations', async () => {
        const restService = new ArchivePiRestService();
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const parameterResponse = await restService.getParameters(new RequestedAttributes(), locations);
        const parameters = parameterResponse.data as Set<ArchiveParameter>;
        expect(parameters.size).toBe(12);
    })

    it('query parameters with locations and attributes', async () => {
        const restService = new ArchivePiRestService();
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const requestedAttributes = new RequestedAttributes();
        const values = [];
        values.push("DWD_ICON");
        const parameterResponse = await restService.getParameters(requestedAttributes, locations);
        const parameters = parameterResponse.data as Set<ArchiveParameter>;
        expect(parameters.size).toBe(12);
    })

    it('query attributes for location', async () => {
        const restService = new ArchivePiRestService();
        const locations: string[] = [];
        locations.push("H-MS-0008");
        const attributeResponse = await restService.getAttributes([], locations, []);
        const parameters = attributeResponse.data as Set<Attribute>;
        expect(parameters.size).toBe(40);
    })

    it('query attributes for location and parameters', async () => {
        const restService = new ArchivePiRestService();
        const locations: string[] = [];
        locations.push("H-MS-0008");

        const parameters: string[] = [];
        parameters.push("discharge_arma_sim_analysed");

        const attributeResponse = await restService.getAttributes(parameters, locations, []);
        const attributes = attributeResponse.data as Set<Attribute>;
        expect(attributes.size).toBe(37);
    })

    it('query attributes for location and parameters and attributes', async () => {
        const restService = new ArchivePiRestService();
        const locations: string[] = [];
        locations.push("H-MS-0008");

        const parameters: string[] = [];
        parameters.push("discharge_arma_sim_analysed");

        const requestedAttributes: string[] = [];
        requestedAttributes.push("source");

        const attributeResponse = await restService.getAttributes(parameters, locations, requestedAttributes);
        const attributes = attributeResponse.data as Set<Attribute>;
        expect(attributes.size).toBe(6);
    })
})
