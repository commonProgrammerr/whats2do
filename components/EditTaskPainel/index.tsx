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

export function EditTaskPainel({ open }: EditTaskPainelProps) {
  return (
    <Container disabled={!open}>
      <Button bgColor="background_high_emphasis">
        <RiCheckDoubleLine />
      </Button>
      <Button bgColor="background_high_emphasis">
        <FaEdit />
      </Button>
      <Button bgColor="background_high_emphasis">
        <FaRegTrashAlt />
      </Button>
    </Container>
  );
}
