import React from "react";

export default function Age(props) {
  return (
    <div id="app-div" className="container-lg text-center">
      <p>
        An Article by{" "}
        <a href="https://waitbutwhy.com/2014/05/life-weeks.html">
          Tim Urban - Your Life in Weeks
        </a>{" "}
        talks about how little time we actually have. This website will
        calculate just how many more weeks you have left if we live until 90
        years old.
      </p>
      <form onSubmit={props.handleSubmit}>
        <input
          value={props.age}
          name="age"
          onChange={(e) => props.update(e)}
          placeholder="Input your current age"
          autoComplete="off"
        ></input>
        <button className="input-btn">Submit</button>
      </form>
      <div className="container-md">
        {props.weeks && <h2>You have {props.weeks} weeks left</h2>}
      </div>
    </div>
  );
}
