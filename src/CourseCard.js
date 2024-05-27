import React from 'react';

const CourseCard = ({ title, description, students, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex-shrink-0 w-80 md:w-96 lg:w-96">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        </div>
        <span className="text-sm text-gray-500">{students} студентов</span>
      </div>
      <img className="rounded-lg w-full h-32 object-cover mb-4" src={image} alt={title} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Academic courses</span>
        <a href="#" className="text-blue-500 hover:underline">→</a>
      </div>
    </div>
  );
};

export default CourseCard;
