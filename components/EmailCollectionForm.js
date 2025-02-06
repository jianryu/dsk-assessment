import { useState } from 'react';

const EmailCollectionForm = ({ answers, score, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to Kajabi
      const kajabiResponse = await fetch('/api/kajabi-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          answers,
          score
        }),
      });

      if (!kajabiResponse.ok) {
        throw new Error('제출 중 오류가 발생했습니다');
      }

      onSubmit();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-xl font-bold mb-4">분석 결과 받아보기</h3>
      <p className="mb-4">상세한 분석 결과를 이메일로 받아보세요!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="홍길동"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            이메일 주소
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="your@email.com"
          />
        </div>

        {error && (
          <div className="text-red-600 mb-4">{error}</div>
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