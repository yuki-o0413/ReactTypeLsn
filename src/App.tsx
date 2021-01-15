import React from 'react';
import logo from './logo.svg';

import './App.css';
import Content from './components/Content';


function App() {
  onChangeId = (e) => {
    console.log(e.target.value)
    this.props.updateFormId(e.target.value);
  }
  // forName
  onChangeName = (e) => {
      console.log(e.target.value)
      this.props.updateFormName(e.target.value);
  }
  // clickSaveButton
  onSaveItem = () => {
      console.log(this.props)
      console.log("SAVE_ID: ",this.props.id);
      console.log("SAVE_NAME: ",this.props.name);
  }

  const formItem = this.props
  // formEvent
  const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeId,   onChangeName, onSaveItem })
    console.log('App.render:', this.props);

  return (
    <>
      <Content />
    </>
  );
}

export default App;
