import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");
  const [specialCharCount, setSpecialCharCount] = useState(0);
  const [selectStart, setSelectStart] = useState(0);
  const [selectEnd, setSelectEnd] = useState(0);
  function toLower(event) {
    if (selectStart === selectEnd) {
      setText(text.toLowerCase());
    } else {
      setText(
        text.substring(0, selectStart) +
          text.substring(selectStart, selectEnd).toLowerCase() +
          text.substring(selectEnd)
      );
    }
  }
  function toUpper(event) {
    if (selectStart === selectEnd) {
      setText(text.toUpperCase());
    } else {
      setText(
        text.substring(0, selectStart) +
          text.substring(selectStart, selectEnd).toUpperCase() +
          text.substring(selectEnd)
      );
    }
  }
  function textChange(event) {
    setText(event.target.value);
    setSpecialCharCount(
      event.target.value.length -
        event.target.value.replace(/[^\w\s]/gi, "").length
    );
  }
  function onSelectScopeChange(event) {
    setSelectStart(event.target.selectionStart);
    setSelectEnd(event.target.selectionEnd);
  }
  const wordCount = (text && text.trim() && text.trim().split(" ").length) || 0;
  const readTime = wordCount / 200;
  return (
    <div className="p-2">
      <h2>Enter text here</h2>
      <textarea
        name="content"
        id="content"
        className="form-control"
        rows="10"
        onChange={textChange}
        value={text}
        onSelect={onSelectScopeChange}
      ></textarea>
      <div className="m-1">
        <button className="btn btn-success m-1" onClick={toUpper}>
          To upper
        </button>
        <button className="btn btn-primary m-1" onClick={toLower}>
          To lower
        </button>
      </div>
      <div className="m-1">
        <p>Special characters count: {specialCharCount}</p>
        <p>Total characters count: {text.length}</p>
        <p>Total word count: {wordCount}</p>
        <p>Time: {readTime} min read</p>
      </div>
    </div>
  );
}
