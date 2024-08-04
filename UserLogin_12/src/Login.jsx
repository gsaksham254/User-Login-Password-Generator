// Login.js
import React, { useState , useContext} from 'react';
import Usercontext from './context/Usercontext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { setUser } = useContext(Usercontext);

  const handleSubmit = (event) => {
    event.preventDefault();
    empty()
    // TO DO: implement login logic here
    // for now, just log the username and password to the console
  };
  function empty(){
    if(username==="" || password===""){
      alert('Field is Empty')
    }
    else{
      setUser({username,password})
      alert("Login Successfull")
      setUsername('');
      setPassword('');
      setError(null);
    }
  }
  // d-flex items-center max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md

  return (
    <div className="max-w-md mx-auto p-4 bg-black rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && (
          <div className="mb-4 text-red-500 text-sm">{error}</div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;