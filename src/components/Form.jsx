import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const newData = { ...formData, [`${name}`]: value };
    setFormData(newData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.name == "user" && formData.password == "password") {
      setSubmited(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error ? <p>Invalid username or password</p> : null}
      {submited ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Username:</label>
            <input
              onChange={inputHandler}
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={inputHandler}
              name="password"
              type="password"
              id="password"
              required
              value={formData.password}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
