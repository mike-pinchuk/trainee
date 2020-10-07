import React, { useState } from "react";

function WithoutReduxPage() {
  const [name, setNames] = useState([]);

  const getResult = () => {
    return fetch("https://api.github.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        name.push(data);
        setNames(
          name.map((e) => {
            return e.map((elem, id) => {
              return (
                <div key={id} className="card">
                  <h3>
                    Number of card <span>{elem.id}</span>
                  </h3>
                  <img
                    src={`https://avatars0.githubusercontent.com/u/${elem.id}?v=4`}
                    alt="avatar"
                  />
                  <p>Login: {elem.login}</p>
                  <p>
                    <a href={elem.html_url}>Personal GitHub page</a>
                  </p>
                </div>
              );
            });
          })
        );

        return name;
      });
  };

  return (
    <div className="main">
      <h1>GitHub users (Without Redux technologie)</h1>
      <button onClick={getResult} type="button">Click on me!</button>
      <div className="result">{name}</div>
    </div>
  );
}

export default WithoutReduxPage;
