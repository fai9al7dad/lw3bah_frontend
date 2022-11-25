import React from "react";
import {
  NavigationButton,
  PrimaryButton,
  Wrapper,
} from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { ArchiveIcon } from "../../../common/components/SvgIcons";
import CreateLesson from "../../lessons/presentation/CreateLesson";
import Lesson from "../../lessons/presentation/Lesson";

export default function Section({ title }: { title: string }) {
  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-neutral-200 border border-neutral-400 rounded-lg p-3">
              <ArchiveIcon />
            </div>
            <h1 className="text-md font-bold ml-4">{title}</h1>
          </div>
          <Modal
            title="إضافة درس"
            trigger={
              <PrimaryButton className="text-xs">إضافة درس</PrimaryButton>
            }
          >
            <CreateLesson />
          </Modal>
        </div>
        <div className="mt-5">
          <NavigationButton className="text-sm px-5 flex flex-col justify-end text-right">
            <Lesson title="affew" />
          </NavigationButton>
        </div>
      </Wrapper>
    </>
  );
}
