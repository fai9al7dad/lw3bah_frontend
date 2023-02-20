import React from "react";
import useKeyboardShortcut from "../../../common/hooks/use_keyboard_shortcut";
import { tabs } from "../domain/entities/tabs_mappings";

export const PopUp = ({
  state,
  togglePopup,
  children,
}: {
  state: any;
  togglePopup: () => void;
  children: (active: number) => React.ReactNode;
}) => {
  const [active, setActive] = React.useState(0);
  const {} = useKeyboardShortcut(["Escape"], (shortcutKeys) => togglePopup(), {
    overrideSystem: false,
    ignoreInputFields: false,
    repeatOnHold: false,
  });

  const {} = useKeyboardShortcut(
    ["c", "q", "s"],
    (key) => {
      switch (key) {
        case "c":
          setActive(0);
          break;
        case "q":
          setActive(1);
          break;
        case "s":
          setActive(2);
          break;
      }
    },
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
      isCombination: false,
    }
  );

  const toggleActive = (index: number) => {
    setActive(index);
  };

  const tabWidth = 90;
  const activeTransition = `-translate-x-[${active * tabWidth + "px"}]`;
  return (
    <>
      <div
        className="fixed w-screen h-screen  bg-neutral-900/80 transition-all duration-150 z-50
      "
        onClick={() => state[0](false)}
      />
      <div
        className={`fixed  mr-5 h-[60vh]    bg-white z-50 border-2 border-neutral-200 rounded-2xl bottom-4`}
      >
        <div className="bg-gray-200 px-5  py-2 w-full rounded-t-2xl flex items-center">
          <div
            className={`
            ${activeTransition != null ? activeTransition : ""}
              
              bg-white shadow w-[90px] h-10 absolute rounded-lg transition duration-150 ease-out
          `}
          />
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-gray-900 w-[90px] text-center  py-2  rounded-lg z-10 cursor-pointer `}
              onClick={() => toggleActive(index)}
            >
              {tab}
              {index == 0 ? (
                <span className="text-xs mr-1">(c)</span>
              ) : index == 1 ? (
                <span className="text-xs mr-1">(q)</span>
              ) : null}
            </div>
          ))}
        </div>
        <div
          className={`absolute -right-2 bottom-5  w-5 h-5 bg-white rotate-45  `}
        />
        {/* content */}
        <div className="p-5" onClick={togglePopup}>
          {children(active)}
        </div>
      </div>
    </>
  );
};
