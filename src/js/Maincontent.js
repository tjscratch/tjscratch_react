import React from 'react'
import axios from 'axios'
import '../css/Maincontent.css';

let Articles = function(props) {
    function playMusic() {
        if (props.className === "article_right" && props.imageUrl === "content/images/cyberdj_240x320.png")
        {
            document.getElementById("2").src="content/images/cyberdj_240x320.gif";
         document.getElementById("music").play()
        }else {
         document.getElementById("2").src="content/images/cyberdj_240x320.png";
         document.getElementById("music").pause()
            console.log(document.getElementById("2").src.indexOf("cyberdj_240x320.gif"))
        }

    }

    return (
        <div className="article_container">
            <img id={props.Id} className={props.className} alt="articleimg" src={props.imageUrl} role="presentation" onClick={playMusic}/>
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
                    return  <Articles key={article.id} imageUrl={article.imageUrl} Text={article.Text} className={article.class} Id={article.id}/>
                })}
                <audio controls id="music" src="content/Flatline.mp3" type="audio/mpeg"></audio>
            </div>
        )
    }
})

export default MainContent;