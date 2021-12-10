import {useState} from "react";
import "../assets/css/alarm.css";
import Card from "./Card";
import { data } from "./_mock";

const Alarms = () => {
    const [input, setInput] = useState('')
  const filterAlarm = (e)=>{  
  
      setInput(e.target.value)
  }
  return (
    <div className="alarm" style={{ width: "100%" }}>
      <form>
        <button>+</button>
        <input type="text" onChange={filterAlarm}/>
      </form>
      {data.filter(d => input.length > 0 ? input === d.title :  d )
      .map((e) => (
        <Card
          key={e.id}
          title={e.title}
          description={e.description}
          alarm={e.alarm}
        />
      ))}
    </div>
  );
};

export default Alarms;
