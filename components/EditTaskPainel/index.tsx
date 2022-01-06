import { RiCheckDoubleLine } from "react-icons/ri";
import { FiEdit3, FiTrash2, FiX } from "react-icons/fi";

import { Container } from "./styles";
import Button from "../Button";
import { useTasksList } from "../../contexts/tasks-context";

interface EditTaskPainelProps {
  open: boolean;
  onClickEdit: () => void;
  onClickCheck: () => void;
  onClickDelete: () => void;
}

export function EditTaskPainel({
  open,
  onClickCheck,
  onClickEdit,
  onClickDelete,
}: EditTaskPainelProps) {
  const { editMode, closeEditMode } = useTasksList();
  const shouldIsOpen = open || editMode.open;
  return (
    shouldIsOpen && (
      <Container>
        <Button onClick={onClickCheck} bgColor="background_high_emphasis">
          <RiCheckDoubleLine />
        </Button>
        <Button className="edit-button" onClick={editMode.open ? closeEditMode : onClickEdit} bgColor="background_high_emphasis">
          {editMode.open ? <FiX /> : <FiEdit3 />}
        </Button>
        <Button className="delete-button" onClick={onClickDelete} bgColor="background_high_emphasis">
          <FiTrash2 />
        </Button>
      </Container>
    )
  );
}
