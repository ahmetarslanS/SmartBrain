import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParticlesBg type="square" num={25} bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
          {/* <FaceRecognition /> */}
      </div>
    );
  }
} 



// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
