import styles from "../domain/usecases/landing.module.css";
import { Section2SVG } from "../domain/usecases/svg_icons";

export const Section2 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-3/4 lg:w-2/4 ">
        <div className="py-10 ">
          <div className="px-10  ">
            <div className={`text-lg md:text-4xl ${styles.raqami} text-center`}>
              <span className="mb-5 block  text-4xl md:text-6xl">💡</span>
              ومن هذا الاحتياج عملنا على توفير تجربة تحتوي على منصة تعليمية
              ممتعة ومحفزة تشعر المتعلم انه في لعبة يستمتع في كل مراحلها.
            </div>
          </div>
          <div className="relative ">
            <div className="flex items-center justify-center ">
              <div className="">
                <Section2SVG />
              </div>
              <div
                className={`text-md md:text-xl absolute right-2 w-44 text-center ${styles.raqami} mt-5`}
              >
                صناع المحتوى التعليمي
              </div>
              <div className={`text-md absolute left-12 ${styles.raqami} mt-5`}>
                المتعلمين
              </div>
            </div>
            <div className={` ${styles.raqami} text-center mt-5 text-2xl `}>
              هريرة
            </div>
            <div
              className={`mt-2  ${styles.raqami} text-center text-xl px-20 md:px-32`}
            >
              توفير الأدوات المناسبة لمصممي المحتوى التعليمي لتوفير التجربة
              التعليمية الممتعة للمتعلم التي تحفزه على الاستمرار في التعلم
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
