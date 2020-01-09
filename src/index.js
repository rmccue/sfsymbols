// @codegen

const fs = require( 'fs' );

// Load name data first.
const nameData = fs.readFileSync( require.resolve( '../data/names.dat' ) );
const names = nameData.toString().split( '\n' );

// Then, load character data.
const charData = fs.readFileSync( require.resolve( '../data/unicode.dat' ) );
const chars = Array.from( charData.toString() );

const data = {};
names.forEach( ( name, idx ) => {
	data[ name ] = chars[ idx ];
} );

module.exports = `export default ${ JSON.stringify( data, null, '\t' ) };`;
