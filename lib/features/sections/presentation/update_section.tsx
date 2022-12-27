import { useRouter } from "next/router";
import React from "react";
import { PrimaryButton } from "../../../common/components/atoms";
import { SelectInput } from "../../../common/components/atoms/select_input";
import useSection from "../../sections/domain/usecases/use_section";
import { Section } from "../domain/entities/section";

export const UpdateSection = ({
  section,
  onSubmit,
}: {
  section: Section;
  onSubmit: any;
}) => {
  const { update, sections } = useSection();
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    beforeOrAfter: "before",
    sectionOrder: "1",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    section.order = +formState.sectionOrder;
    onSubmit();
    update({
      section: section,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-sm mt-5 text-center">اين تريد نقل هذا القسم؟</div>
      <div className="flex justify-between py-5">
        <select
          name="sectionOrder"
          className="inline-block w-full focus:outline-none bg-white border py-2 px-5 border-neutral-200 rounded-lg"
          value={formState.sectionOrder}
          onChange={(e: any) => {
            setFormState({ ...formState, sectionOrder: e.target.value });
          }}
        >
          {/* loop over sections and show them here but disable the current section */}
          {sections!.map((csection) => {
            return (
              <option
                key={csection.id}
                disabled={section.id == csection.id}
                value={csection.order}
              >
                {csection.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* <SelectInput
        label="قبل أم بعد"
        name="beforeOrAfter"
        value={formState.beforeOrAfter}
        options={[
          { value: "before", label: "قبل" },
          { value: "after", label: "بعد" },
        ]}
        onChange={(e: any) => {
          setFormState({ ...formState, beforeOrAfter: e.value });
        }}
      /> */}
      <PrimaryButton className=" w-full">تحديث </PrimaryButton>
    </form>
  );
};
