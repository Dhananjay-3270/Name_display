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
    
    if((data["First name"].length>0 )&&  (data["Last name"].length>0))
      {
        setFullname({ "Full name": data["First name"] + " " + data["Last name"] });
    setData({ "First name": "", "Last name": "" });
    setIsSubmitted(true);
      }
    console.log(fullname);
  };

  return (
    <>
      <form>
        <h1>Full Name Display</h1>
        <h4>First Name</h4>
        <input type="text" name="First name" onChange={handleinput} required  />
        <h4>Last Name</h4>
        <input type="text" name="Last name" onChange={handleinput} required  />
        <br/>
        <button type="submit" onClick={handlesubmit} >Submit</button>
     
      </form>
      {(isSubmitted  ) &&  (
          <div>
            <p>Full Name:<span>{fullname["Full name"]}</span>  </p>
      
          </div>
        )}
    </>
  );
}

export default App;
