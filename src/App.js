import logo from './logo.svg';
import './App.css';
import Roster from './components/roster';
import VotingFeature from './components/votingFeature';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='nav-div'>G2 Crowd Team Roster</div>
      </nav>
      <hr/>
      <Roster />
      {/* <VotingFeature/> */}
    </div>
  );
}

export default App;
