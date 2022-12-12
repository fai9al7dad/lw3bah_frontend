import React from "react";
import {
  NavigationButton,
  PrimaryButton,
  Wrapper,
} from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { ArchiveIcon } from "../../../common/components/SvgIcons";
import CreateLesson from "../../lessons/presentation/CreateLesson";
import Lesson from "../../lessons/presentation/view_lesson";
import ViewSectionLessons from "../../lessons/presentation/view_section_lessons";
import { Section as SectionEntity } from "../domain/entities/section";

export default function Section({
  section,
  className,
}: {
  section: SectionEntity;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-neutral-200 border border-neutral-400 rounded-lg p-3">
              <ArchiveIcon />
            </div>
            <h1 className="text-md font-bold mr-4">{section.title}</h1>
          </div>
          <Modal
            title="إضافة درس"
            trigger={
              <PrimaryButton className="text-xs">إضافة درس</PrimaryButton>
            }
          >
            <CreateLesson sectionID={section.id} />
          </Modal>
        </div>
        <div>
          <ViewSectionLessons lessons={section?.lessons ?? []} />
        </div>
      </Wrapper>
    </div>
  );
}
