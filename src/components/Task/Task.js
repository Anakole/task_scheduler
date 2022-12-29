import { MdClose } from 'react-icons/md';

export const Task = () => {
  return (
    <div>
      <input type="checkbox" />
      <p>text</p>
      <button>
        <MdClose size={24} />
      </button>
    </div>
  );
};
