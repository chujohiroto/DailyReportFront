import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import './App.css';
import request from 'superagent'

class App extends Component {
  send(values){
    if(values.member === "None")
    {
      return;
    }
    request.post("https://tea-app.jp:9010/sendMessage")
            .send(values)
            .end(function(err, res) {
    if (err) 
    {
      console.log(err);
      alert('エラーが発生しました。 ' + err);
    } else {
      console.log(res.status);
      //alert('送信しました。');
    }
  });
  }
  save(values){
    if(values.member === "None")
    {
      return;
    }
    request.post("https://tea-app.jp:9010/saveMessage")
            .send(values)
            .end(function(err, res) {
    if (err) 
    {
      console.log(err);
      alert('エラーが発生しました。 ' + err);
    } 
    else 
    {
      console.log(res.status);
      //alert('セーブしました。　22時に自動で投稿されます。');
    }
  });
  }
  render() {
    return (
      <React.Fragment>
        <Header title="Daily Report" />
                よる10時になると、自動で保存された内容が投稿されます。すぐに送信したい場合は送信ボタンを押してください。
        <Form {...this.props} 
        onSubmit={values => this.send(values)} onChange={values => this.save(values)}>
        </Form>
      </React.Fragment>
    );
  }
}

export default App;