import { useState, useEffect } from "react";
import { gsap, Expo } from "gsap";
import './Preloader.scss'; 

// eslint-disable-next-line react/prop-types
const Preloader = ({ setLoading }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const count = setInterval(() => {
        setCounter((counter) =>
          counter < 100
            ? counter + 1
            : (clearInterval(count), setCounter(100), reveal())
        );
      }, 25);
    }, []);
  
    async function reveal() {
      const t1 = gsap.timeline({});
  
      await t1
        .to(".follow", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 1.2,
          delay: 0.5,
        })
        .to(".hide", { opacity: 0, duration: 0.3 })
        .to(".follow", {
          height: "100%",
          ease: Expo.easeInOut,
          duration: 0.7,
        })
        .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 3 });
        
      if (!t1.isActive()) {
        await setLoading(false);
      }
    }
  
    return (
      <div className="app-container">
        <div className="loading">
          <div className="follow"></div>
          <div
            className="progress-bar hide"
            id="progress-bar"
            style={{ width: counter + "%" }}
          >{counter}</div>
        </div>
        <div className="content">kjhkjhkjhkjhkj</div>
      </div>
    );
  };

export default Preloader;
