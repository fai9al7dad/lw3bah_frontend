import { api_routes } from "./../../../common/data/data_sources/api_routes";
import { safeAxiosHandler } from "./../../../common/data/data_sources/axios";
import axios from "../../../common/data/data_sources/axios";
import { Course } from "../domain/entities/course";

export class CourseRepositery {
  async create(course: Course): Promise<Course> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.create_course, course);
      const data = res.data;
      return new Course({
        id: data._id,
        title: data.title,
        description: data.description,
        topic: data.topic,
      });
    });
    return c;
  }
  getAllSections({ courseID }: { courseID: number }): Promise<Course[]> {
    throw new Error("Method not implemented.");
  }
  getOne(id: number): Promise<Course> {
    throw new Error("Method not implemented.");
  }
}
