const React = require('react');
const DefaultLayout = require('./layout/Default')

class New extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title></title>
                <link rel="stylesheet" href="/css/index.css"/>
            </head>
            <body>
                <DefaultLayout></DefaultLayout>
                <h1>Add a New Instrument?</h1>
                <h3>Tell me about it!</h3>
                    <form action="/api/v1/music" method="POST">
                        Type:   <input type="radio" id='piano' name="type" value='Piano'/>
                                    <label for="piano">Piano</label>
                                <input type="radio" id='guitar' name="type" value='Guitar'/>
                                    <label for="guitar">Guitar</label>
                                <input type="radio" id='drums' name="type" value='Drums'/>
                                    <label for="drums">Drums</label><br/>
                        Model: <input type="text" name="model" placeholder='Model'/><br/>
                        Quantity: <input type="number" name="qty" placeholder='0'/><br/>
                        Image: <input type="text" name="img" placeholder='Image URL' /><br/>
                        <input type="submit" name="" value="Submit Entry"/>
                    </form>
            </body>
            </html>
        );
    }
}

module.exports = New;