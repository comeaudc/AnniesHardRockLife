const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
    render(){
        const instrument = this.props.instrument;
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
                <link rel="stylesheet" href="/css/index.css"/>
            </head>
            <body>
                <DefaultLayout></DefaultLayout>
                <h2>{instrument.type}: {instrument.model}</h2><br/>
                <a href={`/api/v1/music/${instrument.type}/${instrument.model}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                <h2>Left in Stock: {instrument.qty}</h2><br/>
                <a href={`/api/v1/music/${instrument.type}/${instrument.id}/edit`}><button><h3>Edit Instrument</h3></button></a><br/>
                <form action={`/api/v1/music/${instrument.type}/${instrument.id}?_method=DELETE`} method="POST">
                    <button type="submit"><h4>Delete Entry</h4></button>
                </form><br/>
                <a href={'/api/v1/music'}><button><h3>View All Instruments!</h3></button></a><br/>
                <a href={"/api/v1/"}><button><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Show;