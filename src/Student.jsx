import { useState } from "react";
import Score from "./Score";

const Student = (props) => {
  return ( 
    <>

        <h2>{props.student.name}</h2>
        <p>{props.student.bio}.</p>
        {props.student.scores.map(score =>
          < Score score={score}/>

          )}
    </>
  );
}

export default Student;


        

    