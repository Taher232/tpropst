import './App.css';
import {Profile} from './profile/Profile';
import pic from './images/johndoe.jpg';

function App() {
    let fullName = 'Taher Chabaane';
    let bio = 'Lorem ipsum';
    let profession = 'Student';

    function handleName() {
        alert('The profile name is: ' + fullName)
    }

  return <div className="App">
      <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          handleName={handleName()}
      >
        <img className='profile-pic' src={pic} alt='pfp'/>
      </Profile>
  </div>;
}

export default App;
