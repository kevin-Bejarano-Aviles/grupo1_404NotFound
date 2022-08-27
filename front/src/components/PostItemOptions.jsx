import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';

function PostItemOptions({ classList, disabledState, setDisabledState }) {

  const editPost = () => {
    setDisabledState(false);
    document.getElementById('postbody').focus();
  };

  return (
    <div className={`${classList} absolute right-16`}>
      <ul className='flex gap-1'>
        <li>
          <img
            className={`${disabledState ? '' : 'bg-pastelgray'} p-2 rounded-full cursor-pointer hover:bg-pastelgray`}
            src={editIcon}
            alt='Editar Publicación'
            onClick={() => editPost()}
          />
        </li>
        <li>
          <img
            className='p-2 rounded-full cursor-pointer hover:bg-pastelgray'
            src={trashIcon}
            alt='Eliminar Publicación'
            />
        </li>
      </ul>
    </div>
  )
}

export default PostItemOptions;