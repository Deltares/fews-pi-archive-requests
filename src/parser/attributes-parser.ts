import JsonParser from "./json-parser";
import Attribute from "../data/archive-attribute";

export default class AttributesParser implements JsonParser<Set<Attribute>> {
    parse(response: any): Set<Attribute> {
        const attributes = new Set<Attribute>();
        const archiveAttributes = response.archiveAttributes;
        for (const archiveAttribute of archiveAttributes) {
            const newAttribute = {} as Attribute;
            newAttribute.name = archiveAttribute.name;
            newAttribute.value = archiveAttribute.value;
            attributes.add(newAttribute);
        }
        return attributes;
    }

}
