
import Student from "./Student";

const Score = (props) => {
  return ( 
    <>
      <h4>Scores</h4>
      <p>Date:{props.score.date}</p>
      <p>Grade:{props.score.score}</p>
    </>
   );
}
 
export default Score;