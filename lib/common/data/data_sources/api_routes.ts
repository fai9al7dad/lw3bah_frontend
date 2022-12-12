const prefix = "api";
export const api_routes = {
  // courses
  create_course: `${prefix}/create-new-course`,
  update_course: `${prefix}/update-course-details`,
  delete_course: `${prefix}/delete-course`,
  get_all_courses: `${prefix}/view-my-courses`,
  get_course: `${prefix}/view-my-course`,
  //sections
  get_sections: `${prefix}/teacher-view-sections`,
  create_section: `${prefix}/add-section-to-course`,
  // lessons
  create_lesson: `${prefix}/add-lesson-to-section`,
  update_lesson: `${prefix}/update-lesson-details`,
  delete_lesson: `${prefix}/delete-lesson`,
  get_lessons: `${prefix}/teacher-view-lessons`,
  get_lesson: `${prefix}/teacher-view-lesson-details`,
  // slide
  get_slides: `${prefix}/teacher-view-slides`,
  get_slide: `${prefix}/teacher-view-slide-details`,
  create_content_slide: `${prefix}/add-content-to-lesson`,
  update_content_slide: `${prefix}/update-content-slide`,
  create_question_slide: `${prefix}/add-question-to-lesson`,
  update_question_slide: `${prefix}/update-question-slide`,
  delete_slide: `${prefix}/delete-slide`,
};
