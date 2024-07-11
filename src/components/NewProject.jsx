import Input from './Input';
const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" />
        <Input label="Description" textarea />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
