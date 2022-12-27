import { Answer } from "./answer";

export class Slide {
  id?: number;
  lessonID?: number;
  order?: number;
  slideType?: string;
  title?: string;
  description?: string;
  url?: string;
  mediaType?: string;
  question?: string;
  correctAnswer?: string;
  answers?: Answer[];

  constructor({
    id,
    lessonID,
    order,
    slideType,
    title,
    description,
    question,
    correctAnswer,
    url,
    mediaType,
    answers,
  }: {
    id?: number;
    lessonID?: number;
    order?: number;
    slideType?: string;
    title?: string;
    description?: string;
    url?: string;
    mediaType?: string;
    question?: string;
    correctAnswer?: string;
    answers?: Answer[];
  } = {}) {
    this.id = id;
    this.lessonID = lessonID;
    this.order = order;
    this.slideType = slideType;
    this.title = title;
    this.url = url;
    this.mediaType = mediaType;
    this.description = description;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }

  static TEXT_CONTENT = "text_content";
  static VIDEO_CONTENT = "video_content";
  static IMAGE_CONTENT = "image_content";
  static MEDIA_CONTENT = "media_content";
  static TRUE_FALSE_QUESTION = "true_false_question";
  static MULTIPLE_CHOICE_QUESTION = "multiple_choice_question";
  // get all slide types
  getSlideTypes(): string[] {
    return [
      Slide.TEXT_CONTENT,
      Slide.TRUE_FALSE_QUESTION,
      Slide.MULTIPLE_CHOICE_QUESTION,
      Slide.VIDEO_CONTENT,
      Slide.MEDIA_CONTENT,
      Slide.IMAGE_CONTENT,
    ];
  }

  // create a map of slide types from api
  static api_slide_types = new Map([
    [Slide.TEXT_CONTENT, "text"],
    [Slide.TRUE_FALSE_QUESTION, "trueFalse"],
    [Slide.MULTIPLE_CHOICE_QUESTION, "multipleChoice"],
    [Slide.MEDIA_CONTENT, "mediaAndText"],
    [Slide.VIDEO_CONTENT, "video_content"],
    [Slide.IMAGE_CONTENT, "image_content"],
  ]);

  static api_to_slide_type = new Map([
    ["text", Slide.TEXT_CONTENT],
    ["trueFalse", Slide.TRUE_FALSE_QUESTION],
    ["multipleChoice", Slide.MULTIPLE_CHOICE_QUESTION],
    ["mediaAndText", Slide.MEDIA_CONTENT],
  ]);

  // translate slide type to arabic
  static translateSlideTypeToArabic(slideType?: string): string {
    switch (slideType) {
      case Slide.TEXT_CONTENT:
        return "محتوى نصي";
      case Slide.TRUE_FALSE_QUESTION:
        return "سؤال صح أم خطأ";
      case Slide.MULTIPLE_CHOICE_QUESTION:
        return "سؤال اختياري";
      case Slide.MEDIA_CONTENT:
        return "محتوى متعدد";
      case Slide.VIDEO_CONTENT:
        return "محتوى فيديو";
      case Slide.IMAGE_CONTENT:
        return "محتوى صورة";
      default:
        return "";
    }
  }

  // convert api slide type to slide type
  // static convertApiSlideTypeToSlideType(apiSlideType: string): string {
  //   switch (apiSlideType) {
  //     case this.api_slide_types.TEXT_CONTENT:
  //       return Slide.TEXT_CONTENT;
  //     case this.api_slide_types.MEDIA_CONTENT:
  //       return Slide.MEDIA_CONTENT;
  //     case this.api_slide_types.TRUE_FALSE_QUESTION:
  //       return Slide.TRUE_FALSE_QUESTION;
  //     case this.api_slide_types.MULTIPLE_CHOICE_QUESTION:
  //       return Slide.MULTIPLE_CHOICE_QUESTION;
  //     default:
  //       return "";
  //   }
  // }
}
