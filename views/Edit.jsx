const React = require('react');

class Edit extends React.Component {
    render() {
        const instrument = this.props.instrument;
        return (
            <html>
            <head>
                <title></title>
            </head>
            <body>
                <h1>Change Instrument Information?</h1>
                <h3>What has Changed?</h3>
                    <form action={`/api/v1/music/${instrument.type}/${instrument.id}?_method=PUT`} method="POST">
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

module.exports = Edit;