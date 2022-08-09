const React = require('react');

class ShowCategory extends React.Component {
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
                <h3>You are Browsing {}</h3>
                <ul>
                    {inventory.map((instrument, i) => {

                        return(
                            <li>
                                <a href={`/api/v1/music/${instrument.type}/${i}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                                {instrument.type}: {instrument.model} <br/>
                                Left in Stock: {instrument.qty}
                            </li>
                        );
                    })}
                </ul>
                <a href={'/api/v1/'}><button><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = ShowCategory;