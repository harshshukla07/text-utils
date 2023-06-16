import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import './App.css';
import { useState } from 'react';
// import
// {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App ()
{

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>
    {
      setAlert(null);
    }, 1800)
  }

  const toggleMode = () =>
  {
    if (mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success")
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor = '#28282B';
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "success")
    }
  }

  return (
    // <>
    //   {/* <Router> */}
    //     <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } />
    //     <Alert alert={ alert } />
    //     <div className="container">
    //       {/* <Routes> */}
    //         {/* <Route exact path="/about" element={ <About mode={ mode } /> } />
    //         <Route exact path="/" element={  */}
    //         <TextForm showAlert={ showAlert } heading="Enter the text to analyze below" mode={ mode } />
    //          {/* } /> */}

    //       {/* </Routes> */}
    //     </div>
    //   {/* </Router> */}
    // </>

    <>
      <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } />
      <Alert alert={ alert } />
      <div className="container">
        <TextForm showAlert={ showAlert } heading="Enter the text to analyze below" mode={ mode } />
      </div>
    </>
  );
}

export default App;
