/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var objectInverse = require( '@stdlib/utils-object-inverse' );
var enumeration = require( '@stdlib/blas-base-diagonal-types' ).enum;


// VARIABLES //

var hash = objectInverse( enumeration(), {
	'duplicates': false
});


// MAIN //

/**
* Returns the BLAS diagonal type string associated with a BLAS diagonal type enumeration constant.
*
* @param {integer} value - diagonal type enumeration constant
* @returns {(string|null)} diagonal type string or null
*
* @example
* var str2enum = require( '@stdlib/blas-base-diagonal-type-str2enum' );
*
* var v = str2enum( 'unit' );
* // returns <number>
*
* var s = enum2str( v );
* // returns 'unit'
*/
function enum2str( value ) {
	var v = hash[ value ];
	return ( typeof v === 'string' ) ? v : null; // note: we include this guard to prevent walking the prototype chain
}


// EXPORTS //

module.exports = enum2str;
