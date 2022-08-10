const React = require('react');
const DefaultLayout = require('./layout/Default');

class ShowCategory extends React.Component {
    render(){
        const inventory = this.props.inventory;
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
                <link rel="stylesheet" href="/css/index.css"/>
            </head>
            <body>
                <DefaultLayout></DefaultLayout>
                <h1>Annie's Hard Rock Life</h1><br/>
                <h3>Click an Instrument to view!</h3>
                <ul>
                    {inventory.map((instrument) => {
                        let qty;
                        let button;
                        if(instrument.qty === null || instrument.qty === 0){
                            qty = `Out of Stock!`;
                            button = null;
                        } else {
                            qty = `Left in Stock: ${instrument.qty}`;
                            button = <button>Add to Cart</button>
                        }
                        return(
                            <li>
                                <a href={`/api/v1/music/${instrument.type}/${instrument.id}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                                {instrument.type}: {instrument.model} <br/>
                                {qty}<br/>
                                {button}<br/>
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