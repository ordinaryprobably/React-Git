export default function Post({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <>
          <div>
            <h3>{comment.name}</h3>
            <span>{comment.email}</span>
            <p>{comment.body}</p>
            <p>{comment.postId}</p>
          </div>
          <hr/>
        </>
      ))}
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`);
  const comments = await res.json();

  return {
    props: { comments }
  }
}