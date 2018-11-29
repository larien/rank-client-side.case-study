import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGame } from '../../../../redux/actions/game';

const mapStateToProps = state => {
    return {
        _game: state.games.game
    }
}

class Game extends Component {

    componentDidMount() {
        document.body.className = 'Show Games'
    }

    componentWillMount(){
        this.props.getGame(this.props.match.params.id)
    }

    componentWillUnmount(){
        document.body.className = ''
    }

    render() {
        const { name, cover_image, platforms, categories, release_date, rating, score, publisher } = this.props._game
        console.log(this.props._game)
        return (
        <div className="game">
        <p>HEy!</p>
            <div className="thumbnail">
            <h3 className="info">{name}</h3>
            <img src={cover_image} alt="Thumb" />
            </div>
            <div>
                <p>Platforms: {platforms}</p>
                <p>Categories: {categories}</p>
                <p>Release Date: {release_date}</p>
                <p>Rating: {rating}</p>
                <p>Score: {score}</p>
                <p>Publisher: {publisher}</p>
            </div>
        </div>
        )
    }
}
export default connect(mapStateToProps, {
    getGame
})(Game);