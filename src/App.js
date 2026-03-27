import { useState } from "react";
import "./App.css";
import { ChevronLeft, ChevronRight, RotateCcw, Play, HelpCircle, Trophy, CheckCircle, XCircle } from "lucide-react";

// 20 أسئلة عامة باللغة العربية
const questions = [
  {
    id: 1,
    question: "ما هي عاصمة المملكة العربية السعودية؟",
    options: ["جدة", "الرياض", "مكة المكرمة", "المدينة المنورة"],
    correctAnswer: "الرياض"
  },
  {
    id: 2,
    question: "كم عدد كواكب المجموعة الشمسية؟",
    options: ["7 كواكب", "8 كواكب", "9 كواكب", "10 كواكب"],
    correctAnswer: "8 كواكب"
  },
  {
    id: 3,
    question: "من هو مخترع المصباح الكهربائي؟",
    options: ["ألبرت أينشتاين", "توماس إديسون", "نيكولا تسلا", "غراهام بيل"],
    correctAnswer: "توماس إديسون"
  },
  {
    id: 4,
    question: "ما هو أطول نهر في العالم؟",
    options: ["نهر الأمازون", "نهر النيل", "نهر المسيسيبي", "نهر اليانغتسي"],
    correctAnswer: "نهر النيل"
  },
  {
    id: 5,
    question: "في أي عام هبط الإنسان على سطح القمر لأول مرة؟",
    options: ["1965", "1967", "1969", "1971"],
    correctAnswer: "1969"
  },
  {
    id: 6,
    question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
    options: ["كندا", "الصين", "الولايات المتحدة", "روسيا"],
    correctAnswer: "روسيا"
  },
  {
    id: 7,
    question: "ما هو العنصر الكيميائي الذي رمزه Au؟",
    options: ["الفضة", "الذهب", "النحاس", "الحديد"],
    correctAnswer: "الذهب"
  },
  {
    id: 8,
    question: "كم عدد أركان الإسلام؟",
    options: ["4 أركان", "5 أركان", "6 أركان", "7 أركان"],
    correctAnswer: "5 أركان"
  },
  {
    id: 9,
    question: "ما هي اللغة الأكثر تحدثاً في العالم؟",
    options: ["الإنجليزية", "الإسبانية", "الصينية", "العربية"],
    correctAnswer: "الصينية"
  },
  {
    id: 10,
    question: "من هو مؤلف رواية 'الأيام'؟",
    options: ["نجيب محفوظ", "طه حسين", "توفيق الحكيم", "يوسف إدريس"],
    correctAnswer: "طه حسين"
  },
  {
    id: 11,
    question: "ما هي الغدة المسؤولة عن تنظيم السكر في الدم؟",
    options: ["الغدة الدرقية", "البنكرياس", "الغدة النخامية", "الغدة الكظرية"],
    correctAnswer: "البنكرياس"
  },
  {
    id: 12,
    question: "ما هو أصغر كوكب في المجموعة الشمسية؟",
    options: ["المريخ", "الزهرة", "عطارد", "بلوتو"],
    correctAnswer: "عطارد"
  },
  {
    id: 13,
    question: "في أي قارة تقع مصر؟",
    options: ["آسيا", "أوروبا", "أفريقيا", "أمريكا الجنوبية"],
    correctAnswer: "أفريقيا"
  },
  {
    id: 14,
    question: "ما هي عملة اليابان؟",
    options: ["اليوان", "الين", "الوون", "الروبية"],
    correctAnswer: "الين"
  },
  {
    id: 15,
    question: "كم يبلغ عدد عظام جسم الإنسان البالغ؟",
    options: ["180 عظمة", "196 عظمة", "206 عظام", "220 عظمة"],
    correctAnswer: "206 عظام"
  },
  {
    id: 16,
    question: "من هو الفيلسوف اليوناني معلم الإسكندر الأكبر؟",
    options: ["سقراط", "أفلاطون", "أرسطو", "هوميروس"],
    correctAnswer: "أرسطو"
  },
  {
    id: 17,
    question: "ما هو أكبر محيط في العالم؟",
    options: ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"],
    correctAnswer: "المحيط الهادئ"
  },
  {
    id: 18,
    question: "متى تأسست منظمة الأمم المتحدة؟",
    options: ["1940", "1945", "1950", "1955"],
    correctAnswer: "1945"
  },
  {
    id: 19,
    question: "ما هو الحيوان الوطني لأستراليا؟",
    options: ["الكوالا", "الكنغر", "النعامة", "التمساح"],
    correctAnswer: "الكنغر"
  },
  {
    id: 20,
    question: "كم عدد ألوان قوس قزح؟",
    options: ["5 ألوان", "6 ألوان", "7 ألوان", "8 ألوان"],
    correctAnswer: "7 ألوان"
  }
];

