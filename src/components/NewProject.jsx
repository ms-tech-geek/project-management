import { useRef } from 'react';

import Input from './Input';
const NewProject = ({ onAdd }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    const project = { title, description, dueDate };

    // validation ...

    onAdd(project);
  };

  return (
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
  );
};

export default NewProject;
