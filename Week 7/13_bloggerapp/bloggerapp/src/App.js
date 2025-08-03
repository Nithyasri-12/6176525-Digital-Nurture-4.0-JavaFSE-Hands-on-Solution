import React, { useState } from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  const toggleControls = (
    <div style={{ marginBottom: 20 }}>
      <label style={{ marginRight: 10 }}>
        <input
          type="checkbox"
          checked={showCourses}
          onChange={() => setShowCourses(s => !s)}
        />{' '}
        Course Details
      </label>
      <label style={{ marginRight: 10 }}>
        <input
          type="checkbox"
          checked={showBooks}
          onChange={() => setShowBooks(s => !s)}
        />{' '}
        Book Details
      </label>
      <label>
        <input
          type="checkbox"
          checked={showBlogs}
          onChange={() => setShowBlogs(s => !s)}
        />{' '}
        Blog Details
      </label>
    </div>
  );

  return (
    <div style={{ padding: 40, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Blogger App Dashboard</h1>
      {toggleControls}

      <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
        {showCourses && <CourseDetails />}
        {showBooks ? <BookDetails /> : null} {/* ternary with null */}
        {showBlogs && <BlogDetails />} {/* && shorthand */}
      </div>
    </div>
  );
}

export default App;
