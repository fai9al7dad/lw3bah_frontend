import { api_routes } from "../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "../../../../common/data/data_sources/axios";
import { pb } from "../../../../common/data/data_sources/pocketbase";
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

    try {
      const resultList = await pb.collection("sections").getFullList(20, {
        filter: `course = "${courseID}"`,
        expand: "lessons(section)",
      });
      console.log(resultList);

      const sections: any = resultList.map((section: any) => {
        return new Section({
          id: section.id,
          title: section.title,
          courseID: section.course,
          order: section.order,
          lessons:
            section.expand != null
              ? section.expand["lessons(section)"].map((lesson: any) => {
                  return {
                    id: lesson.id,
                    title: lesson.title,
                    description: lesson.description,
                    sectionID: lesson.section,
                    order: lesson.order,
                    createdAt: lesson.created,
                  };
                })
              : [],
        });
      });

      return sections;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  static async delete(sectionID: string): Promise<boolean> {
    if (!sectionID) throw new Error("sectionID is required");
    const deleted: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.delete_section, {
        section_id: sectionID,
      });
      const data = res.data;
      return data.deleted;
    });
    return deleted;
  }

  static async update(section: Section): Promise<Section> {
    const updated: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.update_section, {
        section_id: section.id,
        title: section.title,
        description: "--",
        order: section.order,
      });
      const data = res.data;
      return new Section({
        id: data.id,
        title: data.title,
        order: data.order,
      });
    });
    return updated;
  }
}
