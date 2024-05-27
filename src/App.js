import * as React from "react";
import FeatureSection from "./FeatureSection";
import CourseSection from "./CourseSection";
import AdvSection from "./AdvSection";
import Header from './Header';
import Hero from "./HeroSection";
import Form from "./Form"


const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <FeatureSection />
        <CourseSection />
        <AdvSection />
        <Form />
    </div>
  );
}

export default App;