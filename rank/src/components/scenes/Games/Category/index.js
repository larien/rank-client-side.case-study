import React, { Component } from 'react'
import { getGamesByCategory } from '../../../../redux/actions/categories'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return ({
        games: state.categories.gamesByCategory
    })
}

const mapDispatchToProps = {
    getGamesByCategory
}

export class GamesByCategory extends Component {
   constructor(props) {
      super(props)

      this.props.getGamesByCategory(this.props.match.params.name)
   }

  render() {
      const games = this.props.games.reverse().map((game)=>
      <div className="card">
          <img src={game.cover_image} alt="Thumb" />
          <div className="data">
            <h3 className="title"><a href={`/games/${game.id}`}>{game.name}</a></h3>
            <div className="body">
                <p>Categories: { game.categories }</p>
                <p className="platforms">Platforms: { game.platforms }</p>
                <p className="score">Score: { game.score }</p>
            </div>
          </div>
        </div>
      )
    return (
    <div>
        <div className={games.length === 0 ? '' : 'hidden'}><p className="nogames">There are no games here!</p>
        <p className="nogames">Why don't you try to create a new one? Up there!</p></div>
      <div className="games">
        { games }
      </div>
    </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GamesByCategory);