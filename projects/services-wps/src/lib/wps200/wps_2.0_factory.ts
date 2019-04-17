import { WpsMarshaller, WpsInput, WpsOutputDescription } from "../wps_marshaller";
import { WPSCapabilitiesType } from "./wps_2.0";


export class WpsFactory200 implements WpsMarshaller {
    
    constructor() {}
    
    getCapabilitiesUrl(baseurl: string): string {
        return `${baseurl}?service=WPS&request=GetCapabilities&version=2.0.0`;
    }
    
    executeUrl(baseurl: string, processId: string): string {
        return `${baseurl}?service=WPS&request=Execute&version=2.0.0&identifier=${processId}`;
    }
    
    unmarshalCapabilities(capabilities: WPSCapabilitiesType) {
        let out = [];
        capabilities.contents.processSummary.forEach(summary => {
            out.push({
                id: summary.identifier.value,
                title: summary.title[0].value
            })
        });
        return out;
    }

    unmarshalExecuteResponse(responseJson) {
        
    }
    
    marshalExecBody(processId: string, inputs: WpsInput[], output: WpsOutputDescription) {
        throw new Error("Method not implemented.");
        return null;
    }
}