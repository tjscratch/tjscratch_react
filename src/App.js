import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <header className="main-header">
                <ul className="main_menu">
                    <li className="active">
                        <a href="#/" id="mainpage" className="mainpage">Главная</a>
                    </li>
                    <li>
                        <a href="#/music">Музыка</a>
                    </li>
                    <li>
                        <a href="#/video">Видео</a>
                    </li>
                    <li>
                        <a href="#/photo" id="photo">Фото</a>
                    </li>
                    <li>
                        <a href="#/chat">Чат</a>
                    </li>
                    <li>
                        <a href="#/enter">Вход</a>
                    </li>
                </ul>
        </header>
    );
  }
}

export default App;
