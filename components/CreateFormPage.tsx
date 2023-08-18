import { useState } from 'react';
import { useRouter } from 'next/router';
import API_URL from '../config';

const CreateFormPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    name: '',
    dateOfBirth: '',
  });

  const handleSubmit = async () => {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, username: router.query.username }),
    });

    if (response.ok) {
      router.push('/result');
    }
  };

  return (
    <div>
      <h1>create form</h1>
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

export default CreateFormPage;
