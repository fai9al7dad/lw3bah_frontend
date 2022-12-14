import { api_routes } from "../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "../../../../common/data/data_sources/axios";
import { Lesson } from "../../domain/entities/lesson";

export class LessonsRepositery {
  static async create(lesson: Lesson): Promise<Lesson> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_lesson, lesson);
      const data = res.data;
      return new Lesson({
        id: data._id,
        description: data.description,
        sectionID: data.section_id,
      });
    });
    return c;
  }
  static async update(lesson: Lesson): Promise<Lesson> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.put(api_routes.update_lesson, lesson);
      const data = res.data;
      return new Lesson({
        id: data._id,
        description: data.description,
        sectionID: data.section_id,
      });
    });
    return c;
  }
  static async delete(id: string): Promise<Lesson> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.delete_lesson, {
        lesson_id: id,
      });
      const data = res.data;
      return new Lesson({
        id: data._id,
        description: data.description,
        sectionID: data.section_id,
      });
    });
    return c;
  }
  static async get(id: string): Promise<Lesson> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.get(api_routes.get_lesson, {
        params: {
          lesson_id: id,
        },
      });
      const data = res.data;

      return new Lesson({
        id: data._id,
        description: data.description,
        sectionID: data.section_id,
        createdAt: data.created_at,
        title: data.title,
      });
    });
    return c;
  }
}
