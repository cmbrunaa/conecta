import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import { CoursesHero } from "../../components/sections/Courses/CoursesHero/CoursesHero";
import { CoursesPlatforms } from "../../components/sections/Courses/CoursesPlatforms/CoursesPlatforms";
import { CoursesCategories } from "../../components/sections/Courses/CoursesCategories/CoursesCategories";
import { CoursesTips } from "../../components/sections/Courses/CoursesTips/CoursesTips";
import { CoursesCTA } from "../../components/sections/Courses/CoursesCTA/CoursesCTA";

import "./Courses.css";

export function Courses() {
  return (
    <div className="courses-page">
      <Navbar />

      <main>
        <CoursesHero />
        <CoursesPlatforms />
        <CoursesCategories />
        <CoursesTips />
        <CoursesCTA />
      </main>

      <Footer />
    </div>
  );
}