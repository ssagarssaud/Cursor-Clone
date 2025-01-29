import "./App.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero/Hero";
import { useState, useEffect } from "react";

function App() {
  const [memeInfo, setMemeInfo] = useState({
    url: "../src/assets/HeroImage.png",
    topText: "Top",
    bottomText: "Bottom",
  });

  const [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemeImage(data.data.memes);
      });
  }, []);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * memeImage.length);
    const newUrl = memeImage.map((each) => {
      return each.url;
    });

    setMemeInfo((prevVal) => {
      return { ...prevVal, url: newUrl[randomIndex] };
    });
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMemeInfo((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }
  return (
    <>
      <Header />
      <Hero />
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="topText"
          value={memeInfo.topText}
        />
        <input
          onChange={handleChange}
          type="text"
          name="bottomText"
          value={memeInfo.bottomText}
        />
      </form>
      <div className="randomImage">
        <span className="top">{memeInfo.topText}</span>
        <div className="div">
          <img src={memeInfo.url} alt="This is the image of the random meme" />
        </div>
        <span className="bottom">{memeInfo.bottomText}</span>
        <button onClick={handleClick} className="image-btn">
          Generate New Image
        </button>
      </div>
    </>
  );
}

export default App;
