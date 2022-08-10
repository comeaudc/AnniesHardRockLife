const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
    render(){
        const { inventory } = this.props;
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
                <link rel="stylesheet" href="/css/index.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet"></link>
            </head>
            <body className='main'>
                <DefaultLayout></DefaultLayout>
                <div className='spacer'></div>
                <h1 className='title'>Annie's Hard Rock Life</h1>
                <h3>Click an Instrument to view!</h3>
                <div className='gridContainer'>
                    {inventory.map((instrument) => {
                        let qty;
                        let button;
                        let name;
                        if(instrument.qty === null || instrument.qty === 0){
                            qty = `Out of Stock!`;
                            button = null;
                            name = `out`;
                        } else {
                            qty = `Left in Stock: ${instrument.qty}`;
                            name = `in`;
                            button = <button className='atc'>Add to Cart</button>
                        }
                        return(
                            <div className='item'>
                                <a href={`/api/v1/music/${instrument.type}/${instrument.id}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                                {instrument.type}: {instrument.model} <br/>
                                <h4 className={name}>{qty}</h4>
                                {button}
                            </div>
                        );
                    })}
                </div>
                <a href={'/'}><button><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Index;