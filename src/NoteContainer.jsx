import React, { useState } from "react";
import Notes from "./Notes";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';

const Area = () => {

const [notes , changeNote] = useState({
    title : "",
    content : "",
})
const [notesList, changeNoteList] = useState([]);
const [ex , reset] = useState(0);

const expand = () =>{
    reset(1);
}
const shrink = () =>{
    reset(0);   
}

const AddNote = (val) => {
    const{name , value} = val.target;
    changeNote((old) =>{
        return{
            ...old,
            [name] : value,
        }
    })    
}
const deleteNote = (id) => {

    changeNoteList((old) => {
        return (
        old.filter((val , index) => {
            return index !== id;
        }
        )
        )
    })
    
}


  return (
    <>
        <div className="container">
            <form>
            <div onDoubleClick={shrink} className="noteContainer">
                {ex? <input className="noteHead" type="text" name="title" value={notes.title} placeholder= "Title" onChange={AddNote}/> : null}
                <textarea className="noteTail" name="content" value={notes.content} placeholder="Write your note" onChange={AddNote} onClick={expand} ></textarea>
                <button className="add" onClick={(event) => {

                    event.preventDefault();

                    changeNoteList((old) => {
                        return[...old , notes]
                    })
                    changeNote({
                        title : "",
                        content : "",
                    })

                }}><AddAlarmIcon/></button>
            </div>
            </form>
        </div>

        <div className="notesContainer">
            {
                notesList.map((value, index) => {
                    return (
                        <Notes 
                            id = {index}
                            key = {index}
                            title = {value.title}
                            content = {value.content}
                            del = {deleteNote}
                        />

                    )
                })
            }
        </div>
    </>
  )
}

export default Area;