import React from 'react';

const courses = [
  { id: 'c1', title: 'Angular', date: '4/5/2021' },
  { id: 'c2', title: 'React', date: '6/3/2021' },
];

function CourseItem({ course }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 22, fontWeight: 'bold' }}>{course.title}</div>
      <div style={{ color: '#555' }}>{course.date}</div>
    </div>
  );
}

function CourseDetails() {
  if (!courses || courses.length === 0) return null;

  return (
    <div style={{ flex: 1, borderLeft: '5px solid green', paddingLeft: 20 }}>
      <h2>Course Details</h2>
      {courses.map(c => (
        <CourseItem key={c.id} course={c} />
      ))}
    </div>
  );
}

export default CourseDetails;
