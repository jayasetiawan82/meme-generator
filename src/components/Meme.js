import React from "react";
import memesData from "./memesData";

export default function Meme() {
    let url;
    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)

    }

  return (
    <main>
      <form className="form">
        <div>
        <label>Top Text</label>
        <input type="text" placeholder="Top Text" className="form-input" />
        </div>
        
        <div>
            <label>Bottom Text</label>
        <input type="text" placeholder="Bottom Text" className="form-input" />
        </div>  
        

        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
