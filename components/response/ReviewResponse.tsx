import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";

const ReviewResponse = () => {
  return (
    <section>
      <div className="w-[375px] h-[165px] lg:w-[524px] lg:h-[232px] mt-2.5 mx-auto">
        <Image
          src="/feedback.svg"
          width={374}
          height={164}
          alt="review image"
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-2.5 flex flex-col justify-center items-center sm:w-[550px] gap-3 lg:gap-7 mx-auto">
        <h1 className="text-center lg:text-[35px] lg:leading-[35px]">
          Спасибо за обратную связь!
        </h1>
        <p className="text-center text-[17px] leading-[22px] ">
          Это поможет нам улучшить сервис
        </p>
        <Link href="/">
          <Button
            type="button"
            title="Перейти на платформу"
            styles="bg-gpmxBlueAccent text-center rounded-[22px] px-4 py-3"
          >
            Перейти на платформу
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReviewResponse;
