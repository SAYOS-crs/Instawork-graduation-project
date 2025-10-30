import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { FaRegHandshake } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=" bg-gradient-to-r from-[#000000] to-[#434343] text-amber-50 ">
      {/* <div className=' inline-block mt-30' >
        <h1>جاهز للبدء</h1>
        <p className='p-4 '>انضم إلى آلاف المستخدمين الراضين واكتشف أسهل طريقة للعثور على الحرفيين المهرة</p>
        </div>
        <div className="">
          <Button variant='ghost' color='primary' className='m-5'>تصفح العمال </Button>
          <Button variant='ghost' color='primary' className='m-5'>انشاء حساب مجاني </Button>
        </div> */}
      <footer className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-1 lg:gap-3 container w-[90%] text-center m-auto pt-5 pointer">
        <div className="SpanHover">
          <h3 className="my-5 bg-[#2c2929]  p-1 "> تواصل معنا </h3>

          <div className="text-text-footer my-4">
            <div className="flex py-2 align-baseline w-fit lg:me-auto m-auto">
              <span className="">
                <svg
                  className="w-6 h-6 text-text-footer dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
              </span>

              <span className="px-2">Eslam.mohamed.ki123@gmail.com</span>
            </div>

            <div className="flex py-2 align-baseline w-fit lg:me-auto m-auto">
              <span className="">
                <svg
                  className="w-6 h-6 text-text-footer dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
              </span>
              <span className="pe-2">+20 1141874204</span>
            </div>

            <div className="flex py-2 align-baseline  w-fit lg:me-auto m-auto">
              <span className="">
                <svg
                  className="w-6 h-6 text-text-footer dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                  />
                </svg>
              </span>

              <span className="pe-2">القاهرة، مصر</span>
            </div>
          </div>
        </div>

        <div className="SpanHover">
          <h3 className="my-5 bg-[#2c2929]  p-1 ">الخدمات</h3>

          <div className="my-4 text-text-footer">
            <div className="py-2">
              <span className="">للعملاء</span>
            </div>
            <div className="py-2">
              <span>للعمال</span>
            </div>
            <div className="py-2">
              {" "}
              <span>نشر عمل </span>{" "}
            </div>
            <div className="py-2">
              <span>عرض خدمات</span>
            </div>
            <div className="py-2">
              {" "}
              <span>المدونة</span>{" "}
            </div>
          </div>
        </div>

        <div className="pointer SpanHover">
          <h3 className="my-5 bg-[#2c2929]  p-1 ">روابط سريعة</h3>

          <div className="my-4 text-text-footer">
            <div className="py-2 ">
              {" "}
              <Link href={"/services"}>
                {" "}
                <span>عن الموقع</span>{" "}
              </Link>{" "}
            </div>
            <div className="py-2">
              {" "}
              <Link href={""}>
                {" "}
                <span>كيف نعمل </span>{" "}
              </Link>{" "}
            </div>
            <div className="py-2">
              {" "}
              <Link href={""}>
                {" "}
                <span>الاسئله الشائعة</span>{" "}
              </Link>{" "}
            </div>
            <div className="py-2">
              {" "}
              <Link href={""}>
                {" "}
                <span>سياسة الخصوصية</span>{" "}
              </Link>{" "}
            </div>
            <div className="py-2">
              {" "}
              <Link href={""}>
                {" "}
                <span>شروط الاستخدام</span>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>

        <div
          className="  lg:text-right
          "
        >
          <h2 className="my-5 me-5 text-2xl">
            {" "}
            <FaRegHandshake className="text-4xl inline-block" /> Instawork{" "}
          </h2>

          <div className="my-4 text-text-footer">
            <p className="py-2 px-5">
              منصة عمل حر مصممة خصيصًا لأصحاب المهن اليدوية في مصر. نربط بين
              العملاء والعمال المهرة بسهولة وأمان.
            </p>
          </div>
        </div>

        <div className=" md:col-span-2 lg:col-span-4 py-5 text-text-footer font-Lyon">
          <hr />
          <p className="mt-4 inline-block">
            © 2025 InstaWork. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
