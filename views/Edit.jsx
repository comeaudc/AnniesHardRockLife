const React = require('react');
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
                <h1>Change Instrument Information?</h1>
                <div className='centering'>
                    <div>
                        <h2>What has Changed?</h2>
                        <form action={`/api/v1/music/${instrument.type}/${instrument.id}?_method=PUT`} method="POST">
                            Type:   <input type="radio" id='piano' name="type" value='Piano'/>
                                        <label for="piano">Piano</label>
                                    <input type="radio" id='guitar' name="type" value='Guitar'/>
                                        <label for="guitar">Guitar</label>
                                    <input type="radio" id='drums' name="type" value='Drums'/>
                                        <label for="drums">Drums</label><br/>
                            Model:  <input type="text" name="model" placeholder='Model'/><br/>
                            Quantity:   <input type="number" name="qty" placeholder='0'/><br/>
                            Image:  <input type="text" name="img" placeholder='Image URL' /><br/>
                            <input type="submit" name="" value="Submit Entry"/>
                        </form>
                    </div>
                    <div>
                        <h2>Current Info:</h2>
                        {/* <h2>{instrument.type}: {instrument.model}</h2><br/> */}
                        <a href={`/api/v1/music/${instrument.type}/${instrument.model}`}><img src={instrument.img} width="150" height="150"/></a> <br/>
                        <h2>{instrument.type}: {instrument.model}</h2><br/>
                        <h2>Left in Stock: {instrument.qty}</h2>
                    </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Edit;