export class Lesson {
  id: string;
  description: string;
  createdAt: string;
  views: string;

  constructor(
    id: string,
    description: string,
    createdAt: string,
    views: string
  ) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.views = views;
  }
}
