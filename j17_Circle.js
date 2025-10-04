/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */

"use strict";

var Circle = function ( res ) {

	this.offset = 0 ;
	this.colour = [ 0.5 , 0.5 , 0.5 , 1 ] ; 
	this.scale = [ 0.5 , 0.5 , 0.5 ] ;
	this.loc = [ 0 , 0 , 0 ] ;
	this.rot = [ 0 , 0 , 0 ] ;

	// cnt, len, and verts can not go on prototype
	// because they can vary 
	// since this constructor accepts a res 
	// res- resolution parameter
	this.verts = [] ;

	// prints out the default 5 divisions resolution circle
	/*
	var idx , res = 5 // ie) divisions
	, angle = 360 / res ; 
	for ( idx = 0 ; idx < res ; idx ++ ) {
		console.log ( ",  0   ,   0   ,   0   ,   1 " ) ;
		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " ,   0    ,   1 " 
		);
		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " ,   0    ,   1 " 
		);
	}
	*/
	if ( !res || res < 6 ) { 

		// res = 5 , 5 faces, 3/face
		this.cnt = 5 * 3 ;
		this.len = this.cnt * 4 ; //  x dim=4  

		this.verts = [
			0  	 ,   0   	,   0   ,   1
			, 1   	 ,   0 		,   0   ,   1
			, 0.309  ,   0.951 	,   0   ,   1

			,  0     ,   0   	,   0   ,   1
			, 0.309  ,   0.951 	,   0   ,   1
			, -0.809 ,   0.587 	,   0   ,   1

			,  0     ,   0   	,   0   ,   1
			, -0.809 ,   0.587 	,   0   ,   1
			, -0.809 ,   -0.587 	,   0   ,   1

			,  0     ,   0   	,   0   ,   1
			, -0.809 ,   -0.587 	,   0   ,   1
			, 0.308  ,   -0.951 	,   0   ,   1

			,  0     ,   0   	,   0   ,   1
			, 0.308  ,   -0.951 	,   0   ,   1
			, 0.999  ,   0 		,   0   ,   1 
		];


		return ;
	} 

	this.cnt = res * 3 ;
	this.len = this.cnt * 4 ; //  x dim=4  


	var idx ;

	function d2r ( deg ) { return deg * 3.14156 / 180; }
	function round ( num ) { return ( (num * 1000)>>0 ) / 1000 ; }
	function cos ( angle ) { return round ( Math.cos( d2r( angle ) ) ); }
	function sin ( angle ) { return round ( Math.sin( d2r( angle ) ) ); }

	var idx , angle = 360 / res ; 
	for ( idx = 0 ; idx < res ; idx ++ ) {

		this.verts.push ( 0 ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( 1 ) ;
	}

};
