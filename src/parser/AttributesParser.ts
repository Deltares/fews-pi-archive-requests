import JsonParser from "./JsonParser";
import Attribute from "../data/ArchiveAttribute";

export default class AttributesParser implements JsonParser<Attribute[]> {
    parse(response: any): Attribute[] {
        const attributes: Attribute[] = [];
        const archiveAttributes = response.archiveAttributes;
        for (const archiveAttribute of archiveAttributes) {
            attributes.push(archiveAttribute);
        }
        return attributes;
    }

}
