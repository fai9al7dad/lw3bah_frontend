export class Course {
  id?: number;
  title: string;
  description: string;
  topic?: string;

  constructor({
    id,
    title,
    description,
    topic,
  }: {
    id?: number;
    title: string;
    description: string;
    topic?: string;
  }) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.topic = topic;
  }
}
