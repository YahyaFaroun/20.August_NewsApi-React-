import React, { Component } from 'react';

class Business extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=baa351b96cbf41aebb9eca53577868c8')
            .then(Response => Response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(this.state.data)
            })
    }

    render() {
        return (
            <div className="divs">

                {this.state.data.map((elt, i) =>

                    <article className="articles" key={elt.id}>
                        <img src={elt.urlToImage} alt=""></img>
                        <h1>{elt.title}</h1>
                        <p>{elt.content}</p>
                        <a href={elt.url}>Read More</a>
                        <h6>{elt.publishedAt}</h6>
                        <p>{elt.author}</p>
                    </article>)}
            </div>

        )
    }

}

export default Business;