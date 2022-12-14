const React = require('react');
// Require nav layout
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
    render(){
        const instrument = this.props.instrument;
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
                        <input type={"hidden"} name='item' value={instrument.id}/>
                        <input className='atc' type={"submit"} value={`Add to Cart`}/>
                    </form>
            name = `in`
        }
        return(
            <html>
            <head>
                <title>Annie's HRL</title>
                <link rel="stylesheet" href="/css/index.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet"></link>
            </head>
            <body>
                <DefaultLayout></DefaultLayout>
                <div className='spacer'></div>
                <div className='show2'>
                    <h1 className='title2'>{instrument.type}: {instrument.model}</h1>
                    <img className='pic' src={instrument.img} width="350px" height="350px"/> <br/>
                    <h2>Price: ${instrument.price}</h2>
                    <h2 className={name}>{qty}</h2>
                    {button}
                </div>

                <div className='show'>
                    <a href={`/api/v1/music/${instrument.type}/${instrument.id}/edit`}><button className='entryStyle'>Edit Instrument</button></a>
                    <form action={`/api/v1/music/${instrument.type}/${instrument.id}?_method=DELETE`} method="POST">
                        <button className='entryStyle' type="submit">Delete Entry</button>
                    </form>
                    <a href={"/"}><button className='entryStyle'>Back to Main Directory!</button></a>
                </div> 
            </body>
            </html>
        )
    }
};

module.exports = Show;