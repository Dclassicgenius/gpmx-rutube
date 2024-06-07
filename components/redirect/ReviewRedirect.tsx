import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import Link from "next/link";

const ReviewRedirect = () => {
  return (
    <section>
      <div className="w-[375px] h-[165px] lg:w-[524px] lg:h-[232px] mt-2.5 mx-auto">
        <Image
          src="/redirect.svg"
          width={374}
          height={164}
          alt="review completed"
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-2.5 flex flex-col justify-center items-center sm:w-[550px] gap-3 lg:gap-7 mx-auto">
        <h1 className="text-center lg:text-[35px] lg:leading-[35px]">
          Вы уже прошли этот опрос
        </h1>
        <p className="text-center text-[17px] px-3 sm:px-24 leading-[22px]">
          Спасибо, что делитесь мнениеми и помогаете нам быть лучше
        </p>
        <Link href="/">
          <Button
            type="button"
            title="Перейти на RUTUBE"
            styles="bg-gpmxBlueAccent text-center rounded-[22px] px-4 py-3"
          >
            Перейти на RUTUBE
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReviewRedirect;
