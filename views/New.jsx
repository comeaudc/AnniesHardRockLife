const React = require('react');
const DefaultLayout = require('./layout/Default')

class New extends React.Component {
    render() {
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
                <h1 className='newPage'>Add a New Instrument?</h1>
                <h3>Tell me about it!</h3><br/>
                <div className='parent'>
                <div className='left'>
                    <form action="/api/v1/music" method="POST">
                        Type:   <input type="radio" id='piano' name="type" value='Piano'/>
                                    <label for="piano">Piano</label>
                                <input type="radio" id='guitar' name="type" value='Guitar'/>
                                    <label for="guitar">Guitar</label>
                                <input type="radio" id='drums' name="type" value='Drums'/>
                                    <label for="drums">Drums</label><br/>
                        Model: <input type="text" name="model" placeholder='Model'/><br/>
                        Quantity: <input type="number" name="qty" placeholder='0'/><br/>
                        Price: <input type="number" name="price" placeholder='$0' step=".01"/><br/>
                        Image: <input type="text" name="img" placeholder='Image URL' /><br/>
                        <input type="submit" name="" value="Submit Entry"/>
                    </form>
                </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = New;