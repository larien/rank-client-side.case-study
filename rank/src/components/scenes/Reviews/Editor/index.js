import React, { Component } from 'react';

export default class ReviewEditor extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            cover_image: "",
            author_nickname: "",
            reading_time: 0,
            text_review: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value})
    }

    newReview = async e => {
        e.preventDefault();
        const _url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

        const response = await fetch(`${_url}reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              title: this.state.title,
              cover_image: this.state.cover_image,
              author_nickname: this.state.author_nickname,
              reading_time: this.state.reading_time,
              text_review: this.state.text_review
            }),
        });
        const body = await response.text();
        console.log(body);
      };

    render() {
        return (
            <div>
                <form onSubmit={this.newReview} onChange={this.handleChange} className="create-review">
                    <div  className="grid-container">
                        <div className="submitbutton">
                            <button type="submit">CREATE REVIEW</button>
                        </div>
                        <div className="info">
                            <p>Hey!</p>
                            <div className="field info-title">
                                <div>
                                    <h3 htmlFor="title">Title</h3>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={this.state.title}
                                        minLength="1"
                                        maxLength="50"
                                        size="50"
                                        onChange={e => this.setState({ title: e.target.value })}
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

                            <div className="field info-reading-time">
                                <div>
                                    <h3 htmlFor="reading_time">Reading Time</h3> 
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="reading_time"
                                        id="reading_time"
                                        min="1"
                                        max="50"
                                        size="1"
                                        value={this.state.reading_time}
                                        onChange={e => this.setState({ reading_time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="field info-author-nickname">
                                <div>
                                    <h3 htmlFor="author_nickname">Author Nickname</h3> 
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="author_nickname"
                                        id="author_nickname"
                                        value={this.state.author_nickname}
                                        minLength="1"
                                        max="50"
                                        size="50"
                                        onChange={e => this.setState({ author_nickname: e.target.value })}
                                    />
                                </div>
                            </div>
                            
                            <div className="field info-text-review">
                                <div>
                                    <h3 htmlFor="text_review">Review</h3>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="text_review"
                                        id="text_review"
                                        value={this.state.text_review}
                                        minLength="1"
                                        maxLength="2500"
                                        size="200"
                                        onChange={e => this.setState({ text_review: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
