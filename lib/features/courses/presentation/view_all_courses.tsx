import { useRouter } from "next/router";
import useSWR from "swr";
import { PrimaryButton } from "../../../common/components/atoms";
import LoadingSpinner from "../../../common/components/atoms/loading_spinner";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import { Course } from "../domain/entities/course";
import { CourseRepositery } from "../reposeteries/CourseRepositery";
import CourseItem from "./course_item";
import CreataCourseButton from "./create_course_button";

const ViewAllCourses = () => {
  const router = useRouter();
  const { error, data, isValidating } = useSWR(
    api_routes.get_all_courses,
    CourseRepositery.getAll,
    {
      revalidateOnFocus: false,
    }
  );

  if (error) {
    return <div>حصل خطأ ما :(</div>;
  }

  if (isValidating) return <LoadingSpinner />;

  if (!data) {
    return <LoadingSpinner />;
  }

  if (data.length === 0) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl  mb-5">لا يوجد لديك دورة حتى الآن !</div>
          <PrimaryButton
            onClick={() => {
              router.replace("course/create");
            }}
            className="w-full"
          >
            قم بإنشاء دورة
          </PrimaryButton>
        </div>
      </div>
    );
  }
  return (
    <div>
      {data.map((course: Course) => (
        <CourseItem key={course.id} course={course} className="mb-5" />
      ))}
    </div>
  );
};
export default ViewAllCourses;
