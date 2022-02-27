import { Counter } from "./counter";
export const Question1 = () => {
  return <div>Render your counters here!
    <Counter min={-5} max ={5}></Counter>
    <Counter min={-15} max ={-5}></Counter>
    <Counter min={5} max ={15}></Counter>
  </div>;
};
