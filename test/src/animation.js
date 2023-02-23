import "./animation.css";
import alice from "./alice.svg";

function animation() {
  const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };

  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  //   alice1
  //     .animate(aliceTumbling, aliceTiming)
  //     .finished.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  //     .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  //     .catch((error) => console.error(`Error animating Alices: ${error}`));
  alice1.animate(aliceTumbling, aliceTiming);

  //   return (
  //     <div id="alice-container">
  //       <img
  //         id="alice1"
  //         src={alice}
  //         role="img"
  //         alt="silhouette of crouching long haired character in dress and short boots"
  //       />
  //       <img
  //         id="alice2"
  //         src={alice}
  //         role="img"
  //         alt="silhouette of crouching long haired character in dress and short boots"
  //       />
  //       <img
  //         id="alice3"
  //         src={alice}
  //         role="img"
  //         alt="silhouette of crouching long haired character in dress and short boots"
  //       />
  //     </div>
  //   );
}
export default animation;
