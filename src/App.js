import './App.css';
import Background from './components/Background.png';


function App() {
  return (
    <>
    <div id='home'>
    <div id='image'>
    <img id='bgimage' src = {Background} />
    </div>
    <div id='box'>
    <h1 className=" text-green-500 text-6xl ml-8 mr-8">
      Super App
      </h1>
    <h2>Create Your Own account</h2>
    <input type='text' placeholder='Name'></input><br></br>
    <input type='text' placeholder='Username'></input><br></br>
    <input type='email' placeholder='Email'></input><br></br>
    <input type='number' placeholder='Mobile'></input><br></br>
    <input type='checkbox' id='a'></input>
    <label for="a">Share My Registration data With Superset</label><br></br>
    
    <h1 className="text-3xl font-bold underline bg-white text-black">
      Hello world!
    </h1>
    
    <button>SIGN UP</button>
    <p>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
    </div>  
    </div>
    
    

    </>
  

  );
}

export default App;
