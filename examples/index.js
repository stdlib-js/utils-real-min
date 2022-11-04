/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var realmin = require( './../lib' );

var m = realmin( 'float64' );
console.log( m );
// => 2.2250738585072014e-308

m = realmin( 'float32' );
console.log( m );
// => 1.1754943508222875e-38

m = realmin( 'float16' );
console.log( m );
// => 0.00006103515625
