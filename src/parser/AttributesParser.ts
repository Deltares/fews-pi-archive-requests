import JsonParser from "./JsonParser";
import {ArchiveAttribute} from "@/data/ArchiveAttributesResponse";

export default class AttributesParser implements JsonParser<ArchiveAttribute[]> {
    parse(response: any): ArchiveAttribute[] {
        const attributes: ArchiveAttribute[] = [];
        const archiveAttributes = response.archiveAttributes;
        for (const archiveAttribute of archiveAttributes) {
            attributes.push(archiveAttribute);
        }
        return attributes;
    }

}
