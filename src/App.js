import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import './App.css';    
import request from 'superagent'

class App extends Component {

  send(values){
    request.post("https://rx100.home.irossoftware.com/sendMessage")
            .send(values)
            .end(function(err, res) {
    if (err) {
      console.log(err);
      alert('エラーが発生しました。');
    } else {
      console.log(res.status);
      alert('送信しました。');
    }
  });
  }
  render() {
    return (
      <React.Fragment>
        <Header title="Daily Report" />
        <Form {...this.props} 
        onSubmit={values => this.send(values)}></Form>
      </React.Fragment>
    );
  }
}

export default App;