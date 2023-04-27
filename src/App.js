import React from 'react';
import './App.css';
import l1 from './sami.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Saafi sami',
        bio: 'full stack developer',
        profession: 'Software Developer',
        imgSrc: l1, 
      },
      show: false,
      intervalId: 10,
      secondsElapsed: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { person, show, secondsElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} /> {/* Display the image */}
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Seconds Elapsed: {secondsElapsed}</p>
      </div>
    );
  }
}

export default App;
