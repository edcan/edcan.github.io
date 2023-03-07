(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return eo})),n.d(e,"b",(function(){return $o})),n.d(e,"c",(function(){return no})),n.d(e,"d",(function(){return Bo})),n.d(e,"e",(function(){return io})),n.d(e,"f",(function(){return qo}));var r=n("589b"),s=n("22e5"),i=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new i["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=i["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=i["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=i["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new E;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new E,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new E)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class I{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.p=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.A=-1;class R{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function j(t,e){return t<e?-1:t>e?1:0}function D(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new L(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends U{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends U{construct(t,e,n){return new $(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new _(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new _(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $(e)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.fields=t,t.sort($.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return D(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new K(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new K(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=z.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Q(t){return"string"==typeof t?K.fromBase64String(t):K.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function J(t){const e=t.mapValue.fields.__previous_value__;return X(e)?J(e):e}function Y(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(B.fromString(t))}static fromName(t){return new st(B.fromString(t).popFirst(5))}static empty(){return new st(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:y()}function at(t,e){if(t===e)return!0;const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Q(t.bytesValue).isEqual(Q(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return W(t.geoPointValue.latitude)===W(e.geoPointValue.latitude)&&W(t.geoPointValue.longitude)===W(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return W(t.integerValue)===W(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=W(t.doubleValue),r=W(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return D(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!at(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){if(t===e)return 0;const n=ot(t),r=ot(e);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=W(t.integerValue||t.doubleValue),r=W(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return lt(t.timestampValue,e.timestampValue);case 4:return lt(Y(t),Y(e));case 5:return j(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Q(t),r=Q(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=j(n[s],r[s]);if(0!==t)return t}return j(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=j(W(t.latitude),W(e.latitude));return 0!==n?n:j(W(t.longitude),W(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=ut(n[s],r[s]);if(t)return t}return j(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=j(r[o],i[o]);if(0!==t)return t;const e=ut(n[r[o]],s[i[o]]);if(0!==e)return e}return j(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return j(t,e);const n=H(t),r=H(e),s=j(n.seconds,r.seconds);return 0!==s?s:j(n.nanos,r.nanos)}function ht(t){return ft(t)}function ft(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Q(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,st.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ft(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${ft(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function dt(t){return!!t&&"integerValue"in t}function pt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yt(t){return!!t&&"mapValue"in t}function vt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=vt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vt(e)}setAll(t){let e=$.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=vt(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];yt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new bt(vt(this.value))}}function wt(t){const e=[];return F(t.fields,(t,n)=>{const r=new $([t]);if(yt(n)){const t=wt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new G(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _t{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new _t(t,0,P.min(),P.min(),bt.empty(),0)}static newFoundDocument(t,e,n){return new _t(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new _t(t,2,e,P.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,P.min(),bt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Et.UNKNOWN_ID=-1;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function Ot(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Tt(t,e,n,r,s,i,o)}function Ct(t){const e=b(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+ht(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>ht(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>ht(t)).join(",")),e.P=t}return e.P}function St(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>ht(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>ht(t)).join(",")),`Target(${e})`}function It(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Ut(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!at(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qt(t.startAt,e.startAt)&&qt(t.endAt,e.endAt)}function kt(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class At extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,n):new xt(t,e,n):"array-contains"===e?new Dt(t,n):"in"===e?new Lt(t,n):"not-in"===e?new Pt(t,n):"array-contains-any"===e?new Mt(t,n):new At(t,e,n)}static v(t,e,n){return"in"===e?new Nt(t,n):new Rt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(ut(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.V(ut(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xt extends At{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.V(e)}}class Nt extends At{constructor(t,e){super(t,"in",e),this.keys=jt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rt extends At{constructor(t,e){super(t,"not-in",e),this.keys=jt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>st.fromName(t.referenceValue))}class Dt extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pt(e)&&ct(e.arrayValue,this.value)}}class Lt extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class Pt extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Mt extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ft{constructor(t,e){this.position=t,this.inclusive=e}}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ut(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bt(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ut(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function qt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Gt(t,e,n,r,s,i,o,a){return new $t(t,e,n,r,s,i,o,a)}function Kt(t){return new $t(t)}function zt(t){return!et(t.limit)&&"F"===t.limitType}function Ht(t){return!et(t.limit)&&"L"===t.limitType}function Wt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qt(t){for(const e of t.filters)if(e.S())return e.field;return null}function Xt(t){return null!==t.collectionGroup}function Jt(t){const e=b(t);if(null===e.D){e.D=[];const t=Qt(e),n=Wt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Vt(t)),e.D.push(new Vt($.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Vt($.keyField(),t))}}}return e.D}function Yt(t){const e=b(t);if(!e.C)if("F"===e.limitType)e.C=Ot(e.path,e.collectionGroup,Jt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Jt(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Vt(s.field,e))}const n=e.endAt?new Ft(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Ft(e.startAt.position,!e.startAt.inclusive):null;e.C=Ot(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function Zt(t,e,n){return new $t(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function te(t,e){return It(Yt(t),Yt(e))&&t.limitType===e.limitType}function ee(t){return`${Ct(Yt(t))}|lt:${t.limitType}`}function ne(t){return`Query(target=${St(Yt(t))}; limitType=${t.limitType})`}function re(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Bt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Jt(t),e))&&!(t.endAt&&!function(t,e,n){const r=Bt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Jt(t),e))}(t,e)}function se(t){return(e,n)=>{let r=!1;for(const s of Jt(t)){const t=ie(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function ie(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?ut(r,s):y()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function ae(t){return{integerValue:""+t}}function ce(t,e){return rt(e)?ae(e):oe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this._=void 0}}function le(t,e,n){return t instanceof de?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof pe?ge(t,e):t instanceof me?ye(t,e):function(t,e){const n=fe(t,e),r=be(n)+be(t.k);return dt(n)&&dt(t.k)?ae(r):oe(t.O,r)}(t,e)}function he(t,e,n){return t instanceof pe?ge(t,e):t instanceof me?ye(t,e):n}function fe(t,e){return t instanceof ve?dt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class de extends ue{}class pe extends ue{constructor(t){super(),this.elements=t}}function ge(t,e){const n=we(e);for(const r of t.elements)n.some(t=>at(t,r))||n.push(r);return{arrayValue:{values:n}}}class me extends ue{constructor(t){super(),this.elements=t}}function ye(t,e){let n=we(e);for(const r of t.elements)n=n.filter(t=>!at(t,r));return{arrayValue:{values:n}}}class ve extends ue{constructor(t,e){super(),this.O=t,this.k=e}}function be(t){return W(t.integerValue||t.doubleValue)}function we(t){return pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof pe&&e instanceof pe||t instanceof me&&e instanceof me?D(t.elements,e.elements,at):t instanceof ve&&e instanceof ve?at(t.k,e.k):t instanceof de&&e instanceof de}(t.transform,e.transform)}class Ee{constructor(t,e){this.version=t,this.transformResults=e}}class Te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Te}static exists(t){return new Te(void 0,t)}static updateTime(t){return new Te(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ce{}function Se(t,e,n){t instanceof Ne?function(t,e,n){const r=t.value.clone(),s=De(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Re?function(t,e,n){if(!Oe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=De(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(je(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ie(t,e,n){t instanceof Ne?function(t,e,n){if(!Oe(t.precondition,e))return;const r=t.value.clone(),s=Le(t.fieldTransforms,n,e);r.setAll(s),e.convertToFoundDocument(xe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Re?function(t,e,n){if(!Oe(t.precondition,e))return;const r=Le(t.fieldTransforms,n,e),s=e.data;s.setAll(je(t)),s.setAll(r),e.convertToFoundDocument(xe(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Oe(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function ke(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=fe(r.transform,t||null);null!=s&&(null==n&&(n=bt.empty()),n.set(r.field,s))}return n||null}function Ae(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&D(t,e,(t,e)=>_e(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function xe(t){return t.isFoundDocument()?t.version:P.min()}class Ne extends Ce{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Re extends Ce{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function De(t,e,n){const r=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,he(o,a,n[s]))}return r}function Le(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,le(t,i,e))}return r}class Pe extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Me extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,Ue;function Be(t){switch(t){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function qe(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ve.OK:return w.OK;case Ve.CANCELLED:return w.CANCELLED;case Ve.UNKNOWN:return w.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return w.INTERNAL;case Ve.UNAVAILABLE:return w.UNAVAILABLE;case Ve.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ve.NOT_FOUND:return w.NOT_FOUND;case Ve.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ve.ABORTED:return w.ABORTED;case Ve.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ve.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(Ue=Ve||(Ve={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t,e){this.comparator=t,this.root=e||Ke.EMPTY}insert(t,e){return new $e(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new $e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ge(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ge(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ge(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ge(this.root,t,this.comparator,!0)}}class Ge{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ke.RED,this.left=null!=r?r:Ke.EMPTY,this.right=null!=s?s:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ke(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ke.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1,Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(t){this.comparator=t,this.data=new $e(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new He(this.data.getIterator())}getIteratorFrom(t){return new He(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ze))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ze(this.comparator);return e.data=t,e}}class He{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We=new $e(st.comparator);function Qe(){return We}const Xe=new $e(st.comparator);function Je(){return Xe}const Ye=new $e(st.comparator),Ze=new ze(st.comparator);function tn(...t){let e=Ze;for(const n of t)e=e.add(n);return e}const en=new ze(j);function nn(){return en}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e)),new rn(P.min(),n,nn(),Qe(),tn())}}class sn{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new sn(K.EMPTY_BYTE_STRING,e,tn(),tn(),tn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n,r){this.M=t,this.removedTargetIds=e,this.key=n,this.$=r}}class an{constructor(t,e){this.targetId=t,this.F=e}}class cn{constructor(t,e,n=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class un{constructor(){this.B=0,this.L=fn(),this.U=K.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=tn(),e=tn(),n=tn();return this.L.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new sn(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=fn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ln{constructor(t){this.nt=t,this.st=new Map,this.it=Qe(),this.rt=hn(),this.ot=new ze(j)}ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.F.count,r=this.wt(e);if(r){const t=r.target;if(kt(t))if(0===n){const n=new st(t.path);this.at(e,n,_t.newNoDocument(n,P.min()))}else v(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,r)=>{const s=this.wt(r);if(s){if(n.current&&kt(s.target)){const e=new st(s.target.path);null!==this.it.get(e)||this.It(r,e)||this.at(r,e,_t.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}});let n=tn();this.rt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const r=new rn(t,e,this.ot,this.it,n);return this.it=Qe(),this.rt=hn(),this.ot=new ze(j),r}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new un,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new ze(j),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new un),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function hn(){return new $e(st.comparator)}function fn(){return new $e(st.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),pn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class gn{constructor(t,e){this.databaseId=t,this.N=e}}function mn(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yn(t,e){return t.N?e.toBase64():e.toUint8Array()}function vn(t,e){return mn(t,e.toTimestamp())}function bn(t){return v(!!t),P.fromTimestamp(function(t){const e=H(t);return new L(e.seconds,e.nanos)}(t))}function wn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function _n(t){const e=B.fromString(t);return v(Gn(e)),e}function En(t,e){return wn(t.databaseId,e.path)}function Tn(t,e){const n=_n(e);if(n.get(1)!==t.databaseId.projectId)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(In(n))}function On(t,e){return wn(t.databaseId,e)}function Cn(t){const e=_n(t);return 4===e.length?B.emptyPath():In(e)}function Sn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function In(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function kn(t,e,n){return{name:En(t,e),fields:n.value.mapValue.fields}}function An(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.N?(v(void 0===e||"string"==typeof e),K.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),K.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:qe(t.code);return new _(e,t.message||"")}(o);n=new cn(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tn(t,r.document.name),i=bn(r.document.updateTime),o=new bt({mapValue:{fields:r.document.fields}}),a=_t.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new on(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Tn(t,r.document),i=r.readTime?bn(r.readTime):P.min(),o=_t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new on([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Tn(t,r.document),i=r.removedTargetIds||[];n=new on([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Fe(r),i=t.targetId;n=new an(i,s)}}return n}function xn(t,e){let n;if(e instanceof Ne)n={update:kn(t,e.key,e.value)};else if(e instanceof Pe)n={delete:En(t,e.key)};else if(e instanceof Re)n={update:kn(t,e.key,e.data),updateMask:$n(e.fieldMask)};else{if(!(e instanceof Me))return y();n={verify:En(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof de)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof me)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),increment:n.k};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:vn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Nn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?bn(t.updateTime):bn(e);return n.isEqual(P.min())&&(n=bn(e)),new Ee(n,t.transformResults||[])}(t,e))):[]}function Rn(t,e){return{documents:[On(t,e.path)]}}function jn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=On(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=On(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(mt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(mt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(t.field),op:Fn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Vn(t.field),direction:Mn(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.N||et(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Dn(t){let e=Cn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Pn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Vt(Un(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ft(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ft(n,e)}(n.endAt)),Gt(e,s,o,i,a,"F",c,u)}function Ln(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Pn(t){return t?void 0!==t.unaryFilter?[qn(t)]:void 0!==t.fieldFilter?[Bn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Pn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Mn(t){return dn[t]}function Fn(t){return pn[t]}function Vn(t){return{fieldPath:t.canonicalString()}}function Un(t){return $.fromServerFormat(t.fieldPath)}function Bn(t){return At.create(Un(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function qn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Un(t.unaryFilter.field);return At.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Un(t.unaryFilter.field);return At.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Un(t.unaryFilter.field);return At.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Un(t.unaryFilter.field);return At.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function $n(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hn(e)),e=zn(t.get(n),e);return Hn(e)}function zn(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Hn(t){return t+""}class Wn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Wn.store="owner",Wn.key="owner";class Qn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Qn.store="mutationQueues",Qn.keyPath="userId";class Xn{constructor(t,e,n,r,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}Xn.store="mutations",Xn.keyPath="batchId",Xn.userMutationsIndex="userMutationsIndex",Xn.userMutationsKeyPath=["userId","batchId"];class Jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Kn(e)]}static key(t,e,n){return[t,Kn(e),n]}}Jn.store="documentMutations",Jn.PLACEHOLDER=new Jn;class Yn{constructor(t,e,n,r,s,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}Yn.store="remoteDocuments",Yn.readTimeIndex="readTimeIndex",Yn.readTimeIndexPath="readTime",Yn.collectionReadTimeIndex="collectionReadTimeIndex",Yn.collectionReadTimeIndexPath=["parentPath","readTime"];class Zn{constructor(t){this.byteSize=t}}Zn.store="remoteDocumentGlobal",Zn.key="remoteDocumentGlobalKey";class tr{constructor(t,e,n,r,s,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class er{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}er.store="targetDocuments",er.keyPath=["targetId","path"],er.documentTargetsIndex="documentTargetsIndex",er.documentTargetsKeyPath=["path","targetId"];class nr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}nr.key="targetGlobalKey",nr.store="targetGlobal";class rr{constructor(t,e){this.collectionId=t,this.parent=e}}rr.store="collectionParents",rr.keyPath=["collectionId","parent"];class sr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class ir{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}ir.store="bundles",ir.keyPath="bundleId";class or{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}or.store="namedQueries",or.keyPath="name";class ar{constructor(t,e,n){this.indexId=t,this.collectionGroup=e,this.fields=n}}ar.store="indexConfiguration",ar.keyPath="indexId",ar.collectionGroupIndex="collectionGroupIndex",ar.collectionGroupIndexPath="collectionGroup";class cr{constructor(t,e,n,r,s,i){this.indexId=t,this.uid=e,this.sequenceNumber=n,this.readTime=r,this.documentKey=s,this.largestBatchId=i}}cr.store="indexState",cr.keyPath=["indexId","uid"],cr.sequenceNumberIndex="sequenceNumberIndex",cr.sequenceNumberIndexPath=["uid","sequenceNumber"];class ur{constructor(t,e,n,r,s){this.indexId=t,this.uid=e,this.arrayValue=n,this.directionalValue=r,this.documentKey=s}}ur.store="indexEntries",ur.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],ur.documentKeyIndex="documentKeyIndex",ur.documentKeyIndexPath=["indexId","uid","documentKey"];class lr{constructor(t,e,n,r,s,i){this.userId=t,this.collectionPath=e,this.documentId=n,this.collectionGroup=r,this.largestBatchId=s,this.overlayMutation=i}}lr.store="documentOverlays",lr.keyPath=["userId","collectionPath","documentId"],lr.collectionPathOverlayIndex="collectionPathOverlayIndex",lr.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],lr.collectionGroupOverlayIndex="collectionGroupOverlayIndex",lr.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const hr=[Qn.store,Xn.store,Jn.store,Yn.store,tr.store,Wn.store,nr.store,er.store,sr.store,Zn.store,rr.store,ir.store,or.store],fr=[...hr,lr.store],dr=(ar.store,cr.store,ur.store,"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof gr?e:gr.resolve(e)}catch(t){return gr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):gr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):gr.reject(e)}static resolve(t){return new gr((e,n)=>{e(t)})}static reject(t){return new gr((e,n)=>{n(t)})}static waitFor(t){return new gr((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=gr.resolve(!1);for(const n of t)e=e.next(t=>t?gr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Se(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ie(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ie(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),tn())}isEqual(t){return this.batchId===t.batchId&&D(this.mutations,t.mutations,(t,e)=>Ae(t,e))&&D(this.baseMutations,t.baseMutations,(t,e)=>Ae(t,e))}}class vr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=Ye;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new vr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e,n,r,s=P.min(),i=P.min(),o=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){this.Ht=t}}function Er(t){const e=Dn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Zt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(){}Xt(t,e){this.Zt(t,e),e.te()}Zt(t,e){if("nullValue"in t)this.ee(e,5);else if("booleanValue"in t)this.ee(e,10),e.ne(t.booleanValue?1:0);else if("integerValue"in t)this.ee(e,15),e.ne(W(t.integerValue));else if("doubleValue"in t){const n=W(t.doubleValue);isNaN(n)?this.ee(e,13):(this.ee(e,15),nt(n)?e.ne(0):e.ne(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ee(e,20),"string"==typeof n?e.se(n):(e.se(""+(n.seconds||"")),e.ne(n.nanos||0))}else if("stringValue"in t)this.ie(t.stringValue,e),this.re(e);else if("bytesValue"in t)this.ee(e,30),e.oe(Q(t.bytesValue)),this.re(e);else if("referenceValue"in t)this.ce(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ee(e,45),e.ne(n.latitude||0),e.ne(n.longitude||0)}else"mapValue"in t?at(t,it)?this.ee(e,Number.MAX_SAFE_INTEGER):(this.ue(t.mapValue,e),this.re(e)):"arrayValue"in t?(this.ae(t.arrayValue,e),this.re(e)):y()}ie(t,e){this.ee(e,25),this.he(t,e)}he(t,e){e.se(t)}ue(t,e){const n=t.fields||{};this.ee(e,55);for(const r of Object.keys(n))this.ie(r,e),this.Zt(n[r],e)}ae(t,e){const n=t.values||[];this.ee(e,50);for(const r of n)this.Zt(r,e)}ce(t,e){this.ee(e,37),st.fromName(t).path.forEach(t=>{this.ee(e,60),this.he(t,e)})}ee(t,e){t.ne(e)}re(t){t.ne(2)}}Tr.le=new Tr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(){this.xe=new Cr}addToCollectionParentIndex(t,e){return this.xe.add(e),gr.resolve()}getCollectionParents(t,e){return gr.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return gr.resolve()}deleteFieldIndex(t,e){return gr.resolve()}getDocumentsMatchingTarget(t,e,n){return gr.resolve(tn())}getFieldIndex(t,e){return gr.resolve(null)}getFieldIndexes(t,e){return gr.resolve([])}getNextCollectionGroupToUpdate(t){return gr.resolve(null)}updateCollectionGroup(t,e,n){return gr.resolve()}updateIndexEntries(t,e){return gr.resolve()}}class Cr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ze(B.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ze(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Sr(t,Sr.DEFAULT_COLLECTION_PERCENTILE,Sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr.DEFAULT_COLLECTION_PERCENTILE=10,Sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sr.DEFAULT=new Sr(41943040,Sr.DEFAULT_COLLECTION_PERCENTILE,Sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sr.DISABLED=new Sr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new Ir(0)}static Je(){return new Ir(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==dr)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.changes=new Ar(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(t,e,n){this.qn=t,this.gs=e,this.indexManager=n}ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.ps(t,e,n))}ps(t,e,n){return this.qn.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Is(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Es(t,e){return this.qn.getEntries(t,e).next(e=>this.Ts(t,e).next(()=>e))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Is(e,t))}As(t,e,n){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Rs(t,e.path):Xt(e)?this.Ps(t,e,n):this.bs(t,e,n)}Rs(t,e){return this.ys(t,new st(e)).next(t=>{let e=Je();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Ps(t,e,n){const r=e.collectionGroup;let s=Je();return this.indexManager.getCollectionParents(t,r).next(i=>gr.forEach(i,i=>{const o=function(t,e){return new $t(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.bs(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}bs(t,e,n){let r;return this.qn.getAll(t,e.path,n).next(n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=_t.newInvalidDocument(n),r=r.insert(n,s)),Ie(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((t,n)=>{re(e,n)||(r=r.remove(t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.vs=n,this.Vs=r}static Ss(t,e){let n=tn(),r=tn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Rr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{Ds(t){this.Cs=t}As(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.Ns(t,e):this.Cs.Es(t,r).next(s=>{const o=this.xs(e,s);return(zt(e)||Ht(e))&&this.ks(e.limitType,o,r,n)?this.Ns(t,e):(f()<=i["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ne(e)),this.Cs.As(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}xs(t,e){let n=new ze(se(t));return e.forEach((e,r)=>{re(t,r)&&(n=n.add(r))}),n}ks(t,e,n,r){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ns(t,e){return f()<=i["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",ne(e)),this.Cs.As(t,e,P.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e,n,r){this.persistence=t,this.Os=e,this.O=r,this.Ms=new $e(j),this.$s=new Ar(t=>Ct(t),It),this.Fs=P.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(n)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new Nr(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Lr(t,e,n,r){return new Dr(t,e,n,r)}async function Pr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.gs.getAllMutationBatches(t).next(s=>(r=s,n.Ls(e),n.gs.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=tn();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.Us.Es(t,o).next(t=>({qs:t,removedBatchIds:s,addedBatchIds:i}))})})}function Mr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=gr.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);v(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.gs.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.gs.performConsistencyCheck(t)).next(()=>n.Us.Es(t,r))})}function Fr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Un.getLastRemoteSnapshotVersion(t))}function Vr(t,e){const n=b(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Un.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(K.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Un.updateTargetData(t,u))});let a=Qe();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Ur(t,i,e.documentUpdates).next(t=>{a=t})),!r.isEqual(P.min())){const e=n.Un.getLastRemoteSnapshotVersion(t).next(e=>n.Un.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return gr.waitFor(o).next(()=>i.apply(t)).next(()=>n.Us.Ts(t,a)).next(()=>a)}).then(t=>(n.Ms=s,t))}function Ur(t,e,n){let r=tn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Qe();return n.forEach((n,s)=>{const i=t.get(n);s.isNoDocument()&&s.version.isEqual(P.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)}),r})}function Br(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(t,e)))}function qr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Un.getTargetData(t,e).next(s=>s?(r=s,gr.resolve(r)):n.Un.allocateTargetId(t).next(s=>(r=new wr(e,s,0,t.currentSequenceNumber),n.Un.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ms.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.$s.set(e,t.targetId)),t})}async function $r(t,e,n){const r=b(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!mr(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ms=r.Ms.remove(e),r.$s.delete(s.target)}function Gr(t,e,n){const r=b(t);let s=P.min(),i=tn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),s=r.$s.get(n);return void 0!==s?gr.resolve(r.Ms.get(s)):r.Un.getTargetData(e,n)}(r,t,Yt(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Os.As(t,e,n?s:P.min(),n?i:tn())).next(t=>({documents:t,Ks:i})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,e){return gr.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var n;return this.Ws.set(e.id,{id:(n=e).id,version:n.version,createTime:bn(n.createTime)}),gr.resolve()}getNamedQuery(t,e){return gr.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,function(t){return{name:t.name,query:Er(t.bundledQuery),readTime:bn(t.readTime)}}(e)),gr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.overlays=new $e(st.comparator),this.Hs=new Map}getOverlay(t,e){return gr.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(n=>{this.Yt(t,e,n)}),gr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Hs.delete(n)),gr.resolve()}getOverlaysForCollection(t,e,n){const r=new Map,s=e.length+1,i=new st(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return gr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new $e((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=new Map,s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=new Map,a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(e,t)),o.size>=r)break;return gr.resolve(o)}Yt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new br(e,n));let s=this.Hs.get(e);void 0===s&&(s=new Set,this.Hs.set(e,s)),s.add(n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Js=new ze(Wr.Ys),this.Xs=new ze(Wr.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,e){const n=new Wr(t,e);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ei(new Wr(t,e))}ni(t,e){t.forEach(t=>this.removeReference(t,e))}si(t){const e=new st(new B([])),n=new Wr(e,t),r=new Wr(e,t+1),s=[];return this.Xs.forEachInRange([n,r],t=>{this.ei(t),s.push(t.key)}),s}ii(){this.Js.forEach(t=>this.ei(t))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new st(new B([])),n=new Wr(e,t),r=new Wr(e,t+1);let s=tn();return this.Xs.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Wr(t,0),n=this.Js.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wr{constructor(t,e){this.key=t,this.oi=e}static Ys(t,e){return st.comparator(t.key,e.key)||j(t.oi,e.oi)}static Zs(t,e){return j(t.oi,e.oi)||st.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new ze(Wr.Ys)}checkEmpty(t){return gr.resolve(0===this.gs.length)}addMutationBatch(t,e,n,r){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const i=new yr(s,e,n,r);this.gs.push(i);for(const o of r)this.ui=this.ui.add(new Wr(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gr.resolve(i)}lookupMutationBatch(t,e){return gr.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.hi(n),s=r<0?0:r;return gr.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return gr.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return gr.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wr(e,0),r=new Wr(e,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([n,r],t=>{const e=this.ai(t.oi);s.push(e)}),gr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ze(j);return e.forEach(t=>{const e=new Wr(t,0),r=new Wr(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,r],t=>{n=n.add(t.oi)})}),gr.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;st.isDocumentKey(s)||(s=s.child(""));const i=new Wr(new st(s),0);let o=new ze(j);return this.ui.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.oi)),!0)},i),gr.resolve(this.li(o))}li(t){const e=[];return t.forEach(t=>{const n=this.ai(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.fi(e.batchId,"removed")),this.gs.shift();let n=this.ui;return gr.forEach(e.mutations,r=>{const s=new Wr(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ui=n})}Qe(t){}containsKey(t,e){const n=new Wr(e,0),r=this.ui.firstAfterOrEqual(n);return gr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.gs.length,gr.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.di=t,this.docs=new $e(st.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.di(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gr.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Qe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():_t.newInvalidDocument(t))}),gr.resolve(n)}getAll(t,e,n){let r=Qe();const s=new st(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||s.readTime.compareTo(n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return gr.resolve(r)}_i(t,e){return gr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Jr(this)}getSize(t){return gr.resolve(this.size)}}class Jr extends xr{constructor(t){super(),this.Tn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Tn.addEntry(t,r)):this.Tn.removeEntry(n)}),gr.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.persistence=t,this.wi=new Ar(t=>Ct(t),It),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.mi=0,this.gi=new Hr,this.targetCount=0,this.yi=Ir.He()}forEachTarget(t,e){return this.wi.forEach((t,n)=>e(n)),gr.resolve()}getLastRemoteSnapshotVersion(t){return gr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gr.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),gr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.mi&&(this.mi=e),gr.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new Ir(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,gr.resolve()}updateTargetData(t,e){return this.Ze(e),gr.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,gr.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.wi.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.wi.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),gr.waitFor(s).next(()=>r)}getTargetCount(t){return gr.resolve(this.targetCount)}getTargetData(t,e){const n=this.wi.get(e)||null;return gr.resolve(n)}addMatchingKeys(t,e,n){return this.gi.ti(e,n),gr.resolve()}removeMatchingKeys(t,e,n){this.gi.ni(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),gr.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),gr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.gi.ri(e);return gr.resolve(n)}containsKey(t,e){return gr.resolve(this.gi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){this.pi={},this.overlays={},this.Nn=new x(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new Yr(this),this.indexManager=new Or,this.qn=function(t){return new Xr(t)}(t=>this.referenceDelegate.Ii(t)),this.O=new _r(e),this.Kn=new Kr(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new zr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.pi[t.toKey()];return n||(n=new Qr(e,this.referenceDelegate),this.pi[t.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new ts(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next(t=>this.referenceDelegate.Ti(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ai(t,e){return gr.or(Object.values(this.pi).map(n=>()=>n.containsKey(t,e)))}}class ts extends pr{constructor(t){super(),this.currentSequenceNumber=t}}class es{constructor(t){this.persistence=t,this.Ri=new Hr,this.Pi=null}static bi(t){return new es(t)}get vi(){if(this.Pi)return this.Pi;throw y()}addReference(t,e,n){return this.Ri.addReference(n,e),this.vi.delete(n.toString()),gr.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.vi.add(n.toString()),gr.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),gr.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach(t=>this.vi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.vi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gr.forEach(this.vi,n=>{const r=st.fromPath(n);return this.Vi(t,r).next(t=>{t||e.removeEntry(r,P.min())})}).next(()=>(this.Pi=null,e.apply(t)))}updateLimboDocument(t,e){return this.Vi(t,e).next(t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())})}Ii(t){return 0}Vi(t,e){return gr.or([()=>gr.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.activeTargetIds=nn()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rs{constructor(){this._r=new ns,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,n){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new ns,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{mr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,e,n,r,s){const i=this.$r(t,e);d("RestConnection","Sending: ",i,n);const o={};return this.Fr(o,r,s),this.Br(t,i,o,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Lr(t,e,n,r,s){return this.Mr(t,e,n,r,s)}Fr(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}$r(t,e){const n=os[t];return`${this.kr}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),i(new _(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);i(new _(e,t.message))}else i(new _(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new _(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Ur(t,e,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["h"])(),i=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.Fr(c.initMessageHeaders,e,n),Object(o["l"])()||Object(o["m"])()||Object(o["i"])()||Object(o["j"])()||Object(o["o"])()||Object(o["h"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");d("Connection","Creating WebChannel: "+u,c);const l=s.createWebChannel(u,c);let h=!1,f=!1;const p=new as({Ar:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(h||(d("Connection","Opening WebChannel transport."),l.open(),h=!0),d("Connection","WebChannel sending:",t),l.send(t))},Rr:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),p.Cr())}),m(l,a["f"].EventType.ERROR,t=>{f||(f=!0,g("Connection","WebChannel transport errored:",t),p.Cr(new _(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];v(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){d("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Ve[t];if(void 0!==e)return qe(e)}(t),n=s.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),f=!0,p.Cr(new _(e,n)),l.close()}else d("Connection","WebChannel received:",n),p.Nr(n)}}),m(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return new gn(t,!0)}class hs{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Sn=t,this.timerId=e,this.qr=n,this.Kr=r,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),t())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e,n,r,s,i,o,a){this.Sn=t,this.Xr=n,this.Zr=r,this.eo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new hs(t,e)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.no===e&&this.po(t,n)},e=>{t(()=>{const t=new _(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)})})}po(t,e){const n=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr(()=>{n(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(t=>{n(()=>this.Io(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget(()=>this.no===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ds extends fs{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.O=s}Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=An(this.O,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?bn(e.readTime):P.min()}(t);return this.listener.To(e,n)}Ao(t){const e={};e.database=Sn(this.O),e.addTarget=function(t,e){let n;const r=e.target;return n=kt(r)?{documents:Rn(t,r)}:{query:jn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=yn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=mn(t,e.snapshotVersion.toTimestamp())),n}(this.O,t);const n=Ln(this.O,t);n&&(e.labels=n),this.fo(e)}Ro(t){const e={};e.database=Sn(this.O),e.removeTarget=t,this.fo(e)}}class ps extends fs{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const e=Nn(t.writeResults,t.commitTime),n=bn(t.commitTime);return this.listener.Vo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=Sn(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>xn(this.O,t))};this.fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.eo.Mr(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}Lr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.eo.Lr(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}terminate(){this.Co=!0}}class ms{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo("Connection failed 1 times. Most recent error: "+t.toString()),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(p(e),this.Oo=!1):d("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(t=>{n.enqueueAndForget(async()=>{Ss(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Ko.add(4),await bs(e),e.Qo.set("Unknown"),e.Ko.delete(4),await vs(e)}(this))})}),this.Qo=new ms(n,r)}}async function vs(t){if(Ss(t))for(const e of t.Go)await e(!0)}async function bs(t){for(const e of t.Go)await e(!1)}function ws(t,e){const n=b(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),Cs(n)?Os(n):Gs(n).co()&&Es(n,e))}function _s(t,e){const n=b(t),r=Gs(n);n.qo.delete(e),r.co()&&Ts(n,e),0===n.qo.size&&(r.co()?r.ho():Ss(n)&&n.Qo.set("Unknown"))}function Es(t,e){t.Wo.Z(e.targetId),Gs(t).Ao(e)}function Ts(t,e){t.Wo.Z(e),Gs(t).Ro(e)}function Os(t){t.Wo=new ln({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Gs(t).start(),t.Qo.Mo()}function Cs(t){return Ss(t)&&!Gs(t).oo()&&t.qo.size>0}function Ss(t){return 0===b(t).Ko.size}function Is(t){t.Wo=void 0}async function ks(t){t.qo.forEach((e,n)=>{Es(t,e)})}async function As(t,e){Is(t),Cs(t)?(t.Qo.Bo(e),Os(t)):t.Qo.set("Unknown")}async function xs(t,e,n){if(t.Qo.set("Online"),e instanceof cn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qo.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qo.delete(r),t.Wo.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ns(t,n)}else if(e instanceof on?t.Wo.ct(e):e instanceof an?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(P.min()))try{const e=await Fr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Wo.yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.qo.get(r);s&&t.qo.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qo.get(e);if(!n)return;t.qo.set(e,n.withResumeToken(K.EMPTY_BYTE_STRING,n.snapshotVersion)),Ts(t,e);const r=new wr(n.target,e,1,n.sequenceNumber);Es(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Ns(t,e)}}async function Ns(t,e,n){if(!mr(e))throw e;t.Ko.add(1),await bs(t),t.Qo.set("Offline"),n||(n=()=>Fr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await vs(t)})}function Rs(t,e){return e().catch(n=>Ns(t,n,e))}async function js(t){const e=b(t),n=Ks(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Ds(e);)try{const t=await Br(e.localStore,r);if(null===t){0===e.Uo.length&&n.ho();break}r=t.batchId,Ls(e,t)}catch(t){await Ns(e,t)}Ps(e)&&Ms(e)}function Ds(t){return Ss(t)&&t.Uo.length<10}function Ls(t,e){t.Uo.push(e);const n=Ks(t);n.co()&&n.bo&&n.vo(e.mutations)}function Ps(t){return Ss(t)&&!Ks(t).oo()&&t.Uo.length>0}function Ms(t){Ks(t).start()}async function Fs(t){Ks(t).Do()}async function Vs(t){const e=Ks(t);for(const n of t.Uo)e.vo(n.mutations)}async function Us(t,e,n){const r=t.Uo.shift(),s=vr.from(r,e,n);await Rs(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await js(t)}async function Bs(t,e){e&&Ks(t).bo&&await async function(t,e){if(n=e.code,Be(n)&&n!==w.ABORTED){const n=t.Uo.shift();Ks(t).ao(),await Rs(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await js(t)}var n}(t,e),Ps(t)&&Ms(t)}async function qs(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=Ss(n);n.Ko.add(3),await bs(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await vs(n)}async function $s(t,e){const n=b(t);e?(n.Ko.delete(2),await vs(n)):e||(n.Ko.add(2),await bs(n),n.Qo.set("Unknown"))}function Gs(t){return t.zo||(t.zo=function(t,e,n){const r=b(t);return r.No(),new ds(e,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Pr:ks.bind(null,t),vr:As.bind(null,t),To:xs.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),Cs(t)?Os(t):t.Qo.set("Unknown")):(await t.zo.stop(),Is(t))})),t.zo}function Ks(t){return t.Ho||(t.Ho=function(t,e,n){const r=b(t);return r.No(),new ps(e,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(t.datastore,t.asyncQueue,{Pr:Fs.bind(null,t),vr:Bs.bind(null,t),So:Vs.bind(null,t),Vo:Us.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await js(t)):(await t.Ho.stop(),t.Uo.length>0&&(d("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zs{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new zs(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hs(t,e){if(p("AsyncQueue",`${e}: ${t}`),mr(t))return new _(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=Je(),this.sortedSet=new $e(this.comparator)}static emptySet(t){return new Ws(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ws))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ws;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.Jo=new $e(st.comparator)}track(t){const e=t.doc.key,n=this.Jo.get(e);n?0!==t.type&&3===n.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==n.type?this.Jo=this.Jo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jo=this.Jo.remove(e):1===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):y():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal((e,n)=>{t.push(n)}),t}}class Xs{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Xs(t,e,Ws.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&te(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.Xo=void 0,this.listeners=[]}}class Ys{constructor(){this.queries=new Ar(t=>ee(t),te),this.onlineState="Unknown",this.Zo=new Set}}async function Zs(t,e){const n=b(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Js),s)try{i.Xo=await n.onListen(r)}catch(t){const n=Hs(t,`Initialization of query '${ne(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.tc(n.onlineState),i.Xo&&e.ec(i.Xo)&&ri(n)}async function ti(t,e){const n=b(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ei(t,e){const n=b(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ec(s)&&(r=!0);e.Xo=s}}r&&ri(n)}function ni(t,e,n){const r=b(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ri(t){t.Zo.forEach(t=>{t.next()})}class si{constructor(t,e,n){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uc||!n)&&(!t.docs.isEmpty()||"Offline"===e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=Xs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(t){this.key=t}}class oi{constructor(t){this.key=t}}class ai{constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=tn(),this.mutatedKeys=tn(),this.mc=se(t),this.gc=new Ws(this.mc)}get yc(){return this.dc}Ic(t,e){const n=e?e.Ec:new Qs,r=e?e.gc:this.gc;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=zt(this.query)&&r.size===this.query.limit?r.last():null,c=Ht(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=re(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Tc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.mc(l,a)>0||c&&this.mc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),zt(this.query)||Ht(this.query))for(;i.size>this.query.limit;){const t=zt(this.query)?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{gc:i,Ec:n,ks:o,mutatedKeys:s}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const s=t.Ec.Yo();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.mc(t.doc,e.doc)),this.Ac(n);const i=e?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==s.length||a?{snapshot:new Xs(this.query,t.gc,r,s,t.mutatedKeys,0===o,a,!1),Pc:i}:{Pc:i}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Qs,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach(t=>this.dc=this.dc.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.dc=this.dc.delete(t)),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=tn(),this.gc.forEach(t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))});const e=[];return t.forEach(t=>{this.wc.has(t)||e.push(new oi(t))}),this.wc.forEach(n=>{t.has(n)||e.push(new ii(n))}),e}vc(t){this.dc=t.Ks,this.wc=tn();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return Xs.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class ci{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ui{constructor(t){this.key=t,this.Sc=!1}}class li{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Dc={},this.Cc=new Ar(t=>ee(t),te),this.Nc=new Map,this.xc=new Set,this.kc=new $e(st.comparator),this.Oc=new Map,this.Mc=new Hr,this.$c={},this.Fc=new Map,this.Bc=Ir.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function hi(t,e){const n=xi(t);let r,s;const i=n.Cc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Vc();else{const t=await qr(n.localStore,Yt(e));n.isPrimaryClient&&ws(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await fi(n,e,r,"current"===i)}return s}async function fi(t,e,n,r){t.Uc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ic(n);s.ks&&(s=await Gr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Ic(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Oi(t,e.targetId,o.Pc),o.snapshot}(t,e,n,r);const s=await Gr(t.localStore,e,!0),i=new ai(e,s.Ks),o=i.Ic(s.documents),a=sn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Oi(t,n,c.Pc);const u=new ci(e,n,i);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function di(t,e){const n=b(t),r=n.Cc.get(e),s=n.Nc.get(r.targetId);if(s.length>1)return n.Nc.set(r.targetId,s.filter(t=>!te(t,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $r(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_s(n.remoteStore,r.targetId),Ei(n,r.targetId)}).catch(kr)):(Ei(n,r.targetId),await $r(n.localStore,r.targetId,!0))}async function pi(t,e,n){const r=Ni(t);try{const t=await function(t,e){const n=b(t),r=L.now(),s=e.reduce((t,e)=>t.add(e.key),tn());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Us.Es(t,s).next(s=>{i=s;const o=[];for(const t of e){const e=ke(t,i.get(t.key));null!=e&&o.push(new Re(t.key,e,wt(e.value.mapValue),Te.exists(!0)))}return n.gs.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.$c[t.currentUser.toKey()];r||(r=new $e(j)),r=r.insert(e,n),t.$c[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ii(r,t.changes),await js(r.remoteStore)}catch(t){const e=Hs(t,"Failed to persist write");n.reject(e)}}async function gi(t,e){const n=b(t);try{const t=await Vr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Oc.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Sc=!0:t.modifiedDocuments.size>0?v(r.Sc):t.removedDocuments.size>0&&(v(r.Sc),r.Sc=!1))}),await Ii(n,t,e)}catch(t){await kr(t)}}function mi(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Cc.forEach((n,r)=>{const s=r.view.tc(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.tc(e)&&(r=!0)}),r&&ri(n)}(r.eventManager,e),t.length&&r.Dc.To(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yi(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Oc.get(e),i=s&&s.key;if(i){let t=new $e(st.comparator);t=t.insert(i,_t.newNoDocument(i,P.min()));const n=tn().add(i),s=new rn(P.min(),new Map,new ze(j),t,n);await gi(r,s),r.kc=r.kc.remove(i),r.Oc.delete(e),Si(r)}else await $r(r.localStore,e,!1).then(()=>Ei(r,e,n)).catch(kr)}async function vi(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Mr(n.localStore,e);_i(n,r,null),wi(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ii(n,t)}catch(t){await kr(t)}}async function bi(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.gs.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.gs.removeMutationBatch(t,e))).next(()=>n.gs.performConsistencyCheck(t)).next(()=>n.Us.Es(t,r))})}(r.localStore,e);_i(r,e,n),wi(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ii(r,t)}catch(n){await kr(n)}}function wi(t,e){(t.Fc.get(e)||[]).forEach(t=>{t.resolve()}),t.Fc.delete(e)}function _i(t,e,n){const r=b(t);let s=r.$c[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.$c[r.currentUser.toKey()]=s}}function Ei(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(e=>{t.Mc.containsKey(e)||Ti(t,e)})}function Ti(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);null!==n&&(_s(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Si(t))}function Oi(t,e,n){for(const r of n)r instanceof ii?(t.Mc.addReference(r.key,e),Ci(t,r)):r instanceof oi?(d("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||Ti(t,r.key)):y()}function Ci(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(d("SyncEngine","New document in limbo: "+n),t.xc.add(r),Si(t))}function Si(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new st(B.fromString(e)),r=t.Bc.next();t.Oc.set(r,new ui(n)),t.kc=t.kc.insert(n,r),ws(t.remoteStore,new wr(Yt(Kt(n.path)),r,2,x.A))}}async function Ii(t,e,n){const r=b(t),s=[],i=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((t,a)=>{o.push(r.Uc(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Rr.Ss(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Dc.To(s),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>gr.forEach(e,e=>gr.forEach(e.vs,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>gr.forEach(e.Vs,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!mr(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ms.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,s)}}}(r.localStore,i))}async function ki(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Pr(n.localStore,e);n.currentUser=e,function(t,e){t.Fc.forEach(t=>{t.forEach(t=>{t.reject(new _(w.CANCELLED,e))})}),t.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ii(n,t.qs)}}function Ai(t,e){const n=b(t),r=n.Oc.get(e);if(r&&r.Sc)return tn().add(r.key);{let t=tn();const r=n.Nc.get(e);if(!r)return t;for(const e of r){const r=n.Cc.get(e);t=t.unionWith(r.view.yc)}return t}}function xi(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ai.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yi.bind(null,e),e.Dc.To=ei.bind(null,e.eventManager),e.Dc.qc=ni.bind(null,e.eventManager),e}function Ni(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bi.bind(null,e),e}class Ri{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=ls(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return Lr(this.persistence,new jr,t.initialUser,this.O)}jc(t){return new Zr(es.bi,this.O)}Gc(t){return new rs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ji{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>mi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ki.bind(null,this.syncEngine),await $s(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ys}createDatastore(t){const e=ls(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new cs(r));var r;return function(t,e,n,r){return new gs(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>mi(this.syncEngine,t,0),i=is.Vt()?new is:new ss,new ys(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new li(t,e,n,r,s,i);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await bs(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Pi(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Pr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Mi(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fi(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>qs(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>qs(e.remoteStore,n)),t.onlineComponents=e}async function Fi(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Pi(t,new Ri)),t.offlineComponents}async function Vi(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Mi(t,new ji)),t.onlineComponents}function Ui(t){return Vi(t).then(t=>t.syncEngine)}async function Bi(t){const e=await Vi(t),n=e.eventManager;return n.onListen=hi.bind(null,e.syncEngine),n.onUnlisten=di.bind(null,e.syncEngine),n}function qi(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Di({next:n=>{e.enqueueAndForget(()=>ti(t,o)),n.fromCache&&"server"===r.source?s.reject(new _(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new si(n,i,{includeMetadataChanges:!0,uc:!0});return Zs(t,o)}(await Bi(t),t.asyncQueue,e,n,r)),r.promise}const $i=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e,n){if(!n)throw new _(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ki(t,e,n,r){if(!0===e&&!0===r)throw new _(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zi(t){if(!st.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hi(t){if(st.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wi(t);throw new _(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new _(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ki("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xi({}),this._settingsFrozen=!1,t instanceof tt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId)}(t))}get app(){if(!this._app)throw new _(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xi(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new O;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new I(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new _(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$i.get(t);e&&(d("ComponentProvider","Removing Datastore"),$i.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yi(this.firestore,t,this._key)}}class Zi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zi(this.firestore,t,this._query)}}class to extends Zi{constructor(t,e,n){super(t,e,Kt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yi(this.firestore,null,new st(t))}withConverter(t){return new to(this.firestore,t,this._path)}}function eo(t,e,...n){if(t=Object(o["f"])(t),Gi("collection","path",e),t instanceof Ji){const r=B.fromString(e,...n);return Hi(r),new to(t,null,r)}{if(!(t instanceof Yi||t instanceof to))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Hi(r),new to(t.firestore,null,r)}}function no(t,e,...n){if(t=Object(o["f"])(t),1===arguments.length&&(e=R.R()),Gi("doc","path",e),t instanceof Ji){const r=B.fromString(e,...n);return zi(r),new Yi(t,null,new st(r))}{if(!(t instanceof Yi||t instanceof to))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return zi(r),new Yi(t.firestore,t instanceof to?t.converter:null,new st(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new hs(this,"async_queue_retry"),this.yu=()=>{const t=us();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=us();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=us();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise(()=>{});const e=new E;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.lu.push(t),this.Eu()))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!mr(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(t){const e=this.hu.then(()=>(this.wu=!0,t().catch(t=>{this._u=t,this.wu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.wu=!1,t))));return this.hu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const r=zs.createAndSchedule(this,t,e,n,t=>this.Tu(t));return this.du.push(r),r}pu(){this._u&&y()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then(()=>{this.du.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()})}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class so extends Ji{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ro,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ao(this),this._firestoreClient.terminate()}}function io(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function oo(t){return t._firestoreClient||ao(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ao(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Z(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Li(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new uo(K.fromBase64String(t))}catch(t){throw new _(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new uo(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=/^__.*__$/;class po{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ne(t,this.data,e,this.fieldTransforms)}}function go(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class mo{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.O=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new mo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Cu:!1});return r.Nu(t),r}xu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return Io(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(go(this.Vu)&&fo.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class yo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=n||ls(t)}Fu(t,e,n,r=!1){return new mo({Vu:t,methodName:e,$u:n,path:$.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function vo(t){const e=t._freezeSettings(),n=ls(t._databaseId);return new yo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bo(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);To("Data must be an object, but it was:",o,r);const a=_o(r,o);let c,u;if(i.merge)c=new G(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Oo(e,r,n);if(!o.contains(s))throw new _(w.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ko(t,s)||t.push(s)}c=new G(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new po(new bt(a),c,u)}function wo(t,e){if(Eo(t=Object(o["f"])(t)))return To("Unsupported field value:",e,t),_o(t,e);if(t instanceof lo)return function(t,e){if(!go(e.Vu))throw e.Ou(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ou(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=wo(s,e.ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["f"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ce(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:mn(e.O,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:mn(e.O,n)}}if(t instanceof ho)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof uo)return{bytesValue:yn(e.O,t._byteString)};if(t instanceof Yi){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou("Unsupported field value: "+Wi(t))}(t,e)}function _o(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,(t,r)=>{const s=wo(r,e.Du(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function Eo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof ho||t instanceof uo||t instanceof Yi||t instanceof lo)}function To(t,e,n){if(!Eo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Wi(n);throw"an object"===r?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function Oo(t,e,n){if((e=Object(o["f"])(e))instanceof co)return e._internalPath;if("string"==typeof e)return So(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const Co=new RegExp("[~\\*/\\[\\]]");function So(t,e,n){if(e.search(Co)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new co(...e.split("."))._internalPath}catch(r){throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new _(w.INVALID_ARGUMENT,a+t+c)}function ko(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new xo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(No("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class xo extends Ao{data(){return super.data()}}function No(t,e){return"string"==typeof e?So(t,e):e instanceof co?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jo extends Ao{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(No("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Do extends jo{data(t={}){return super.data(t)}}class Lo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ro(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Do(this._firestore,this._userDataWriter,n.key,n,new Ro(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Do(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ro(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Do(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ro(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Po(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Po(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mo(t){if(Ht(t)&&0===t.explicitOrderBy.length)throw new _(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Q(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return F(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ho(W(t.latitude),W(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=J(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=H(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);v(Gn(n));const r=new tt(n.get(1),n.get(3)),s=new st(n.popFirst(5));return r.isEqual(e)||p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Uo extends Fo{constructor(t){super(),this.firestore=t}convertBytes(t){return new uo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yi(this.firestore,null,e)}}function Bo(t){t=Qi(t,Zi);const e=Qi(t.firestore,so),n=oo(e),r=new Uo(e);return Mo(t._query),qi(n,t._query).then(n=>new Lo(e,r,t,n))}function qo(t,e,n){t=Qi(t,Yi);const r=Qi(t.firestore,so),s=Vo(t.converter,e,n);return Go(r,[bo(vo(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Te.none())])}function $o(t){return Go(Qi(t.firestore,so),[new Pe(t._key,Te.none())])}function Go(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>pi(await Ui(t),e,n)),n.promise}(oo(t),e)}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new s["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new so(r,new C(t.getProvider("auth-internal")),new A(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC")),Object(r["g"])(c,"3.4.5",t),Object(r["g"])(c,"3.4.5","esm2017")}()}).call(this,n("4362"))},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return I})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return g})),n.d(e,"j",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return y}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return l().indexOf("MSAppHost/")>=0}function v(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?T(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new _(r,o,n);return a}}function T(t,e){return t.replace(O,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(S(n)&&S(i)){if(!C(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var s="firebase",i="9.6.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(s,i,"app")},"3f4e":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("abc5");const s="devtools-plugin:setup",i="plugin:settings:set";class o{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const i in t.settings){const e=t.settings[i];n[i]=e.defaultValue}const r="__vue-devtools-plugin-settings__"+t.id;let s=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(s,e)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(o){}s=t}},e&&e.on(i,(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function a(t,e){const n=t,i=Object(r["b"])(),a=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!a||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const t=c?new o(n,a):null,r=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else a.emit(s,t,e)}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"b",(function(){return Y}));var r=n("7a23"),s=n("3f4e"),i="store";function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,a={};o(i,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return a[n]()},enumerable:!0})})),t._state=Object(r["z"])({data:e}),t.strict&&w(t),s&&n&&t._withCommit((function(){s.data=null}))}function p(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[o]=r),!i&&!s){var a=_(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,o,n);r.forEachMutation((function(e,n){var r=o+n;y(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,s=e.handler||e;v(t,r,s,u)})),r.forEachGetter((function(e,n){var r=o+n;b(t,r,e,u)})),r.forEachChild((function(r,i){p(t,e,n.concat(i),r,s)}))}function g(t,e,n){var r=""===e,s={dispatch:r?t.dispatch:function(n,r,s){var i=E(n,r,s),o=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,o);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?t.commit:function(n,r,s){var i=E(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return _(t.state,n)}}}),s}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function y(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,r.state,e)}))}function v(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["I"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function _(t,e){return e.reduce((function(t,e){return t[e]}),t)}function E(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var T="vuex bindings",O="vuex:mutations",C="vuex:actions",S="vuex",I=0;function k(t,e){Object(s["a"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[T]},(function(n){n.addTimelineLayer({id:O,label:"Vuex Mutations",color:A}),n.addTimelineLayer({id:C,label:"Vuex Actions",color:A}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===S)if(n.filter){var r=[];L(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[D(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId;m(e,r),n.state=P(F(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit((function(){n.set(e._state.data,s,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:O,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=I++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:C,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},s=Date.now()-t._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:C,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var A=8702998,x=6710886,N=16777215,R={label:"namespaced",textColor:N,backgroundColor:x};function j(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function D(t,e){return{id:e||"root",label:j(e),tags:t.namespaced?[R]:[],children:Object.keys(t._children).map((function(n){return D(t._children[n],e+n+"/")}))}}function L(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[R]:[]}),Object.keys(e._children).forEach((function(s){L(t,e._children[s],n,r+s+"/")}))}function P(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=M(e);s.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?j(t):t,editable:!1,value:V((function(){return i[t]}))}}))}return s}function M(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach((function(t){s[t]||(s[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),s=s[t]._custom.value})),s[i]=V((function(){return t[n]}))}else e[n]=V((function(){return t[n]}))})),e}function F(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,s){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function V(t){try{return t()}catch(e){return e}}var U=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},U.prototype.addChild=function(t,e){this._children[t]=e},U.prototype.removeChild=function(t){delete this._children[t]},U.prototype.getChild=function(t){return this._children[t]},U.prototype.hasChild=function(t){return t in this._children},U.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},U.prototype.forEachChild=function(t){o(this._children,t)},U.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},U.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},U.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(U.prototype,B);var q=function(t){this.register([],t,!1)};function $(t,e,n){if(H(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(t.concat(r),e.getChild(r),n.modules[r])}}q.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},q.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},q.prototype.update=function(t){$([],this.root,t)},q.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),H(t,e);var s=new U(e,n);if(0===t.length)this.root=s;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],s)}e.modules&&o(e.modules,(function(e,s){r.register(t.concat(s),e,n)}))},q.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},q.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var G={assert:function(t){return"function"===typeof t},expected:"function"},K={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},z={getters:G,mutations:G,actions:K};function H(t,e){Object.keys(z).forEach((function(n){if(e[n]){var r=z[n];o(e[n],(function(e,s){u(r.assert(e),W(t,n,s,e,r.expected))}))}}))}function W(t,e,n,r,s){var i=e+" should be "+s+' but "'+e+"."+n+'"';return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function Q(t){return new X(t)}var X=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var s=e.strict;void 0===s&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return l.call(o,t,e,n)},this.strict=s;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},J={state:{configurable:!0}};X.prototype.install=function(t,e){t.provide(e||i,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&k(t,this)},J.state.get=function(){return this._state.data},J.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(t,e,n){var r=this,s=E(t,e,n),i=s.type,o=s.payload,a=s.options,c={type:i,payload:o},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},X.prototype.dispatch=function(t,e){var n=this,r=E(t,e),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+s)},X.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},X.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},X.prototype.watch=function(t,e,n){var s=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["I"])((function(){return t(s.state,s.getters)}),e,Object.assign({},n))},X.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},X.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},X.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=_(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},X.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},X.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},X.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(X.prototype,J);var Y=et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=nt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[r].vuex=!0})),n}));et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=nt(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,s=e.val;s=t+s,n[r]=function(){if(!t||nt(this.$store,"mapGetters",t)){if(s in this.$store.getters)return this.$store.getters[s];console.error("[vuex] unknown getter: "+s)}},n[r].vuex=!0})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=nt(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n}));function Z(t){return tt(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function tt(t){return Array.isArray(t)||a(t)}function et(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function nt(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return ee})),n.d(e,"c",(function(){return te})),n.d(e,"d",(function(){return Yt}));var r=n("589b"),s=n("1fd5"),i=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends s["c"]{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function d(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function v(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new l("canceled","User canceled the upload/download.")}function w(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function _(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function O(){return new l("no-download-url","The given file does not have any download URLs.")}function C(t){return new l("invalid-argument",t)}function S(){return new l("app-deleted","The Firebase app was deleted.")}function I(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function k(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function A(t){throw new l("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=x.makeFromUrl(t,e)}catch(r){return new x(t,"")}if(""===n.path)return n;throw _(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},b=[{regex:a,indices:c,postModify:s},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<b.length;o++){const e=b[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let s=r[e.indices.path];s||(s=""),n=new x(t,s),e.postModify(n);break}}if(null==n)throw w(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){s=setTimeout(()=>{s=null,t(d,c())},e)}function f(){i&&clearTimeout(i)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let s;r<64&&(r*=2),1===a?(a=2,s=0):s=1e3*(r+Math.random()),h(s)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function j(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return void 0!==t}function L(t){return"object"===typeof t&&!Array.isArray(t)}function P(t){return"string"===typeof t||t instanceof String}function M(t){return F()&&t instanceof Blob}function F(){return"undefined"!==typeof Blob}function V(t,e,n,r){if(r<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function B(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(q||(q={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(t,e,n,r,s,i,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===q.NO_ERROR,s=n.getStatus();if(!e||this.isRetryStatusCode_(s)){const e=n.getErrorCode()===q.ABORT;return void t(!1,new G(!1,null,e))}const i=-1!==this.successCodes_.indexOf(s);t(!0,new G(i,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());D(t)?n(t):n()}catch(i){r(i)}else if(null!==s){const t=f();t.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,t)):r(t)}else if(e.canceled){const t=this.appDelete_?S():b();r(t)}else{const t=v();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=R(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&j(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),s=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||s}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function z(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function H(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,r,s,i){const o=B(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return H(c,e),K(c,n),z(c,i),W(c,r),new $(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=X();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(F())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Y(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(t,e){this.data=t,this.contentType=e||null}}function nt(t,e){switch(t){case tt.RAW:return new et(rt(e));case tt.BASE64:case tt.BASE64URL:return new et(it(t,e));case tt.DATA_URL:return new et(at(e),ct(e))}throw f()}function rt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const s=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(s){const s=r,i=t.charCodeAt(++n);r=65536|(1023&s)<<10|1023&i,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function st(t){let e;try{e=decodeURIComponent(t)}catch(n){throw k(tt.DATA_URL,"Malformed data URL.")}return rt(e)}function it(t,e){switch(t){case tt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw k(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case tt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw k(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(e)}catch(s){throw k(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ot{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw k(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ut(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function at(t){const e=new ot(t);return e.base64?it(tt.BASE64,e.rest):st(e.rest)}function ct(t){const e=new ot(t);return e.contentType}function ut(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){let n=0,r="";M(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(M(this.data_)){const n=this.data_,r=Y(n,t,e);return null===r?null:new lt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new lt(n,!0)}}static getBlob(...t){if(F()){const e=t.map(t=>t instanceof lt?t.data_:t);return new lt(J.apply(null,e))}{const e=t.map(t=>P(t)?nt(tt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let s=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[s++]=t[e]}),new lt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){let e;try{e=JSON.parse(t)}catch(n){return null}return L(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function dt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function pt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){return e}class mt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||gt}}let yt=null;function vt(t){return!P(t)||t.length<2?t:pt(t)}function bt(){if(yt)return yt;const t=[];function e(t,e){return vt(e)}t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));const n=new mt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const s=new mt("size");return s.xform=r,t.push(s),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),yt=t,yt}function wt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],s=new x(n,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _t(t,e,n){const r={type:"file"},s=n.length;for(let i=0;i<s;i++){const t=n[i];r[t.local]=t.xform(r,e[t.server])}return wt(r,t),r}function Et(t,e,n){const r=ht(e);if(null===r)return null;const s=r;return _t(t,s,n)}function Tt(t,e,n,r){const s=ht(e);if(null===s)return null;if(!P(s["downloadTokens"]))return null;const i=s["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),c=a.map(e=>{const s=t["bucket"],i=t["fullPath"],a="/b/"+o(s)+"/o/"+o(i),c=U(a,n,r),u=B({alt:"media",token:e});return c+u});return c[0]}function Ot(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){if(!t)throw f()}function It(t,e){function n(n,r){const s=Et(t,r,e);return St(null!==s),s}return n}function kt(t,e){function n(n,r){const s=Et(t,r,e);return St(null!==s),Tt(s,r,t.host,t._protocol)}return n}function At(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?y(t.path):n,r.serverResponse=n.serverResponse,r}return e}function xt(t){const e=At(t);function n(n,r){let s=e(n,r);return 404===n.getStatus()&&(s=d(t.path)),s.serverResponse=r.serverResponse,s}return n}function Nt(t,e,n){const r=e.fullServerUrl(),s=U(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ct(s,i,kt(t,n),o);return a.errorHandler=xt(e),a}function Rt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function jt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Rt(null,e)),r}function Dt(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=jt(e,r,s),l=Ot(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=lt.getBlob(h,r,f);if(null===d)throw T();const p={name:u["fullPath"]},g=U(i,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new Ct(g,m,It(t,n),y);return v.urlParams=p,v.headers=o,v.body=d.uploadData(),v.errorHandler=At(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Lt=null;class Pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=q.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=q.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=q.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw A("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw A("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw A("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw A("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw A("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Mt extends Pt{initXhr(){this.xhr_.responseType="text"}}function Ft(){return Lt?Lt():new Mt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(t,e){this._service=t,this._location=e instanceof x?e:x.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Vt(t,e)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pt(this._location.path)}get storage(){return this._service}get parent(){const t=ft(this._location.path);if(null===t)return null;const e=new x(this._location.bucket,t);return new Vt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw I(t)}}function Ut(t,e,n){t._throwIfRoot("uploadBytes");const r=Dt(t.storage,t._location,bt(),new lt(e,!0),n);return t.storage.makeRequestWithTokens(r,Ft).then(e=>({metadata:e,ref:t}))}function Bt(t){t._throwIfRoot("getDownloadURL");const e=Nt(t.storage,t._location,bt());return t.storage.makeRequestWithTokens(e,Ft).then(t=>{if(null===t)throw O();return t})}function qt(t,e){const n=dt(t._location.path,e),r=new x(t._location.bucket,n);return new Vt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return/^[A-Za-z]+:\/\//.test(t)}function Gt(t,e){return new Vt(t,e)}function Kt(t,e){if(t instanceof Wt){const n=t;if(null==n._bucket)throw E();const r=new Vt(n,n._bucket);return null!=e?Kt(r,e):r}return void 0!==e?qt(t,e):t}function zt(t,e){if(e&&$t(e)){if(t instanceof Wt)return Gt(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return Kt(t,e)}function Ht(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:x.makeFromBucketSpec(n,t)}class Wt{constructor(t,e,n,r,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):Ht(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=Ht(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Vt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new N(S());{const s=Q(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Qt="@firebase/storage",Xt="0.9.2",Jt="storage";function Yt(t,e,n){return t=Object(s["f"])(t),Ut(t,e,n)}function Zt(t){return t=Object(s["f"])(t),Bt(t)}function te(t,e){return t=Object(s["f"])(t),zt(t,e)}function ee(t=Object(r["e"])(),e){t=Object(s["f"])(t);const n=Object(r["b"])(t,Jt),i=n.getImmediate({identifier:e});return i}function ne(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wt(n,s,i,e,r["a"])}function re(){Object(r["c"])(new i["a"](Jt,ne,"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(Qt,Xt,""),Object(r["g"])(Qt,Xt,"esm2017")}re()},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return H})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("22e5"),s=n("e691"),i=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.17",l=new s["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",O="@firebase/messaging",C="@firebase/messaging-compat",S="@firebase/performance",I="@firebase/performance-compat",k="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",j="@firebase/firestore-compat",D="firebase",L="9.6.7",P="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[O]:"fire-fcm",[C]:"fire-fcm-compat",[S]:"fire-perf",[I]:"fire-perf-compat",[k]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,V=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(V.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of F.values())U(n,t);return!0}function q(t,e){return t.container.getProvider(e)}function $(t,e,n=P){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new i["b"]("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=L;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw K.create("bad-app-name",{appName:String(s)});const o=F.get(s);if(o){if(Object(i["e"])(t,o.options)&&Object(i["e"])(n,o.config))return o;throw K.create("duplicate-app",{appName:s})}const a=new r["b"](s);for(const r of V.values())a.addComponent(r);const c=new z(t,n,a);return F.set(s,c),c}function Q(t=P){const e=F.get(t);if(!e)throw K.create("no-app",{appName:t});return e}function X(t,e,n){var s;let i=null!==(s=M[t])&&void 0!==s?s:t;n&&(i+="-"+n);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),X(c,u,t),X(c,u,"esm2017"),X("fire-js","")}J("")},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return G}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=t=>s?Symbol(t):"_vr_"+t,o=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const g=()=>{};const m=/\/$/,y=t=>t.replace(m,"");function v(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function _(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&E(e.matched[r],n.matched[s])&&T(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function E(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!O(t[n],e[n]))return!1;return!0}function O(t,e){return Array.isArray(t)?C(t,e):Array.isArray(e)?C(e,t):t===e}function C(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var I,k;(function(t){t["pop"]="pop",t["push"]="push"})(I||(I={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(k||(k={}));function A(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),y(t)}const x=/^[^#]+#/;function N(t,e){return t.replace(x,"#")+e}function R(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const j=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=R(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const P=new Map;function M(t,e){P.set(t,e)}function F(t){const e=P.get(t);return P.delete(t),e}let V=()=>location.protocol+"//"+location.host;function U(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+r+s}function B(t,e,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=U(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach(t=>{t(n.value,c,{delta:l,type:I.pop,direction:l?l>0?k.forward:k.back:k.unknown})})};function c(){o=n.value}function u(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:j()}),"")}function h(){for(const t of i)t();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?j():null}}function $(t){const{history:e,location:n}=window,r={value:U(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:V()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=d({},e.state,q(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function a(t,n){const o=d({},s.value,e.state,{forward:t,scroll:j()});i(o.current,o,!0);const a=d({},q(r.value,t,null),{position:o.position+1},n);i(t,a,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:a,replace:o}}function G(t){t=A(t);const e=$(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=d({location:"",base:t,go:r,createHref:N.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function K(t){return"string"===typeof t||t&&"object"===typeof t}function z(t){return"string"===typeof t||"symbol"===typeof t}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=i("nf");var Q;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Q||(Q={}));function X(t,e){return d(new Error,{type:t,[W]:!0},e)}function J(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(tt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;i.push({name:t,repeatable:n,optional:a});const h=c||Y;if(h!==Y){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),s+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:i,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=nt(r[n],s[n]);if(t)return t;n++}return s.length-r.length}const st={type:0,value:""},it=/[a-zA-Z0-9_]/;function ot(t){if(!t)return[[]];if("/"===t)return[[st]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:it.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function at(t,e,n){const r=et(ot(t.path),n);const s=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function ct(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),s&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)i(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:g}function o(t){if(z(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let s,i,o,a={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw X(1,{location:t});o=s.record.name,a=d(ut(e.params,s.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),i=s.stringify(a)}else if("path"in t)i=t.path,s=n.find(t=>t.re.test(i)),s&&(a=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!s)throw X(1,{location:t,currentLocation:e});o=s.record.name,a=d({},e.params,t.params),i=s.stringify(a)}const c=[];let u=s;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:i,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>i(t)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,yt=/\//g,vt=/=/g,bt=/\?/g,wt=/\+/g,_t=/%5B/g,Et=/%5D/g,Tt=/%5E/g,Ot=/%60/g,Ct=/%7B/g,St=/%7C/g,It=/%7D/g,kt=/%20/g;function At(t){return encodeURI(""+t).replace(St,"|").replace(_t,"[").replace(Et,"]")}function xt(t){return At(t).replace(Ct,"{").replace(It,"}").replace(Tt,"^")}function Nt(t){return At(t).replace(wt,"%2B").replace(kt,"+").replace(gt,"%23").replace(mt,"%26").replace(Ot,"`").replace(Ct,"{").replace(It,"}").replace(Tt,"^")}function Rt(t){return Nt(t).replace(vt,"%3D")}function jt(t){return At(t).replace(gt,"%23").replace(bt,"%3F")}function Dt(t){return null==t?"":jt(t).replace(yt,"%2F")}function Lt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(wt," "),n=t.indexOf("="),i=Lt(n<0?t:t.slice(0,n)),o=n<0?null:Lt(t.slice(n+1));if(i in e){let t=e[i];Array.isArray(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=Array.isArray(r)?r.map(t=>t&&Nt(t)):[r&&Nt(r)];s.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Vt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ut(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(X(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const s=[];for(const i of t)for(const t in i.components){let o=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(qt(o)){const a=o.__vccOpts||o,c=a[e];c&&s.push(Ut(c,n,r,i,t))}else{let a=o();0,s.push(()=>a.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const o=f(s)?s.default:s;i.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&Ut(c,n,r,i,t)()}))}}return s}function qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function $t(t){const e=Object(r["o"])(c),n=Object(r["o"])(u),s=Object(r["c"])(()=>e.resolve(Object(r["F"])(t.to))),i=Object(r["c"])(()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(E.bind(null,r));if(o>-1)return o;const a=Wt(t[e-2]);return e>1&&Wt(r)===a&&i[i.length-1].path!==a?i.findIndex(E.bind(null,t[e-2])):o}),o=Object(r["c"])(()=>i.value>-1&&Ht(n.params,s.value.params)),a=Object(r["c"])(()=>i.value>-1&&i.value===n.matched.length-1&&T(n.params,s.value.params));function l(n={}){return zt(n)?e[Object(r["F"])(t.replace)?"replace":"push"](Object(r["F"])(t.to)).catch(g):Promise.resolve()}return{route:s,href:Object(r["c"])(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}const Gt=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$t,setup(t,{slots:e}){const n=Object(r["z"])($t(t)),{options:s}=Object(r["o"])(c),i=Object(r["c"])(()=>({[Qt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Object(r["n"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Kt=Gt;function zt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ht(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((t,e)=>t!==s[e]))return!1}return!0}function Wt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Object(r["o"])(l),i=Object(r["c"])(()=>t.route||s.value),c=Object(r["o"])(a,0),u=Object(r["c"])(()=>i.value.matched[c]);Object(r["x"])(a,c+1),Object(r["x"])(o,u),Object(r["x"])(l,i);const h=Object(r["A"])();return Object(r["I"])(()=>[h.value,u.value,t.name],([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&E(e,s)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const s=i.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Jt(n.default,{Component:a,route:s});const l=o.props[t.name],f=l?!0===l?s.params:"function"===typeof l?l(s):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["n"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Jt(n.default,{Component:g,route:s})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Yt=Xt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Pt,s=t.stringifyQuery||Mt,i=t.history;const o=Vt(),a=Vt(),f=Vt(),m=Object(r["D"])(H);let y=H;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),E=p.bind(null,Dt),T=p.bind(null,Lt);function O(t,n){let r,s;return z(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function C(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function k(t){return!!e.getRecordMatcher(t)}function A(t,r){if(r=d({},r||m.value),"string"===typeof t){const s=v(n,t,r.path),o=e.resolve({path:s.path},r),a=i.createHref(s.fullPath);return d(s,o,{params:T(o.params),hash:Lt(s.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=d({},t,{path:v(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];o=d({},t,{params:E(t.params)}),r.params=E(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=w(T(a.params));const u=b(s,d({},t,{hash:xt(c),path:a.path})),l=i.createHref(u);return d({fullPath:u,hash:c,query:s===Mt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?v(n,t,m.value.path):d({},t)}function N(t,e){if(y!==t)return X(8,{from:e,to:t})}function R(t){return U(t)}function P(t){return R(d(x(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function U(t,e){const n=y=A(t),r=m.value,i=t.state,o=t.force,a=!0===t.replace,c=V(n);if(c)return U(d(x(c),{state:i,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&_(s,r,n)&&(l=X(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(t=>J(t)?t:tt(t,u,r)).then(t=>{if(t){if(J(t,2))return U(d(x(t.to),{state:i,force:o,replace:a}),e||u)}else t=G(u,r,!0,a,i);return $(u,r,t),t})}function B(t,e){const n=N(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,s,i]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Ut(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of o.list())n.push(Ut(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach(r=>{n.push(Ut(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(Ut(s,t,e));else n.push(Ut(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(i,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Ut(r,t,e));return n.push(c),te(n)}).catch(t=>J(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of f.list())r(t,e,n)}function G(t,e,n,r,s){const o=N(t,e);if(o)return o;const a=e===H,c=h?history.state:{};n&&(r||a?i.replace(t.fullPath,d({scroll:a&&c&&c.scroll},s)):i.push(t.fullPath,s)),m.value=t,rt(t,e,n,a),nt()}let K;function W(){K=i.listen((t,e,n)=>{const r=A(t),s=V(r);if(s)return void U(d(s,{replace:!0}),r).catch(g);y=r;const o=m.value;h&&M(L(o.fullPath,n.delta),j()),q(r,o).catch(t=>J(t,12)?t:J(t,2)?(U(t.to,r).then(t=>{J(t,20)&&!n.delta&&n.type===I.pop&&i.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&i.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||G(r,o,!1),t&&(n.delta?i.go(-n.delta,!1):n.type===I.pop&&J(t,20)&&i.go(-1,!1)),$(r,o,t)}).catch(g)})}let Q,Y=Vt(),Z=Vt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return Q&&m.value!==H?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function nt(t){Q||(Q=!0,W(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset())}function rt(e,n,s,i){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!s&&F(L(e.fullPath,0))||(i||!s)&&history.state&&history.state.scroll||null;return Object(r["p"])().then(()=>o(e,n,a)).then(t=>t&&D(t)).catch(t=>tt(t,e,n))}const st=t=>i.go(t);let it;const ot=new Set,at={currentRoute:m,addRoute:O,removeRoute:C,hasRoute:k,getRoutes:S,resolve:A,options:t,push:R,replace:P,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:o.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",Yt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["F"])(m)}),h&&!it&&m.value===H&&(it=!0,R(i.location).catch(t=>{0}));const n={};for(const i in H)n[i]=Object(r["c"])(()=>m.value[i]);t.provide(c,e),t.provide(u,Object(r["z"])(n)),t.provide(l,m);const s=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(y=H,K&&K(),m.value=H,it=!1,Q=!1),s()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find(t=>E(t,i))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find(t=>E(t,a))||s.push(a))}return[n,r,s]}},"7a23":function(t,e,n){"use strict";n.d(e,"z",(function(){return bt})),n.d(e,"A",(function(){return Dt})),n.d(e,"D",(function(){return Lt})),n.d(e,"F",(function(){return Ft})),n.d(e,"q",(function(){return r["J"]})),n.d(e,"r",(function(){return r["K"]})),n.d(e,"E",(function(){return r["M"]})),n.d(e,"a",(function(){return yr})),n.d(e,"c",(function(){return vs})),n.d(e,"e",(function(){return Ar})),n.d(e,"f",(function(){return qr})),n.d(e,"g",(function(){return kr})),n.d(e,"h",(function(){return Lr})),n.d(e,"i",(function(){return Br})),n.d(e,"j",(function(){return Ur})),n.d(e,"k",(function(){return Pr})),n.d(e,"l",(function(){return Ze})),n.d(e,"m",(function(){return ns})),n.d(e,"n",(function(){return bs})),n.d(e,"o",(function(){return Pe})),n.d(e,"p",(function(){return oe})),n.d(e,"s",(function(){return rn})),n.d(e,"t",(function(){return sn})),n.d(e,"u",(function(){return yn})),n.d(e,"v",(function(){return Tr})),n.d(e,"w",(function(){return Ce})),n.d(e,"x",(function(){return Le})),n.d(e,"y",(function(){return Oe})),n.d(e,"B",(function(){return Wr})),n.d(e,"C",(function(){return dr})),n.d(e,"I",(function(){return Fe})),n.d(e,"J",(function(){return Se})),n.d(e,"K",(function(){return Yn})),n.d(e,"b",(function(){return Zs})),n.d(e,"d",(function(){return Ci})),n.d(e,"G",(function(){return wi})),n.d(e,"H",(function(){return bi}));var r=n("9ff4");let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active)try{return s=this,t()}finally{s=this.parent}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=_;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,_=!0,p=1<<++d,d<=g?l(this):w(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,_=e,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _=!0;const E=[];function T(){E.push(_),_=!1}function O(){const t=E.pop();_=void 0===t||t}function C(t,e,n){if(_&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;S(r,s)}}function S(t,e){let n=!1;d<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function I(t,e,n,s,i,o){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&Object(r["o"])(t))c.forEach((t,e)=>{("length"===e||e>=s)&&u.push(t)});else switch(void 0!==n&&u.push(c.get(n)),e){case"add":Object(r["o"])(t)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(y)),Object(r["u"])(t)&&u.push(c.get(v)));break;case"delete":Object(r["o"])(t)||(u.push(c.get(y)),Object(r["u"])(t)&&u.push(c.get(v)));break;case"set":Object(r["u"])(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&k(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);k(a(t))}}function k(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==m||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const A=Object(r["I"])("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["F"])),N=P(),R=P(!1,!0),j=P(!0),D=L();function L(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=It(this);for(let e=0,s=this.length;e<s;e++)C(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(It)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=It(this)[e].apply(this,t);return O(),n}}),t}function P(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?mt:gt:e?pt:dt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(D,s))return Reflect.get(D,s,i);const a=Reflect.get(n,s,i);if(Object(r["F"])(s)?x.has(s):A(s))return a;if(t||C(n,"get",s),e)return a;if(jt(a)){const t=!o||!Object(r["t"])(s);return t?a.value:a}return Object(r["w"])(a)?t?_t(a):bt(a):a}}const M=V(),F=V(!0);function V(t=!1){return function(e,n,s,i){let o=e[n];if(Ot(o)&&jt(o)&&!jt(s))return!1;if(!t&&!Ot(s)&&(Ct(s)||(s=It(s),o=It(o)),!Object(r["o"])(e)&&jt(o)&&!jt(s)))return o.value=s,!0;const a=Object(r["o"])(e)&&Object(r["t"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,s,i);return e===It(i)&&(a?Object(r["j"])(s,o)&&I(e,"set",n,s,o):I(e,"add",n,s)),c}}function U(t,e){const n=Object(r["k"])(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&I(t,"delete",e,void 0,s),i}function B(t,e){const n=Reflect.has(t,e);return Object(r["F"])(e)&&x.has(e)||C(t,"has",e),n}function q(t){return C(t,"iterate",Object(r["o"])(t)?"length":y),Reflect.ownKeys(t)}const $={get:N,set:M,deleteProperty:U,has:B,ownKeys:q},G={get:j,set(t,e){return!0},deleteProperty(t,e){return!0}},K=Object(r["h"])({},$,{get:R,set:F}),z=t=>t,H=t=>Reflect.getPrototypeOf(t);function W(t,e,n=!1,r=!1){t=t["__v_raw"];const s=It(t),i=It(e);e!==i&&!n&&C(s,"get",e),!n&&C(s,"get",i);const{has:o}=H(s),a=r?z:n?xt:At;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function Q(t,e=!1){const n=this["__v_raw"],r=It(n),s=It(t);return t!==s&&!e&&C(r,"has",t),!e&&C(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function X(t,e=!1){return t=t["__v_raw"],!e&&C(It(t),"iterate",y),Reflect.get(t,"size",t)}function J(t){t=It(t);const e=It(this),n=H(e),r=n.has.call(e,t);return r||(e.add(t),I(e,"add",t,t)),this}function Y(t,e){e=It(e);const n=It(this),{has:s,get:i}=H(n);let o=s.call(n,t);o||(t=It(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&I(n,"set",t,e,a):I(n,"add",t,e),this}function Z(t){const e=It(this),{has:n,get:r}=H(e);let s=n.call(e,t);s||(t=It(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&I(e,"delete",t,void 0,i),o}function tt(){const t=It(this),e=0!==t.size,n=void 0,r=t.clear();return e&&I(t,"clear",void 0,void 0,n),r}function et(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=It(i),a=e?z:t?xt:At;return!t&&C(o,"iterate",y),i.forEach((t,e)=>n.call(r,a(t),a(e),s))}}function nt(t,e,n){return function(...s){const i=this["__v_raw"],o=It(i),a=Object(r["u"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?z:e?xt:At;return!e&&C(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function st(){const t={get(t){return W(this,t)},get size(){return X(this)},has:Q,add:J,set:Y,delete:Z,clear:tt,forEach:et(!1,!1)},e={get(t){return W(this,t,!1,!0)},get size(){return X(this)},has:Q,add:J,set:Y,delete:Z,clear:tt,forEach:et(!1,!0)},n={get(t){return W(this,t,!0)},get size(){return X(this,!0)},has(t){return Q.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!1)},r={get(t){return W(this,t,!0,!0)},get size(){return X(this,!0)},has(t){return Q.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach(s=>{t[s]=nt(s,!1,!1),n[s]=nt(s,!0,!1),e[s]=nt(s,!1,!0),r[s]=nt(s,!0,!0)}),[t,n,e,r]}const[it,ot,at,ct]=st();function ut(t,e){const n=e?t?ct:at:t?ot:it;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get(Object(r["k"])(n,s)&&s in e?n:e,s,i)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},ft={get:ut(!0,!1)};const dt=new WeakMap,pt=new WeakMap,gt=new WeakMap,mt=new WeakMap;function yt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:yt(Object(r["P"])(t))}function bt(t){return Ot(t)?t:Et(t,!1,$,lt,dt)}function wt(t){return Et(t,!1,K,ht,pt)}function _t(t){return Et(t,!0,G,ft,gt)}function Et(t,e,n,s,i){if(!Object(r["w"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=vt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Tt(t){return Ot(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ot(t){return!(!t||!t["__v_isReadonly"])}function Ct(t){return!(!t||!t["__v_isShallow"])}function St(t){return Tt(t)||Ot(t)}function It(t){const e=t&&t["__v_raw"];return e?It(e):t}function kt(t){return Object(r["g"])(t,"__v_skip",!0),t}const At=t=>Object(r["w"])(t)?bt(t):t,xt=t=>Object(r["w"])(t)?_t(t):t;function Nt(t){_&&m&&(t=It(t),S(t.dep||(t.dep=a())))}function Rt(t,e){t=It(t),t.dep&&k(t.dep)}function jt(t){return!(!t||!0!==t.__v_isRef)}function Dt(t){return Pt(t,!1)}function Lt(t){return Pt(t,!0)}function Pt(t,e){return jt(t)?t:new Mt(t,e)}class Mt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:It(t),this._value=e?t:At(t)}get value(){return Nt(this),this._value}set value(t){t=this.__v_isShallow?t:It(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:At(t),Rt(this,t))}}function Ft(t){return jt(t)?t.value:t}const Vt={get:(t,e,n)=>Ft(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ut(t){return Tt(t)?t:new Proxy(t,Vt)}class Bt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,()=>{this._dirty||(this._dirty=!0,Rt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=It(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let s,i;const o=Object(r["q"])(t);o?(s=t,i=r["d"]):(s=t.get,i=t.set);const a=new Bt(s,i,o||!i,n);return a}Promise.resolve();function $t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Kt(i,e,n)}return s}function Gt(t,e,n,s){if(Object(r["q"])(t)){const i=$t(t,e,n,s);return i&&Object(r["z"])(i)&&i.catch(t=>{Kt(t,e,n)}),i}const i=[];for(let r=0;r<t.length;r++)i.push(Gt(t[r],e,n,s));return i}function Kt(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,i))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void $t(o,null,10,[t,s,i])}zt(t,n,s,r)}function zt(t,e,n,r=!0){console.error(t)}let Ht=!1,Wt=!1;const Qt=[];let Xt=0;const Jt=[];let Yt=null,Zt=0;const te=[];let ee=null,ne=0;const re=Promise.resolve();let se=null,ie=null;function oe(t){const e=se||re;return t?e.then(this?t.bind(this):t):e}function ae(t){let e=Xt+1,n=Qt.length;while(e<n){const r=e+n>>>1,s=me(Qt[r]);s<t?e=r+1:n=r}return e}function ce(t){Qt.length&&Qt.includes(t,Ht&&t.allowRecurse?Xt+1:Xt)||t===ie||(null==t.id?Qt.push(t):Qt.splice(ae(t.id),0,t),ue())}function ue(){Ht||Wt||(Wt=!0,se=re.then(ye))}function le(t){const e=Qt.indexOf(t);e>Xt&&Qt.splice(e,1)}function he(t,e,n,s){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?s+1:s)||n.push(t),ue()}function fe(t){he(t,Yt,Jt,Zt)}function de(t){he(t,ee,te,ne)}function pe(t,e=null){if(Jt.length){for(ie=e,Yt=[...new Set(Jt)],Jt.length=0,Zt=0;Zt<Yt.length;Zt++)Yt[Zt]();Yt=null,Zt=0,ie=null,pe(t,e)}}function ge(t){if(te.length){const t=[...new Set(te)];if(te.length=0,ee)return void ee.push(...t);for(ee=t,ee.sort((t,e)=>me(t)-me(e)),ne=0;ne<ee.length;ne++)ee[ne]();ee=null,ne=0}}const me=t=>null==t.id?1/0:t.id;function ye(t){Wt=!1,Ht=!0,pe(t),Qt.sort((t,e)=>me(t)-me(e));r["d"];try{for(Xt=0;Xt<Qt.length;Xt++){const t=Qt[Xt];t&&!1!==t.active&&$t(t,null,14)}}finally{Xt=0,Qt.length=0,ge(t),Ht=!1,se=null,(Qt.length||Jt.length||te.length)&&ye(t)}}new Set;new Map;function ve(t,e,...n){const s=t.vnode.props||r["b"];let i=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in s){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=s[t]||r["b"];o?i=n.map(t=>t.trim()):e&&(i=n.map(r["O"]))}let c;let u=s[c=Object(r["N"])(e)]||s[c=Object(r["N"])(Object(r["e"])(e))];!u&&o&&(u=s[c=Object(r["N"])(Object(r["l"])(e))]),u&&Gt(u,t,6,i);const l=s[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Gt(l,t,6,i)}}function be(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!Object(r["q"])(t)){const s=t=>{const n=be(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),s.set(t,a),a):(s.set(t,null),null)}function we(t,e){return!(!t||!Object(r["x"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let _e=null,Ee=null;function Te(t){const e=_e;return _e=t,Ee=t&&t.type.__scopeId||null,e}function Oe(t){Ee=t}function Ce(){Ee=null}function Se(t,e=_e,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Sr(-1);const s=Te(e),i=t(...n);return Te(s),r._d&&Sr(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function Ie(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const b=Te(t);try{if(4&n.shapeFlag){const t=i||s;y=$r(h.call(t,t,f,o,p,d,g)),v=u}else{const t=e;0,y=$r(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),v=e.props?u:ke(u)}}catch(_){_r.length=0,Kt(_,t,1),y=Pr(br)}let w=y;if(v&&!1!==m){const t=Object.keys(v),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["v"])&&(v=Ae(v,a)),w=Vr(w,v))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,Te(b),y}const ke=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["x"])(n))&&((e||(e={}))[n]=t[n]);return e},Ae=(t,e)=>{const n={};for(const s in t)Object(r["v"])(s)&&s.slice(9)in e||(n[s]=t[s]);return n};function xe(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Ne(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Ne(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!we(u,n))return!0}}return!1}function Ne(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!we(n,i))return!0}return!1}function Re({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const je=t=>t.__isSuspense;function De(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):de(t)}function Le(t,e){if(es){let n=es.provides;const r=es.parent&&es.parent.provides;r===n&&(n=es.provides=Object.create(r)),n[t]=e}else 0}function Pe(t,e,n=!1){const s=es||_e;if(s){const i=null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Object(r["q"])(e)?e.call(s.proxy):e}else 0}const Me={};function Fe(t,e,n){return Ve(t,e,n)}function Ve(t,e,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:a}=r["b"]){const c=es;let u,l,h=!1,f=!1;if(jt(t)?(u=()=>t.value,h=Ct(t)):Tt(t)?(u=()=>t,s=!0):Object(r["o"])(t)?(f=!0,h=t.some(Tt),u=()=>t.map(t=>jt(t)?t.value:Tt(t)?qe(t):Object(r["q"])(t)?$t(t,c,2):void 0)):u=Object(r["q"])(t)?e?()=>$t(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Gt(t,c,3,[d])}:r["d"],e&&s){const t=u;u=()=>qe(t())}let d=t=>{l=y.onStop=()=>{$t(t,c,4)}};if(cs)return d=r["d"],e?n&&Gt(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:Me;const g=()=>{if(y.active)if(e){const t=y.run();(s||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Gt(e,c,3,[t,p===Me?void 0:p,d]),p=t)}else y.run()};let m;g.allowRecurse=!!e,m="sync"===i?g:"post"===i?()=>ir(g,c&&c.suspense):()=>{!c||c.isMounted?fe(g):g()};const y=new b(u,m);return e?n?g():p=y.run():"post"===i?ir(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,y)}}function Ue(t,e,n){const s=this.proxy,i=Object(r["E"])(t)?t.includes(".")?Be(s,t):()=>s[t]:t.bind(s,s);let o;Object(r["q"])(e)?o=e:(o=e.handler,n=e);const a=es;rs(this);const c=Ve(i,o.bind(s),n);return a?rs(a):ss(),c}function Be(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function qe(t,e){if(!Object(r["w"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),jt(t))qe(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)qe(t[n],e);else if(Object(r["C"])(t)||Object(r["u"])(t))t.forEach(t=>{qe(t,e)});else if(Object(r["y"])(t))for(const n in t)qe(t[n],e);return t}function $e(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dn(()=>{t.isMounted=!0}),mn(()=>{t.isUnmounting=!0}),t}const Ge=[Function,Array],Ke={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},setup(t,{slots:e}){const n=ns(),r=$e();let s;return()=>{const i=e.default&&Ye(e.default(),!0);if(!i||!i.length)return;const o=It(t),{mode:a}=o;const c=i[0];if(r.isLeaving)return Qe(c);const u=Xe(c);if(!u)return Qe(c);const l=We(u,o,r,n);Je(u,l);const h=n.subTree,f=h&&Xe(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===s?s=t:t!==s&&(s=t,d=!0)}if(f&&f.type!==br&&(!Nr(u,f)||d)){const t=We(f,o,r,n);if(Je(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Qe(c);"in-out"===a&&u.type!==br&&(t.delayLeave=(t,e,n)=>{const s=He(r,f);s[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},ze=Ke;function He(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function We(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=e,b=String(t.key),w=He(n,t),_=(t,e)=>{t&&Gt(t,r,9,e)},E={mode:i,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!s)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const i=w[b];i&&Nr(t,i)&&i.el._leaveCb&&i.el._leaveCb(),_(r,[e])},enter(t){let e=c,r=u,i=l;if(!n.isMounted){if(!s)return;e=m||c,r=y||u,i=v||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?i:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(h,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),_(n?p:d,[e]),e._leaveCb=void 0,w[s]===t&&delete w[s])};w[s]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return We(t,e,n,r)}};return E}function Qe(t){if(en(t))return t=Vr(t),t.children=null,t}function Xe(t){return en(t)?t.children?t.children[0]:void 0:t}function Je(t,e){6&t.shapeFlag&&t.component?Je(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ye(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===yr?(128&i.patchFlag&&r++,n=n.concat(Ye(i.children,e))):(e||i.type!==br)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Ze(t){return Object(r["q"])(t)?{setup:t,name:t.name}:t}const tn=t=>!!t.type.__asyncLoader;const en=t=>t.type.__isKeepAlive;RegExp,RegExp;function nn(t,e){return Object(r["o"])(t)?t.some(t=>nn(t,e)):Object(r["E"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function rn(t,e){on(t,"a",e)}function sn(t,e){on(t,"da",e)}function on(t,e,n=es){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(ln(e,r,n),n){let t=n.parent;while(t&&t.parent)en(t.parent.vnode)&&an(r,e,n,t),t=t.parent}}function an(t,e,n,s){const i=ln(e,t,s,!0);yn(()=>{Object(r["L"])(s[e],i)},n)}function cn(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function un(t){return 128&t.shapeFlag?t.ssContent:t}function ln(t,e,n=es,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),rs(n);const s=Gt(e,n,t,r);return ss(),O(),s});return r?s.unshift(i):s.push(i),i}}const hn=t=>(e,n=es)=>(!cs||"sp"===t)&&ln(t,e,n),fn=hn("bm"),dn=hn("m"),pn=hn("bu"),gn=hn("u"),mn=hn("bum"),yn=hn("um"),vn=hn("sp"),bn=hn("rtg"),wn=hn("rtc");function _n(t,e=es){ln("ec",t,e)}let En=!0;function Tn(t){const e=In(t),n=t.proxy,s=t.ctx;En=!1,e.beforeCreate&&Cn(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:_,render:E,renderTracked:T,renderTriggered:O,errorCaptured:C,serverPrefetch:S,expose:I,inheritAttrs:k,components:A,directives:x,filters:N}=e,R=null;if(l&&On(l,s,R,t.appContext.config.unwrapInjectedRef),a)for(const D in a){const t=a[D];Object(r["q"])(t)&&(s[D]=t.bind(n))}if(i){0;const e=i.call(n,n);0,Object(r["w"])(e)&&(t.data=bt(e))}if(En=!0,o)for(const D in o){const t=o[D],e=Object(r["q"])(t)?t.bind(n,n):Object(r["q"])(t.get)?t.get.bind(n,n):r["d"];0;const i=!Object(r["q"])(t)&&Object(r["q"])(t.set)?t.set.bind(n):r["d"],a=vs({get:e,set:i});Object.defineProperty(s,D,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Sn(c[r],s,n,r);if(u){const t=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{Le(e,t[e])})}function j(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Cn(h,t,"c"),j(fn,f),j(dn,d),j(pn,p),j(gn,g),j(rn,m),j(sn,y),j(_n,C),j(wn,T),j(bn,O),j(mn,b),j(yn,_),j(vn,S),Object(r["o"])(I))if(I.length){const e=t.exposed||(t.exposed={});I.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});E&&t.render===r["d"]&&(t.render=E),null!=k&&(t.inheritAttrs=k),A&&(t.components=A),x&&(t.directives=x)}function On(t,e,n=r["d"],s=!1){Object(r["o"])(t)&&(t=Rn(t));for(const i in t){const n=t[i];let o;o=Object(r["w"])(n)?"default"in n?Pe(n.from||i,n.default,!0):Pe(n.from||i):Pe(n),jt(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Cn(t,e,n){Gt(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sn(t,e,n,s){const i=s.includes(".")?Be(n,s):()=>n[s];if(Object(r["E"])(t)){const n=e[t];Object(r["q"])(n)&&Fe(i,n)}else if(Object(r["q"])(t))Fe(i,t.bind(n));else if(Object(r["w"])(t))if(Object(r["o"])(t))t.forEach(t=>Sn(t,e,n,s));else{const s=Object(r["q"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["q"])(s)&&Fe(i,s,t)}else 0}function In(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach(t=>kn(c,t,o,!0)),kn(c,e,o)):c=e,i.set(e,c),c}function kn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kn(t,i,n,!0),s&&s.forEach(e=>kn(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=An[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const An={data:xn,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:jn,created:jn,beforeMount:jn,mounted:jn,beforeUpdate:jn,updated:jn,beforeDestroy:jn,beforeUnmount:jn,destroyed:jn,unmounted:jn,activated:jn,deactivated:jn,errorCaptured:jn,serverPrefetch:jn,components:Dn,directives:Dn,watch:Ln,provide:xn,inject:Nn};function xn(t,e){return e?t?function(){return Object(r["h"])(Object(r["q"])(t)?t.call(this,this):t,Object(r["q"])(e)?e.call(this,this):e)}:e:t}function Nn(t,e){return Dn(Rn(t),Rn(e))}function Rn(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jn(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Ln(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=jn(t[r],e[r]);return n}function Pn(t,e,n,s=!1){const i={},o={};Object(r["g"])(o,Rr,1),t.propsDefaults=Object.create(null),Fn(t,e,i,o);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);n?t.props=s?i:wt(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function Mn(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=It(i),[u]=t.propsOptions;let l=!1;if(!(s||a>0)||16&a){let s;Fn(t,e,i,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(s=Object(r["l"])(o))!==o&&Object(r["k"])(e,s))||(u?!n||void 0===n[o]&&void 0===n[s]||(i[o]=Vn(u,c,o,void 0,t,!0)):delete i[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let s=0;s<n.length;s++){let a=n[s];const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);i[e]=Vn(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&I(t,"set","$attrs")}function Fn(t,e,n,s){const[i,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["A"])(u))continue;const l=e[u];let h;i&&Object(r["k"])(i,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:we(t.emitsOptions,u)||u in s&&l===s[u]||(s[u]=l,c=!0)}if(o){const e=It(n),s=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Vn(i,e,c,s[c],t,!Object(r["k"])(s,c))}}return c}function Vn(t,e,n,s,i,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===s){const t=a.default;if(a.type!==Function&&Object(r["q"])(t)){const{propsDefaults:r}=i;n in r?s=r[n]:(rs(i),s=r[n]=t.call(null,e),ss())}else s=t}a[0]&&(o&&!t?s=!1:!a[1]||""!==s&&s!==Object(r["l"])(n)||(s=!0))}return s}function Un(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!Object(r["q"])(t)){const s=t=>{u=!0;const[n,s]=Un(t,e,!0);Object(r["h"])(a,n),s&&c.push(...s)};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}if(!o&&!u)return s.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);Bn(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(Bn(e)){const n=o[t],s=a[e]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(s){const t=Gn(Boolean,s.type),n=Gn(String,s.type);s[0]=t>-1,s[1]=n<0||t<n,(t>-1||Object(r["k"])(s,"default"))&&c.push(e)}}}}const l=[a,c];return s.set(t,l),l}function Bn(t){return"$"!==t[0]}function qn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function $n(t,e){return qn(t)===qn(e)}function Gn(t,e){return Object(r["o"])(e)?e.findIndex(e=>$n(e,t)):Object(r["q"])(e)&&$n(e,t)?0:-1}const Kn=t=>"_"===t[0]||"$stable"===t,zn=t=>Object(r["o"])(t)?t.map($r):[$r(t)],Hn=(t,e,n)=>{const r=Se((...t)=>zn(e(...t)),n);return r._c=!1,r},Wn=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Kn(i))continue;const n=t[i];if(Object(r["q"])(n))e[i]=Hn(i,n,s);else if(null!=n){0;const t=zn(n);e[i]=()=>t}}},Qn=(t,e)=>{const n=zn(e);t.slots.default=()=>n},Xn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=It(e),Object(r["g"])(e,"_",n)):Wn(e,t.slots={})}else t.slots={},e&&Qn(t,e);Object(r["g"])(t.slots,Rr,1)},Jn=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=r["b"];if(32&s.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(i,e),n||1!==t||delete i._):(o=!e.$stable,Wn(e,i)),a=e}else e&&(Qn(t,e),a={default:1});if(o)for(const r in i)Kn(r)||r in a||delete i[r]};function Yn(t,e){const n=_e;if(null===n)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r["b"]]=e[o];Object(r["q"])(t)&&(t={mounted:t,updated:t}),t.deep&&qe(n),i.push({dir:t,instance:s,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Zn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(T(),Gt(c,n,8,[t.el,a,t,e]),O())}}function tr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function nr(t,e){return function(n,s=null){null==s||Object(r["w"])(s)||(s=null);const i=tr(),o=new Set;let a=!1;const c=i.app={_uid:er++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:ws,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["q"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["q"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(r,o,u){if(!a){const l=Pr(n,s);return l.appContext=i,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,gs(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function rr(t,e,n,s,i=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>rr(t,e&&(Object(r["o"])(e)?e[o]:e),n,s,i));if(tn(s)&&!i)return;const o=4&s.shapeFlag?gs(s.component)||s.component.proxy:s.el,a=i?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):jt(l)&&(l.value=null)),Object(r["q"])(u))$t(u,c,12,[a,h]);else{const e=Object(r["E"])(u),s=jt(u);if(e||s){const s=()=>{if(t.f){const n=e?h[u]:u.value;i?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):e?h[u]=[o]:(u.value=[o],t.k&&(h[t.k]=u.value))}else e?(h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):jt(u)&&(u.value=a,t.k&&(h[t.k]=a))};a?(s.id=-1,ir(s,n)):s()}else 0}}function sr(){}const ir=De;function or(t){return ar(t)}function ar(t,e){sr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Nr(t,e)&&(r=W(t),$(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case vr:v(t,e,n,r);break;case br:w(t,e,n,r);break;case wr:null==t&&_(e,n,r,o);break;case yr:j(t,e,n,r,s,i,o,a,c);break;default:1&h?S(t,e,n,r,s,i,o,a,c):6&h?D(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,X)}null!=l&&s&&rr(l,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=d(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),i(t),t=n;i(e)},S=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?I(e,n,r,s,i,o,a,c):x(t,e,s,i,o,a,c)},I=(t,e,n,i,c,u,l,f)=>{let d,p;const{type:m,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:_}=t;if(t.el&&void 0!==g&&-1===w)d=t.el=g(t.el);else{if(d=t.el=a(t.type,u,y&&y.is,y),8&v?h(d,t.children):16&v&&A(t.children,d,null,i,c,u&&"foreignObject"!==m,l,f),_&&Zn(t,null,i,"created"),y){for(const e in y)"value"===e||Object(r["A"])(e)||o(d,e,null,y[e],u,t.children,i,c,H);"value"in y&&o(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&Hr(p,i,t)}k(d,t,t.scopeId,l,i)}_&&Zn(t,null,i,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;E&&b.beforeEnter(d),s(d,e,n),((p=y&&y.onVnodeMounted)||E||_)&&ir(()=>{p&&Hr(p,i,t),E&&b.enter(d),_&&Zn(t,null,i,"mounted")},c)},k=(t,e,n,r,s)=>{if(n&&p(t,n),r)for(let i=0;i<r.length;i++)p(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;k(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},A=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Gr(t[u]):$r(t[u]);y(null,c,e,n,r,s,i,o,a)}},x=(t,e,n,s,i,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;n&&cr(n,!1),(m=g.onVnodeBeforeUpdate)&&Hr(m,n,e,t),d&&Zn(e,t,n,"beforeUpdate"),n&&cr(n,!0);const y=i&&"foreignObject"!==e.type;if(f?N(t.dynamicChildren,f,u,n,s,y,a):c||V(t,e,u,null,n,s,y,a,!1),l>0){if(16&l)R(u,e,p,g,n,s,i);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,i),4&l&&o(u,"style",p.style,g.style,i),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,i,t.children,n,s,H)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||R(u,e,p,g,n,s,i);((m=g.onVnodeUpdated)||d)&&ir(()=>{m&&Hr(m,n,e,t),d&&Zn(e,t,n,"updated")},s)},N=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===yr||!Nr(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},R=(t,e,n,s,i,a,c)=>{if(n!==s){for(const u in s){if(Object(r["A"])(u))continue;const l=s[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,i,a,H)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in s||o(t,u,n[u],null,c,e.children,i,a,H);"value"in s&&o(t,"value",n.value,s.value)}},j=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),A(e.children,n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&ur(t,e,!0)):V(t,e,n,f,i,o,a,u,l)},D=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):L(e,n,r,s,i,o,c):P(t,e,c)},L=(t,e,n,r,s,i,o)=>{const a=t.component=ts(t,r,s);if(en(t)&&(a.ctx.renderer=X),us(a),a.asyncDep){if(s&&s.registerDep(a,M),!t.el){const t=a.subTree=Pr(br);w(null,t,e,n)}}else M(a,t,e,n,s,i,o)},P=(t,e,n)=>{const r=e.component=t.component;if(xe(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,le(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,s,i,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:s,u:c,parent:u,vnode:l}=t,h=n;0,cr(t,!1),n?(n.el=l.el,F(t,n,a)):n=l,s&&Object(r["n"])(s),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Hr(e,u,n,l),cr(t,!0);const d=Ie(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),W(p),t,i,o),n.el=d.el,null===h&&Re(t,d.el),c&&ir(c,i),(e=n.props&&n.props.onVnodeUpdated)&&ir(()=>Hr(e,u,n,l),i)}else{let a;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=tn(e);if(cr(t,!1),l&&Object(r["n"])(l),!d&&(a=u&&u.onVnodeBeforeMount)&&Hr(a,f,e),cr(t,!0),c&&Y){const n=()=>{t.subTree=Ie(t),Y(c,t.subTree,t,i,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=Ie(t);0,y(null,r,n,s,t,i,o),e.el=r.el}if(h&&ir(h,i),!d&&(a=u&&u.onVnodeMounted)){const t=e;ir(()=>Hr(a,f,t),i)}256&e.shapeFlag&&t.a&&ir(t.a,i),t.isMounted=!0,e=n=s=null}},u=t.effect=new b(c,()=>ce(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,cr(t,!0),l()},F=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Mn(t,e.props,r,n),Jn(t,e.children,n),T(),pe(void 0,t.update),O()},V=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,s,i,o,a,c);if(256&d)return void U(u,f,n,r,s,i,o,a,c)}8&p?(16&l&&H(u,s,i),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,s,i,o,a,c):H(u,s,i,!0):(8&l&&h(n,""),16&p&&A(f,n,r,s,i,o,a,c))},U=(t,e,n,s,i,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Gr(e[d]):$r(e[d]);y(t[d],r,n,null,i,o,a,c,u)}l>h?H(t,i,o,!0,!1,f):A(e,n,s,i,o,a,c,u,f)},B=(t,e,n,s,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?Gr(e[l]):$r(e[l]);if(!Nr(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?Gr(e[d]):$r(e[d]);if(!Nr(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:s;while(l<=d)y(null,e[l]=u?Gr(e[l]):$r(e[l]),n,r,i,o,a,c,u),l++}}else if(l>d)while(l<=f)$(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?Gr(e[l]):$r(e[l]);null!=t.key&&m.set(t.key,l)}let v,b=0;const w=d-g+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){$(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Nr(r,e[v])){s=v;break}void 0===s?$(r,i,o,!0):(T[s-g]=l+1,s>=E?E=s:_=!0,y(r,e[s],n,null,i,o,a,c,u),b++)}const O=_?lr(T):r["a"];for(v=O.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:s;0===T[l]?y(null,r,n,f,i,o,a,c,u):_&&(v<0||l!==O[v]?q(r,n,f,2):v--)}}},q=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,X);if(a===yr){s(o,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===wr)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),ir(()=>c.enter(o),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,e,n)},$=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&rr(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!tn(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Hr(g,e,t),6&l)z(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Zn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,X,r):u&&(i!==yr||h>0&&64&h)?H(u,e,n,!1,!0):(i===yr&&384&h||!s&&16&l)&&H(c,e,n),r&&G(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&ir(()=>{g&&Hr(g,e,t),d&&Zn(t,null,e,"unmounted")},n)},G=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===yr)return void K(n,r);if(e===wr)return void C(t);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,i=()=>e(n,o);r?r(t.el,o,i):i()}else o()},K=(t,e)=>{let n;while(t!==e)n=d(t),i(t),t=n;i(e)},z=(t,e,n)=>{const{bum:s,scope:i,update:o,subTree:a,um:c}=t;s&&Object(r["n"])(s),i.stop(),o&&(o.active=!1,$(a,t,e,n)),c&&ir(c,e),ir(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},H=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)$(t[o],e,n,r,s)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),Q=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),ge(),e._vnode=t},X={p:y,um:$,m:q,r:G,mt:L,mc:A,pc:V,pbc:N,n:W,o:t};let J,Y;return e&&([J,Y]=e(X)),{render:Q,hydrate:J,createApp:nr(Q,J)}}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ur(t,e,n=!1){const s=t.children,i=e.children;if(Object(r["o"])(s)&&Object(r["o"])(i))for(let r=0;r<s.length;r++){const t=s[r];let e=i[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[r]=Gr(i[r]),e.el=t.el),n||ur(t,e))}}function lr(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const hr=t=>t.__isTeleport;const fr="components";function dr(t,e){return gr(fr,t,!0,e)||t}const pr=Symbol();function gr(t,e,n=!0,s=!1){const i=_e||es;if(i){const n=i.type;if(t===fr){const t=ms(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=mr(i[t]||n[t],e)||mr(i.appContext[t],e);return!o&&s?n:o}}function mr(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const yr=Symbol(void 0),vr=Symbol(void 0),br=Symbol(void 0),wr=Symbol(void 0),_r=[];let Er=null;function Tr(t=!1){_r.push(Er=t?null:[])}function Or(){_r.pop(),Er=_r[_r.length-1]||null}let Cr=1;function Sr(t){Cr+=t}function Ir(t){return t.dynamicChildren=Cr>0?Er||r["a"]:null,Or(),Cr>0&&Er&&Er.push(t),t}function kr(t,e,n,r,s,i){return Ir(Lr(t,e,n,r,s,i,!0))}function Ar(t,e,n,r,s){return Ir(Pr(t,e,n,r,s,!0))}function xr(t){return!!t&&!0===t.__v_isVNode}function Nr(t,e){return t.type===e.type&&t.key===e.key}const Rr="__vInternal",jr=({key:t})=>null!=t?t:null,Dr=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(r["E"])(t)||jt(t)||Object(r["q"])(t)?{i:_e,r:t,k:e,f:!!n}:t:null;function Lr(t,e=null,n=null,s=0,i=null,o=(t===yr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jr(e),ref:e&&Dr(e),scopeId:Ee,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Kr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Cr>0&&!a&&Er&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Er.push(u),u}const Pr=Mr;function Mr(t,e=null,n=null,s=0,i=null,o=!1){if(t&&t!==pr||(t=br),xr(t)){const r=Vr(t,e,!0);return n&&Kr(r,n),r}if(ys(t)&&(t=t.__vccOpts),e){e=Fr(e);let{class:t,style:n}=e;t&&!Object(r["E"])(t)&&(e.class=Object(r["J"])(t)),Object(r["w"])(n)&&(St(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["K"])(n))}const a=Object(r["E"])(t)?1:je(t)?128:hr(t)?64:Object(r["w"])(t)?4:Object(r["q"])(t)?2:0;return Lr(t,e,n,s,i,a,o,!0)}function Fr(t){return t?St(t)||Rr in t?Object(r["h"])({},t):t:null}function Vr(t,e,n=!1){const{props:s,ref:i,patchFlag:o,children:a}=t,c=e?zr(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&jr(c),ref:e&&e.ref?n&&i?Object(r["o"])(i)?i.concat(Dr(e)):[i,Dr(e)]:Dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yr?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vr(t.ssContent),ssFallback:t.ssFallback&&Vr(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Ur(t=" ",e=0){return Pr(vr,null,t,e)}function Br(t,e){const n=Pr(wr,null,t);return n.staticCount=e,n}function qr(t="",e=!1){return e?(Tr(),Ar(br,null,t)):Pr(br,null,t)}function $r(t){return null==t||"boolean"===typeof t?Pr(br):Object(r["o"])(t)?Pr(yr,null,t.slice()):"object"===typeof t?Gr(t):Pr(vr,null,String(t))}function Gr(t){return null===t.el||t.memo?t:Vr(t)}function Kr(t,e){let n=0;const{shapeFlag:s}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&s){const n=e.default;return void(n&&(n._c&&(n._d=!1),Kr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Rr in e?3===r&&_e&&(1===_e.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=_e}}else Object(r["q"])(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),64&s?(n=16,e=[Ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function zr(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const t in s)if("class"===t)e.class!==s.class&&(e.class=Object(r["J"])([e.class,s.class]));else if("style"===t)e.style=Object(r["K"])([e.style,s.style]);else if(Object(r["x"])(t)){const n=e[t],i=s[t];!i||n===i||Object(r["o"])(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=s[t])}return e}function Hr(t,e,n,r=null){Gt(t,e,7,[n,r])}function Wr(t,e,n,s){let i;const o=n&&n[s];if(Object(r["o"])(t)||Object(r["E"])(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(t))if(t[Symbol.iterator])i=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[s]=i),i}const Qr=t=>t?is(t)?gs(t)||t.proxy:Qr(t.parent):null,Xr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qr(t.parent),$root:t=>Qr(t.root),$emit:t=>t.emit,$options:t=>In(t),$forceUpdate:t=>()=>ce(t.update),$nextTick:t=>oe.bind(t.proxy),$watch:t=>Ue.bind(t)}),Jr={get({_:t},e){const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=1,s[e];if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=2,i[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];En&&(a[e]=0)}}const h=Xr[e];let f,d;return h?("$attrs"===e&&C(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return i!==r["b"]&&Object(r["k"])(i,e)?(i[e]=n,!0):s!==r["b"]&&Object(r["k"])(s,e)?(s[e]=n,!0):!Object(r["k"])(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(s,a)||Object(r["k"])(Xr,a)||Object(r["k"])(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?this.set(t,e,n.get(),null):null!=n.value&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const Yr=tr();let Zr=0;function ts(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Yr,a={uid:Zr++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Un(s,o),emitsOptions:be(s,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:s.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ve.bind(null,a),t.ce&&t.ce(a),a}let es=null;const ns=()=>es||_e,rs=t=>{es=t,t.scope.on()},ss=()=>{es&&es.scope.off(),es=null};function is(t){return 4&t.vnode.shapeFlag}let os,as,cs=!1;function us(t,e=!1){cs=e;const{props:n,children:r}=t.vnode,s=is(t);Pn(t,n,s,e),Xn(t,r);const i=s?ls(t,e):void 0;return cs=!1,i}function ls(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kt(new Proxy(t.ctx,Jr));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?ps(t):null;rs(t),T();const i=$t(s,t,0,[t.props,n]);if(O(),ss(),Object(r["z"])(i)){if(i.then(ss,ss),e)return i.then(n=>{hs(t,n,e)}).catch(e=>{Kt(e,t,0)});t.asyncDep=i}else hs(t,i,e)}else fs(t,e)}function hs(t,e,n){Object(r["q"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["w"])(e)&&(t.setupState=Ut(e)),fs(t,n)}function fs(t,e,n){const s=t.type;if(!t.render){if(!e&&os&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},i),a);s.render=os(e,c)}}t.render=s.render||r["d"],as&&as(t)}rs(t),T(),Tn(t),O(),ss()}function ds(t){return new Proxy(t.attrs,{get(e,n){return C(t,"get","$attrs"),e[n]}})}function ps(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=ds(t))},slots:t.slots,emit:t.emit,expose:e}}function gs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ut(kt(t.exposed)),{get(e,n){return n in e?e[n]:n in Xr?Xr[n](t):void 0}}))}function ms(t){return Object(r["q"])(t)&&t.displayName||t.name}function ys(t){return Object(r["q"])(t)&&"__vccOpts"in t}const vs=(t,e)=>qt(t,e,cs);function bs(t,e,n){const s=arguments.length;return 2===s?Object(r["w"])(e)&&!Object(r["o"])(e)?xr(e)?Pr(t,null,[e]):Pr(t,e):Pr(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&xr(n)&&(n=[n]),Pr(t,e,n))}Symbol("");const ws="3.2.31",_s="http://www.w3.org/2000/svg",Es="undefined"!==typeof document?document:null,Ts=Es&&Es.createElement("template"),Os={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Es.createElementNS(_s,t):Es.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>Es.createTextNode(t),createComment:t=>Es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{Ts.innerHTML=r?`<svg>${t}</svg>`:t;const s=Ts.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cs(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ss(t,e,n){const s=t.style,i=Object(r["E"])(n);if(n&&!i){for(const t in n)ks(s,t,n[t]);if(e&&!Object(r["E"])(e))for(const t in e)null==n[t]&&ks(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Is=/\s*!important$/;function ks(t,e,n){if(Object(r["o"])(n))n.forEach(n=>ks(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Ns(t,e);Is.test(n)?t.setProperty(Object(r["l"])(s),n.replace(Is,""),"important"):t[s]=n}}const As=["Webkit","Moz","ms"],xs={};function Ns(t,e){const n=xs[e];if(n)return n;let s=Object(r["e"])(e);if("filter"!==s&&s in t)return xs[e]=s;s=Object(r["f"])(s);for(let r=0;r<As.length;r++){const n=As[r]+s;if(n in t)return xs[e]=n}return e}const Rs="http://www.w3.org/1999/xlink";function js(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Rs,e.slice(6,e.length)):t.setAttributeNS(Rs,e,n);else{const s=Object(r["D"])(e);null==n||s&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ds(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const s=typeof t[e];if("boolean"===s)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===s)return t[e]="",void t.removeAttribute(e);if("number"===s){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Ls=Date.now,Ps=!1;if("undefined"!==typeof window){Ls()>document.createEvent("Event").timeStamp&&(Ls=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ps=!!(t&&Number(t[1])<=53)}let Ms=0;const Fs=Promise.resolve(),Vs=()=>{Ms=0},Us=()=>Ms||(Fs.then(Vs),Ms=Ls());function Bs(t,e,n,r){t.addEventListener(e,n,r)}function qs(t,e,n,r){t.removeEventListener(e,n,r)}function $s(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=Ks(e);if(r){const o=i[e]=zs(r,s);Bs(t,n,o,a)}else o&&(qs(t,n,o,a),i[e]=void 0)}}const Gs=/(?:Once|Passive|Capture)$/;function Ks(t){let e;if(Gs.test(t)){let n;e={};while(n=t.match(Gs))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function zs(t,e){const n=t=>{const r=t.timeStamp||Ls();(Ps||r>=n.attached-1)&&Gt(Hs(t,n.value),e,5,[t])};return n.value=t,n.attached=Us(),n}function Hs(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Ws=/^on[a-z]/,Qs=(t,e,n,s,i=!1,o,a,c,u)=>{"class"===e?Cs(t,s,i):"style"===e?Ss(t,n,s):Object(r["x"])(e)?Object(r["v"])(e)||$s(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Xs(t,e,s,i))?Ds(t,e,s,o,a,c,u):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),js(t,e,s,i))};function Xs(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&Ws.test(e)&&Object(r["q"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Ws.test(e)||!Object(r["E"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Js="transition",Ys="animation",Zs=(t,{slots:e})=>bs(ze,ri(t),e);Zs.displayName="Transition";const ti={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ei=(Zs.props=Object(r["h"])({},ze.props,ti),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),ni=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function ri(t){const e={};for(const r in t)r in ti||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=si(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:O=b,onAppearCancelled:C=w}=e,S=(t,e,n)=>{ai(t,e?h:c),ai(t,e?l:a),n&&n()},I=(t,e)=>{ai(t,p),ai(t,d),e&&e()},k=t=>(e,n)=>{const r=t?O:b,i=()=>S(e,t,n);ei(r,[e,i]),ci(()=>{ai(e,t?u:o),oi(e,t?h:c),ni(r)||li(e,s,m,i)})};return Object(r["h"])(e,{onBeforeEnter(t){ei(v,[t]),oi(t,o),oi(t,a)},onBeforeAppear(t){ei(T,[t]),oi(t,u),oi(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){const n=()=>I(t,e);oi(t,f),pi(),oi(t,d),ci(()=>{ai(t,f),oi(t,p),ni(_)||li(t,s,y,n)}),ei(_,[t,n])},onEnterCancelled(t){S(t,!1),ei(w,[t])},onAppearCancelled(t){S(t,!0),ei(C,[t])},onLeaveCancelled(t){I(t),ei(E,[t])}})}function si(t){if(null==t)return null;if(Object(r["w"])(t))return[ii(t.enter),ii(t.leave)];{const e=ii(t);return[e,e]}}function ii(t){const e=Object(r["O"])(t);return e}function oi(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function ai(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ci(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ui=0;function li(t,e,n,r){const s=t._endId=++ui,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=hi(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function hi(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(Js+"Delay"),i=r(Js+"Duration"),o=fi(s,i),a=r(Ys+"Delay"),c=r(Ys+"Duration"),u=fi(a,c);let l=null,h=0,f=0;e===Js?o>0&&(l=Js,h=o,f=i.length):e===Ys?u>0&&(l=Ys,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Js:Ys:null,f=l?l===Js?i.length:c.length:0);const d=l===Js&&/\b(transform|all)(,|$)/.test(n[Js+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function fi(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>di(e)+di(t[n])))}function di(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function pi(){return document.body.offsetHeight}new WeakMap,new WeakMap;const gi=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function mi(t){t.target.composing=!0}function yi(t){const e=t.target;e.composing&&(e.composing=!1,vi(e,"input"))}function vi(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const bi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=gi(i);const o=s||i.props&&"number"===i.props.type;Bs(t,e?"change":"input",e=>{if(e.target.composing)return;let s=t.value;n?s=s.trim():o&&(s=Object(r["O"])(s)),t._assign(s)}),n&&Bs(t,"change",()=>{t.value=t.value.trim()}),e||(Bs(t,"compositionstart",mi),Bs(t,"compositionend",yi),Bs(t,"change",yi))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=gi(o),t.composing)return;if(document.activeElement===t){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&Object(r["O"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const wi={created(t,{value:e},n){t.checked=Object(r["G"])(e,n.props.value),t._assign=gi(n),Bs(t,"change",()=>{t._assign(_i(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=gi(s),e!==n&&(t.checked=Object(r["G"])(e,s.props.value))}};function _i(t){return"_value"in t?t._value:t.value}const Ei=Object(r["h"])({patchProp:Qs},Os);let Ti;function Oi(){return Ti||(Ti=or(Ei))}const Ci=(...t)=>{const e=Oi().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=Si(t);if(!s)return;const i=e._component;Object(r["q"])(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Si(t){if(Object(r["E"])(t)){const e=document.querySelector(t);return e}return t}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return Rr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return jr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return Ir}));var r,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function O(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function C(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t){return/^[\s\xa0]*$/.test(t)}var k,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var j=R.userAgent;if(j){k=j;break t}}k=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function V(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var U,B=x(k,"Opera"),q=x(k,"Trident")||x(k,"MSIE"),$=x(k,"Edge"),G=$||q,K=x(k,"Gecko")&&!(x(k.toLowerCase(),"webkit")&&!x(k,"Edge"))&&!(x(k,"Trident")||x(k,"MSIE"))&&!x(k,"Edge"),z=x(k.toLowerCase(),"webkit")&&!x(k,"Edge");function H(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return K?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),q){var X=H();if(null!=X&&X>parseFloat(W)){U=String(X);break t}}U=W}var J,Y={};function Z(){return V((function(){let t=0;const e=A(String(U)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=H();J=tt||(parseInt(U,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{F(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(st,rt);var it={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=E(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}lt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ft(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,r,s);return null}return n=Ct(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,s):mt(t,e,n,!1,r,s)}function mt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=Ct(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,s):mt(t,e,n,!0,r,s)}function bt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bt(t,e[i],n,r,s);else r=l(r)?!!r.capture:!!r,n=Ct(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ft(i,n,r,s),-1<n&&(ut(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,s)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ct(t){return"function"===typeof t?t:(t[Ot]||(t[Ot]=function(e){return t.handleEvent(e)}),t[Ot])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function It(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),M(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=kt(o,r,!0,e)&&s}if(o=e.g=t,s=kt(o,r,!0,e)&&s,s=kt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=kt(o,r,!1,e)&&s}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(St,b),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function xt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,jt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){Rt||Mt(),Ft||(Rt(),Ft=!0),Vt.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Ut)}}var Ft=!1,Vt=new Nt;function Ut(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Gt(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Gt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),It(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class Kt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){b.call(this),this.h=t,this.g={}}v(zt,b);var Ht=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var s=0;s<n.length;s++){var i=gt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Jt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return At(n)}catch(a){return e}}zt.prototype.M=function(){zt.Z.M.call(this),Qt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new St}function ie(t){rt.call(this,ne.Ma,t)}function oe(t){const e=se();It(e,new ie(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();It(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(ie,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new zt(this),this.P=Te,t=G?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Te=45e3,Oe={},Ce={};function Se(t,e,n){t.K=1,t.v=Je(Ke(e)),t.s=n,t.U=!0,Ie(t,null)}function Ie(t,e){t.F=Date.now(),Ne(t),t.A=Ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Ce){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Oe){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}ke(t)&&r!=Ce&&r!=Oe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),De(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ce:(n=Number(e.substring(n,r)),isNaN(n)?Oe:(r+=1,r+n>e.length?Ce:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function je(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!I(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(En(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(je(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&sr(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Me(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||G||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=f?3:2),je(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Qn(this.g);t="";var s=r.length,i=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),De(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(Ae(this,h,o),G&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),De(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(je(this),Ae(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,De(this)):Re(this,this.Y-t)},r=Ve.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,ze(this,t.j),this.s=t.s,He(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,ze(this,n[1]||"",!0),this.s=tn(n[2]||""),He(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ke(t){return new Ge(t)}function ze(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Je(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ye(t){return t instanceof Ge?Ke(t):new Ge(t,void 0)}function Ze(t,e,n,r){var s=new Ge(null,void 0);return t&&ze(s,t),e&&He(s,e),n&&We(s,n),r&&(s.l=r),s}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ve,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=C(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=C(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function On(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function Cn(){}function Sn(){this.g=new Cn}function In(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let s=t;l(t)&&(s=At(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(An,n,r,"TestLoadImage: error",!1,e),r.onabort=y(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=On(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Cn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Cn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(xn,de),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),v(Nn,St);var Rn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Rn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Ln(this),3==this.readyState&&jn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Mn,St);var Fn="",Vn=/^https?$/i,Un=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),zn(t)}function Gn(t){t.D||(t.D=!0,It(t,"complete"),It(t,"error"))}function Kn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))$t(t.Fa,0,t);else if(It(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.H).match(qe)[1]||null;if(!s&&a.self&&a.self.location){var i=a.self.location.protocol;s=i.substr(0,i.length-1)}r=!Vn.test(s?s.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Gn(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){Hn(t);const r=t.g,s=t.C[0]?c:null;t.g=null,t.C=null,e||It(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Hn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,t),this.$a=Yn("retryDelaySeedMs",1e4,t),this.Ya=Yn("forwardChannelMaxRetries",2,t),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ke(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Je(Ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){bn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function ir(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ke(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Jn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{In(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ke(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(Ke(e)),n.s=null,n.U=!0,Ie(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),It(r,new ue(r,n,e,s)),sr(t)}else ur(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&ir(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||ze(n,"https"),Je(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==On(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Ye(n);if(""!=r.i)e&&He(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new xn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cr(this)}function Tr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Or(){be.call(this),this.status=1}function Cr(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void $n(this,i)}t=n||"";const s=new Ve(this.headers);r&&Fe(r,(function(t,e){s.set(e,t)})),r=O(s.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Un,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$n(this,i)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),zn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},r.cb=function(){Kn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new _e(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=L(i),M(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,s,e),n=Ke(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&i&&Jn(n,this.o,i),En(this.i,s),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),s.$=!0,Se(s,n,null)):Se(s,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},v(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),sr(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},v(Tr,ve),v(Or,be),v(Cr,wr),Cr.prototype.xa=function(){It(this.g,"a")},Cr.prototype.wa=function(t){It(this.g,new Tr(t))},Cr.prototype.va=function(t){It(this.g,new Or(t))},Cr.prototype.ua=function(){It(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=i.createWebChannelTransport=function(){return new _r},Ir=i.getStatEventTarget=function(){return se()},kr=i.ErrorCode=he,Ar=i.EventType=fe,xr=i.Event=ne,Nr=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=i.FetchXmlHttpFactory=xn,jr=i.WebChannel=ge,Dr=i.XhrIo=Mn}).call(this,n("c8ba"))},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return C})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return et})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return ct})),n.d(e,"j",(function(){return rt})),n.d(e,"k",(function(){return j})),n.d(e,"l",(function(){return tt})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return st})),n.d(e,"o",(function(){return D})),n.d(e,"p",(function(){return Q})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return i})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return H})),n.d(e,"u",(function(){return L})),n.d(e,"v",(function(){return A})),n.d(e,"w",(function(){return B})),n.d(e,"x",(function(){return k})),n.d(e,"y",(function(){return z})),n.d(e,"z",(function(){return q})),n.d(e,"A",(function(){return W})),n.d(e,"B",(function(){return y})),n.d(e,"C",(function(){return P})),n.d(e,"D",(function(){return a})),n.d(e,"E",(function(){return V})),n.d(e,"F",(function(){return U})),n.d(e,"G",(function(){return b})),n.d(e,"H",(function(){return w})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return d})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return N})),n.d(e,"M",(function(){return _})),n.d(e,"N",(function(){return nt})),n.d(e,"O",(function(){return ot})),n.d(e,"P",(function(){return K}));const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=V(r)?f(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return V(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(V(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),y=r(g);function v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=D(t),r=D(e),n||r)return!(!n||!r)&&v(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const _=t=>V(t)?t:null==t?"":D(t)||B(t)&&(t.toString===$||!F(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):L(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||D(e)||z(e)?e:String(e),T={},O=[],C=()=>{},S=()=>!1,I=/^on[^a-z]/,k=t=>I.test(t),A=t=>t.startsWith("onUpdate:"),x=Object.assign,N=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R=Object.prototype.hasOwnProperty,j=(t,e)=>R.call(t,e),D=Array.isArray,L=t=>"[object Map]"===G(t),P=t=>"[object Set]"===G(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,V=t=>"string"===typeof t,U=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,q=t=>B(t)&&F(t.then)&&F(t.catch),$=Object.prototype.toString,G=t=>$.call(t),K=t=>G(t).slice(8,-1),z=t=>"[object Object]"===G(t),H=t=>V(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),X=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},J=/-(\w)/g,Y=X(t=>t.replace(J,(t,e)=>e?e.toUpperCase():"")),Z=/\B([A-Z])/g,tt=X(t=>t.replace(Z,"-$1").toLowerCase()),et=X(t=>t.charAt(0).toUpperCase()+t.slice(1)),nt=X(t=>t?"on"+et(t):""),rt=(t,e)=>!Object.is(t,e),st=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ot=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let at;const ct=()=>at||(at="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["d"]})),n.d(e,"c",(function(){return r["e"]}))}}]);
//# sourceMappingURL=chunk-vendors.67f8f934.js.map