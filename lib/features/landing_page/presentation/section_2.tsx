import styles from "../domain/usecases/landing.module.css";
import { Section2SVG } from "../domain/usecases/svg_icons";

export const Section2 = () => {
  return (
    <div className="py-10">
      <div className="px-10  ">
        <div className={`text-4xl ${styles.raqami} text-center`}>
          <span className="mb-5 block text-6xl">💡</span>
          ومن هذا الاحتياج عملنا على توفير تجربة تحتوي على منصة تعليمية ممتعة
          ومحفزة تشعر المتعلم انه في لعبة يستمتع في كل مراحلها.
        </div>
      </div>
      <div className="relative ">
        <div className="flex items-center justify-center">
          <Section2SVG />
          <div
            className={`text-xl absolute right-2 w-44 text-center ${styles.raqami} mt-5`}
          >
            صناع المحتوى التعليمي
          </div>
          <div className={`text-xl absolute left-12 ${styles.raqami} mt-5`}>
            المتعلمين
          </div>
        </div>
        <div className={` ${styles.raqami} text-center mt-5 text-2xl `}>
          هريرة
        </div>
        <div className={`mt-2  ${styles.raqami} text-center text-xl px-32`}>
          توفير الأدوات المناسبة لمصممي المحتوى التعليمي لتوفير التجربة
          التعليمية الممتعة للمتعلم التي تحفزه على الاستمرار في التعلم
        </div>
      </div>
    </div>
  );
};
