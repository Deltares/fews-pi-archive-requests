import JsonParser from "./JsonParser";
import {ArchiveParameter} from "@/data/ArchiveParametersResponse";

export default class ParametersParser implements JsonParser<ArchiveParameter[]> {
    parse(response: any): ArchiveParameter[] {
        const parametersArray = response.parameters;
        const parameters: ArchiveParameter[] = [];
        for (const parameter of parametersArray) {
            parameters.push(parameter);
        }
        return parameters;
    }

}
