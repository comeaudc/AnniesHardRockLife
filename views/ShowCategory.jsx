const React = require('react');

class ShowCategory extends React.Component {
    render(){
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
            </head>
            <body>
                <h1>Annie's Hard Rock Life</h1><br/>
                <h3>Click an Instrument to view!</h3>
                <a href="/"><button><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = ShowCategory;