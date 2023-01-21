import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import {
  NavigationButton,
  SecondaryButton,
  Wrapper,
} from "../../../lib/common/components/atoms";
import MainLayout from "../../../lib/common/components/layouts/main_layout";
import { useAuth } from "../../../lib/features/auth/domain/usecases/use_auth";

import ViewAllCourses from "../../../lib/features/courses/presentation/view_all_courses";

export default function index() {
  return (
    <MainLayout>
      <div className="min-h-[85vh] flex items-center justify-center ">
        <div className="w-2/5">
          <Link href="/creator">
            <SecondaryButton className="mb-5">عودة</SecondaryButton>
          </Link>
          <Wrapper title="دوراتي">
            <ViewAllCourses />
          </Wrapper>
        </div>
      </div>
    </MainLayout>
  );
}
