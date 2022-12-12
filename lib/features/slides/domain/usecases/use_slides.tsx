import { useRouter } from "next/router";
import useSWR from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import { SlidesRepositery } from "../../data/repositeries/SlidesRepositery";

export const useSlides = () => {
  const router = useRouter();
  const {
    data: slides,
    error,
    isValidating,
    mutate,
  } = useSWR(
    api_routes.get_slides + "?lesson_id=" + router.query.lessonID,
    () => SlidesRepositery.getAll(router.query.lessonID as string),
    {
      revalidateOnFocus: false,
    }
  );

  return { slides, error, isValidating, mutate };
};
