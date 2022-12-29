import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';

const Profile = ({fullName, bio, profession,handleName,children}) => {
  return (
    <div className="App">
      <img src={children} className='img'/>
      <div>
        <h1 className='name'>{fullName}</h1>
        <div className='bio'>{bio}</div>
        <h3>{profession}</h3>
       
        <Button onClick={handleName} variant="primary">handleName</Button>{' '}
      </div>
    </div>
  )
}

export default Profile