import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import API_URL from '../config';

const EditFormPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    name: '',
    dateOfBirth: '',
  });

  const handleSubmit = async () => {
    const response = await fetch(`${API_URL}/user/${router.query.username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push('/result');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${router.query.username}`);
        if (response.ok) {
          const user = await response.json();
          setFormData(user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, [router.query.username]);

  return (
    <div>
      <h1>Edit Form</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
      {/* Repeat for other form fields */}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => router.push('/')}>Cancel</button>
    </div>
  );
};

export default EditFormPage;
