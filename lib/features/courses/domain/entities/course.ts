export class Course {
  id?: number;
  title: string;
  description: string;
  topic?: string;
  createdAt?: string;
  tags?: string[];

  constructor({
    id,
    title,
    description,
    topic,
    createdAt,
    tags,
  }: {
    id?: number;
    title: string;
    description: string;
    topic?: string;
    createdAt?: string;
    tags?: string[];
  }) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.tags = tags;
    this.topic = topic;
    this.createdAt = createdAt;
  }
}
