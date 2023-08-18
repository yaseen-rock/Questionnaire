import { useState } from 'react';
import Homepage from '../components/Homepage';
import API_URL from '../config';

function IndexPage() {
  const [userExists, setUserExists] = useState(false);

  const UserExists = async (username: string) => {
    const response = await fetch(`${API_URL}/user/${username}`);
    
    if (response.status === 200) {
      setUserExists(true);
    } else if (response.status === 404) {
      setUserExists(false);
    }
  };

  const handleFormRedirect = async (username: string) => {
    await UserExists(username);

    if (userExists) {
      // Redirect the user to the edit user page
      window.location.href = `/edit-form/${username}`;
    } else {
      // Redirect the user to the create user page
      window.location.href = `/create-form/${username}`;
    }
  };

  return (
    <div>
      <Homepage handleFormRedirect={handleFormRedirect} />
    </div>
  );
}

export default IndexPage;
