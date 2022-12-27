export class Lesson {
  id?: string;
  title?: string;
  description: string;
  sectionID?: number;
  createdAt?: string;
  order?: number;
  constructor({
    id,
    title,
    description,
    createdAt,
    sectionID,
    order,
  }: {
    id?: string;
    title?: string;
    description: string;
    createdAt?: string;
    sectionID?: number;
    order?: number;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.sectionID = sectionID;
    this.order = order;
  }
}
