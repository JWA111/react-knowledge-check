import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import KnowledgeCheck from './blocks/KnowledgeCheck';
import './App.css';

import {
  SimpleQuestionaire,
  SimpleQuestionaireAnswer
} from './MockData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Knowledge Check Demo</h1>
        </header>
        <div className="App-intro">
          <KnowledgeCheck
            questionaire={SimpleQuestionaire}
            correct={SimpleQuestionaireAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;
