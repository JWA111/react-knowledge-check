import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import KnowledgeCheck from './blocks/KnowledgeCheck';
import './App.css';

import { SimpleQuestionaire } from './MockData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Knowledge Check Demo</h1>
        </header>
        <div className="App-intro">
          {SimpleQuestionaire.questions.map((question) => {
            return <KnowledgeCheck
                      question={question}
                      correctOption={question.correctOption}
                    />
          })}
        </div>
      </div>
    );
  }
}

export default App;
