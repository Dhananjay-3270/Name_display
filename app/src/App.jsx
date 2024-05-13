import { useState } from "react";

function App() {
  const [data, setData] = useState({ "First name": "", "Last name": "" });
  const [fullname, setFullname] = useState({ "Full name": "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleinput = (event) => {
    const { name, value } = event.target;

    setData((prevdata) => ({ ...prevdata, [name]: value }));
    console.log(data);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setFullname({ "Full name": data["First name"] + data["Last name"] });
    setData({ "First name": "", "Last name": "" });
    setIsSubmitted(true);
    console.log(fullname);
  };

  return (
    <>
      <form>
        <h1>Full Name Display</h1>
        <h4>First Name</h4>
        <input type="text" name="First name" onChange={handleinput} required />
        <h4>Last Name</h4>
        <input type="text" name="Last name" onChange={handleinput} required />
        <button type="submit" onClick={handlesubmit} disabled={!  data["First name"]||!data["Last name"]}>Submit</button>
        {isSubmitted && (
          <div>
            <p>full name:</p>
         <span>{fullname["Full name"]}</span>  
          </div>
        )}
      </form>
    </>
  );
}

export default App;
