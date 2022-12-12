import { api_routes } from "../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "../../../../common/data/data_sources/axios";
import { Section } from "../../domain/entities/section";

export class SectionsRepositery {
  static async create(section: Section): Promise<Section> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_section, {
        course_id: section.courseID,
        ...section,
      });
      const data = res.data;

      return new Section({
        id: data.id,
        title: data.title,
      });
    });
    return c;
  }

  static async get(courseID: string): Promise<Section[]> {
    if (!courseID) throw new Error("courseID is required");

    const sections: any = safeAxiosHandler(async () => {
      const res = await axios.get(api_routes.get_sections, {
        params: {
          course_id: courseID,
        },
      });
      const data = res.data;
      return data.sections.map((section: any) => {
        return new Section({
          id: section._id,
          title: section.title,
          courseID: section.course_id,
          order: section.order,
          lessons: section.lessons.map((lesson: any) => {
            return {
              id: lesson._id,
              title: lesson.title,
              description: lesson.description,
              sectionID: lesson.section_id,
              order: lesson.order,
            };
          }),
        });
      });
    });
    return sections;
  }
}
