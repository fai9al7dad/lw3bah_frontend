import { Section3SVG } from "../domain/usecases/svg_icons";
import styles from "../domain/usecases/landing.module.css";

export const Section3 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-3/4 lg:w-2/4">
        <div className="bg-gray-100">
          <div className="flex flex-col items-center justify-center mt-10 ">
            <div className={`text-4xl mb-5 ${styles.raqami}`}>
              مالذي يقدمه هريرة ؟
            </div>
            <div className="relative  flex flex-col items-center">
              <Section3SVG />
            </div>
            <div className="flex  justify-between px-5">
              <div
                className={`text-md  md:text-lg ${styles.raqami} text-right mt-5  pl-10 w-3/4`}
              >
                منصة لمقدمي المحتوى تمكنهم من تصميم المحتوى التعليمي وفق  منهجيات التلعيب (Gamification) والتجزيء (Microlearning) واتاحته لطلابهم
               
              </div>
              <div
                className={`text-md  md:text-lg pr-10 text-right ${styles.raqami} mt-5 w-3/4`}
              >
                <ul className="list-disc">
                  <li className={`${styles.raqami}`}>تطبيق يتيح المحتوى التعليمي الذي صممه المعلمون </li>
                  <li className={`${styles.raqami}`}>شبكة علاقات اجتماعية تنافسية</li>
                </ul>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
