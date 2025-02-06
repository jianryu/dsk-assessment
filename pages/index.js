import EmailCollectionForm from '../components/EmailCollectionForm';
import BusinessAssessment from '../components/BusinessAssessment';
import { useState } from 'react';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAssessmentComplete = (score, assessmentAnswers) => {
    setTotalScore(score);
    setAnswers(assessmentAnswers);
    setShowResults(true);
  };

  return (
    <main>
      {!showResults ? (
        <BusinessAssessment onComplete={handleAssessmentComplete} />
      ) : (
        <>
          <ResultsDisplay score={totalScore} />
          <EmailCollectionForm answers={answers} />
        </>
      )}
    </main>
  );
}

const ResultsDisplay = ({ score }) => {
  let result = '';
  if (score >= 38) result = '성장형 사업가';
  else if (score >= 32) result = '마케팅 전문가형';
  else if (score >= 27) result = '디지털 전문가형';
  else if (score >= 18) result = '실행 중심형';
  else result = '균형 발전형';

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">당신의 사업가 유형은:</h2>
      <p className="text-xl font-bold text-blue-600 mb-4">{result}</p>
      <p className="mb-4">총점: {score}점</p>
    </div>
  );
};