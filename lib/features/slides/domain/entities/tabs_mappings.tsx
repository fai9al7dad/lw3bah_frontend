import HoverToolTip from "../../../../common/components/atoms/HoverToolTip";
import { ImgPlaceholder } from "../../../../common/components/SvgIcons";
import { ContentTab } from "../../../lessons/presentation/popup_tabs/content_tab";
import { QuestionsTab } from "../../../lessons/presentation/popup_tabs/question_tab";
import { SeperatorTab } from "../../../lessons/presentation/popup_tabs/seperator_tab";
import { Slide } from "./slide";

// return an object with the tab name as key and the tab component as value

export const tabs = [
  "محتوى",
  "أسئلة",
  <div className="flex items-center justify-center ">
    <div>
      فواصل <span className="text-xs">(s)</span>
    </div>
    <HoverToolTip content="فواصل تعرض بشكل ملفت وسط الشرائح  ">
      <div className="bg-gray-100 rounded-full h-4 w-4 text-xs  mr-1">؟</div>
    </HoverToolTip>
  </div>,
];

export const TABS_MAPPINGS = [
  <ContentTab />,
  <QuestionsTab />,
  <SeperatorTab />,
];

const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-60 px-2 py-2 border border-gray-100 bg-gray-50 rounded-2xl">
      {children}
    </div>
  );
};
const ContentImageWithText = () => (
  <PreviewWrapper>
    <div className="w-56 h-40 bg-gray-100 rounded-2xl flex items-center justify-center">
      <ImgPlaceholder className="w-44 h-44 text-gray-300" />
    </div>
    <div className="bg-gray-200 w-2/4 h-4 mt-5 rounded" />
    <div className="bg-gray-200 w-full h-4 mt-2 rounded" />
    <div className="bg-gray-200 w-full h-4 mt-2 mb-5 rounded" />
  </PreviewWrapper>
);

const ContentText = () => (
  <PreviewWrapper>
    <div className="bg-gray-300 w-2/4 h-4 mb-3 mt-2 rounded" />

    <div className="bg-gray-200 w-full h-4 mt-2 rounded" />
    <div className="bg-gray-200 w-full h-4 mt-2  rounded" />
    <div className="bg-gray-200 w-full h-4 mt-2  rounded" />
    <div className="bg-gray-200 w-full h-4 mt-2  rounded" />
  </PreviewWrapper>
);

const QuestionTrueFalse = () => (
  <PreviewWrapper>
    <div className="py-2">4 أصغر من 5 ؟</div>
    <div className="bg-gray-200 w-full px-5 py-2 mt-2 rounded font-bold text-gray-900">
      صح ✅
    </div>
    <div className="bg-gray-200 w-full px-5 py-2 mt-2 rounded font-bold text-gray-900">
      خطأ ❌
    </div>
  </PreviewWrapper>
);

const MCQuestion = () => (
  <PreviewWrapper>
    <div className="py-2">أي مما يلي صحيح ؟</div>
    {Array.from({ length: 4 }).map((_, index) => (
      <div className="bg-gray-200 w-full px-5 py-2 mt-2 rounded text-gray-900">
        الإجابة {index + 1}
      </div>
    ))}
  </PreviewWrapper>
);

export const CONTENT_TABS_PREVIEW = [<ContentImageWithText />, <ContentText />];

export const QUESTIONS_TABS_PREVIEW = [<QuestionTrueFalse />, <MCQuestion />];

export const SEPERATOR_TABS_PREVIEW = [
  <PreviewWrapper>
    <div className="w-56 h-40 bg-gray-100 rounded-2xl flex items-center justify-center">
      <ImgPlaceholder className="w-44 h-44 text-gray-300 " animateChild />
    </div>
    <div className="bg-gray-200 w-full h-4 mt-2 rounded" />
  </PreviewWrapper>,
];
