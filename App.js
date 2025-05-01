import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post.js";
import SideMenue from "./SideMenue";
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:"flex",
        justifyContent:"center",
        background:"#121212"}}>
    
    <div style={{display:"flex",width:"60%" }}>
<div style={{width:"70%"}}>
        <Post> 
        <div>
          <h1>100 yousef</h1>
          <hr/>
          <p> مبرمج صاحب خبرة3 سنوات ويطمح لدراسات عليا</p>
          </div>
        </Post>
        <Post> 
          <div>
          <h1>broke_yz</h1>
          <hr/>
          <p>بشتبياتنقباتس </p></div>
        </Post>
        <Post> 
        <div>
        <h1>yaser</h1>
          <hr/>
          <p>بتنبنشسبت</p>
          </div>
        </Post>
        </div>

      <div style={{width:"30%"}}>
        <SideMenue/>
      </div>

    </div>

    
    </div></div>
  );
}

export default App;
