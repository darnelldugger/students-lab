const Student = (props) => {
  return ( 
    <>
    {props.students.map((student) =>
        <h1>Student 
          {props.studentNum}
        </h1>
      
      )}
    </>
    );
 }
  
 export default Student;

    
    