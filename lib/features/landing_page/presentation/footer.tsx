import styles from "../domain/usecases/landing.module.css";

export const Footer = () => {
  return (
    <div
      className={`bg-orange-500 mt-10 text-center py-5 border-t-2 border-gray-300 ${styles.raqami} text-white`}
    >
      جميع الحقوق محفوظة . هريرة 2023
    </div>
  );
};
