// components/ResultPage.js
import { useRouter } from 'next/router';
import styles from '../styles/result.module.css'; // Import the CSS module

function ResultPage() {
  const router = useRouter();

  return (
    <div className={styles.resultContainer}>
      <h2>Congratulations! Your form has been submitted.</h2>
      <button className={styles.returnButton} onClick={() => router.push('/')}>
        Return to Homepage
      </button>
    </div>
  );
}

export default ResultPage;
