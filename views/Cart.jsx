const React = require('react');
// Require nav layout
const DefaultLayout = require('./layout/Default');

class Cart extends React.Component {
    render(){
        const { cart } = this.props;
        let total = 0
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
                <h2 className='title'>Your Shopping Cart</h2>
                <h3>Click an item to view!</h3>
                <div className='yourCart'>
                    <div className='gridContainer2'>
                        {cart.map((item) => {
                            let qty;
                            let name;
                            total += item.price
                            if(item.qty === null || item.qty === 0){
                                qty = `Out of Stock!`;
                                name = `out`;
                            } else {
                                qty = `In Your Cart: ${item.qty}`;
                                name = `in`;
                            }
                            return(
                                <div className='item'>
                                    <a href={`/api/v1/music/${item.type}/${item.item}`}><img src={item.img} width="150" height="150"/></a> <br/>
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
                    <div className='totals'>
                        <h2><span className="total">Sub Total:</span>    ${(total).toFixed(2)}</h2>
                        <h2><span className="total">Expected Tax:</span>    ${(total * .07).toFixed(2)}</h2>
                        <h1><span className="total">Total:</span> ${(total + (total * .07)).toFixed(2)}</h1>
                    </div>
                </div>
                <a href={'/api/v1/music'}><button className='entryStyle'>Get Back To Shopping</button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Cart;