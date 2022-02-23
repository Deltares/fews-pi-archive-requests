import JsonParser from "./json-parser";
import ArchiveParameter from "../data/archive-parameter";

export default class ParametersParser implements JsonParser<Set<ArchiveParameter>> {
    parse(response: any): Set<ArchiveParameter> {
        const parametersArray = response.parameters;
        const parameters: Set<ArchiveParameter> = new Set();
        for (const parameter of parametersArray) {
            const newParameter = {} as ArchiveParameter;
            newParameter.parameterId = parameter.parameterId;
            parameters.add(newParameter);
        }
        return parameters;
    }

}
