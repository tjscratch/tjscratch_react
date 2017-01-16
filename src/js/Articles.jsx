import React, { Component } from 'react';
import '../css/Maincontent.css';

class Articles extends Component {
    render() {
        return (
            <div className="article_container">
                <img className={this.props.className} alt="mainimg" src={this.props.imageUrl} role="presentation" />
                <p className="articletext">{this.props.Text}</p>
            </div>
        );
    }
}


export default Articles;