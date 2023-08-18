// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Homepage from '../components/Homepage';
import Link from 'next/link';
import API_URL from '../config';

function IndexPage() {
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  const checkUserExists = async (username) => {
    const response = await fetch(`${API_URL}/user/${username}`);
    setUserExists(response.ok);
  };

  const handleFormRedirect = async (username) => {
    await checkUserExists(username);

    if (userExists) {
      router.push(`/edit-form/${username}`);
    } else {
      router.push(`/create-form/${username}`);
    }
  };

  return (
    <div>
      <Homepage handleFormRedirect={handleFormRedirect} />
    </div>
  );
}

export default IndexPage;
