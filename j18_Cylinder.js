/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */

"use strict";

var Cylinder = function ( res ) {


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
		, angle = 360 / res ,
		zloc 
	;

	function d2r ( deg ) { return deg * 3.14156 / 180; }
	function round ( num ) { return ( (num * 1000)>>0 ) / 1000 ; }
	function cos ( angle ) { return round ( Math.cos( d2r( angle ) ) ); }
	function sin ( angle ) { return round ( Math.sin( d2r( angle ) ) ); }

	zloc = -1 ; 
	// front 
	for ( idx = 0 ; idx < res ; idx ++ ) {

		console.log ( ",  0   ,   0   ,   " + zloc + "   ,   1 " ) ;

		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);
	}

	zloc = 1 ; 
	// back 
	for ( idx = 0 ; idx < res ; idx ++ ) {

	console.log ( ",  0   ,   0   ,   " + zloc + "   ,   1 " ) ;
		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);


	}

	// sides  - 2 faces each loop
	for ( idx = 0 ; idx < res ; idx ++ ) {

		// face 1
		zloc = -1 ;
		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		zloc =  1 ;
		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		zloc = 1 ;
		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		// face 2
		zloc = -1 ;
		console.log( ", " 
			+ cos( idx * angle ) 
			+ "   ,   " 
			+ sin( idx * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);

		zloc = 1 ;
		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);
		zloc = -1 ;
		console.log( ", " 
			+ cos( (idx + 1) * angle ) 
			+ "   ,   " 
			+ sin( (idx + 1) * angle ) 
			+ " , " + zloc + "    ,   1 " 
		);
	}
	*/


	if ( !res || res < 6 ) { 
		// res = 5 , 5 faces, 3/face , front and back
		// sides 2 faces per res
		this.cnt = 5 * 3 * 2 * 5 * 2;
		this.len = this.cnt * 4 ; //  x dim=4  


		this.verts = [
			0   ,   0   ,   -1   ,   1 
			, 1   ,   0 , -1    ,   1 
			, 0.309   ,   0.951 , -1    ,   1 
			,  0   ,   0   ,   -1   ,   1 
			, 0.309   ,   0.951 , -1    ,   1 
			, -0.809   ,   0.587 , -1    ,   1 
			,  0   ,   0   ,   -1   ,   1 
			, -0.809   ,   0.587 , -1    ,   1 
			, -0.809   ,   -0.587 , -1    ,   1 
			,  0   ,   0   ,   -1   ,   1 
			, -0.809   ,   -0.587 , -1    ,   1 
			, 0.308   ,   -0.951 , -1    ,   1 
			,  0   ,   0   ,   -1   ,   1 
			, 0.308   ,   -0.951 , -1    ,   1 
			, 0.999   ,   0 , -1    ,   1 
			,  0   ,   0   ,   1   ,   1 
			, 0.309   ,   0.951 , 1    ,   1 
			, 1   ,   0 , 1    ,   1 
			,  0   ,   0   ,   1   ,   1 
			, -0.809   ,   0.587 , 1    ,   1 
			, 0.309   ,   0.951 , 1    ,   1 
			,  0   ,   0   ,   1   ,   1 
			, -0.809   ,   -0.587 , 1    ,   1 
			, -0.809   ,   0.587 , 1    ,   1 
			,  0   ,   0   ,   1   ,   1 
			, 0.308   ,   -0.951 , 1    ,   1 
			, -0.809   ,   -0.587 , 1    ,   1 
			,  0   ,   0   ,   1   ,   1 
			, 0.999   ,   0 , 1    ,   1 
			, 0.308   ,   -0.951 , 1    ,   1 
			, 1   ,   0 , -1    ,   1 
			, 1   ,   0 , 1    ,   1 
			, 0.309   ,   0.951 , 1    ,   1 
			, 1   ,   0 , -1    ,   1 
			, 0.309   ,   0.951 , 1    ,   1 
			, 0.309   ,   0.951 , -1    ,   1 
			, 0.309   ,   0.951 , -1    ,   1 
			, 0.309   ,   0.951 , 1    ,   1 
			, -0.809   ,   0.587 , 1    ,   1 
			, 0.309   ,   0.951 , -1    ,   1 
			, -0.809   ,   0.587 , 1    ,   1 
			, -0.809   ,   0.587 , -1    ,   1 
			, -0.809   ,   0.587 , -1    ,   1 
			, -0.809   ,   0.587 , 1    ,   1 
			, -0.809   ,   -0.587 , 1    ,   1 
			, -0.809   ,   0.587 , -1    ,   1 
			, -0.809   ,   -0.587 , 1    ,   1 
			, -0.809   ,   -0.587 , -1    ,   1 
			, -0.809   ,   -0.587 , -1    ,   1 
			, -0.809   ,   -0.587 , 1    ,   1 
			, 0.308   ,   -0.951 , 1    ,   1 
			, -0.809   ,   -0.587 , -1    ,   1 
			, 0.308   ,   -0.951 , 1    ,   1 
			, 0.308   ,   -0.951 , -1    ,   1 
			, 0.308   ,   -0.951 , -1    ,   1 
			, 0.308   ,   -0.951 , 1    ,   1 
			, 0.999   ,   0 , 1    ,   1 
			, 0.308   ,   -0.951 , -1    ,   1 
			, 0.999   ,   0 , 1    ,   1 
			, 0.999   ,   0 , -1    ,   1 

		];

		return ;
	} 

	// res = 5 , 5 faces, 3/face , front and back
	// sides 2 faces per res
	this.cnt = res * 3 * 2 * res * 2;
	this.len = this.cnt * 4 ; //  x dim=4  

	var idx ;

	function d2r ( deg ) { return deg * 3.14156 / 180; }
	function round ( num ) { return ( (num * 1000)>>0 ) / 1000 ; }
	function cos ( angle ) { return round ( Math.cos( d2r( angle ) ) ); }
	function sin ( angle ) { return round ( Math.sin( d2r( angle ) ) ); }

	var idx , angle = 360 / res , zloc ; 

	// front
	zloc = - 1
	for ( idx = 0 ; idx < res ; idx ++ ) {

		this.verts.push ( 0 ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;
	}


	// back  
	zloc = 1
	for ( idx = 0 ; idx < res ; idx ++ ) {

		this.verts.push ( 0 ) ;
		this.verts.push ( 0 ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;
	}

	// sides - 2 faces each loop
	for ( idx = 0 ; idx < res ; idx ++ ) {

		// face 1
		zloc = -1 ;
		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		zloc = 1 ;
		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		zloc = 1 ;
		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		// face 2
		zloc = -1 ;
		this.verts.push ( cos ( idx * angle ) ) ;
		this.verts.push ( sin ( idx * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		zloc = 1 ;
		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

		zloc = -1 ;
		this.verts.push ( cos ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( sin ( ( idx + 1 ) * angle ) ) ;
		this.verts.push ( zloc ) ;
		this.verts.push ( 1 ) ;

	}
};
