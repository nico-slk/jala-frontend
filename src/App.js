import { Link } from "react-router-dom";
import Square from "./Square";
import './style.css'

function App() {
  let background;
  let ascii = 97;

  const line = () => {
    let lineSquare = []
    for (let i = 0; i < 8; i++) {
      background = background === "bg-dark" ? "bg-light" : "bg-dark";
      lineSquare.push({
        color: background,
        letterPosition: ascii,
        numPosition: i + 1
      });
    }
    return lineSquare
  }

  const column = () => {
    let columnSquare = [];
    for (let i = 0; i < 8; i++) {
      background = background === "bg-dark" ? "bg-light" : "bg-dark";
      columnSquare.push(line().map(e =>
        <div className="w-1-8">
          <Square color={e.color} letterPosition={e.letterPosition + i} numPosition={e.numPosition} />
        </div>
      ))
    }
    return columnSquare;
  }

  return (
    <div className="App">
      <div className="container gx-0 mb-10">
        <h1>App</h1>
        <Link to="/" className="btn btn-warning" >Back</Link>
        {column().map(e =>
          <div className="row gx-0">
            {e}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
