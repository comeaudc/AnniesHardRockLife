const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        const { inventory } = this.props;
        return(
            <header>
                <a href='/api/v1/'><img src='https://i.imgur.com/Uc4NeNt.png' height={'50px'}></img></a>
                <nav>
                    <a href={'/api/v1/music'}><button>View All Instruments!</button></a>
                    <a href={'/api/v1/music/Piano'}><button>View All Pianos!</button></a>
                    <a href={'/api/v1/music/Guitar'}><button>View All Guitars!</button></a>
                    <a href={'/api/v1/music/Drums'}><button>View All Drums!</button></a>
                    <a href={'/api/v1/music/new'}><button>Add New Instrument!</button></a>
                </nav>
             </header>   
        )
    };
};

module.exports = DefaultLayout;