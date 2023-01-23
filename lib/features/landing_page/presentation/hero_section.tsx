import React, { useState } from "react";

import { PrimaryButton, TextInput } from "../../../common/components/atoms";
import styles from "../domain/usecases/landing.module.css";
import { AppLogo, HeadlineSVG } from "../domain/usecases/svg_icons";
import { useSubscribeNews } from "../domain/usecases/useSubscribeNews";
export default function HeroSection() {
  const { subscribe } = useSubscribeNews();
  const [formState, setFormState] = useState({
    email: "",
    type: "teacher",
  });
  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event: any) => {
    event.preventDefault();
    subscribe({
      email: formState.email,
      type: formState.type,
    });
  };
  return (
    <div>
      <div className="absolute top-0 left-0 opacity-5">
        <img src="/landing_page/trophy.png" className="w-32" />
      </div>
      <div className="absolute top-0 right-0 ">
        <img src="/landing_page/appstorebarcode.png" className="w-32" />
      </div>
      <div className="absolute bottom-44 right-0  opacity-20">
        <img src="/landing_page/xpshow.png" className="w-72 " />
      </div>

      <div className=" py-10 ">
        <div className=" px-10 flex items-center justify-center mb-5">
          <AppLogo />
        </div>
        <div className="flex flex-col items-center justify-center h-full md:px-10 ">
          <img src="/landing_page/headline.png" className="w-[500px]" />

          <div className="bg-gray-200 z-10  rounded-2xl w-full px-10 py-10 shadow-lg md:w-3/4 lg:w-2/4 relative ">
            <div className="grid grid-cols-3 gap-5 z-10">
              <div className="col-span-2">
                <TextInput
                  placeholder="أدخل بريدك الإلكتروني"
                  label="اشترك في قائمتنا البريدية"
                  name="email"
                  autoComplete="off"
                  type="email"
                  value={formState.email}
                  onChange={onChange}
                  className="w-full border-2 border-gray-400 p-5 "
                  required={true}
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="type"
                  className="mb-[37px] text-sm block text-right"
                ></label>
                <select
                  name="type"
                  id=""
                  className={`w-full  border-2 border-gray-400 rounded-lg py-3.5 px-2 ${styles.raqami}`}
                  onChange={onChange}
                  value={formState.type}
                >
                  <option value="teacher">مقدم محتوى</option>
                  <option value="student">متعلم</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={submitForm}
                className={`w-full  py-3 px-10  transition-all duration-75 shadow-orange-button border-[3px] border-orange-600 bg-orange-500 text-white text-center font-bold rounded-lg active:translate-y-1 active:shadow-none ${styles.raqami}`}
              >
                تابع الجديد
              </button>
              <div className={`text-xs text-gray-500 mt-4 ${styles.raqami}`}>
                لن نرسل لك رسائل مزعجة او ما شابه، سنبلغك بالتحديثات فقط، ويمكنك
                الغاء الإشتراك في أي وقت{" "}
              </div>
            </div>
          </div>
          <div className={`mt-10 flex items-center `}>
            {/* apple  */}
            <div className="flex items-center">
              <div className="w-10">
                <img src="/landing_page/applelogo.png" />
              </div>
              <div className="mr-5">
                <div className={`text-gray-700/40 text-sm ${styles.raqami}`}>
                  متوفر
                </div>
                <div className={`text-gray-700/90 ${styles.raqami} text-sm`}>
                  على متجر الأب ستور
                </div>
              </div>
            </div>
            {/* google play  */}
            <div className="flex items-center mr-20  ">
              <div className=" rounded-lg w-8">
                <img src="/landing_page/googleplaylogo.png" />
              </div>
              <div className="mr-5">
                <div className={`text-gray-700/40 text-sm ${styles.raqami}`}>
                  قريبا
                </div>
                <div className={` text-gray-700/90  ${styles.raqami} text-sm`}>
                  على متجر القوقل بلاي
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
