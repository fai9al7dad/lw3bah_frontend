import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import useCourse from "../../../features/courses/domain/usecases/useCourse";
import CreateCourse from "../../../features/courses/presentation/CreateCourse";
import { UpdateCourseDetails } from "../../../features/courses/presentation/update_course_details";
import { CourseRepositery } from "../../../features/courses/reposeteries/CourseRepositery";
import { api_routes } from "../../data/data_sources/api_routes";
import AnimatedSidebar from "../AnimatedSidebar";
import {
  NavigationButton,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../atoms";
import LoadingSpinner from "../atoms/loading_spinner";
import Modal from "../modal";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { course, error, isValidating } = useCourse();
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
        {course && <div className="text-2xl font-bold">{course?.title}</div>}
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
  const { course, del } = useCourse();
  const [title, setTitle] = React.useState<string>("");
  return (
    <div>
      <div className="text-center text-2xl font-bold mb-2">
        هل انت متاكد من حذف الدورة؟
      </div>
      <div className="text-sm mb-10 text-center">
        هذا الاجراء لا يمكن التراجع عنه
      </div>

      <TextInput
        className="w-full"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        label="اكتب اسم الدورة للتأكيد"
      />
      <div className="text-sm mt-2 mb-20 text-right">
        اسم الدورة: {course?.title}
      </div>
      <div className="flex justify-between">
        <PrimaryButton
          className="w-1/2"
          onClick={() => {
            if (title !== course?.title)
              return toast.error("اسم الدورة غير صحيح");
            setShowModal(false);
            del();
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
