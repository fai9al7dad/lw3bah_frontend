import { Bar } from "react-chartjs-2";
import HoverToolTip from "../../../common/components/atoms/HoverToolTip";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const ViewCourseStats = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 2,
    // responsive: true,
    // plugins: {
    //   legend: {
    //     position: "top" as const,
    //   },
    //   title: {
    //     text: "Chart.js Bar Chart",
    //   },
    // },
  };
  const labels = [
    "محرم",
    "صفر",
    "ربيع 1",
    "ربيع 2",
    "جمادي الأول",
    "جمادي الثاني",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "المشاهدات",
        data: [65, 59, 80, 81, 56, 55, 40, 40, 60, 20, 60, 20],
        borderRadius: 10,
        backgroundColor: "#FACC15",
      },
    ],
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-10 lg:gap-20 mb-10">
        <StatWrapper
          title="إجمالي المشاهدات"
          stat="14.5 ألف"
          tooltipContent="عدد الطلاب الذين شاهدوا للدورة"
        />
        <StatWrapper
          title="نسبة الإرتداد"
          stat="30%"
          tooltipContent="نسبة الطلاب الذين رأوا الدورة ثم انضموا اليها"
        />
      </div>
      <Bar
        options={options}
        data={data}
        className="w-full border-2 border-gray-200 rounded-lg mb-5"
      />
    </div>
  );
};

const StatWrapper = ({
  title,
  tooltipContent = "!",
  stat,
}: {
  title: string;
  tooltipContent: string;
  stat: string;
}) => {
  return (
    <div className="px-5 py-5 border-2 border-gray-200 rounded-lg ">
      <div className="flex items-center mb-2">
        <div className=" text-sm  ">{title}</div>
        <HoverToolTip content={tooltipContent}>
          <div className="w-5 h-5 flex justify-center font-bold mr-2 text-xs items-center bg-gray-200 rounded-full">
            ؟
          </div>
        </HoverToolTip>
      </div>
      <div className=" text-3xl font-bold">{stat}</div>
    </div>
  );
};
