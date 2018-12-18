import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import './App.css';    
import request from 'superagent'

class App extends Component {

  send(values){
    alert(JSON.stringify(values));
    request.post("http://home.irossoftware.com:9010/sendMessage")
            .send(values)
            .end(function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res.status);
    }
  });
    // ここまで追記
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