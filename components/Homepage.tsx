import { useState } from 'react';

interface HomepageProps {
  handleFormRedirect: (username: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ handleFormRedirect }) => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => handleFormRedirect(username)}>Submit</button>
    </div>
  );
};

export default Homepage;
