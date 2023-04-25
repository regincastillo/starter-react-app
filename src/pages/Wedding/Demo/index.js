import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image1 from "@Assets/weddingDemo/1.jpg"
import Image2 from "@Assets/weddingDemo/2.jpg"
import Image3 from "@Assets/weddingDemo/3.jpg"
import Image4 from "@Assets/weddingDemo/4.jpg"

const Demo = () => {
  const pages = [
    Image1,
    Image2,
    Image3,
    Image4
  ];

  return (
    <HTMLFlipBook width={500} height={700} showCover>
      {pages.map((page, index) => (
        <div  key={index} > 
        <div style={{
            width: "100%",
            height: 700,
            background: `url(${page})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            sample
        </div>
        </div>
      ))}
      <article className="App-Page-Last" key={pages.length}>
        <h1>The End</h1>
      </article>
    </HTMLFlipBook>
  );
};

export default Demo;
