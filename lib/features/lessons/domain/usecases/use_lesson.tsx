import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import useSubmit from "../../../../common/hooks/use_submit";
import { SlidesRepositery } from "../../../slides/data/repositeries/SlidesRepositery";
import { LessonsRepositery } from "../../data/repositeries/lessons_repositery";
import { Lesson } from "../entities/lesson";

export const useLesson = () => {
  const router = useRouter();
  const { send } = useSubmit();
  const {
    data: lesson,
    error,
    isValidating,
  } = useSWR(
    api_routes.get_lesson + "?lesson_id=" + router.query.lessonID,
    () => LessonsRepositery.get(router.query.lessonID as string),
    {
      revalidateOnFocus: false,
    }
  );
  const { mutate } = useSWRConfig();

  const create = ({ payload }: { payload: any }) => {
    send({
      sendFunction: () => LessonsRepositery.create({ ...payload }),
      onSuccess: (res) => {
        mutate(api_routes.get_sections + "/" + router.query.courseID);
      },
    });
  };
  const del = async () => {
    send({
      sendFunction: () => {
        return LessonsRepositery.delete(router.query.lessonID as string);
      },
      onSuccess: () => {
        router.replace(`/course/${router.query.courseID}`);
      },
    });
  };

  const updateLessonOrder = async ({
    lesson,
    reorderedItems,
  }: {
    lesson: Lesson;
    reorderedItems: Lesson[];
  }) => {
    send({
      sendFunction: () => {
        return LessonsRepositery.updateLessonOrder(lesson);
      },
      onSuccess: () => {
        // mutate(api_routes.get_sections + "/" + router.query.courseID);
      },
    });
  };

  return { lesson, error, del, create, isValidating, updateLessonOrder };
};
