import { Tick, Close } from "../Icon/index";

// Create the badges as functional components for better readability
const CorrectAnswerBadge = () => (
  <div className="bg-brand-paris-green text-white px-3 py-2 flex items-center justify-center space-x-2 rounded-[53px]">
    <Tick />
    <p className="text-xs font-jakarta font-medium">Correct answer</p>
  </div>
);

const WrongAnswerBadge = () => (
  <div className="bg-brand-bittersweet text-white px-3 py-2 flex items-center justify-center space-x-2 rounded-[53px]">
    <Close />
    <p className="text-xs font-jakarta font-medium">Your answer</p>
  </div>
);

export const OptionList = ({
  options,
  selectedAnswerIndex,
  onAnswerSelected,
  isCorrectAnswer,
  activeQuestion
}) => {
  const correctAnswerIndex = options.findIndex(
    (option) => option === activeQuestion.correctAnswer
  );

  const renderSelectedOptionBadge = (idx) => {
    if (selectedAnswerIndex === -1) {
      return null;
    }

    if (selectedAnswerIndex === idx) {
      return (
        <div className="absolute top-[50%] -translate-y-1/2 right-2 z-10">
          {isCorrectAnswer ? <CorrectAnswerBadge /> : <WrongAnswerBadge />}
        </div>
      );
    }
  };

  const renderCorrectBadge = (idx) => {
    if (selectedAnswerIndex === -1) {
      return null;
    }

    if (correctAnswerIndex === idx) {
      return (
        <div className="absolute top-[50%] -translate-y-1/2 right-2 z-10">
          <CorrectAnswerBadge />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-start space-y-1">
      {options.map((option, idx) => (
        <div
          key={idx}
          className={`relative font-jakarta flex items-center space-x-2 rounded-xl border px-6 py-4 w-full cursor-pointer select-none ${
            idx === selectedAnswerIndex
              ? "border-brand-cerulean-blue"
              : "border-brand-light-gray"
          }`}
          onClick={() => {
            if (selectedAnswerIndex !== -1) {
              return;
            }
            onAnswerSelected(idx);
          }}
        >
          <div
            className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center ${
              idx === selectedAnswerIndex
                ? "bg-brand-cerulean-blue"
                : "bg-brand-white-smoke-100"
            }`}
          >
            <div
              className={`w-[14px] h-[14px] rounded-full bg-white ${
                idx === selectedAnswerIndex
                  ? "bg-white"
                  : "bg-brand-white-smoke-100"
              }`}
            />
          </div>
          <p className="text-brand-midnight font-normal text-base">{option}</p>
          {renderSelectedOptionBadge(idx)}
          {renderCorrectBadge(idx)}
        </div>
      ))}
    </div>
  );
};
