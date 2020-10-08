import React from 'react'
import {bindActionCreators} from 'redux'
import load from './actions'

function mapDispatchToProps(component) {
    switch(component) {
        case "Component": return function (dispatch) {
            return {
                change_value: bindActionCreators(load, dispatch)
            }
        }
        default: return undefined;
    }
}

export function getResult () {
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
// return name

export default mapDispatchToProps