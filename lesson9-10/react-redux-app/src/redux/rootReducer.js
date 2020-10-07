import React from 'react'
import {CLICK} from './types'

function rootReducer (state, action) {
    if(action.type === CLICK) {
        let name = []
        return fetch("https://api.github.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          name.push(data);
          
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
          
  
          return name;
        });
    }
    return state
   
};

export default rootReducer