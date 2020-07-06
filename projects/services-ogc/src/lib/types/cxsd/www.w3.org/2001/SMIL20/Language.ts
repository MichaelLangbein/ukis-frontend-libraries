import * as Primitive from '../../../xml-primitives';
import * as smil20 from '../SMIL20';
import * as xml from '../../XML/1998/namespace';

// Source files:
// http://schemas.opengis.net/gml/3.1.1/smil/smil20-language.xsd


interface BaseType {
	
	
}
interface _AnimateColorProxyType extends BaseType {
	animateColor?: animateColorType;
}
interface AnimateColorProxyType extends _AnimateColorProxyType {  }

interface _animateColorType extends smil20.animateColorPrototype {
	alt?: string;
	begin: string;
	calcMode?: smil20.Type;
	class?: string;
	dur: string;
	end: string;
	fill: smil20.fillTimingAttrsType;
	fillDefault: smil20.fillDefaultType;
	id?: string;
	/** lang (as an attribute name)
	  *
	  * denotes an attribute whose value
	  * is a language code for the natural language of the content of
	  * any element; its value is inherited.  This name is reserved
	  * by virtue of its definition in the XML specification.
	  *
	  * Notes
	  *
	  * Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.
	  *
	  * See BCP 47 at
	  * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
	  * and the IANA language subtag registry at
	  *
	  * http://www.iana.org/assignments/language-subtag-registry
	  * for further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang?: string;
	longdesc?: string;
	max: string;
	min: string;
	repeat: number;
	repeatCount: number;
	repeatDur: string;
	restart: smil20.restartTimingType;
	restartDefault: smil20.restartDefaultType;
	skipContent?: boolean;
	syncBehavior: smil20.syncBehaviorType;
	syncBehaviorDefault: smil20.syncBehaviorDefaultType;
	syncTolerance?: string;
	syncToleranceDefault: string;
	targetElement?: string;
}
export interface animateColorType extends _animateColorType {  }


interface _AnimateMotionProxyType extends BaseType {
	animateMotion?: animateMotionType;
}
interface AnimateMotionProxyType extends _AnimateMotionProxyType {  }

interface _animateMotionType extends smil20.animateMotionPrototype {
	alt?: string;
	begin: string;
	calcMode?: smil20.Type;
	class?: string;
	dur: string;
	end: string;
	fill: smil20.fillTimingAttrsType;
	fillDefault: smil20.fillDefaultType;
	id?: string;
	/** lang (as an attribute name)
	  *
	  * denotes an attribute whose value
	  * is a language code for the natural language of the content of
	  * any element; its value is inherited.  This name is reserved
	  * by virtue of its definition in the XML specification.
	  *
	  * Notes
	  *
	  * Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.
	  *
	  * See BCP 47 at
	  * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
	  * and the IANA language subtag registry at
	  *
	  * http://www.iana.org/assignments/language-subtag-registry
	  * for further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang?: string;
	longdesc?: string;
	max: string;
	min: string;
	repeat: number;
	repeatCount: number;
	repeatDur: string;
	restart: smil20.restartTimingType;
	restartDefault: smil20.restartDefaultType;
	skipContent?: boolean;
	syncBehavior: smil20.syncBehaviorType;
	syncBehaviorDefault: smil20.syncBehaviorDefaultType;
	syncTolerance?: string;
	syncToleranceDefault: string;
	targetElement?: string;
}
export interface animateMotionType extends _animateMotionType {  }


interface _AnimateProxyType extends BaseType {
	animate?: animateType;
}
interface AnimateProxyType extends _AnimateProxyType {  }

interface _animateType extends smil20.animatePrototype {
	alt?: string;
	begin: string;
	calcMode?: smil20.Type;
	class?: string;
	dur: string;
	end: string;
	fill: smil20.fillTimingAttrsType;
	fillDefault: smil20.fillDefaultType;
	id?: string;
	/** lang (as an attribute name)
	  *
	  * denotes an attribute whose value
	  * is a language code for the natural language of the content of
	  * any element; its value is inherited.  This name is reserved
	  * by virtue of its definition in the XML specification.
	  *
	  * Notes
	  *
	  * Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.
	  *
	  * See BCP 47 at
	  * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
	  * and the IANA language subtag registry at
	  *
	  * http://www.iana.org/assignments/language-subtag-registry
	  * for further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang?: string;
	longdesc?: string;
	max: string;
	min: string;
	repeat: number;
	repeatCount: number;
	repeatDur: string;
	restart: smil20.restartTimingType;
	restartDefault: smil20.restartDefaultType;
	skipContent?: boolean;
	syncBehavior: smil20.syncBehaviorType;
	syncBehaviorDefault: smil20.syncBehaviorDefaultType;
	syncTolerance?: string;
	syncToleranceDefault: string;
	targetElement?: string;
}
export interface animateType extends _animateType {  }


interface _SetProxyType extends BaseType {
	set?: setType;
}
interface SetProxyType extends _SetProxyType {  }

interface _setType extends smil20.setPrototype {
	alt?: string;
	begin: string;
	class?: string;
	dur: string;
	end: string;
	fill: smil20.fillTimingAttrsType;
	fillDefault: smil20.fillDefaultType;
	id?: string;
	/** lang (as an attribute name)
	  *
	  * denotes an attribute whose value
	  * is a language code for the natural language of the content of
	  * any element; its value is inherited.  This name is reserved
	  * by virtue of its definition in the XML specification.
	  *
	  * Notes
	  *
	  * Attempting to install the relevant ISO 2- and 3-letter
	  * codes as the enumerated possible values is probably never
	  * going to be a realistic possibility.
	  *
	  * See BCP 47 at
	  * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
	  * and the IANA language subtag registry at
	  *
	  * http://www.iana.org/assignments/language-subtag-registry
	  * for further information.
	  *
	  * The union allows for the 'un-declaration' of xml:lang with
	  * the empty string. */
	lang?: string;
	longdesc?: string;
	max: string;
	min: string;
	repeat: number;
	repeatCount: number;
	repeatDur: string;
	restart: smil20.restartTimingType;
	restartDefault: smil20.restartDefaultType;
	skipContent?: boolean;
	syncBehavior: smil20.syncBehaviorType;
	syncBehaviorDefault: smil20.syncBehaviorDefaultType;
	syncTolerance?: string;
	syncToleranceDefault: string;
	targetElement?: string;
}
export interface setType extends _setType {  }


export interface document extends BaseType {
}
export var document: document;