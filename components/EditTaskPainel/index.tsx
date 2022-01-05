import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

import { RiCheckDoubleLine } from "react-icons/ri";

import { Container } from "./styles";
import Button from "../Button";

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
  return (
    open && (
      <Container disabled={!open}>
        <Button onClick={onClickCheck} bgColor="background_high_emphasis">
          <RiCheckDoubleLine />
        </Button>
        <Button onClick={onClickEdit} bgColor="background_high_emphasis">
          <FaEdit />
        </Button>
        <Button onClick={onClickDelete} bgColor="background_high_emphasis">
          <FaRegTrashAlt />
        </Button>
      </Container>
    )
  );
}
