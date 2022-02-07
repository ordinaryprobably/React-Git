import Link from "next/link"

export default function Index({ posts }) {
  return (
    <div>
      <h1>HI intaek!</h1>
      {posts.map(post => {
        return (
          <p key={post.id}>
            <Link href={`/post?id=${post.id}`}>
              {post.title}
            </Link>
          </p>
        )
      })}
    </div>
  )
}

/**
 * 
 * @returns Object 속의 props 는 위의 Home function 의 props 로 들어간다.
 * 
 * 첫 번째 빌드 이후의 렌더링, 즉 <Link /> 로 Home 페이지를 다시 방문했다면
 * 새로 fetching 하지 않고
 * Next.js 가 저장해 두고 있던 JSON 파일을 재사용한다. 
 * (Home 의 props 로 넣어준다.)
 */

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}