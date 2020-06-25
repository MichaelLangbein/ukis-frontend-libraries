var cxml = require("cxml");
var Primitive = require('../xml-primitives');
var xlink = require('../www.w3.org/1999/xlink');

cxml.register('http://www.opengis.net/ows', exports, [
	[Primitive, ['any', 'number', 'string'], []],
	[xlink, ['actuateType', 'arcroleType', 'hrefType', 'roleType', 'showType', 'titleAttrType', 'typeType'], ['actuate', 'arcrole', 'href', 'role', 'show', 'title', 'type']]
], [
	'AcceptFormatsType',
	'AcceptVersionsType',
	'AddressType',
	'BoundingBoxType',
	'CapabilitiesBaseType',
	'CodeType',
	'ContactType',
	'DescriptionType',
	'DomainType',
	'ExceptionType',
	'GetCapabilitiesType',
	'IdentificationType',
	'KeywordsType',
	'MetadataType',
	'MimeType',
	'OnlineResourceType',
	'PositionType',
	'PositionType2D',
	'RequestMethodType',
	'ResponsiblePartySubsetType',
	'ResponsiblePartyType',
	'SectionsType',
	'ServiceType',
	'TelephoneType',
	'UpdateSequenceType',
	'VersionType',
	'WGS84BoundingBoxType'
], [
	[0, 0, [[9, 0], [10, 0], [11, 0], [13, 0], [14, 0], [17, 0], [22, 0], [27, 0], [29, 0], [31, 0], [33, 0], [34, 0], [36, 0], [37, 0], [38, 0], [40, 0], [42, 0], [44, 0], [47, 0], [48, 0], [49, 0], [50, 0], [51, 0], [52, 0], [55, 0], [57, 0], [58, 0], [59, 0], [60, 0], [64, 0]], []],
	[0, 0, [[75, 3]], []],
	[0, 0, [[91, 2]], []],
	[0, 0, [[12, 1], [15, 1], [19, 1], [23, 3], [26, 3], [53, 1]], []],
	[0, 0, [[72, 0], [88, 0]], [[20, 1], [24, 1]]],
	[0, 0, [[48, 1], [57, 1], [58, 1]], [[86, 1], [90, 0]]],
	[1, 3, [], [[16, 1]]],
	[0, 0, [[67, 1], [18, 1], [35, 1], [74, 1], [78, 1]], []],
	[0, 0, [[9, 1], [40, 3], [60, 1]], []],
	[0, 0, [[44, 3], [61, 2]], [[46, 0]]],
	[0, 0, [[30, 3]], [[28, 0], [43, 1]]],
	[0, 0, [[65, 1], [66, 1], [81, 1]], [[87, 1]]],
	[0, 18, [[13, 3], [14, 3], [37, 1], [44, 3], [50, 3]], []],
	[0, 0, [[39, 2], [85, 1]], []],
	[0, 0, [[10, 1]], [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 1]]],
	[3, 3, [], []],
	[0, 0, [], [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]]],
	[7, 2, [], []],
	[7, 2, [], []],
	[0, 26, [[70, 3]], []],
	[0, 0, [[17, 1], [38, 1], [52, 1], [55, 1]], []],
	[0, 0, [[17, 1], [38, 1], [49, 1], [52, 1], [55, 0]], []],
	[0, 0, [[56, 3]], []],
	[3, 3, [], []],
	[0, 0, [[32, 3], [63, 3]], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[0, 14, [[73, 0], [89, 0]], [[21, 1], [25, 1]]],
	[0, 0, [], []],
	[0, 0, [[13, 1], [59, 1]], []],
	[0, 0, [[14, 1], [64, 1]], []],
	[0, 0, [[36, 0]], []],
	[0, 0, [[27, 2]], [[41, 1], [62, 0]]],
	[0, 0, [[71, 2], [79, 2]], []],
	[0, 0, [[68, 3], [31, 1], [47, 2], [77, 3]], []],
	[0, 0, [[69, 3], [22, 2], [44, 3], [76, 3]], [[45, 0]]],
	[0, 18, [[11, 3], [33, 1], [83, 0], [84, 2]], []],
	[0, 0, [[54, 0], [80, 1], [82, 0]], []]
], [
	['about', [3], 0],
	['Abstract', [3], 0],
	['AbstractMetaData', [], 1],
	['AccessConstraints', [3], 0],
	['AdministrativeArea', [3], 0],
	['AvailableCRS', [3], 2],
	['BoundingBox', [14], 2],
	['City', [3], 0],
	['codeSpace', [3], 0],
	['ContactInfo', [17], 0],
	['ContactInstructions', [3], 0],
	['Country', [3], 0],
	['crs', [3], 0],
	['crs', [3], 0],
	['DCP', [41], 0],
	['DeliveryPoint', [3], 0],
	['dimensions', [2], 0],
	['dimensions', [2], 0],
	['ElectronicMailAddress', [3], 0],
	['Exception', [20], 0],
	['exceptionCode', [3], 0],
	['ExceptionReport', [42], 0],
	['ExceptionText', [3], 0],
	['ExtendedCapabilities', [1], 0],
	['Facsimile', [3], 0],
	['Fees', [3], 0],
	['GetCapabilities', [21], 0],
	['HoursOfService', [3], 0],
	['HTTP', [43], 0],
	['Identifier', [16], 0],
	['IndividualName', [3], 0],
	['Keyword', [3], 0],
	['Keywords', [23], 0],
	['language', [3], 0],
	['Language', [3], 0],
	['locator', [3], 0],
	['Metadata', [24], 0],
	['name', [3], 0],
	['name', [3], 0],
	['Operation', [45], 0],
	['OperationsMetadata', [44], 0],
	['OrganisationName', [3], 0],
	['OutputFormat', [25], 0],
	['PointOfContact', [31], 0],
	['PositionName', [3], 0],
	['PostalCode', [3], 0],
	['ProviderName', [3], 0],
	['Role', [16], 0],
	['Section', [3], 0],
	['ServiceIdentification', [46], 0],
	['ServiceProvider', [47], 0],
	['SupportedCRS', [3], 0, 13],
	['Title', [3], 0],
	['Value', [3], 0],
	['version', [3], 0],
	['Voice', [3], 0],
	['WGS84BoundingBox', [37], 0, 14],
	['AcceptFormats', [11], 0],
	['AcceptVersions', [12], 0],
	['Address', [13], 0],
	['Constraint', [19], 0],
	['Constraint', [19], 0],
	['Constraint', [19], 0],
	['Get', [29], 0],
	['LowerCorner', [27], 0],
	['LowerCorner', [28], 0],
	['OnlineResource', [26], 0],
	['OutputFormat', [25], 0],
	['Parameter', [19], 0],
	['Parameter', [19], 0],
	['Phone', [34], 0],
	['Post', [29], 0],
	['ProviderSite', [26], 0],
	['Sections', [32], 0],
	['ServiceContact', [30], 0],
	['ServiceType', [16], 0],
	['ServiceTypeVersion', [36], 0],
	['Type', [16], 0],
	['updateSequence', [35], 0],
	['updateSequence', [35], 0],
	['UpperCorner', [27], 0],
	['UpperCorner', [28], 0],
	['version', [36], 0],
	['Version', [36], 0]
]);