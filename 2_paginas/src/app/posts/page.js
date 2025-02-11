import Link from 'next/link';
import React from 'react';

export default function PostsPage() {

  const postIds = [1, 2, 3];

  return (
    <div>
      <Link href={`/`}>Página inicial</Link>
      <ul>
        {postIds.map((id) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>Ver Post {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
