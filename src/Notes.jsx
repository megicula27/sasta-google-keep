import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Notes = (props) => {
  return (
    <>
    <div className="notes">
        <p className="noteTitle">{props.title}</p>

        <div className="noteContent">{props.content}</div>

        <button className = "del" onClick={() =>

        {
            return (
            props.del(props.id)
            )
        }
        } ><DeleteIcon/></button>
    </div>
    </>
  )
}

export default Notes;