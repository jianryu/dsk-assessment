import { useState } from 'react';

const BusinessAssessment = ({ onComplete }) => {
 const [currentQuestion, setCurrentQuestion] = useState(1);
 const [answers, setAnswers] = useState({});
 const [textAnswer, setTextAnswer] = useState('');

 const questions = {
   1: {
     text: '온라인 비즈니스에 투자할 수 있는 시간이 얼마나 되시나요?',
     options: [
       { text: '하루 1시간 미만', value: 1 },
       { text: '하루 1-2시간 정도', value: 2 },
       { text: '하루 2-4시간 정도', value: 3 },
       { text: '하루 4-6시간 정도', value: 4 },
       { text: '하루 6시간 이상', value: 5 }
     ]
   },
   2: {
     text: '비즈니스 시작을 위해 준비하신 초기 예산은 어느 정도인가요?',
     options: [
       { text: '50만원 미만', value: 1 },
       { text: '50-100만원 정도', value: 2 },
       { text: '100-300만원 정도', value: 3 },
       { text: '300-500만원 정도', value: 4 },
       { text: '500만원 이상', value: 5 }
     ]
   },
   3: {
     text: '현재 보유하신 디지털 스킬은 어느 정도인가요?',
     options: [
       { text: '기본적인 이메일과 문서 작성 가능', value: 1 },
       { text: 'SNS 운영과 간단한 콘텐츠 제작 가능', value: 2 },
       { text: '블로그/유튜브 등 콘텐츠 제작 경험 있음', value: 3 },
       { text: '웹사이트 제작이나 디지털 마케팅 경험 있음', value: 4 },
       { text: 'AI 툴 활용과 자동화 시스템 구축 가능', value: 5 }
     ]
   },
   4: {
     text: '온라인 비즈니스를 통한 수익이 얼마나 시급하신가요?',
     options: [
       { text: '당장 수익이 필요합니다', value: 1 },
       { text: '1개월 내 수익이 필요합니다', value: 2 },
       { text: '3개월 정도는 기다릴 수 있습니다', value: 3 },
       { text: '6개월까지 투자할 수 있습니다', value: 4 },
       { text: '1년 이상 장기적으로 접근할 수 있습니다', value: 5 }
     ]
   },
   5: {
     text: '지금까지의 비즈니스 경험은 어느 정도인가요?',
     options: [
       { text: '아직 경험이 전혀 없습니다', value: 1 },
       { text: '부업이나 프리랜서 경험이 있습니다', value: 2 },
       { text: '1년 미만의 사업 경험이 있습니다', value: 3 },
       { text: '1-3년의 사업 경험이 있습니다', value: 4 },
       { text: '3년 이상의 사업 경험이 있습니다', value: 5 }
     ]
   },
   6: {
     text: '현재 보유하신 전문성은 어느 정도인가요?',
     options: [
       { text: '특별한 전문 분야가 없습니다', value: 1 },
       { text: '취미나 관심사 수준의 지식이 있습니다', value: 2 },
       { text: '관련 자격증이나 교육 이수 경험이 있습니다', value: 3 },
       { text: '해당 분야 실무 경력이 있습니다', value: 4 },
       { text: '전문가로서 수익을 창출한 경험이 있습니다', value: 5 }
     ]
   },
   7: {
     text: '온라인 마케팅 경험은 어느 정도이신가요?',
     options: [
       { text: '마케팅 경험이 전혀 없습니다', value: 1 },
       { text: 'SNS 홍보나 기본적인 콘텐츠 제작 경험이 있습니다', value: 2 },
       { text: '유료광고 집행 경험이 있습니다 (페이스북/구글/네이버 등)', value: 3 },
       { text: '마케팅 실무 경력이 있거나 성과를 낸 경험이 있습니다', value: 4 },
       { text: '마케팅 전문가로 일한 경력이 있습니다 (에이전시/기업 등)', value: 5 }
     ]
   },
   8: {
     text: '비즈니스에 도움이 될 만한 인맥이나 네트워크가 있으신가요?',
     options: [
       { text: '아직 특별한 네트워크가 없습니다', value: 1 },
       { text: '소규모 온라인 커뮤니티에 속해 있습니다', value: 2 },
       { text: '관련 업계 지인이 몇 명 있습니다', value: 3 },
       { text: '활발한 네트워크를 보유하고 있습니다', value: 4 },
       { text: '영향력 있는 인맥과 협업 가능합니다', value: 5 }
     ]
   },
   9: {
     text: '사업적 위험을 감수할 준비가 되어 있으신가요?',
     options: [
       { text: '안정적인 수익원만 원합니다', value: 1 },
       { text: '소액 투자만 가능합니다 (100만원 미만)', value: 2 },
       { text: '어느 정도의 위험과 투자는 가능합니다 (300만원 미만)', value: 3 },
       { text: '성공을 위해 어느 정도의 위험은 감수할 수 있습니다 (500만원 미만)', value: 4 },
       { text: '큰 성공을 위해 과감한 투자와 위험을 감수할 준비가 되어있습니다 (500만원 이상)', value: 5 }
     ]
   },
   10: {
     text: '현재 겪고 계신 가장 큰 비즈니스 고민이나 어려움은 무엇인가요? 매월 제가 흥미로운 질문들을 몇 가지 선정하여, 이와 관련된 인사이트나 노하우를 담은 특별 콘텐츠를 제작해 공유해드립니다.',
     isText: true,
     placeholder: '⚠️ 작성 가이드:\n• 실제 겪고 계신 어려움을 구체적으로 적어주세요\n• 현재 상황과 목표를 함께 공유해 주시면 좋습니다\n• 선정된 질문은 콘텐츠로 제작되어 이메일로 공유됩니다'
   }
 };

 const handleAnswer = (value) => {
   const newAnswers = { ...answers, [currentQuestion]: value };
   setAnswers(newAnswers);
   
   if (currentQuestion < 10) {
     setCurrentQuestion(currentQuestion + 1);
   } else {
     const totalScore = Object.values(newAnswers)
       .filter((value, index) => index < 9)
       .reduce((sum, value) => sum + value, 0);
     onComplete(totalScore, newAnswers);
   }
 };

 const handleTextSubmit = () => {
   const newAnswers = { ...answers, [currentQuestion]: textAnswer };
   const totalScore = Object.values(newAnswers)
     .filter((value, index) => index < 9)
     .reduce((sum, value) => sum + value, 0);
   onComplete(totalScore, newAnswers);
 };

 const currentQ = questions[currentQuestion];

 return (
   <div className="max-w-2xl mx-auto p-4">
     <h1 className="text-2xl font-bold mb-8 text-center">사업가 성향 진단테스트</h1>
     <div className="mb-8">
       <h2 className="text-xl font-semibold mb-4">
         {currentQuestion}/10. {currentQ.text}
       </h2>
       
       {currentQ.isText ? (
         <div>
           <textarea
             value={textAnswer}
             onChange={(e) => setTextAnswer(e.target.value)}
             className="w-full p-2 border rounded-md min-h-[200px]"
             placeholder={currentQ.placeholder}
           />
           <button
             onClick={handleTextSubmit}
             className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
           >
             제출하기
           </button>
         </div>
       ) : (
         <div className="space-y-2">
           {currentQ.options.map((option, index) => (
             <button
               key={index}
               onClick={() => handleAnswer(option.value)}
               className="w-full text-left p-3 border rounded-md hover:bg-gray-50"
             >
               {option.text}
             </button>
           ))}
         </div>
       )}
     </div>
   </div>
 );
};

export default BusinessAssessment;