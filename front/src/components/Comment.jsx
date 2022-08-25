function Comment({ comment }) {
  return (
    <div className='flex flex-col basis-full p-4 border-t-2 bg-pastelgray'>
      <div className='flex items-center gap-2 '>
        <img className='w-7 rounded-full' src={comment.urlImage} alt="Avatar" />
        <p className='font-semibold'>{comment.name} {comment.surname}</p>
      </div>
      <p className='pl-9'>{comment.text}</p>
    </div>
  )
}

export default Comment;