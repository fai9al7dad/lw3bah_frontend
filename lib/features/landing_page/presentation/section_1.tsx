import styles from "../domain/usecases/landing.module.css";
export const Section1 = () => {
  return (
    <>
      <div className="px-10  py-10 ">
        <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-lg text-4xl">
          🎮
        </div>
        <div className="mt-5">
          <div className={`text-3xl ${styles.raqami}`}>
            ما هو التلعيب (Gamification)
          </div>
          <div className={`mt-2 text-xl text-gray-900/50 ${styles.raqami}`}>
            والتلعيب باختصار هو استخدام عناصر الالعاب الإلكترونية في سياقات
            تعليمية، ومن أكثر ما يميز نموذج التلعيب على النموذج التقليدي، فكرة
            الحريات الأربع
          </div>
        </div>
      </div>
      <hr />

      <div className="px-10  py-10 ">
        <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-lg text-4xl">
          📊
        </div>
        <div className="mt-5">
          <div className={`text-3xl ${styles.raqami}`}>احصائيات عامة</div>
          <div className={`mt-2 text-xl text-gray-900/50 ${styles.raqami}`}>
            <div className={`${styles.raqami} mt-2 text-xl text-gray-900/50`}>
              10% من الطلاب يكملون المحتوى التعليمي
            </div>
            <div className={`${styles.raqami} mt-2 text-xl text-gray-900/50`}>
              89.5% تقريبا من الطلاب تحسن أدائهم بالتلعيب (Gamification) مقارنة
              بالتعليم التقليدي
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
