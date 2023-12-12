import React from 'react';

const me = {
  FirstName: 'Kaytlen',
  LastName: 'Tommis-birkett',
  UserProfilePic: 'src/Assets/cat_transparent.png',
  UserProfilePicSize: 90,
};

export { me };

export default function About() {
  return (
    <>
      <form>
        
        <h1>What!</h1>

        <div>Im {me.FirstName}, and this feels cringe!</div>

        <img className="logo" />
        <h1>{me.FirstName}</h1>

        <img 
          className="logo"
          src={me.UserProfilePic} 
          alt={'Photo of ' + me.FirstName + ' ' + me.LastName} 
          style={{
            width: me.UserProfilePicSize,
            height: me.UserProfilePicSize
          }}
        />

      </form>
    </>
  );
}