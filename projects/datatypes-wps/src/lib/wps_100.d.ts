/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HttpWwwOpengisNetWps100 =
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "ExecuteResponse";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: ExecuteResponse1;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "WSDL";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: WSDL;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "Languages";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: Languages;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "Capabilities";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: WPSCapabilitiesType1;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "GetCapabilities";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: GetCapabilities;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "ProcessDescriptions";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: ProcessDescriptions1;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "Execute";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: Execute1;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "ProcessOfferings";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: ProcessOfferings;
      [k: string]: any;
    }
  | {
      name?: ({
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null) & {
        localPart?: "DescribeProcess";
        namespaceURI?: "http://www.opengis.net/wps/1.0.0";
        [k: string]: any;
      };
      value?: DescribeProcess1;
      [k: string]: any;
    };
export type ExecuteResponse1 = ResponseBaseType & ExecuteResponse;
export type Service = string | null;
export type Version = string | null;
export type Lang = string | null;
export type Process = ProcessBriefType1;
export type ProcessBriefType1 = DescriptionType & ProcessBriefType;
export type Identifier = CodeType;
export type Value = string | null;
export type CodeSpace = string | null;
export type Title = LanguageStringType;
export type Value1 = string | null;
export type Lang1 = string | null;
export type _Abstract = LanguageStringType;
export type Metadata = MetadataType[];
export type AbstractMetaData = {
  [k: string]: any;
};
export type About = string | null;
export type Type = string | null;
export type Href = string | null;
export type Role = string | null;
export type Arcrole = string | null;
export type Title1 = string | null;
export type Show = string | null;
export type Actuate = string | null;
export type Profile = (string | null)[];
export type Wsdl = WSDL;
export type Href1 = string | null;
export type ProcessVersion = string | null;
export type Status = StatusType;
export type ProcessAccepted = string | null;
export type ProcessStarted = ProcessStartedType;
export type Value2 = string | null;
export type PercentCompleted = number | null;
export type ProcessPaused = ProcessStartedType;
export type ProcessSucceeded = string | null;
export type ProcessFailed = ProcessFailedType;
export type ExceptionReport1 = ExceptionReport;
export type Exception = ExceptionType[];
export type ExceptionText = (string | null)[];
export type ExceptionCode = string | null;
export type Locator = string | null;
export type Version1 = string | null;
export type Lang2 = string | null;
export type CreationTime = {
  /**
   * http://www.w3.org/TR/xmlschema-2/#decimal
   */
  year?: number | null;
  month?: (number | null) & {
    [k: string]: any;
  };
  day?: (number | null) & {
    [k: string]: any;
  };
  hour?: (number | null) & {
    [k: string]: any;
  };
  minute?: (number | null) & {
    [k: string]: any;
  };
  second?: (number | null) & {
    [k: string]: any;
  };
  fractionalSecond?: (number | null) & {
    [k: string]: any;
  };
  timezone?: (number | null) & {
    [k: string]: any;
  };
  [k: string]: any;
} | null;
export type DataInputs = DataInputsType;
export type Input = InputType[];
export type Identifier1 = CodeType;
export type Title2 = LanguageStringType;
export type _Abstract1 = LanguageStringType;
export type Reference = InputReferenceType;
export type Header = InputReferenceTypeHeader[];
export type Key = string | null;
export type Value3 = string | null;
export type Body = {
  [k: string]: any;
};
export type BodyReference = InputReferenceTypeBodyReference;
export type Href2 = string | null;
export type Href3 = string | null;
export type Method = string | null;
export type MimeType = string | null;
export type Encoding = string | null;
export type Schema = string | null;
export type Data = DataType;
export type ComplexData = ComplexDataType;
export type OtherAttributes = {
  [k: string]: string;
};
export type Content = (
  | (string | null)
  | any
  | {
      /**
       * http://www.w3.org/TR/xmlschema-2/#QName
       */
      name?: {
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null;
      value?: any;
      [k: string]: any;
    })[];
export type MimeType1 = string | null;
export type Encoding1 = string | null;
export type Schema1 = string | null;
export type LiteralData = LiteralDataType;
export type Value4 = string | null;
export type DataType1 = string | null;
export type Uom = string | null;
export type BoundingBoxData = BoundingBoxType;
export type LowerCorner = (number | null)[];
export type UpperCorner = (number | null)[];
export type Crs = string | null;
export type Dimensions = number | null;
export type OutputDefinitions = OutputDefinitionsType;
export type Output = DocumentOutputDefinitionType1[];
export type DocumentOutputDefinitionType1 = OutputDefinitionType & DocumentOutputDefinitionType;
export type Identifier2 = CodeType;
export type Uom1 = string | null;
export type MimeType2 = string | null;
export type Encoding2 = string | null;
export type Schema2 = string | null;
export type Title3 = LanguageStringType;
export type _Abstract2 = LanguageStringType;
export type AsReference = boolean | null;
export type ProcessOutputs = ExecuteResponseProcessOutputs;
export type Output1 = OutputDataType1[];
export type OutputDataType1 = DescriptionType & OutputDataType;
export type Reference1 = OutputReferenceType;
export type Href4 = string | null;
export type MimeType3 = string | null;
export type Encoding3 = string | null;
export type Schema3 = string | null;
export type Data1 = DataType;
export type ServiceInstance = string | null;
export type StatusLocation = string | null;
export type _Default = LanguagesDefault;
export type Language = string | null;
export type Supported = LanguagesType;
export type Language1 = (string | null)[];
export type WPSCapabilitiesType1 = CapabilitiesBaseType & WPSCapabilitiesType;
export type ServiceIdentification1 = DescriptionType1 & ServiceIdentification;
export type Title4 = LanguageStringType[];
export type _Abstract3 = LanguageStringType[];
export type Keywords = KeywordsType[];
export type Keyword = LanguageStringType[];
export type Type1 = CodeType;
export type ServiceType = CodeType;
export type ServiceTypeVersion = (string | null)[];
export type Profile1 = (string | null)[];
export type Fees = string | null;
export type AccessConstraints = (string | null)[];
export type ServiceProvider1 = ServiceProvider;
export type ProviderName = string | null;
export type ProviderSite = OnlineResourceType;
export type Type2 = string | null;
export type Href5 = string | null;
export type Role1 = string | null;
export type Arcrole1 = string | null;
export type Title5 = string | null;
export type Show1 = string | null;
export type Actuate1 = string | null;
export type ServiceContact = ResponsiblePartySubsetType;
export type IndividualName = string | null;
export type PositionName = string | null;
export type ContactInfo = ContactType;
export type Phone = TelephoneType;
export type Voice = (string | null)[];
export type Facsimile = (string | null)[];
export type Address = AddressType;
export type DeliveryPoint = (string | null)[];
export type City = string | null;
export type AdministrativeArea = string | null;
export type PostalCode = string | null;
export type Country = string | null;
export type ElectronicMailAddress = (string | null)[];
export type OnlineResource = OnlineResourceType;
export type HoursOfService = string | null;
export type ContactInstructions = string | null;
export type Role2 = CodeType;
export type OperationsMetadata1 = OperationsMetadata;
export type Operation1 = Operation[];
export type Dcp = DCP[];
export type Http = HTTP;
export type GetOrPost = (
  | {
      /**
       * http://www.w3.org/TR/xmlschema-2/#QName
       */
      name?: {
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null;
      value?: OnlineResourceType & RequestMethodType;
      [k: string]: any;
    }
  | {
      /**
       * http://www.w3.org/TR/xmlschema-2/#QName
       */
      name?: {
        namespaceURI?: (string | null) | "";
        /**
         * http://www.w3.org/TR/xmlschema-2/#NCName
         */
        localPart: string | null;
        prefix?: (string | null) | "";
        [k: string]: any;
      } | null;
      value?: OnlineResourceType & RequestMethodType;
      [k: string]: any;
    })[];
export type Constraint = (UnNamedDomainType & DomainType)[];
export type AllowedValues1 = AllowedValues;
export type ValueOrRange = (ValueType | RangeType)[];
export type Value5 = string | null;
export type MinimumValue = ValueType;
export type MaximumValue = ValueType;
export type Spacing = ValueType;
export type RangeClosure = (string | null)[];
export type AnyValue1 = AnyValue;
export type NoValues1 = NoValues;
export type ValuesReference1 = ValuesReference;
export type Value6 = string | null;
export type Reference2 = string | null;
export type DefaultValue = ValueType;
export type Meaning = DomainMetadataType;
export type Value7 = string | null;
export type Reference3 = string | null;
export type DataType2 = DomainMetadataType;
export type Uom2 = DomainMetadataType;
export type ReferenceSystem = DomainMetadataType;
export type Metadata1 = MetadataType[];
export type Name = string | null;
export type Parameter = (UnNamedDomainType & DomainType)[];
export type Constraint1 = (UnNamedDomainType & DomainType)[];
export type Metadata2 = MetadataType[];
export type Name1 = string | null;
export type Parameter1 = (UnNamedDomainType & DomainType)[];
export type Constraint2 = (UnNamedDomainType & DomainType)[];
export type ExtendedCapabilities = {
  [k: string]: any;
};
export type Version2 = string | null;
export type UpdateSequence = string | null;
export type ProcessOfferings1 = ProcessOfferings;
export type Process1 = ProcessBriefType1[];
export type Languages1 = Languages;
export type Wsdl1 = WSDL;
export type Service1 = string | number | boolean | null;
export type Lang3 = string | null;
export type AcceptVersions = AcceptVersionsType;
export type Version3 = (string | null)[];
export type Service2 = string | null;
export type Language2 = string | null;
export type ProcessDescriptions1 = ResponseBaseType & ProcessDescriptions;
export type ProcessDescription = ProcessDescriptionType1[];
export type ProcessDescriptionType1 = ProcessBriefType1 & ProcessDescriptionType;
export type DataInputs1 = ProcessDescriptionTypeDataInputs;
export type Input1 = InputDescriptionType1[];
export type InputDescriptionType1 = DescriptionType & InputDescriptionType;
export type ComplexData1 = SupportedComplexDataInputType1;
export type SupportedComplexDataInputType1 = SupportedComplexDataType & SupportedComplexDataInputType;
export type _Default1 = ComplexDataCombinationType;
export type Format = ComplexDataDescriptionType;
export type MimeType4 = string | null;
export type Encoding4 = string | null;
export type Schema4 = string | null;
export type Supported1 = ComplexDataCombinationsType;
export type Format1 = ComplexDataDescriptionType[];
export type MaximumMegabytes = number | null;
export type LiteralData1 = LiteralInputType1;
export type LiteralInputType1 = LiteralOutputType & LiteralInputType;
export type DataType3 = DomainMetadataType;
export type UoMs = SupportedUOMsType;
export type _Default2 = SupportedUOMsTypeDefault;
export type Uom3 = DomainMetadataType;
export type Supported2 = UOMsType;
export type Uom4 = DomainMetadataType[];
export type AllowedValues2 = AllowedValues;
export type AnyValue2 = AnyValue;
export type ValuesReference2 = ValuesReferenceType;
export type Reference4 = string | null;
export type ValuesForm = string | null;
export type DefaultValue1 = string | null;
export type BoundingBoxData1 = SupportedCRSsType;
export type _Default3 = SupportedCRSsTypeDefault;
export type Crs1 = string | null;
export type Supported3 = CRSsType;
export type Crs2 = (string | null)[];
export type MinOccurs = number | null;
export type MaxOccurs = number | null;
export type ProcessOutputs1 = ProcessDescriptionTypeProcessOutputs;
export type Output2 = OutputDescriptionType1[];
export type OutputDescriptionType1 = DescriptionType & OutputDescriptionType;
export type ComplexOutput = SupportedComplexDataType;
export type LiteralOutput = LiteralOutputType;
export type BoundingBoxOutput = SupportedCRSsType;
export type StoreSupported = boolean | null;
export type StatusSupported = boolean | null;
export type Execute1 = RequestBaseType & Execute;
export type Service3 = string | null;
export type Version4 = string | null;
export type Language3 = string | null;
export type Identifier3 = CodeType;
export type DataInputs2 = DataInputsType;
export type ResponseForm = ResponseFormType;
export type ResponseDocument = ResponseDocumentType;
export type Output3 = DocumentOutputDefinitionType1[];
export type StoreExecuteResponse = boolean | null;
export type Lineage = boolean | null;
export type Status1 = boolean | null;
export type RawDataOutput = OutputDefinitionType;
export type DescribeProcess1 = RequestBaseType & DescribeProcess;
export type Identifier4 = CodeType[];

export interface ResponseBaseType {
  service: Service;
  version: Version;
  lang: Lang;
  [k: string]: any;
}
export interface ExecuteResponse {
  process?: Process;
  status?: Status;
  dataInputs?: DataInputs;
  outputDefinitions?: OutputDefinitions;
  processOutputs?: ProcessOutputs;
  serviceInstance?: ServiceInstance;
  statusLocation?: StatusLocation;
  [k: string]: any;
}
export interface DescriptionType {
  identifier: Identifier;
  title: Title;
  _abstract?: _Abstract;
  metadata?: Metadata;
  [k: string]: any;
}
export interface CodeType {
  value?: Value;
  codeSpace?: CodeSpace;
  [k: string]: any;
}
export interface LanguageStringType {
  value?: Value1;
  lang?: Lang1;
  [k: string]: any;
}
export interface MetadataType {
  abstractMetaData?: AbstractMetaData;
  about?: About;
  type?: Type;
  href?: Href;
  role?: Role;
  arcrole?: Arcrole;
  title?: Title1;
  show?: Show;
  actuate?: Actuate;
  [k: string]: any;
}
export interface ProcessBriefType {
  profile?: Profile;
  wsdl?: Wsdl;
  processVersion?: ProcessVersion;
  [k: string]: any;
}
export interface WSDL {
  href: Href1;
  [k: string]: any;
}
export interface StatusType {
  processAccepted: ProcessAccepted;
  processStarted: ProcessStarted;
  processPaused: ProcessPaused;
  processSucceeded: ProcessSucceeded;
  processFailed: ProcessFailed;
  creationTime: CreationTime;
  [k: string]: any;
}
export interface ProcessStartedType {
  value?: Value2;
  percentCompleted?: PercentCompleted;
  [k: string]: any;
}
export interface ProcessFailedType {
  exceptionReport: ExceptionReport1;
  [k: string]: any;
}
export interface ExceptionReport {
  exception: Exception;
  version: Version1;
  lang?: Lang2;
  [k: string]: any;
}
export interface ExceptionType {
  exceptionText?: ExceptionText;
  exceptionCode: ExceptionCode;
  locator?: Locator;
  [k: string]: any;
}
export interface DataInputsType {
  input: Input;
  [k: string]: any;
}
export interface InputType {
  identifier: Identifier1;
  title?: Title2;
  _abstract?: _Abstract1;
  reference: Reference;
  data: Data;
  [k: string]: any;
}
export interface InputReferenceType {
  header?: Header;
  body: Body;
  bodyReference: BodyReference;
  href: Href3;
  method?: Method;
  mimeType?: MimeType;
  encoding?: Encoding;
  schema?: Schema;
  [k: string]: any;
}
export interface InputReferenceTypeHeader {
  key: Key;
  value: Value3;
  [k: string]: any;
}
export interface InputReferenceTypeBodyReference {
  href: Href2;
  [k: string]: any;
}
export interface DataType {
  complexData: ComplexData;
  literalData: LiteralData;
  boundingBoxData: BoundingBoxData;
  [k: string]: any;
}
export interface ComplexDataType {
  otherAttributes?: OtherAttributes;
  content?: Content;
  mimeType?: MimeType1;
  encoding?: Encoding1;
  schema?: Schema1;
  [k: string]: any;
}
export interface LiteralDataType {
  value?: Value4;
  dataType?: DataType1;
  uom?: Uom;
  [k: string]: any;
}
export interface BoundingBoxType {
  lowerCorner: LowerCorner;
  upperCorner: UpperCorner;
  crs?: Crs;
  dimensions?: Dimensions;
  [k: string]: any;
}
export interface OutputDefinitionsType {
  output: Output;
  [k: string]: any;
}
export interface OutputDefinitionType {
  identifier: Identifier2;
  uom?: Uom1;
  mimeType?: MimeType2;
  encoding?: Encoding2;
  schema?: Schema2;
  [k: string]: any;
}
export interface DocumentOutputDefinitionType {
  title?: Title3;
  _abstract?: _Abstract2;
  asReference?: AsReference;
  [k: string]: any;
}
export interface ExecuteResponseProcessOutputs {
  output: Output1;
  [k: string]: any;
}
export interface OutputDataType {
  reference?: Reference1;
  data?: Data1;
  [k: string]: any;
}
export interface OutputReferenceType {
  href: Href4;
  mimeType?: MimeType3;
  encoding?: Encoding3;
  schema?: Schema3;
  [k: string]: any;
}
export interface Languages {
  _default: _Default;
  supported: Supported;
  [k: string]: any;
}
export interface LanguagesDefault {
  language: Language;
  [k: string]: any;
}
export interface LanguagesType {
  language: Language1;
  [k: string]: any;
}
export interface CapabilitiesBaseType {
  serviceIdentification?: ServiceIdentification1;
  serviceProvider?: ServiceProvider1;
  operationsMetadata?: OperationsMetadata1;
  version: Version2;
  updateSequence?: UpdateSequence;
  [k: string]: any;
}
export interface DescriptionType1 {
  title?: Title4;
  _abstract?: _Abstract3;
  keywords?: Keywords;
  [k: string]: any;
}
export interface KeywordsType {
  keyword: Keyword;
  type?: Type1;
  [k: string]: any;
}
export interface ServiceIdentification {
  serviceType?: ServiceType;
  serviceTypeVersion?: ServiceTypeVersion;
  profile?: Profile1;
  fees?: Fees;
  accessConstraints?: AccessConstraints;
  [k: string]: any;
}
export interface ServiceProvider {
  providerName: ProviderName;
  providerSite?: ProviderSite;
  serviceContact: ServiceContact;
  [k: string]: any;
}
export interface OnlineResourceType {
  type?: Type2;
  href?: Href5;
  role?: Role1;
  arcrole?: Arcrole1;
  title?: Title5;
  show?: Show1;
  actuate?: Actuate1;
  [k: string]: any;
}
export interface ResponsiblePartySubsetType {
  individualName?: IndividualName;
  positionName?: PositionName;
  contactInfo?: ContactInfo;
  role?: Role2;
  [k: string]: any;
}
export interface ContactType {
  phone?: Phone;
  address?: Address;
  onlineResource?: OnlineResource;
  hoursOfService?: HoursOfService;
  contactInstructions?: ContactInstructions;
  [k: string]: any;
}
export interface TelephoneType {
  voice?: Voice;
  facsimile?: Facsimile;
  [k: string]: any;
}
export interface AddressType {
  deliveryPoint?: DeliveryPoint;
  city?: City;
  administrativeArea?: AdministrativeArea;
  postalCode?: PostalCode;
  country?: Country;
  electronicMailAddress?: ElectronicMailAddress;
  [k: string]: any;
}
export interface OperationsMetadata {
  operation: Operation1;
  parameter?: Parameter1;
  constraint?: Constraint2;
  extendedCapabilities?: ExtendedCapabilities;
  [k: string]: any;
}
export interface Operation {
  dcp: Dcp;
  parameter?: Parameter;
  constraint?: Constraint1;
  metadata?: Metadata2;
  name: Name1;
  [k: string]: any;
}
export interface DCP {
  http: Http;
  [k: string]: any;
}
export interface HTTP {
  getOrPost: GetOrPost;
  [k: string]: any;
}
export interface RequestMethodType {
  constraint?: Constraint;
  [k: string]: any;
}
export interface UnNamedDomainType {
  allowedValues: AllowedValues1;
  anyValue: AnyValue1;
  noValues: NoValues1;
  valuesReference: ValuesReference1;
  defaultValue?: DefaultValue;
  meaning?: Meaning;
  dataType?: DataType2;
  uom: Uom2;
  referenceSystem: ReferenceSystem;
  metadata?: Metadata1;
  [k: string]: any;
}
export interface AllowedValues {
  valueOrRange: ValueOrRange;
  [k: string]: any;
}
export interface ValueType {
  value?: Value5;
  [k: string]: any;
}
export interface RangeType {
  minimumValue?: MinimumValue;
  maximumValue?: MaximumValue;
  spacing?: Spacing;
  rangeClosure?: RangeClosure;
  [k: string]: any;
}
export interface AnyValue {
  [k: string]: any;
}
export interface NoValues {
  [k: string]: any;
}
export interface ValuesReference {
  value?: Value6;
  reference: Reference2;
  [k: string]: any;
}
export interface DomainMetadataType {
  value?: Value7;
  reference?: Reference3;
  [k: string]: any;
}
export interface DomainType {
  name?: Name;
  [k: string]: any;
}
export interface WPSCapabilitiesType {
  processOfferings?: ProcessOfferings1;
  languages?: Languages1;
  wsdl?: Wsdl1;
  service?: Service1;
  lang?: Lang3;
  [k: string]: any;
}
export interface ProcessOfferings {
  process: Process1;
  [k: string]: any;
}
export interface GetCapabilities {
  acceptVersions?: AcceptVersions;
  service: Service2;
  language?: Language2;
  [k: string]: any;
}
export interface AcceptVersionsType {
  version: Version3;
  [k: string]: any;
}
export interface ProcessDescriptions {
  processDescription?: ProcessDescription;
  [k: string]: any;
}
export interface ProcessDescriptionType {
  dataInputs?: DataInputs1;
  processOutputs?: ProcessOutputs1;
  storeSupported?: StoreSupported;
  statusSupported?: StatusSupported;
  [k: string]: any;
}
export interface ProcessDescriptionTypeDataInputs {
  input: Input1;
  [k: string]: any;
}
export interface InputDescriptionType {
  complexData?: ComplexData1;
  literalData?: LiteralData1;
  boundingBoxData?: BoundingBoxData1;
  minOccurs?: MinOccurs;
  maxOccurs?: MaxOccurs;
  [k: string]: any;
}
export interface SupportedComplexDataType {
  _default: _Default1;
  supported: Supported1;
  [k: string]: any;
}
export interface ComplexDataCombinationType {
  format: Format;
  [k: string]: any;
}
export interface ComplexDataDescriptionType {
  mimeType: MimeType4;
  encoding?: Encoding4;
  schema?: Schema4;
  [k: string]: any;
}
export interface ComplexDataCombinationsType {
  format: Format1;
  [k: string]: any;
}
export interface SupportedComplexDataInputType {
  maximumMegabytes?: MaximumMegabytes;
  [k: string]: any;
}
export interface LiteralOutputType {
  dataType?: DataType3;
  uoMs?: UoMs;
  [k: string]: any;
}
export interface SupportedUOMsType {
  _default: _Default2;
  supported: Supported2;
  [k: string]: any;
}
export interface SupportedUOMsTypeDefault {
  uom: Uom3;
  [k: string]: any;
}
export interface UOMsType {
  uom: Uom4;
  [k: string]: any;
}
export interface LiteralInputType {
  allowedValues?: AllowedValues2;
  anyValue?: AnyValue2;
  valuesReference?: ValuesReference2;
  defaultValue?: DefaultValue1;
  [k: string]: any;
}
export interface ValuesReferenceType {
  reference?: Reference4;
  valuesForm?: ValuesForm;
  [k: string]: any;
}
export interface SupportedCRSsType {
  _default: _Default3;
  supported: Supported3;
  [k: string]: any;
}
export interface SupportedCRSsTypeDefault {
  crs: Crs1;
  [k: string]: any;
}
export interface CRSsType {
  crs: Crs2;
  [k: string]: any;
}
export interface ProcessDescriptionTypeProcessOutputs {
  output: Output2;
  [k: string]: any;
}
export interface OutputDescriptionType {
  complexOutput?: ComplexOutput;
  literalOutput?: LiteralOutput;
  boundingBoxOutput?: BoundingBoxOutput;
  [k: string]: any;
}
export interface RequestBaseType {
  service: Service3;
  version: Version4;
  language?: Language3;
  [k: string]: any;
}
export interface Execute {
  identifier?: Identifier3;
  dataInputs?: DataInputs2;
  responseForm?: ResponseForm;
  [k: string]: any;
}
export interface ResponseFormType {
  responseDocument: ResponseDocument;
  rawDataOutput: RawDataOutput;
  [k: string]: any;
}
export interface ResponseDocumentType {
  output: Output3;
  storeExecuteResponse?: StoreExecuteResponse;
  lineage?: Lineage;
  status?: Status1;
  [k: string]: any;
}
export interface DescribeProcess {
  identifier?: Identifier4;
  [k: string]: any;
}
