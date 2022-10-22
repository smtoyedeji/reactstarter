import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const displayUsers = users.map(user => {
    const { id, login, avatar_url, html_url } = user;
    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>  
        </div>
      </li>
    );
  })

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(users => setUsers(users));
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {displayUsers}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
