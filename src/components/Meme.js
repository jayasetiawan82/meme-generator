import React from "react";
import memesData from "./memesData.js";

export default function Meme() {


    const [meme, setMeme] = React.useState({
      topText:"",
      bottomText: "",
      randomImages: "http://i.imgflip.com/1bij.jpg"
    })
  
   const [allMemeImages, setAllMemeImages] = React.useState(memesData)
  

    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url 
        setMeme( function(prevMeme) {
          return {
          ...prevMeme, 
          randomImages: url
          }
        })

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
      <img src={meme.randomImages} className="meme-img" />
    </main>
  );
}
