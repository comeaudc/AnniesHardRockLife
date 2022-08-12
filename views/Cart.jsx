const React = require('react');
const DefaultLayout = require('./layout/Default');

class Cart extends React.Component {
    render(){
        const { cart } = this.props;
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
                <h3>Click an item to view!</h3>
                <div className='gridContainer'>
                    {cart.map((item) => {
                        let qty;
                        let name;
                        if(item.qty === null || item.qty === 0){
                            qty = `Out of Stock!`;
                            name = `out`;
                        } else {
                            qty = `In Your Cart: ${item.qty}`;
                            name = `in`;
                        }
                        return(
                            <div className='item'>
                                <a href={`/api/v1/music/${item.type}/${item.id}`}><img src={item.img} width="150" height="150"/></a> <br/>
                                {item.type}: {item.model} <br/>
                                <h4 className='price'>Price: ${item.price}</h4>
                                <h4 className={name}>{qty}</h4>
                                <form className='atcForm' action={`/api/v1/music/cart/${item.id}?_method=DELETE`} method="POST">
                                <button className='entryStyle' type="submit">Delete Entry</button>
                                </form>
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

module.exports = Cart;