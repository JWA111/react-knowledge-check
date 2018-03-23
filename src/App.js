import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import KnowledgeCheck from './blocks/KnowledgeCheck';
import './App.css';

import { SimpleQuestionaire } from './MockData';

let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Knowledge Check Block Demo</h1>
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

export default App;
