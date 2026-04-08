// src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '60px',
      flexWrap: 'wrap'
    }}>
      <ProfileCard name="성재우" age={21} dream="프론트엔드 개발자" emoji="🧑‍💻" hobby="기타 연주" mbti="ENFP" />
    </div>
  );
}

export default App;
