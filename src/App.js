import './App.css';
import Background from './components/Background.png';
import PageTwo from './page2/PageTwo';
import PageThree from './page3/PageThree';
import PageFour from './page4/PageFour';
import PageFive from './Page5/PageFive';


function App() {
  return (
    <>
      <div class='mb-12' id='home'>
        <div id='image'>
          <img id='bgimage' src={Background} />
        </div>
        <div id='box'>
          <h1 class="heading">Super App</h1>
          <h2 class="subheading">Create Your Own account</h2>

          {/* input box */}
          <input type='text' placeholder='Name' required></input><br></br>
          <input type='text' placeholder='Username' required></input><br></br>
          <input type='email' placeholder='Email' required></input><br></br>
          <input type='number' placeholder='Mobile' required></input><br></br>

          <input type='checkbox' id='a'></input>
          <label for="a">Share My Registration data With Superset</label><br></br>

          <button>SIGN UP</button>
          <p class='para1'>By clicking on Sign up. you agree to Superapp <span className="text-emerald-500">Terms and Conditions of Use</span></p>
          <p class='para2'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="text-emerald-500">Privacy Policy</span></p>
        </div>
      </div>

      {< PageTwo />}

      {< PageThree />}

      { < PageFour />}

      { < PageFive />}

    </>
  );
}

export default App;
