import React, { Component } from 'react';
import '../css/Maincontent.css';
import axios from 'axios';

class MainContent extends Component {
//     getArticle: function () {
//     axios.get('../content/articles.json').then(function (data) {
//         console.log(data);
//     })
// }
    render() {
        return (
          <h1 className="maintext">Music is the breath of life!</h1>
        );
    }
}

export default MainContent;