import React from "react";
import Header from "./components/Header";
import Age from "./components/Age";

export default function App() {
  const [age, setAge] = React.useState({
    userAge: "",
  });

  const [weeks, setWeeks] = React.useState("");

  function updateAge(e) {
    setAge({ userAge: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const weeksLeft = Math.floor((90 - age.userAge) * 52);
    setWeeks((prev) => {
      return [...prev, weeksLeft];
    });
  }

  React.useEffect(() => {
    if(weeks !== ""){
      setTimeout(clear, 5000);
    }
  }, [weeks]);

  function clear() {
    setAge({userAge: ""});
    setWeeks("");
  }

  return (
    <div>
      <Header />
      <Age
        update={updateAge}
        age={age.userAge}
        handleSubmit={handleSubmit}
        weeks={weeks}
      />
    </div>
  );
}
