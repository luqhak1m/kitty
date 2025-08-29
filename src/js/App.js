
import '../styles/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [cats, setCats]=useState([]);
  const [cats_accepted, setCatsAccepted]=useState([]);
  const [current_index, setCurrentIndex]=useState(0);
  const [direction, setDirection] = useState(null);
  const img_url="https://cataas.com/api/cats?limit=10";


  useEffect(()=>{
    fetch(img_url)  
    .then((response)=>response.json())
    .then((data)=>{
      // console.log("data", data);
      const urls=data.map(cat=>`https://cataas.com/cat/${cat.id}`);
      // console.log("urls", urls);
      setCats(urls);
    });
  }, [])

  const handleRightClick=()=>{
    setDirection("right");
    setTimeout(()=>{
      console.log("kitty yes", cats[current_index], current_index, cats.length);
      setCatsAccepted([...cats_accepted, cats[current_index]]);
      setCurrentIndex((previous_index)=>previous_index+1);
      setDirection(null);
    }, 300);
  }

  const handleLeftClick=()=>{
    setDirection("left");
    setTimeout(()=>{
      console.log("kitty no", cats[current_index], current_index, cats.length);
      setCurrentIndex((previous_index)=>previous_index+1);
      setDirection(null);
    }, 300);
  };

  return(
    <div id='cat-img-div'>
    {cats.length>0 && current_index<cats.length ?(
      <>
        <img
          src={cats[current_index]}
          className={`cat-stacks-img ${direction ? `swipe-${direction}` : ""}`}
        />
        <button className="arrow left" onClick={handleLeftClick}>
          ⬅
        </button>
        <button className="arrow right" onClick={handleRightClick}>
          ➡
        </button>
      </>
    ):(
      <div id="summary">
        <h2>You said YES to {cats_accepted.length} kitties:</h2>
        {cats_accepted.length>0 ?(
          <div className="accepted-cats">
            {cats_accepted.map((cat, index)=>(
              <img key={index} src={cat} className="accepted-cat-img"/>
            ))}
          </div>
        ):(
          <p>You did not say YES to any kitties :/</p>
        )}
      </div>
    )}
  </div>
  );
}

export default App;
