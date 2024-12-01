import React from "react";

const App = () => {

  return (
    <>
      <div className="flex gap-2 bg-green-700">
        {["Faizan", "Musrat", "Haider", "Habib", "Mariyam"].map((item, index)=>{
          return (
            <h1 className={`text-2xl ${index === 2 && `ml-10`}`} key={index}>{item}</h1>
          )
        })}
      </div>
    </>
  );
};

export default App;
