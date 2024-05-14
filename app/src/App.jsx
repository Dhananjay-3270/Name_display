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
    setFullname({ "Full name": data["First name"] + " " + data["Last name"] });
    setData({ "First name": "", "Last name": "" });
    setIsSubmitted(true);
    console.log(fullname);
  };

  return (
    <>
      <form>
        <h1>Full Name Display</h1>
        <h4>First Name</h4>
        <input  name="First name" onChange={handleinput} required  />
        <h4>Last Name</h4>
        <input name="Last name" onChange={handleinput} required  />
        <br/>
        <button type="submit" onClick={handlesubmit} >Submit</button>
     
      </form>
      {(isSubmitted && data ) &&  (
          <div>
            <p>Full Name:<span>{fullname["Full name"]}</span>  </p>
      
          </div>
        )}
    </>
  );
}

export default App;
