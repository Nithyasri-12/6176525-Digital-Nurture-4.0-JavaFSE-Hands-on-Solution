import React from 'react';

const blogs = [
  {
    id: 'bl1',
    heading: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!',
  },
  {
    id: 'bl2',
    heading: 'Installation',
    author: 'Schwezdiener',
    content: 'You can install React from npm.',
  },
];

function BlogCard({ blog }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ fontSize: 20, fontWeight: '700' }}>{blog.heading}</div>
      <div style={{ fontWeight: '600' }}>{blog.author}</div>
      <div>{blog.content}</div>
    </div>
  );
}

function BlogDetails() {
  const header = blogs.length > 1 ? 'Blog Details' : 'Single Blog';

  return (
    <div style={{ flex: 1, borderLeft: '5px solid green', paddingLeft: 20 }}>
      <h2>{header}</h2>
      {blogs.map(b => (
        <BlogCard key={b.id} blog={b} />
      ))}
    </div>
  );
}

export default BlogDetails;
