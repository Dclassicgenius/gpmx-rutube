"use client";
import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainFeedback = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    const item = window.localStorage.getItem("rating");
    if (item !== null) {
      setSelectedRating(JSON.parse(item));
    }
  }, []);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    window.localStorage.setItem("rating", JSON.stringify(rating));
  };
  return (
    <section className="mx-auto ">
      <div className="w-[375px] h-[165px] lg:w-[455px] lg:h-[200px] my-2.5 mx-auto">
        <Image
          src="/review.svg"
          alt="feedback image"
          width={374}
          height={164}
          className="w-full h-full"
        />
      </div>

      <div className="px-4 py-2.5 space-y-3.5 sm:w-[550px] mx-auto">
        <h1 className="text-center lg:text-[35px] leading-[35px]">
          Уважаемый клиент!
        </h1>
        <p className="text-center lg:text-[16px] lg:leading-[22px] ">
          Запрос закрыт. Пожалуйста, оцените качество предоставленного сервисапо
          данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже
          некуда» и 9 — «Отлично».
        </p>
        <ol className=" px-[60px] grid grid-cols-5 sm:grid-cols-10 gap-y-4 justify-between sm:px-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <Link href={"/review"}>
                <Button
                  handleClick={() => handleRatingClick(index)}
                  title={index.toString()}
                  styles="bg-transparent border border-gpmxBlue text-center rounded-full w-10 h-10"
                  active={index === selectedRating}
                  activeStyles="bg-gpmxBlue"
                >
                  {index.toString()}
                </Button>
              </Link>
            </li>
          ))}
        </ol>
        <div className="flex justify-between text-gpmxGray px-8 text-base sm:px-4 lg:px-3">
          <p>Хуже некуда</p>
          <p>Отлично</p>
        </div>
      </div>
    </section>
  );
};

export default MainFeedback;
