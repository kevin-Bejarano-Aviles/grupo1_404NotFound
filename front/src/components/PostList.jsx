import PostItem from './PostItem';

function PostList() {

  const array = [
    {
      id: 1,
      name: 'Nombre',
      surname: 'Apellido',
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, a doloremque! Eveniet rem itaque iste saepe similique corrupti maiores voluptatibus tenetur quam facere repellat necessitatibus quidem autem, fugit, nostrum voluptatum?'
    },
    {
      id: 2,
      name: 'Nombre',
      surname: 'Apellido',
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, a doloremque! Eveniet rem itaque iste saepe similique corrupti maiores voluptatibus tenetur quam facere repellat necessitatibus quidem autem, fugit, nostrum voluptatum?'
    }
  ];

  return (
    <ul className='flex flex-col gap-8 mb-24'>
      {
        array.map(item => (
          <PostItem key={item.id} item={item}/>
        ))
      }
    </ul>
  )
}

export default PostList;