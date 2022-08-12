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
                            name = `out`
                        } else {
                            qty = `Left in Stock: ${instrument.qty}`;
                            button = <form className='atcForm' action="/api/v1/music/cart/" method="POST">
                                        <input type={"hidden"} name='type' value={instrument.type}/>
                                        <input type={"hidden"} name='model' value={instrument.model}/>
                                        <input type={"hidden"} name='qty' value={1}/>
                                        <input type={"hidden"} name='price' value={instrument.price}/>
                                        <input type={"hidden"} name='img' value={instrument.img}/>
                                        <input className='atc' type={"submit"} value={`Add to Cart`}/>
                                    </form>
                            name = `in`
                        }
                        return(
                            <div className='item'>
                                <a href={`/api/v1/music/${instrument.type}/${instrument.id}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                                {instrument.type}: {instrument.model} <br/>
                                <h4 className='price'>Price: ${instrument.price}</h4>
                                <h4 className={name}>{qty}</h4>
                                {button}<br/>
                            </div>
                        );
                    })}
                </div>
                <a href={'/'}><button className='entryStyle'>Back to Main Directory!</button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = ShowCategory;