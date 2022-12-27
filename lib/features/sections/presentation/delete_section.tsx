import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../common/components/atoms";
import { toast } from "react-toastify";
import { Section } from "../domain/entities/section";
import useSection from "../domain/usecases/use_section";
export const DeleteSection = ({
  section,
  setShowModal,
  onSubmit,
}: {
  section: Section;
  setShowModal?: any;
  onSubmit?: any;
}) => {
  const { del } = useSection();
  const [title, setTitle] = React.useState<string>("");

  const onDelete = (e: any) => {
    e.preventDefault();
    del({ sectionID: section.id });
    setShowModal(false);

    onSubmit && onSubmit();
  };
  return (
    <div className="">
      <div className="text-center text-2xl font-bold mb-2">
        هل انت متاكد من حذف القسم؟
      </div>
      <div className="text-sm mb-10 text-center">
        هذا الاجراء لا يمكن التراجع عنه
      </div>
      {section.title ? (
        <div>
          <TextInput
            className="w-full"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            label="اكتب اسم القسم للتأكيد"
          />
          <div className="text-sm mt-2 mb-20 text-right">
            اسم القسم: {section?.title}
          </div>
        </div>
      ) : null}

      <div className="flex justify-between">
        <PrimaryButton
          className="w-1/2"
          onClick={(e: any) => {
            if (title !== section?.title && section.title)
              return toast.error("اسم القسم غير صحيح");
            onDelete(e);
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
