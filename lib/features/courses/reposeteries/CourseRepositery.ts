import { api_routes } from "./../../../common/data/data_sources/api_routes";
import { safeAxiosHandler } from "./../../../common/data/data_sources/axios";
import axios from "../../../common/data/data_sources/axios";
import { Course } from "../domain/entities/course";

export class CourseRepositery {
  static async create(course: Course): Promise<Course> {
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

  static async update(course: Course): Promise<Course> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.update_course, {
        course_id: course.id,
        course_name: course.title,
        course_description: course.description,
      });
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

  static async delete(courseID: string): Promise<Course> {
    const c: any = safeAxiosHandler(async () => {
      const res = await axios.post(api_routes.delete_course, {
        course_id: courseID,
      });
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

  static async getAll(): Promise<Course[]> {
    const courses: any = safeAxiosHandler(async () => {
      const res = await axios.get(api_routes.get_all_courses);
      const data = res.data;
      return data.map((course: any) => {
        return new Course({
          id: course._id,
          title: course.title,
          description: course.description,
          topic: course.topic,
        });
      });
    });
    return courses;
  }

  static async get(id: string): Promise<Course> {
    const course: any = safeAxiosHandler(async () => {
      const res = await axios.get(api_routes.get_course, {
        params: {
          course_id: id,
        },
      });
      const data = res.data;
      return new Course({
        id: data._id,
        title: data.title,
        description: data.description,
        topic: data.topic,
      });
    });
    return course;
  }
}
