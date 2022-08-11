const React = require('react')

class Home extends React.Component {
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
            <body className='box'>
                <img className='fred' src='https://m.media-amazon.com/images/M/MV5BYWUzNzYyZjMtNDY5OS00Y2YxLWJkNmQtZDQ3MTMxNjFlNzY3XkEyXkFqcGdeQXVyMzM5MTMxMw@@._V1_FMjpg_UX1000_.jpg' height="100%"></img>
                <img className='soupy' src='https://media.cdn.setlistfm.com/large/news/2018-11/1543261434557/tw.jpg' height="100%"></img>
                <div className='direct'>
                    <img className='homePg' src="https://i.imgur.com/BheIByh.png" title="source: imgur.com" height="100%"/>
                    <div className='directory'>    
                        <a href={'/api/v1/music'}>View All Instruments!</a><br/>
                        <a href={'/api/v1/music/piano'}>View All Pianos!</a><br/>
                        <a href={'/api/v1/music/guitar'}>View All Guitars!</a><br/>
                        <a href={'/api/v1/music/drums'}>View All Drums!</a><br/>
                        <a href={'/api/v1/music/new'}>Add New Instrument!</a><br/>
                    </div>

                </div>
                
            </body>
            </html>
        )
    };
};

module.exports = Home;