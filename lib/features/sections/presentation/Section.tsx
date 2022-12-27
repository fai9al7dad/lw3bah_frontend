import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  NavigationButton,
  PrimaryButton,
  SecondaryButton,
  Wrapper,
} from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { ArchiveIcon } from "../../../common/components/SvgIcons";
import CreateLesson from "../../lessons/presentation/CreateLesson";
import Lesson from "../../lessons/presentation/view_lesson";
import ViewSectionLessons from "../../lessons/presentation/view_section_lessons";
import { Section as SectionEntity } from "../domain/entities/section";
import { DeleteSection } from "./delete_section";
import { UpdateSection } from "./update_section";

export default function Section({
  section,
  className,
}: {
  section: SectionEntity;
  className?: string;
}) {
  const [viewCreateLessonModal, setViewCreateLessonModal] =
    React.useState(false);
  const [viewDeleteSectionModal, setViewDeleteSectionModal] =
    React.useState(false);
  const [viewUpdateSectionModal, setViewUpdateSectionModal] =
    React.useState(false);
  return (
    <div className={`${className}`}>
      <Modal
        onClick={() => {
          setViewCreateLessonModal((prev) => !prev);
        }}
        viewModal={viewCreateLessonModal}
        title="إضافة درس"
      >
        <CreateLesson
          onSubmit={() => {
            setViewCreateLessonModal(false);
          }}
          sectionID={section.id}
        />
      </Modal>
      <Modal
        onClick={() => {
          setViewDeleteSectionModal((prev) => !prev);
        }}
        viewModal={viewDeleteSectionModal}
        title="حذف القسم"
      >
        <DeleteSection
          onSubmit={() => {
            setViewDeleteSectionModal(false);
          }}
          section={section}
        />
      </Modal>
      <Modal
        onClick={() => {
          setViewUpdateSectionModal((prev) => !prev);
        }}
        viewModal={viewUpdateSectionModal}
        title="تعديل ترتيب القسم"
      >
        <UpdateSection
          onSubmit={() => {
            setViewUpdateSectionModal(false);
          }}
          section={section}
        />
      </Modal>
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-neutral-200 border border-neutral-400 rounded-lg p-3">
              <ArchiveIcon />
            </div>
            <h1 className="text-md font-bold mr-4">{section.title}</h1>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <>
              <Menu.Button>
                <SecondaryButton className="text-xs px-2 py-1">
                  ...
                </SecondaryButton>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                >
                  <div className="p-1">
                    <Menu.Item>
                      {({ close, active }) => (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setViewCreateLessonModal(true);
                            close();
                          }}
                          className={`
                                 hover:bg-amber-300 hover:text-amber-900
                             group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          إضافة درس
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setViewUpdateSectionModal(true);
                            close();
                          }}
                          className={`
                                 hover:bg-amber-300 hover:text-amber-900
                             group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          تعديل الترتيب
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setViewDeleteSectionModal(true);
                            close();
                          }}
                          className={`
                                 hover:bg-amber-300 hover:text-amber-900
                             group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          حذف القسم
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          </Menu>
          {/* <Modal
            title="إضافة درس"
            trigger={
              <PrimaryButton className="text-xs">إضافة درس</PrimaryButton>
            }
          >
            <CreateLesson sectionID={section.id} />
          </Modal> */}
        </div>
        <div>
          <ViewSectionLessons lessons={section?.lessons ?? []} />
        </div>
      </Wrapper>
    </div>
  );
}
