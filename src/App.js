// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  return (
   <>
    {/* <button className="btn btn-primary">this is open</button> */}
    <Navbar heading="TextAnalyzer App"></Navbar>

    <div className="container my-10">
    <Textform title="Text to anaylzer"></Textform>
    </div>
    
    
   </>    
  );
}

export default App;
