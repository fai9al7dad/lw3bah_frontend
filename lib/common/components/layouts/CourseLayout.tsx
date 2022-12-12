import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CreateCourse from "../../../features/courses/presentation/CreateCourse";
import { UpdateCourseDetails } from "../../../features/courses/presentation/update_course_details";
import { CourseRepositery } from "../../../features/courses/reposeteries/CourseRepositery";
import AnimatedSidebar from "../AnimatedSidebar";
import { NavigationButton, PrimaryButton, SecondaryButton } from "../atoms";
import Modal from "../modal";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="">
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-between">
        <AnimatedSidebar trigger={<SecondaryButton>تفاصيل</SecondaryButton>}>
          <div className="px-5">
            <div className="text-center text-2xl font-bold mb-10">
              معلومات الدورة
            </div>
            <UpdateCourseDetails />

            <Modal
              trigger={
                <SecondaryButton className="w-full mt-5">
                  حذف الدورة
                </SecondaryButton>
              }
            >
              <DeleteCourseModal />
            </Modal>
          </div>
        </AnimatedSidebar>
        <NavigationButton
          onClick={() => router.push("/courses")}
          className="px-10"
        >
          دوراتي
        </NavigationButton>
      </div>

      <div className="flex items-center justify-center min-h-[88vh] py-20">
        <div className="w-2/5 ">{children}</div>
      </div>
    </div>
  );
}

const DeleteCourseModal = ({ setShowModal }: { setShowModal?: any }) => {
  const router = useRouter();
  return (
    <div>
      <div className="text-center text-2xl font-bold mb-10">
        هل انت متاكد من حذف الدورة؟
      </div>
      <div className="flex justify-between">
        <PrimaryButton
          className="w-1/2"
          onClick={() => {
            setShowModal(false);
            CourseRepositery.delete(router.query.courseID as string);
            router.replace("/courses");
          }}
        >
          نعم
        </PrimaryButton>
        <SecondaryButton className="w-1/2" onClick={() => setShowModal(false)}>
          لا
        </SecondaryButton>
      </div>
    </div>
  );
};
