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
        title: course.title,
        description: course.description,
        topic: course.topic,
        tags: course.tags,
      });
      const data = res.data;
      return new Course({
        id: data._id,
        title: data.title,
        description: data.description,
        topic: data.topic,
        tags: course.tags,
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
          createdAt: course.created_at,
          tags: course.tags,
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
      const displayTags = data.tags.map((tag: any) => tag.name);
      return new Course({
        id: data._id,
        title: data.title,
        createdAt: data.created_at,
        description: data.description,
        topic: data.topic,
        tags: displayTags,
      });
    });
    return course;
  }
}
