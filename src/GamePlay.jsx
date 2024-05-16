import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import {Button} from "./styled/Button";
 import Rules from "./Rules";


const GamePlay = () => {
   const [score, setScore] = useState(0);
   const [selectedNumber, setSelectedNumber] = useState();
   const [currentDice, setCurrentDice] = useState(1);
   const [error, setError] = useState("");
   const [showRules, setShowRules] = useState(false);

   const generateRandomNumber = (min, max) => {
     return Math.floor(Math.random() * (max - min) + min);
   };

   const roleDice = () => {
     if (!selectedNumber) {
       setError("You have not selected any number");
       return;
     }

     const randomNumber = generateRandomNumber(1, 7);
     setCurrentDice((prev)=> randomNumber);

     if (selectedNumber == randomNumber) {
       setScore((prev) => prev + randomNumber);
     } else {
       setScore((prev) => prev - 2);
     }

     setSelectedNumber(undefined);
   };

   const resetScore = () => {
     setScore(0);
   };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore
          score={score}
          />
        <NumberSelector
           error={error}
           setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice 
       currentDice={currentDice} roleDice={roleDice}
       />
      <div className="btns">
      <Button
      onClick={resetScore}>Reset score</Button>
      <Button
      onClick = {() => setShowRules((prev) => !prev)}>{ showRules ? "Hide" : "Show"}Rules</Button>
      </div>

         {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;



// import { useState } from "react";
// import NumberSelector from "./NumberSelector";
// import RoleDice from "./RoleDice";
// import TotalScore from "./TotalScore";
// import styled from "styled-components";

// // Define Button and OutlineButton components
// const Button = styled.button`
//   /* Define your button styles here */
// `;

// const OutlineButton = styled.button`
//   /* Define your outline button styles here */
// `;

// const GamePlay = () => {
//   const [score, setScore] = useState(0);
//   const [selectNumber, setSelectedNumber] = useState();
//   const [currentDice, setCurrentDice] = useState(1);
//   const [error, setError] = useState("");

//   const generateRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
//   };

//   const roledice = () => {
//     const randomNumber = generateRandomNumber(1, 7);
//     setCurrentDice(randomNumber);

//     if (!selectNumber) {
//       setError("You have not selected any number");
//       return;
//     }

//     if (selectNumber === randomNumber) {
//       setScore((prev) => prev + randomNumber);
//     } else {
//       setScore((prev) => prev - 2);
//     }

//     setSelectedNumber(undefined);
//   };

//   return (
//     <Maincontainer>
//       <div className="top_section">
//         <TotalScore score={score} />
//         <NumberSelector
//           error={error}
//           setError={setError}
//           selectedNumber={selectNumber}
//           setSelectedNumber={setSelectedNumber}
//         />
//       </div>
//       <RoleDice currentDice={currentDice} roledice={roledice} />
//       <div className="btns">
//         <Button>Reset</Button>
//         <Button>Show Rules</Button>
//       </div>
//     </Maincontainer>
//   );
// };

// export default GamePlay;

// const Maincontainer = styled.div`
//   .top_section {
//     display: flex;
//     justify-content: space-around;
//     align-items: end;
//   }

//   .btns {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//   }
// `;
