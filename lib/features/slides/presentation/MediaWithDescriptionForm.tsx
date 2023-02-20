import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { SelectInput } from "../../../common/components/atoms/select_input";
import { mediaTypes } from "../../../common/data/data_sources/media_types";
import { LessonContext } from "../../lessons/domain/usecases/lesson_context";
import { Slide } from "../domain/entities/slide";
import { useSlides } from "../domain/usecases/use_slides";

export default function MediaWithDescriptionForm() {
  const { updateContent } = useSlides();
  const { slidesState, currentSlideIndex, setSlidesState } =
    useContext(LessonContext);

  const onChange = (event: any) => {
    setSlidesState(
      slidesState.map((slide, index) => {
        if (index === currentSlideIndex) {
          return {
            ...slide,
            [event.target.name]: event.target.value,
          };
        }
        return slide;
      })
    );
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (
      slidesState[currentSlideIndex].mediaType === "video" &&
      !slidesState[currentSlideIndex].url.includes("youtube")
    ) {
      return toast.error("حاليا روابط اليوتيوب فقط المدعومة");
    }
    // if mediatype is image and url is not an jpeg or jpg or png
    if (
      slidesState[currentSlideIndex].mediaType === "image" &&
      !slidesState[currentSlideIndex].url.includes("jpeg" || "jpg" || "png")
    ) {
      return toast.error("صيغة الصورة غير مدعومة");
    }

    updateContent(
      new Slide({
        id: slidesState[currentSlideIndex]?.id,
        order: slidesState[currentSlideIndex]?.order,
        slideType: slidesState[currentSlideIndex]?.slideType,
        description: slidesState[currentSlideIndex].description,
        url: slidesState[currentSlideIndex].url,
        mediaType: slidesState[currentSlideIndex].mediaType,
      })
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        name="url"
        value={slidesState[currentSlideIndex].url}
        label="رابط المحتوى"
        className="mb-5"
      />
      <select
        onChange={onChange}
        required={true}
        name="mediaType"
        value={slidesState[currentSlideIndex].mediaType}
        className="inline-block w-full focus:outline-none bg-white border-2 py-2 px-5 border-neutral-200 rounded-lg"
      >
        <option value="video">فيديو</option>
        <option value="image">صورة</option>
      </select>

      <div className="text-xs mt-2 mb-5">
        {slidesState[currentSlideIndex].mediaType === "video"
          ? "حاليا روابط اليوتيوب فقط المدعومة "
          : null}
      </div>

      <TextAreaInput
        onChange={onChange}
        name="description"
        value={slidesState[currentSlideIndex].description}
        rows={10}
        label="وصف"
        className="mb-5"
        required={false}
      />

      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
