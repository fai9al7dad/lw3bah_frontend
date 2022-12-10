import { api_routes } from "../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "../../../../common/data/data_sources/axios";
import { Lesson } from "../../entities/lesson";

export class LessonsRepositery {
  async create(lesson: Lesson): Promise<Lesson> {
    console.log({ lesson });

    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_lesson, lesson);
      const data = res.data;
      console.log({ data });

      return new Lesson({
        id: data.id,
        description: data.description,
        sectionID: data.section_id,
      });
    });
    return c;
  }
}
