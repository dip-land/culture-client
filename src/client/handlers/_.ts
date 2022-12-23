import fetch from "node-fetch";
import { XMLParser } from "fast-xml-parser";
const xmlOptions = {
    attributeNamePrefix: "",
    ignoreAttributes: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: false,
    decodeHTMLchar: false,
    cdataTagName: "__cdata",
    cdataPositionChar: "\\c",
};
export default class baseHandler {
    get(url: string, options?: baseGetOptions): Promise<any> {
        const userAgent = options?.userAgent ? { headers: { "User-Agent": options.userAgent } } : {};
        const XML = options?.XML ? options?.XML : false;
        if (!url) throw new Error('No url supplied...');
        return new Promise((resolve) => {
            fetch(url, userAgent).then(async (response) => {
                if (response.status !== 200) throw new Error(response.statusText);
                const body = XML === true ? await response.text() : await response.json();
                if (XML === true) return resolve(new XMLParser(xmlOptions).parse(body));
                resolve(body);
            });
        });
    }
}
type baseGetOptions = {
    userAgent?: string,
    XML?: boolean,
}
