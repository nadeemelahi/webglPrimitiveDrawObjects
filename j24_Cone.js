/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */

"use strict";

// extended from Circle NOT from EqltrlPyrmd
var Cone = function ( res ) {
	
	if ( res < 5  ) res = 5 ;

	this.offset = 0 ;
	this.colour = [ 0.5 , 0.5 , 0.5 , 1 ] ; 
	this.scale = [ 0.5 , 0.5 , 0.5 ] ;
	this.loc = [ 0 , 0 , 0 ] ;
	this.rot = [ 0 , 0 , 0 ] ;

	this.verts = [] ;

	function d2r ( deg ) { return deg * 3.14156 / 180 ; }
	function round ( num ) { return ( ( ( num * 1000 ) >> 0 ) ) / 1000 ; }
	function cos ( angle ) { return round ( Math.cos( d2r( angle ) ) ); }
	function sin ( angle ) { return round ( Math.sin( d2r( angle ) ) ); }

	this.cnt = res * 6 ; // 2 faces per angle, 3 verts per face 
	this.len = this.cnt * 4 ; 

	var idx , angle = 360 / res ;
	for ( idx = 0 ; idx < res ; idx ++ ) {

		// base
		// instead of xy plane we want xz (base of cone) sitting on xz floor
		
		this.verts.push ( 0 ); 
		this.verts.push ( 0 ); 
		this.verts.push ( 0 ); 
		this.verts.push ( 1 ); 

		// go clockwize so the outside of the  face faces down 
		// ie) in negative y direction
		this.verts.push ( cos ( ( idx + 1 ) * angle ) );
		this.verts.push ( 0 );
		this.verts.push ( sin ( ( idx + 1 ) * angle ) );
		this.verts.push ( 1 );

		this.verts.push ( cos ( idx * angle ) );
		this.verts.push ( 0 );
		this.verts.push ( sin ( idx * angle ) );
		this.verts.push ( 1 );


		// cone sides

		this.verts.push ( cos ( idx * angle ) );
		this.verts.push ( 0 );
		this.verts.push ( sin ( idx * angle ) );
		this.verts.push ( 1 );

		this.verts.push ( cos ( ( idx + 1 ) * angle ) );
		this.verts.push ( 0 );
		this.verts.push ( sin ( ( idx + 1 ) * angle ) );
		this.verts.push ( 1 );


		this.verts.push ( 0 );
		this.verts.push ( 1 );
		this.verts.push ( 0 );
		this.verts.push ( 1 );

	}
	

	
};
