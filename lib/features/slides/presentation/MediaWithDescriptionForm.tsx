import React from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { SelectInput } from "../../../common/components/atoms/select_input";
import { mediaTypes } from "../../../common/data/data_sources/media_types";
import { Slide } from "../domain/entities/slide";
import { useSlides } from "../domain/usecases/use_slides";

export default function MediaWithDescriptionForm({ slide }: { slide: Slide }) {
  const { updateContent } = useSlides();
  const [formState, setFormState] = React.useState({
    description: "",
    url: "",
    mediaType: "",
  });
  console.log(formState);

  // update form state on init
  React.useEffect(() => {
    setFormState({
      description:
        slide.description !== undefined && slide.description !== null
          ? slide.description
          : "",
      url: slide.url !== undefined ? slide.url : "",
      mediaType: slide.mediaType !== undefined ? slide.mediaType : "",
    });
  }, [slide]);

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formState.mediaType === "video" && !formState.url.includes("youtube")) {
      return toast.error("حاليا روابط اليوتيوب فقط المدعومة");
    }
    // if mediatype is image and url is not an jpeg or jpg or png
    if (
      formState.mediaType === "image" &&
      !formState.url.includes("jpeg" || "jpg" || "png")
    ) {
      return toast.error("صيغة الصورة غير مدعومة");
    }

    updateContent(
      new Slide({
        id: slide?.id,
        order: slide?.order,
        slideType: slide?.slideType,
        description: formState.description,
        url: formState.url,
        mediaType: formState.mediaType,
      })
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        name="url"
        value={formState.url}
        label="رابط المحتوى"
        className="mb-5"
      />
      <select
        onChange={(e: any) => {
          setFormState({
            ...formState,
            mediaType: e.target.value,
          });
        }}
        required={true}
        name="mediaType"
        value={formState.mediaType}
        className="inline-block w-full focus:outline-none bg-white border-2 py-2 px-5 border-neutral-200 rounded-lg"
      >
        <option value="video">فيديو</option>
        <option value="image">صورة</option>
      </select>

      <div className="text-xs mt-2 mb-5">
        {formState.mediaType === "video"
          ? "حاليا روابط اليوتيوب فقط المدعومة "
          : null}
      </div>

      <TextAreaInput
        onChange={onChange}
        name="description"
        value={formState.description}
        rows={10}
        label="وصف"
        className="mb-5"
        required={false}
      />

      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
