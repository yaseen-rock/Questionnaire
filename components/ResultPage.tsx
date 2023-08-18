import { useRouter } from 'next/router';

const ResultPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h2>Congratulations! Your form has been submitted.</h2>
      <button onClick={() => router.push('/')}>Return to Homepage</button>
    </div>
  );
};

export default ResultPage;
