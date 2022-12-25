import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { Slide } from "../domain/entities/slide";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const ViewSlides = ({
  slides,
  currentSlide,
  changeCurrentSlide,
  updateSlideOrder,
}: {
  slides?: Slide[];
  [x: string]: any;
}) => {
  if (slides?.length === 0) return <div>There are no slides</div>;

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(slides ?? []);
    const [reorderedItem] = items.splice(result.source.index, 1); // removed source item
    items.splice(result.destination.index, 0, reorderedItem); // added source item to destination index
    // update order for all items between source and destination
    for (let i = 0; i < items.length; i++) {
      items[i].order = i + 1;
    }

    updateSlideOrder(reorderedItem, items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex flex-col items-center">
        <Droppable droppableId="droppable">
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {slides?.map((slide: Slide, i: number) => (
                <Draggable
                  key={slide.id?.toString()}
                  draggableId={slide.id?.toString()}
                  index={i}
                >
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <NavigationButton
                        // key={i}
                        onClick={() => changeCurrentSlide(slide)}
                        className={`w-full mb-2  px-5 flex text-xs  text-right font-normal xl:text-base justify-start ${
                          currentSlide?.id == slide.id
                            ? "bg-neutral-300 shadow-secondary-button border-neutral-300 max-w-full"
                            : " "
                        }`}
                      >
                        <div>{i + 1} -</div>
                        <div className="mr-1">
                          {Slide.translateSlideTypeToArabic(slide.slideType)}
                        </div>
                      </NavigationButton>
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
};
