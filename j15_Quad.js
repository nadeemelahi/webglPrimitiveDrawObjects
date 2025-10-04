/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */

"use strict";

var Quad = function ( ) {

	this.offset = 0 ;
	this.colour = [ 0.5 , 0.5 , 0.5 , 1 ] ; 
	this.scale = [ 0.5 , 0.5 , 0.5 ] ;
	this.loc = [ 0 , 0 , 0 ] ;
	this.rot = [ 0 , 0 , 0 ] ;
};
Quad.prototype.cnt = 6 ;
Quad.prototype.len = 24 ; // 6 x 4
Quad.prototype.verts = [
	  -1	,   -1		, 0, 1 
	,  1	,    1		, 0, 1 
	, -1	,    1		, 0, 1 

	, -1	,   -1		, 0, 1 
	,  1	,   -1		, 0, 1 
	,  1	,    1		, 0, 1 
];
