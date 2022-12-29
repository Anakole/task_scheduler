import { Task } from 'components/Task/Task';

export const TaskList = () => {
  return (
    <ul>
      {/* {[].map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))} */}

      <Task />
    </ul>
  );
};
