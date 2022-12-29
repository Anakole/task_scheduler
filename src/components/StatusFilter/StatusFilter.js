import { Button } from "components/Button/Button";
import { useSelector } from "react-redux";

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);

  return (
    <div>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};
