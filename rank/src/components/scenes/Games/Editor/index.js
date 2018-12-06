import React, { Component } from 'react';

import DynamicInput from './DynamicInput';


export default class GameEditor extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            cover_image: "",
            categories: [""],
            platforms: [""],
            publisher: "",
            rating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickIndex = this.handleClickIndex.bind(this)
        this.addCategory = this.addCategory.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.addPlatform = this.addPlatform.bind(this)
        this.removePlatform = this.removePlatform.bind(this)
    }

    handleClickIndex(e){
        this[e.target.name].bind(this)(e)
    }

    addCategory = (e) => {
        this.setState((prevState) => {
            const array = prevState.categories
            const index = array.length
            console.log(this.state.categories)
            if (index < 10) return{ categories: [...prevState.categories, ""] }
        })
    }

    removeCategory = () => {
        this.setState((prevState) => {
            const array = prevState.categories
            const index = array.length - 1
            if (index > 0) array.splice(index, 1)
            return { categories: array }
        })
    }

    addPlatform = (e) => {
        this.setState((prevState) => {
            const array = prevState.platforms
            const index = array.length
            console.log(this.state.platforms)
            if (index < 10) return{ platforms: [...prevState.platforms, ""] }
        })
    }

    removePlatform = () => {
        this.setState((prevState) => {
            const array = prevState.platforms
            const index = array.length - 1
            if (index > 0) array.splice(index, 1)
            return { platforms: array }
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        if (["category"].includes(e.target.className) ) {
            let categories = [...this.state.categories]
            categories[e.target.dataset.id] = e.target.value
            this.setState({ categories })
          }
          if (["platform"].includes(e.target.className) ) {
            let platforms = [...this.state.platforms]
            platforms[e.target.dataset.id] = e.target.value
            this.setState({ platforms })
          } else {
            this.setState({ [e.target.name]: e.target.value})
          }
    }

    newGame = async e => {
        e.preventDefault();
        const _url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

        const response = await fetch(`${_url}games`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
          },
          body: JSON.stringify({
            name: this.state.name,
            cover_image: this.state.cover_image,
            categories: this.state.categories,
            platforms: this.state.platforms,
            publisher: this.state.publisher,
            rating: this.state.rating
            }),
        });
        const body = await response.text();
        console.log(body);
      };

    render() {
        let { categories } = this.state, { platforms } = this.state
        return (
            <div>
                <form onSubmit={this.newGame} onChange={this.handleChange} className="create-game">
                    <div  className="grid-container">
                        <div className="submitbutton">
                            <button type="submit">CREATE GAME</button>
                        </div>
                        <div className="info">
                            <div className="field info-name">
                                <div>
                                    <h3 htmlFor="name">Name</h3>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.name}
                                        minLength="1"
                                        maxLength="50"
                                        size="50"
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="field info-cover-image">
                                <div>
                                    <h3 htmlFor="cover_image">Cover Image</h3>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="cover_image"
                                        id="cover_image"
                                        value={this.state.cover_image}
                                        minLength="1"
                                        maxLength="256"
                                        size="50"
                                        onChange={e => this.setState({ cover_image: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="field info-publisher">
                                <div>
                                    <h3 htmlFor="publisher">Publisher</h3> 
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="publisher"
                                        id="publisher"
                                        value={this.state.publisher}
                                        minLength="1"
                                        maxLength="50"
                                        size="50"
                                        onChange={e => this.setState({ publisher: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="field info-rating">
                                <div>
                                    <h3 htmlFor="rating">Rating</h3> 
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="rating"
                                        id="rating"
                                        value={this.state.rating}
                                        minLength="1"
                                        max="5"
                                        size="5"
                                        onChange={e => this.setState({ rating: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="categories">
                            <DynamicInput
                                title="Categories"
                                add="addCategory"
                                remove="removeCategory"
                                function={this.handleClickIndex}
                                item="Category"
                                className="category"
                                array={categories}
                            />

                            <DynamicInput
                                title="Platforms"
                                add="addPlatform"
                                remove="removePlatform"
                                function={this.handleClickIndex}
                                item="Platform"
                                className="platform"
                                array={platforms}
                            />
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
