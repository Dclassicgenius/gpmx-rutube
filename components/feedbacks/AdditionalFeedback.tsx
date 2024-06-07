"use client";
import { additionalQuestions, questionOneOptions } from "@/constants";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdditionalFeedback = () => {
  const [responses, setResponses] = useState<Record<number, number>>({});
  const router = useRouter();

  useEffect(() => {
    const storedResponses = window.localStorage.getItem("responses");
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, []);

  const handleAnswerClick = (questionID: number, responseID: number) => {
    const updatedResponses = { ...responses, [questionID]: responseID };
    setResponses(updatedResponses);
    window.localStorage.setItem("responses", JSON.stringify(updatedResponses));
  };

  const allQuestionsAnswered = () => {
    return Object.keys(responses).length === additionalQuestions.length + 1;
  };

  const handleSubmit = () => {
    if (allQuestionsAnswered()) {
      const rating = window.localStorage.getItem("rating");
      const fullResponses = {
        rating: JSON.parse(rating || "null"),
        responses,
      };
      console.log(fullResponses);
      window.localStorage.setItem("surveyCompleted", "true");
      router.push("/review/success");
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("surveyCompleted") === "true") {
      router.push("/review/completed");
    }
  }, [router]);
  return (
    <div className="p-4 pb-6 lg:bg-tablet-and-above bg-no-repeat lg:bg-right">
      <p className="text-[17px] text-gpmxGray mb-4">
        Пожалуйста, ответьте на дополнительные вопросы.
      </p>
      <div>
        <h3>
          1. Как быстро вы получили ответ от клиентского сервиса RUTUBE? *
        </h3>
        <div className="grid gap-3 mt-3">
          {questionOneOptions.map((option, index) => (
            <Button
              styles=" border border-gpmxBlue transparent text-left rounded-[20px] py-4 w-[200px] h-10 flex items-center text-[12px] leading-[20px] font-normal pl-3"
              active={responses[1] === index}
              activeStyles="bg-gpmxBlue"
              key={option}
              title={option}
              handleClick={() => handleAnswerClick(1, index)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-5 mt-5">
        {additionalQuestions.map((question) => (
          <div key={question.index}>
            {" "}
            <h3 className="mb-2">{question.question}</h3>
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: question.options }).map((_, index) => {
                const adjustedIndex = question.index === 6 ? index : index + 1;
                return (
                  <Button
                    key={adjustedIndex}
                    title={adjustedIndex.toString()}
                    handleClick={() =>
                      handleAnswerClick(question.index, adjustedIndex)
                    }
                    active={responses[question.index] === adjustedIndex}
                    activeStyles="bg-gpmxBlue"
                    styles="bg-transparent border border-gpmxBlue text-center rounded-full w-10 h-10 text-[14px] leading-[20px] font-normal"
                  >
                    {adjustedIndex.toString()}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Button
        type="submit"
        title="Отправить ответы"
        styles="bg-gpmxBlueAccent text-center rounded-[22px] px-4 py-2 w-full mt-5 sm:w-auto sm:px-8"
        handleClick={handleSubmit}
        disabled={!allQuestionsAnswered()}
      >
        Отправить ответы
      </Button>
    </div>
  );
};

export default AdditionalFeedback;
