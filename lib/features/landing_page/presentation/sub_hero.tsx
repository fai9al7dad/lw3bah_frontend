import styles from "../domain/usecases/landing.module.css";
import { GoldCoinSVG } from "../domain/usecases/svg_icons";

export const SubHero = ({}) => {
  return (
    <div className="relative">
      <div className="absolute z-10 top-[-60px]">
        <GoldCoinSVG />
      </div>
      <div className="bg-orange-500 p-10 z-20 relative flex items-center justify-center">
        <div className=" md:w-3/4 lg:w-2/4 ">
          <div className="flex items-center ">
            {/* <img src="../../../../assets/landing_page/char.png" /> */}
            <div className="  rounded-lg ml-10">
              <img src="/landing_page/char.png" className="w-72" />
            </div>
            <div>
              <div className={`text-4xl ${styles.raqami} text-white`}>
                هريرة عندما يصبح شعور التعلم كشعور اللعب
              </div>
              <div className={`mt-5  text-white ${styles.raqami}`}>
                تكمن الجاذبية الأساسية للتلعيب في الحرية التي يقدمها للطلبة
                والمعلمين والتي تتجسد في الحريات الأربع الواردة في تقرير إكسفورد
                (2016) وهي حرية الفشل، وحرية التجربة، وحرية بذل الجهد، وحرية
                التعبير عن الذات.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
