import React, {useState} from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function onTitleChanged(event) {
    const {value} = event.target;
    setTitle(value);
  }

  function onContentChanged(event) {
    const {value} = event.target;
    setContent(value);
  }

  function submitted(event) {
    event.preventDefault();
    props.onAdd(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input onChange={onTitleChanged} name="title" placeholder="Title" value={title} />
        <textarea onChange={onContentChanged} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={submitted} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
