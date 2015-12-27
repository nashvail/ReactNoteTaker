module.exports = {
	entry: './app.js',
	output: {
		filename: './public/bundle.js'
	},
	module: {
		loaders: [
			{ 
	    test: /\.js$/, 
	    exclude: /node_modules/, 
	    loader: "babel", 
	    query:
	      {
	        presets:['es2015', 'react']
	      }
			}
		]
	}
}