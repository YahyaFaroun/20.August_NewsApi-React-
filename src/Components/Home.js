import React, { Component } from 'react';

class Home extends Component {
    state = {
        data : [],
        language: []
      }

      componentDidMount(){
          fetch('https://newsapi.org/v2/sources?language=en&apiKey=baa351b96cbf41aebb9eca53577868c8')
          .then(Response => Response.json())
          .then(json => {
              this.setState({ data : json.sources});
              console.log(this.state.data)
          })       
      }
      english=()=>{
        fetch('https://newsapi.org/v2/sources?language=en&apiKey=baa351b96cbf41aebb9eca53577868c8')
        .then(Response => Response.json())
        .then(json => {
            this.setState({ data : json.sources});
            console.log(this.state.data)
        })     
      }
      german=()=>{
        fetch('https://newsapi.org/v2/sources?language=de&apiKey=baa351b96cbf41aebb9eca53577868c8')
        .then(Response => Response.json())
        .then(json => {
            this.setState({ data : json.sources});
            console.log(this.state.data)
        })     
      }
      arabic=()=>{
        fetch('https://newsapi.org/v2/sources?language=ar&apiKey=baa351b96cbf41aebb9eca53577868c8')
        .then(Response => Response.json())
        .then(json => {
            this.setState({ data : json.sources});
            console.log(this.state.data)
        })     
      }

      render() {
          return(
              <div className="divs">
          
          <button onClick={this.english}>English</button>
          <button onClick={this.german}>German</button>
          <button onClick={this.arabic}>Arabic</button>

          {this.state.data.map((elt, i) =>
          
            <article className="articles" key={elt.id}>
                <p>{elt.description}</p>
                <a href={elt.url}>Read More</a>
                <p>{elt.name}</p>    
            </article>)}
          </div>
          
          )}
          
}

export default Home;