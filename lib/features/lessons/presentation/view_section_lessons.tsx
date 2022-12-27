import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { Lesson } from "../domain/entities/lesson";
import ViewLesson from "./view_lesson";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLesson } from "../domain/usecases/use_lesson";

export default function ViewSectionLessons({ lessons }: { lessons: Lesson[] }) {
  const router = useRouter();
  const { updateLessonOrder } = useLesson();

  if (lessons.length === 0) return null;

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(lessons ?? []);
    const [reorderedItem] = items.splice(result.source.index, 1); // removed source item
    items.splice(result.destination.index, 0, reorderedItem); // added source item to destination index
    // update order for all items between source and destination
    for (let i = 0; i < items.length; i++) {
      items[i].order = i + 1;
    }
    updateLessonOrder({
      lesson: reorderedItem,
      reorderedItems: items,
    });
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div>
        <Droppable droppableId="droppable">
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {lessons.map((lesson, i) => (
                <Draggable
                  key={lesson.id?.toString()}
                  draggableId={lesson.id?.toString()}
                  index={i}
                >
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Link
                        key={lesson.id}
                        href={`/course/${router.query.courseID}/lesson/${lesson.id}`}
                      >
                        <NavigationButton className="mt-2">
                          <ViewLesson key={lesson.id} lesson={lesson} />
                        </NavigationButton>
                      </Link>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
