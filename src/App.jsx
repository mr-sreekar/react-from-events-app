import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Age: ${age}, Branch: ${branch}, Gender: ${gender}`);
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setBranch("");
    setGender("");
  };

  return (
    <div className="App">
      <h1 className="title">Student Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
          />
        </label>
        <div className="gender-group">
          <label>
            Gender
            </label>
            <label>
            Male:
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleGenderChange}
            />
          </label>
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleGenderChange}
            />
          </label>
        </div>
        <label>
          Branch:
          <select
            name="branch"
            value={branch}
            onChange={handleBranchChange}
          >
            <option value="">Select branch</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="mech">MECH</option>
          </select>
        </label>
        <br />
        <div className="button-group">
          <button className="submit-button" type="submit">
            Submit
          </button>
          <button className="reset-button" type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;