import editIcon from '../img/icon-edit.svg';
import trashIcon from '../img/icon-trash.svg';
import showWarning from './showWarning';

function PostItemMenu({ classList, disabledState, setDisabledState }) {

  const editPost = () => {
    setDisabledState(false);
    document.getElementById('post-text').focus();
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
            onClick={<showWarning />}
            />
        </li>
      </ul>
    </div>
  )
}

export default PostItemMenu;