const React = require('react');
import SearchBar from '../Search';

class DefaultLayout extends React.Component {
    render(){
        const onSearchSubmit = term => {
            console.log('New Search submit', term); 
          }
        const inventory = this.props;
        return(
            <header>
                <a href='/'><img src='https://i.imgur.com/Uc4NeNt.png' height={'50px'}></img></a>
                <nav>
                    <a href={'/api/v1/music'}>View All Instruments!</a>
                    <a href={'/api/v1/music/Piano'}>View Pianos!</a>
                    <a href={'/api/v1/music/Guitar'}>View Guitars!</a>
                    <a href={'/api/v1/music/Drums'}>View Drums!</a>
                    <a href={'/api/v1/music/new'}>Add New Instrument!</a>
                    <a href={'/api/v1/music/cart'}>View Cart</a>
                </nav>
             </header>   
        )
    };
};

module.exports = DefaultLayout;