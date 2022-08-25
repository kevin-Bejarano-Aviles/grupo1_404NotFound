import PostItem from './PostItem';

function PostList() {

  const array = [
    {
      id: 1,
      name: 'Lautaro',
      surname: 'Coria',
      post: 'Mi mamá ya no puede cuidar a estos cachorros. Estoy buscando reubicarlos con cualquier persona Interesada, preferiblemente alguien que los cuide bien y les brinde un hogar amoroso.'
    },
    {
      id: 2,
      name: 'Gonzalo',
      surname: 'Alvarez',
      post: 'Mi mamá ya no puede cuidar a estos cachorros. Estoy buscando reubicarlos con cualquier persona Interesada, preferiblemente alguien que los cuide bien y les brinde un hogar amoroso.'
    }
  ];

  return (
    <ul className='flex flex-col gap-8'>
      {
        array.map(item => (
          <PostItem item={item}/>
        ))
      }
    </ul>
  )
}

export default PostList;