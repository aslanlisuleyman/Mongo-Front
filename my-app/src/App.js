import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://mongo-back-3obt.onrender.com/products").then((res) => {
      console.log(res.data);
      setData(res.data)
    });
  }, []);

  return <>
  
  
   <div className="App">
    {
      data.map((item,index)=>{
        return(

           <div class="card" style={{width: "17rem",height:"400px"}}>
  <img style={{height:"250px"}} src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">  ${item.price}</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>
        )
       
      })
    }
    </div>;
  
  
  
  
  </>
  
  
 
}

export default App;
