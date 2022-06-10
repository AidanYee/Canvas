// BUTTON COMPONENT:
//import React from "react";
import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";


function BootstrapButton() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    var button = L.control({
      position: "topright"
    });
    const buttonHandler = () => { 
      console.log("Button Handler called");
    };

    button.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "myControl");
      const buttonElement = `<div class="btnWrapper">
      <button class="btn btn-primary" onClick=${buttonHandler}>Button stuff</button>
      </div>`;
      
      // buttonElement.addEventListener('click', () => { console.log('test')}
      this._div.innerHTML = buttonElement;
      return this._div;
    };
    
    button.addTo(map);
    console.log("button", button);

    return () => map.remove(button);
  }, [map]);

  return null;
}

// const Button = (props) => {
//   const buttonText = props.children;
//    let buttonClass = classNames('button', { 'button--confirm': props.confirm, 'button--danger': props.danger });
//   return (
//     <button
//       onClick={props.onClick}
//       disabled={props.disabled}
//       className={buttonClass}
//     >
//       {" "}
//       {buttonText}
//     </button>
//   );
// };

export default BootstrapButton;
