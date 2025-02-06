import { useState } from 'react';

const EmailCollectionForm = ({ answers, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          answers
        }),
      });

      if (!response.ok) {
        throw new Error('제출 중 오류가 발생했습니다');
      }

      setSuccess(true);
      onSubmit?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-4">
        <h3 className="text-xl font-bold text-green-600 mb-2">제출이 완료되었습니다!</h3>
        <p>입력하신 이메일로 상세한 분석 결과를 보내드리겠습니다.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-xl font-bold mb-4">분석 결과 받아보기</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            이메일 주소
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="your@email.com"
          />
        </div>
        {error && (
          <div className="text-red-600 mb-4">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? '제출 중...' : '결과 받아보기'}
        </button>
      </form>
    </div>
  );
};

export default EmailCollectionForm;