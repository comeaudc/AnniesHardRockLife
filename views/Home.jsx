const React = require('react')

class Home extends React.Component {
    render(){
        const { inventory } = this.props;
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
                <link rel="stylesheet" href="/css/index.css"/>
            </head>
            <body>
                <h1>Annie's Hard Rock Life</h1><br/>
                <a href={'/api/v1/music'}><button><h3>View All Instruments!</h3></button></a><br/>
                <a href={'/api/v1/music/piano'}><button><h3>View All Pianos!</h3></button></a><br/>
                <a href={'/api/v1/music/guitar'}><button><h3>View All Guitars!</h3></button></a><br/>
                <a href={'/api/v1/music/drums'}><button><h3>View All Drums!</h3></button></a><br/>
                <a href={'/api/v1/music/new'}><button><h3>Add New Instrument!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Home;