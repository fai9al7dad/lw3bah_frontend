import { Slide } from "../../domain/entities/slide";
import { api_routes } from "./../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "./../../../../common/data/data_sources/axios";
export class SlidesRepositery {
  static async createContent({
    type,
    lessonID,
  }: {
    type: string;
    lessonID: string;
  }): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_content_slide, {
        type,
        lesson_id: lessonID,
      });
      const data = res.data;

      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }

  static async createQuestion({
    type,
    lessonID,
  }: {
    type: string;
    lessonID: string;
  }): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_question_slide, {
        type,
        lesson_id: lessonID,
      });
      const data = res.data;

      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }

  static async updateContent(slide: Slide): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.update_content_slide, {
        slide_id: slide.id,
        order: slide.order,
        title: slide.title,
        body: slide.description,
        slide_type: Slide.api_slide_types.get(slide.slideType!),
        media: slide.url,
        media_type: slide.mediaType,
      });

      const data = res.data;
      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }

  static async updateQuestion(slide: Slide): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.update_question_slide, {
        slide_id: slide.id,
        order: slide.order,
        title: slide.title,
        answers: slide.answers?.map((answer) => {
          return {
            body: answer.body,
            is_correct: answer.isCorrect,
          };
        }),
        slide_type: Slide.api_slide_types.get(slide.slideType!),
      });
      const data = res.data;
      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }

  static async delete(slide: Slide): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.delete_slide, {
        slide_id: slide.id,
      });
      const data = res.data;
      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }

  static async getAll(lessonID: string): Promise<Slide[]> {
    if (!lessonID) throw new Error("lessonID is required");

    const c: any = safeAxiosHandler(async () => {
      const res = await axios.get(api_routes.get_slides, {
        params: {
          lesson_id: lessonID,
        },
      });
      const data = res.data;

      return data.map((slide: any) => {
        return new Slide({
          id: slide._id,
          lessonID: slide.lesson_id,
          order: slide.order,
          title: slide.title,
          description: slide.body,
          mediaType:
            slide.media != null
              ? slide.media.length > 0
                ? slide.media[0].type
                : null
              : null,
          url:
            slide.media != null
              ? slide.media.length > 0
                ? slide.media[0].url
                : null
              : null,

          answers: slide.answers?.map((answer: any) => {
            return {
              body: answer.body,
              isCorrect: answer.is_correct,
            };
          }),
          slideType: Slide.api_to_slide_type.get(
            slide.type === "question" ? slide.question_type : slide.content_type
          ),
        });
      });
    });
    return c;
  }

  // static async get(slideID: string): Promise<Slide> {
  //   const c: any = safeAxiosHandler(async () => {
  //     const res = await axios.get(api_routes.get_slide, {
  //       params: {
  //         slide_id: slideID,
  //       },
  //     });
  //     const slide = res.data;

  //     return new Slide({
  //       id: slide.id,
  //       lessonID: slide.lesson_id,
  //       order: slide.order,
  //       slideType: Slide.api_to_slide_type.get(
  //         slide.type === "question" ? slide.question_type : slide.content_type
  //       ),
  //       title: slide.title,
  //       description: slide.body,
  //       imageUrl: slide.image_url,
  //       videoUrl: slide.video_url,
  //       question: slide.question,
  //       correctAnswer: slide.correct_answer,
  //       answers: slide.answers.map((answer: any) => {
  //         return {
  //           body: answer.body,
  //           isCorrect: answer.is_correct,
  //         };
  //       }),
  //     });
  //   });
  //   return c;
  // }

  static async updateOrder(slide: Slide): Promise<Slide> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.update_slide_order, {
        slide_id: slide.id,
        order: slide.order,
      });
      const data = res.data;
      return new Slide({
        id: data.id,
        lessonID: data.lesson_id,
        order: data.order,
        slideType: data.slide_type,
        title: data.title,
        description: data.description,
        question: data.question,
        correctAnswer: data.correct_answer,
      });
    });
    return c;
  }
}
