import { api_routes } from "../../../../common/data/data_sources/api_routes";
import axios, {
  safeAxiosHandler,
} from "../../../../common/data/data_sources/axios";
import { Section } from "../../entities/section";

export class SectionsRepositery {
  async create(section: Section): Promise<Section> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_section, {
        course_id: section.courseID,
        ...section,
      });
      const data = res.data;
      console.log(data);

      return new Section({
        id: data.id,
        title: data.title,
      });
    });
    return c;
  }
}
