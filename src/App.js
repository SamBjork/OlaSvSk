import React from "react";
import { Parallax } from "react-parallax";
import "./App.css";
import sthlm from "./assets/1093970.jpg";
import enviken from "./assets/enviken.jpg";
import hlmstd from "./assets/halmstad.jpg";
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
export default function App() {
  return (
    <div className="App" style={{ height: "1000px" }}>
      <Parallax bgImage={hlmstd} strength={12}>
        <div style={{ height: 1000 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <Parallax
        bgImage={enviken}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
      <Parallax bgImage={sthlm} strength={500}>
        <div style={{ height: 1000 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
    </div>
  );
}
