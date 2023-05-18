import React, { useState, useEffect } from "react";

const Meme = () => {
  const [allMemeImages, setAllMemeImages] = useState({});
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data);
    }
    getMemes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prememe) => {
      return {
        ...prememe,
        [name]: value,
      };
    });
  };

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prememe) => {
      return { ...prememe, randomImage: memesArray[randomNumber].url };
    });
  }
  return (
    <>
      <div className="form-container">
        <form className="meme-form">
          <input
            type="text"
            value={meme.topText}
            placeholder="Top Text"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <input
            type="button"
            name="submit"
            value="Get a new meme image"
            className="meme-form-button"
            onClick={getMemeImage}
          />
        </form>
        <div className="image-container">
          <img src={meme.randomImage} className="meme-image" />
          <h2 className="top-text">{meme.topText}</h2>
          <h2 className="bottom-text">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
};

export default Meme;
