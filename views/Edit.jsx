const React = require('react');
// Require nav layout
const DefaultLayout = require('./layout/Default');

class Edit extends React.Component {
    render() {
        const instrument = this.props.instrument;
        return (
            <html>
            <head>
                <title></title>
                <link rel="stylesheet" href="/css/index.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap" rel="stylesheet"></link>
            </head>
            <body>
                <DefaultLayout></DefaultLayout>
                <div className='spacer'></div>
                <h1 className='editPage'>Change Instrument Information?</h1>
                <div className='centering'>
                    <div className='left'>
                        <h2>What has Changed?</h2>
                        <form action={`/api/v1/music/${instrument.type}/${instrument.id}?_method=PUT`} method="POST">
                            Type:   <input type="radio" id='piano' name="type" value='Piano'/>
                                        <label for="piano">Piano</label>
                                    <input type="radio" id='guitar' name="type" value='Guitar'/>
                                        <label for="guitar">Guitar</label>
                                    <input type="radio" id='drums' name="type" value='Drums'/>
                                        <label for="drums">Drums</label><br/>
                            <label for='model'>Model:</label><input type="text" id='model' name="model" placeholder='Model'/><br/>
                            <label for='qty'>Quantity:</label><input type="number" id='qty' name="qty" placeholder='0'/><br/>
                            <label for='price'>Price:</label><input type="number" id='price' name="price" placeholder='$0'step=".01"/><br/>
                            <label for='img'>Image:</label><input type="text" id='img' name="img" placeholder='Image URL' /><br/>
                            <input className='submit' type="submit" name="" value="Submit Entry"/>
                        </form>
                    </div>
                    <div className='right'>
                        <h2>Current Info:</h2>
                        <img src={instrument.img} width="35%"/> <br/>
                        <h3>{instrument.type}: {instrument.model}</h3>
                        <h3 className='price'>Price: ${instrument.price}</h3>
                        <h3>Left in Stock: {instrument.qty}</h3>
                    </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Edit;