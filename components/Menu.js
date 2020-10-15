import React from "react";

const Menu = (props) => {
  const [state, setState] = React.useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <ul className="menu">
      <span onClick={() => toggleState()}>{props.title}</span>
      <div className="menu-items">
        {
        
        state &&
          props.children.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
          
        }
      </div>
    </ul>
  );
};

export default Menu;
