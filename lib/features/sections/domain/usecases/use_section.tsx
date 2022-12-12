import { useRouter } from "next/router";
import useSWR from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import useSubmit from "../../../../common/hooks/use_submit";
import { SectionsRepositery } from "../../data/repositeries/sections_repositery";
import { Section } from "../entities/section";

export default function useSection() {
  const router = useRouter();
  const courseID = router.query.courseID as string;
  const { send } = useSubmit();
  const {
    data: sections,
    error,
    isValidating,
    mutate,
  } = useSWR(
    api_routes.get_sections + "/" + courseID,
    () => SectionsRepositery.get(router.query.courseID as string),
    {
      revalidateOnFocus: false,
    }
  );

  const create = ({
    payload,
  }: {
    payload: {
      title: string;
      courseID: string;
    };
  }) => {
    send({
      sendFunction: () =>
        SectionsRepositery.create({
          title: payload.title,
          courseID: payload.courseID,
        }),
      onSuccess: (res) => {
        mutate();
      },
    });
  };
  const del = async () => {
    send({
      sendFunction: () => {
        return SectionsRepositery.delete(router.query.lessonID as string);
      },
      onSuccess: () => {
        router.replace(`/course/${router.query.courseID}`);
      },
    });
  };

  return { sections, error, isValidating, create, del };
}
