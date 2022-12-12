import { useRouter } from "next/router";
import useSWR from "swr";
import { PrimaryButton } from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
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
    return <div>failed to load</div>;
  }
  if (isValidating) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>loading...</div>;
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
      {data.map((course) => (
        <CourseItem course={course} className="mb-5" />
      ))}
    </div>
  );
};
export default ViewAllCourses;
