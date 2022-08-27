import PostItem from './PostItem';
import postExamples from '../json/postExamples.json';

function PostList() {

  return (
    <ul className='flex flex-col gap-8 mb-24'>
      {
        postExamples.map(post => (
          <PostItem key={post.id} post={post}/>
        ))
      }
    </ul>
  )
}

export default PostList;