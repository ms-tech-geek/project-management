import { useRef } from 'react';
import Modal from './Modal';
import Input from './Input';
const NewProject = ({ onAdd }) => {
  const modalRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    const project = { title, description, dueDate };

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      dueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }
    onAdd(project);
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4 ">
          Oops ... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className=" text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
