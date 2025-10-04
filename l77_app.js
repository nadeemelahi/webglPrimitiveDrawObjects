/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */


"use strict;"
drawRotatingPrimitives();
function drawRotatingPrimitives() {

	ngl.init( "fsCanvas" ) ;

	//console.log( ngl.gl.getParameter( ngl.gl.MAX_VERTEX_ATTRIBS ) ); // 16

	var shader = ngl.shaderLamp;
	shader.compile();
	shader.use_program();

	var  res = 8 // 20 
		, ep2 = new EqltrlPyrmd () 
		, tr1 = new Triangle () 
		, qd1 = new Quad() 
		, crcl1 = new Circle ( res ) 
		, cube1 = new Cube ( ) 
		, cylndr1 = new Cylinder( res ) 
		, cone1 = new Cone( res ) 
		, sphere1 = new SphereLatLongRings( res ) 
		, byEndPts = new CylinderByEndPoints ( res , 0.1 
			, [ -0.3 ,  0.0 ,  0.0 ]
			, [  0.3 ,  0.0 ,  0.0 ]
		) 
		, ballSocket = new BallSocket ()
	;

	// colour is fixed -set in LampShading constructor
	
	ep2.colour = [ 0.0 , 1.0 , 0.0 , 1 ] ;
	tr1.colour = [ 0.0 , 1.0 , 1.0 , 1 ] ;
	qd1.colour = [ 1.0 , 0.0 , 1.0 , 1 ] ;
	crcl1.colour = [ 0.3 , 0.6 , 0.9 , 1 ] ;
	cube1.colour = [ 0.9 , 0.7 , 0.5 , 1 ] ;
	cylndr1.colour = [ 0.9 , 0.1 , 0.1 , 1 ] ;
	cone1.colour = [ 0.5 , 0.8 , 0.1 , 1 ] ;
	sphere1.colour = [ 0.5 , 0.1 , 0.9 , 1 ] ;
	byEndPts.colour = [ 1.0 , 0.0 , 1.0 , 1 ] ;
	ballSocket.colour = [ 1.0 , 1.0 , 0.0 , 1 ] ;
	
	
	ep2.scale = [ 0.15 , 0.15 , 0.15 ] ;
	tr1.scale = [ 0.2 , 0.2 , 0.2 ] ;
	qd1.scale = [ 0.1 , 0.1 , 0.1 ] ;
	crcl1.scale = [ 0.1 , 0.1 , 0.1 ] ;
	cube1.scale = [ 0.1 , 0.1 , 0.1 ] ;
	cylndr1.scale = [ 0.2 , 0.2 , 0.2 ] ;
	cone1.scale = [ 0.1 , 0.1 , 0.1 ] ;
	sphere1.scale = [ 0.3 , 0.3 , 0.3 ] ;
	byEndPts.scale = [ 1.0 , 1.0 , 1.0 ] ;
	ballSocket.scale = [ 0.3 , 0.3 , 0.3 ] ;
		
	
	ep2.loc = [  0.0 ,  1.5 , 0.0 ] ;
	tr1.loc = [ -1.5 , -1.5 , 0.0 ] ;
	qd1.loc = [  1.5 , -1.5 , 0.0 ] ;
	crcl1.loc = [  1.5 ,  0.0 , 0.0 ] ;
	cube1.loc = [  -0.8 , -1.5 , 0.0 ] ;
	cylndr1.loc = [ -1.2 ,  0.0 , 0.0 ] ;
	cone1.loc = [  0.5 ,  -1.0 , 0.0 ] ;
	sphere1.loc = [  -0.5 ,  0.5 , 0.0 ] ;
	byEndPts.loc = [ 1.0 , 1.0 , 0.0 ] ;
	ballSocket.loc = [ 0.0 ,-0.4 , 0.0 ] ;
	
	var  ls2 = new ShaderLampMesh( shader , ep2 ) 
		, ls5 = new ShaderLampMesh( shader , tr1 ) 
		, ls6 = new ShaderLampMesh( shader , qd1 ) 
		, ls7 = new ShaderLampMesh( shader , crcl1 ) 
		, ls8 = new ShaderLampMesh( shader , cube1 ) 
		, ls9 = new ShaderLampMesh( shader , cylndr1 ) 
		, ls10 = new ShaderLampMesh( shader , cone1 ) 
		, ls11 = new ShaderLampMesh( shader , sphere1 ) 
		, ls12 = new ShaderLampMesh( shader , byEndPts ) 
		, ls13 = new ShaderLampMesh( shader , ballSocket ) 
	;

	var offset = 0 
		, olist = [  ls2 
			, ls5 , ls6 , ls7 
			, ls8 , ls9 , ls10 
			, ls11 , ls12 , ls13
		] 
		, odx , olen = olist.length 
		, allVertsLen = olist[ 0 ].mesh.len ; // the first one
	;

	// skip odx = 0 because offset 0 is correct for first olist item
	for ( odx = 1 ; odx < olen ; odx ++ ) {

		allVertsLen += olist [ odx ].mesh.len ;
		offset += olist [ odx - 1 ].mesh.cnt ;
		olist [ odx ].mesh.offset = offset ;

	}

	
	ls2.roty = 0 ; ls2.step = 5 ; ls2.lim = 355 ;
	ls2.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};


	ls5.roty = 0 ; ls5.step = 5 ; ls5.lim = 355 ;
	ls5.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};

	ls6.roty = 0 ; ls6.step = 5 ; ls6.lim = 355 ;
	ls6.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};

	ls7.roty = 0 ; ls7.step = 1 ; ls7.lim = 359 ;
	ls7.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};

	ls8.roty = 0 ; ls8.step = 1 ; ls8.lim = 359 ;
	ls8.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};

	ls9.roty = 0 ; ls9.step = 1 ; ls9.lim = 359 ;
	ls9.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};


	ls10.roty = 0 ; ls10.step = 15 ; ls10.lim = 345 ;
	ls10.update = function () {

		this.mesh.rot = [ 0 , this.roty , 0 ] ;

		this.roty += this.step;
		if ( this.roty > this.lim ) this.roty = 0;
	};

	ls11.roty = 0 ; ls11.stepy = 1 ; ls11.limy = 360 - ls11.stepy ;
	ls11.rotz = 0 ; ls11.stepz = 2 ; ls11.limz = 360 - ls11.stepz ;
	ls11.update = function () {

		this.mesh.rot = [ 0 , this.roty , this.rotz ] ;

		this.roty += this.stepy;
		if ( this.roty > this.lim ) this.roty = 0;

		this.rotz += this.stepz;
		if ( this.rotz > this.lim ) this.rotz = 0;
	};

	ls12.roty = 0 ; ls12.stepy = 1 ; ls12.limy = 360 - ls12.stepy ;
	ls12.rotz = 0 ; ls12.stepz = 1 ; ls12.limz = 360 - ls12.stepz ;
	ls12.update = function () {

		this.mesh.rot = [ 0 , this.roty , this.rotz ] ;

		this.roty += this.stepy;
		if ( this.roty > this.limy ) this.roty = 0;

		this.rotz += this.stepz;
		if ( this.rotz > this.limz ) this.rotz = 0;
	};

	ls13.roty = 0 ; ls13.stepy = 1 ; ls13.limy = 360 - ls13.stepy ;
	ls13.rotz = 0 ; ls13.stepz = 0 ; ls13.limz = 360 - ls13.stepz ;
	ls13.update = function () {

		this.mesh.rot = [ 0 , this.roty , this.rotz ] ;

		this.roty += this.stepy;
		if ( this.roty > this.limy ) this.roty = 0;

		this.rotz += this.stepz;
		if ( this.rotz > this.limz ) this.rotz = 0;
	};


	var all_vertex012 = []
		, all_shufle120 = []
		, all_shufle201 = []
		, all_fragments = []
	;

	function push_data ( idx , lso ) {

		all_vertex012.push ( lso.verts012 [ idx ] ) ;
		all_shufle120.push ( lso.shufle120 [ idx ] ) ;
		all_shufle201.push ( lso.shufle201 [ idx ] ) ;
		all_fragments.push ( lso.frags [ idx ] ) ;

	}

	var eachLen ;
	for ( odx = 0 ; odx < olen ; odx ++ ) {

		eachLen = olist [ odx ].mesh.len ;

		for ( idx = 0 ; idx < eachLen ; idx ++ ) {

			push_data ( idx , olist [ odx ] ) ;
		}
	}

	var vertex012 = new Float32Array ( allVertsLen ) 
		, shufle120 = new Float32Array ( allVertsLen )  
		, shufle201 = new Float32Array ( allVertsLen ) 
		, fragments = new Float32Array ( allVertsLen ) 
	;

	for ( idx = 0 ; idx < allVertsLen ; idx ++ ) {

		vertex012 [ idx ] = all_vertex012 [ idx ] ;
		shufle120 [ idx ] = all_shufle120 [ idx ] ;
		shufle201 [ idx ] = all_shufle201 [ idx ] ;
		fragments [ idx ] = all_fragments [ idx ] ;
	}

	shader.load.vertices_3 ( vertex012 , shufle120 , shufle201 ) ;
	shader.load.fragments ( fragments ) ;
			

	function draw () {

		for ( odx = 0 ; odx < olen ; odx ++ ) {

			olist [ odx ].update ();
			olist [ odx ].loadUniforms();
			olist [ odx ].draw ();
		}
	}

	var ctm = 51 , rate = 50;
	this.tick = function ( dtm ){

		ctm += dtm ;

		if ( ctm > rate ) {
			draw () ;
			ctm = 0 ;
		};
	};
	T.add(this);
}
