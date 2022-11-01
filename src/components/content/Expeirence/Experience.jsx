import { expierence } from "./expeirence";
import Work from "./Work/Work";
import "./Expeirence.css";

export default function Expeirence() {
  // const [count, setCount] = useState(3);
  // const handle = (event) => {
  //   event.preventDefault();
  //   setCount(event.target.value);
  // };

  return (
    <div className="work-block">
      <h3 className="work-title">Work Expeirence</h3>
      {/* <input type="range" min={1} max={5} value={count} onChange={handle} /> */}
      {expierence.map((item) => (
        <Work key={item.company} {...item} />
      ))}
    </div>
  );
}
