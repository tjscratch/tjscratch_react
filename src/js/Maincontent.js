import React from 'react'
import axios from 'axios'
import '../css/Maincontent.css';

let Articles = function(props) {
    return (
        <div className="article_container">
            <img className={props.className} alt="articleimg" src={props.imageUrl} role="presentation" />
            <p className="articletext">{props.Text}</p>
        </div>
    )
}

let MainContent = React.createClass({

    getInitialState: function() {
        return {
            article: []
        }
    },

    componentDidMount: function() {
        axios.get('content/articles.json').then(results =>{
            this.setState({
                article: results.data
            })
        })
    },

    render: function() {
        return (
            <div>
                <h1 className="maintext">Music is the breath of life!</h1>
                {this.state.article.map(function(article) {
                    return  <Articles key={article.id} imageUrl={article.imageUrl} Text={article.Text} className={article.class}/>
                })}
                <audio controls id="music" src="content/Flatline.mp3" type="audio/mpeg"></audio>
            </div>
        )
    }
})

export default MainContent;