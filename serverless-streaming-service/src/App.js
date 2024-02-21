
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to serverless video streaming service </h2>
      <video width={700} height={400} controls>
        <source src="https://dmsi6k5yxrqf3.cloudfront.net/Luke-combs-and-Tracy-Chapman.mp4" type='video/mp4'/>
        
      </video>
    </div>
  );
}

export default App;
