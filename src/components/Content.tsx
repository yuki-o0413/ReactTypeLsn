'use strict';
import React,{ useState } from 'react';
// import { createStore } from "redux";

export default function Content(props) {
  //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
  const [checkName, setCheckName] = useState(true);
  // const ids = props.formItem.id;
  // const names = props.formItem.name;
  // console.log(props.formItem.id["list"])
  // const ids = props.formItem.id;
  console.log(props)
  return (
    <>
      <p>content</p>
​
      <Form
        onChangeId={props.onChangeId}
        onChangeName={props.onChangeName}
        setCheckName={setCheckName}
      />
      <button type="button"
        className="btn btn-outline-success"
        onClick={(e) => {props.onSaveItem();console.log(e)}}
        disabled = {checkName}
        >
        SAVE
      </button>
    </>
  );
}

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label className="pt-2">ID</label>
        <input id="id"
          type="text"
          className="form-control"
          value={props.id}
          onChange={(e) => props.onChangeId(e)}
        />
        <label className="pt-2">Name</label>
        <input id="name"
          type="text"
          className="form-control"
          value={props.name}
          onChange={
            (e) =>
            {
              if (e.target.value.length >= 3){
                setCheckName(false)
                {props.onChangeName(e)}
              }
            }
          }
        />
      </div>
    </form>
  )
}