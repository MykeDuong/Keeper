import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

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
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={onTitleChanged} name="title" placeholder="Title" value={title} />}
        <textarea onClick={() => setExpanded(true)}onChange={onContentChanged} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={content} />
        <Zoom in={isExpanded}><Fab onClick={submitted} ><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
