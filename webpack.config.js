// entry -> output
const path = require('path');  //we are going ot make const path and we are going to access the module code by using built in node function require();

//here we are using path.join function which is join the to path together.
// console.log(path.join(__dirname, 'public'));       //it conatins the path to the currents location so for us it is contain the path to the indecision project folder

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),              //this is the absolute path on your machine to where you want to output that webpack file. the triky thing is that we cant use ./ here bcs this needs to be an absolute path which means that we have to provide the path to this project on our machine
                               //which is clearlly going to be different for everyone if you are on a different operating system or your username is different the path is going to be different as well
        filename: 'bundle.js'  //file name anything we would like
    },
    module: {
        rules: [{
            loader: 'babel-loader',   //here we specified a single loader
            test: /\.js$/, //regular expretion
            exclude: /node_modules/
        }, { 
            test: /\.s?css$/,   //allowed to us scss and css file conversion
            use : [            // here we want to use (style,css) both of these loader.so for this we use  keyword -> (use) which is  allowed us to provide an array of loader.
                'style-loader',
                'css-loader',
                'sass-loader'  //sass-loader use to convert scss to css
            ],
            query: {
                presets: [
                    "env", 
                    "react"
                ]
            }       
        }]
    },
    //devtool gets set equal to a string and here we can specify the type of source map we want
    devtool: 'cheap-module-source-map',
    // const path = require('path');
    devServer: {
        contentBase: path.join(__dirname, 'public'),
      },
    
};

//loader -> a loader is a customize the behaviour of webpack when it loades a given file.