const optionLetters = ["أ", "ب", "ج", "د"];

// شاشة البداية
const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="start-title">اختبار المعرفة العامة</h1>
        <p className="start-subtitle">
          اختبر معلوماتك في مختلف المجالات! 20 سؤالاً متنوعاً في الثقافة والعلوم والتاريخ والجغرافيا.
        </p>
        <button className="start-btn" onClick={onStart}>
          <Play size={24} />
          ابدأ الاختبار
        </button>
        <div className="info-badges">
          <div className="info-badge">
            <HelpCircle size={16} className="info-badge-icon" />
            20 سؤال
          </div>
          <div className="info-badge">
            <Trophy size={16} className="info-badge-icon" />
            4 اختيارات لكل سؤال
          </div>
        </div>
      </div>
    </div>
  );
};

// صفحة الأسئلة
const QuizScreen = ({ 
  currentQuestion, 
  selectedAnswer, 
  onSelectAnswer, 
  onNext, 
  onPrev, 
  onEnd 
}) => {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-content">
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="question-card">
        <div className="question-counter">
          السؤال {currentQuestion + 1} من {questions.length}
        </div>
        
        <h2 className="question-text">{question.question}</h2>

        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => onSelectAnswer(option)}
            >
              <span>{option}</span>
              <span className="option-letter">{optionLetters[index]}</span>
            </button>
          ))}
        </div>

        <div className="navigation-area">
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              className="nav-btn nav-btn-secondary"
              onClick={onPrev}
              disabled={currentQuestion === 0}
            >
              <ChevronRight size={20} />
              السابق
            </button>
            
            <button
              className="nav-btn nav-btn-primary"
              onClick={onNext}
              disabled={currentQuestion === questions.length - 1}
            >
              التالي
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <button className="nav-btn nav-btn-danger" onClick={onEnd}>
            إنهاء الاختبار
          </button>
        </div>
      </div>
    </div>
  );
};

// صفحة النتائج
const ResultsScreen = ({ answers, onRestart }) => {
  let correctCount = 0;
  let incorrectCount = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      correctCount++;
    } else if (answers[index]) {
      incorrectCount++;
    }
  });

  const unanswered = questions.length - correctCount - incorrectCount;
  const percentage = Math.round((correctCount / questions.length) * 100);

  let message = "";
  if (percentage >= 80) {
    message = "ممتاز! أداء رائع";
  } else if (percentage >= 60) {
    message = "جيد جداً! استمر في التعلم";
  } else if (percentage >= 40) {
    message = "جيد! يمكنك التحسن أكثر";
  } else {
    message = "حاول مرة أخرى! المعرفة كنز";
  }

  return (
    <div className="quiz-content">
      <div className="results-container">
        <h1 className="results-title">نتيجة الاختبار</h1>
        <p className="results-subtitle">{message}</p>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value gold">{percentage}%</div>
            <div className="stat-label">النسبة المئوية</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value green">{correctCount}</div>
            <div className="stat-label">
              <CheckCircle size={16} style={{ display: 'inline', marginLeft: '4px', color: '#10B981' }} />
              إجابات صحيحة
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-value red">{incorrectCount}</div>
            <div className="stat-label">
              <XCircle size={16} style={{ display: 'inline', marginLeft: '4px', color: '#EF4444' }} />
              إجابات خاطئة
            </div>
          </div>
        </div>

        {unanswered > 0 && (
          <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>
            الأسئلة غير المجابة: {unanswered}
          </p>
        )}

        <button className="restart-btn" onClick={onRestart}>
          <RotateCcw size={20} />
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
};

function App() {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleSelectAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleEnd = () => {
    setGameState('results');
  };

  const handleRestart = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setAnswers({});
  };

  return (
    <div className="quiz-container" dir="rtl">
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      
      {gameState === 'quiz' && (
        <QuizScreen
          currentQuestion={currentQuestion}
          selectedAnswer={answers[currentQuestion]}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          onPrev={handlePrev}
          onEnd={handleEnd}
        />
      )}
      
      {gameState === 'results' && (
        <ResultsScreen answers={answers} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;