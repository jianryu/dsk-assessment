import { useState } from 'react';
import EmailCollectionForm from '../components/EmailCollectionForm';
import BusinessAssessment from '../components/BusinessAssessment';

export default function Home() {
  const [stage, setStage] = useState('assessment'); // 'assessment', 'email', 'results'
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAssessmentComplete = (score, assessmentAnswers) => {
    setTotalScore(score);
    setAnswers(assessmentAnswers);
    setStage('email');
  };

  const handleEmailSubmit = () => {
    setStage('results');
  };

  return (
    <main>
      {stage === 'assessment' && (
        <BusinessAssessment onComplete={handleAssessmentComplete} />
      )}
      {stage === 'email' && (
        <EmailCollectionForm 
          answers={answers} 
          onSubmit={handleEmailSubmit}
          score={totalScore}
        />
      )}
      {stage === 'results' && (
        <ResultsDisplay score={totalScore} />
      )}
    </main>
  );
}