import { useEffect, useState } from "react";
import useModal from "../../../shared/components/Modal";
import { evaluations } from "./useGridData";
import Form from "../components/FormFeedBack";

export const useRespondeFeedback = () => {
  const [idFeedback, setIdFeedbackEdit] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const { ModalComponent, ModalButton } = useModal({
    textButton: "Responder Feedback",
    content: <Form preData={feedback} />,
    deps: [idFeedback, feedback],
  });

  useEffect(() => {
    if (idFeedback) {
      // fetchNotification(idNotification).then((response) => {
      //   setNotification(response.data);
      // });
      const data = evaluations.find((item) => item.id == idFeedback);
      console.log(data);
      setFeedback(data);
    }
  }, [idFeedback]);

  return {
    RespondeModal: ModalComponent,
    setIdFeedbackEdit,
    ModalRespondeButton: ModalButton,
  };
};
