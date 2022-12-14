import { useRouter } from "next/router";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import useSubmit from "../../../../common/hooks/use_submit";
import { CourseRepositery } from "../../reposeteries/CourseRepositery";

export default function useCourse() {
  const router = useRouter();
  const { send } = useSubmit();
  const {
    data: course,
    error,
    isValidating,

    mutate,
  } = useSWR(
    api_routes.get_course + `/${router.query.courseID}`,
    () => CourseRepositery.get(router.query.courseID as string),
    {
      revalidateOnFocus: false,
    }
  );

  const create = ({
    payload,
  }: {
    payload: {
      title: string;
      description: string;
      tags: string[];
    };
  }) => {
    send({
      sendFunction: () => {
        return CourseRepositery.create({
          ...payload,
        });
      },
      onSuccess: (res) => {
        router.push("/course/" + res.id);
      },
    });
  };
  const del = async () => {
    send({
      sendFunction: () => {
        return CourseRepositery.delete(router.query.courseID as string);
      },
      onSuccess: () => {
        router.replace(`/courses`);
      },
    });
  };

  const update = ({
    payload,
  }: {
    payload: {
      title: string;
      description: string;
      id: any;
      tags: string[];
    };
  }) => {
    send({
      sendFunction: () => {
        return CourseRepositery.update({
          ...payload,
        });
      },
      onSuccess: (res) => {
        mutate();
      },
    });
  };

  return { course, error, isValidating, create, del, update };
}
