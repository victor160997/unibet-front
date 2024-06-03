import { Rows, StyledNomeAdmResposta, StyledResposta } from "./index.styles";
// import { useDeleteNotification } from "./useDeleteNotification";
// import { useEditNotification } from "./useEditNotification";
// import { useViewNotification } from "./useViewNotification";
import Card from "../components/RowGrid";
import { useRespondeFeedback } from "./useRespondeFeedback";
import { useCallback } from "react";

export const evaluations = [
  {
    id: 1,
    aluno: {
      id: 1,
      nome: "Maria Silva",
    },
    history: "O curso foi ótimo, aprendi muito!",
    rating: 5,
    status: "Respondido",
    resposta: "Obrigado pelo seu feedback positivo, Maria!",
    admResposta: {
      id: 1,
      nome: "João Oliveira",
      jobRole: "Gerente",
    },
  },
  {
    id: 2,
    aluno: {
      id: 2,
      nome: "Pedro Santos",
    },
    history: "Achei o material didático um pouco confuso.",
    rating: 2,
    status: "Não Respondido",
    resposta: null,
  },
  {
    id: 3,
    aluno: {
      id: 3,
      nome: "Ana Costa",
    },
    history:
      "Gostei da metodologia, mas o horário das aulas poderia ser melhor.",
    rating: 4,
    status: "Respondido",
    resposta:
      "Obrigado pela sugestão, Ana. Vamos considerar isso para os próximos cursos.",
    admResposta: {
      id: 2,
      nome: "Mariana Lima",
      jobRole: "Supervisor",
    },
  },
  {
    id: 4,
    aluno: {
      id: 4,
      nome: "Luiz Oliveira",
    },
    history: "A equipe de instrutores é muito atenciosa.",
    rating: 1,
    status: "Respondido",
    resposta:
      "Lamentamos que sua experiência não tenha sido satisfatória. Vamos revisar nossos processos internos.",
    admResposta: {
      id: 3,
      nome: "Fernanda Almeida",
      jobRole: "Coordenador",
    },
  },
  {
    id: 5,
    aluno: {
      id: 5,
      nome: "Carla Fernandes",
    },
    history: "O curso superou minhas expectativas, recomendo!",
    rating: 3,
    status: "Não Respondido",
    resposta: null,
  },
  {
    id: 6,
    aluno: {
      id: 6,
      nome: "Rafaela Lima",
    },
    history: "Achei o conteúdo muito básico para o nível do curso.",
    rating: 4,
    status: "Respondido",
    resposta:
      "Agradecemos seu feedback, Rafaela. Vamos revisar o conteúdo para melhor atendê-lo.",
    admResposta: {
      id: 4,
      nome: "Paulo Santos",
      jobRole: "Analista",
    },
  },
  {
    id: 7,
    aluno: {
      id: 7,
      nome: "Mariana Rodrigues",
    },
    history: "A plataforma online é muito intuitiva e fácil de usar.",
    rating: 2,
    status: "Não Respondido",
    resposta: null,
  },
  {
    id: 8,
    aluno: {
      id: 8,
      nome: "Rodrigo Alves",
    },
    history: "O curso me ajudou a desenvolver novas habilidades.",
    rating: 5,
    status: "Respondido",
    resposta:
      "Ficamos felizes em saber, Rodrigo. Conte sempre conosco para continuar sua jornada de aprendizado!",
    admResposta: {
      id: 5,
      nome: "Carlos Silva",
      jobRole: "Diretor",
    },
  },
  {
    id: 9,
    aluno: {
      id: 9,
      nome: "João Pereira",
    },
    history: "O curso poderia ter mais atividades práticas.",
    rating: 3,
    status: "Não Respondido",
    resposta: null,
  },
  {
    id: 10,
    aluno: {
      id: 10,
      nome: "Fernanda Lima",
    },
    history: "Gostei muito do suporte oferecido pela equipe.",
    rating: 4,
    status: "Respondido",
    resposta: "Muito obrigado pelo reconhecimento, Fernanda!",
    admResposta: {
      id: 6,
      nome: "Patricia Santos",
      jobRole: "Analista",
    },
  },
];

export const useGridData = ({ rate }) => {
  // const { ViewModal, setIdNotification, ModalViewButton } =
  //   useViewNotification();
  // const { EditModal, ModalEditButton, setIdNotificationEdit } =
  //   useEditNotification();

  // const { DeleteModal, ModalDeleteButton } = useDeleteNotification();

  const { ModalRespondeButton, RespondeModal, setIdFeedbackEdit } =
    useRespondeFeedback();

  const Grid = useCallback(() => {
    return (
      <Rows>
        {evaluations
          .filter((x) => (rate && rate != 0 ? x.rating == rate : true))
          .map((evaluation) => (
            <Card
              key={evaluation.title}
              {...evaluation}
              sideComponents={
                <div>
                  {!evaluation.resposta ? (
                    <>
                      {
                        <ModalRespondeButton
                          onClickButton={() => setIdFeedbackEdit(evaluation.id)}
                        />
                      }
                      {RespondeModal}
                    </>
                  ) : (
                    <StyledResposta>
                      <StyledNomeAdmResposta>
                        <span>RESPOSTA</span>
                      </StyledNomeAdmResposta>
                      <StyledNomeAdmResposta>
                        <span>{evaluation.admResposta.nome} - </span>
                        <span>{evaluation.admResposta.jobRole}</span>
                      </StyledNomeAdmResposta>
                      <div>{evaluation.resposta}</div>
                    </StyledResposta>
                  )}
                </div>
              }
            />
          ))}
      </Rows>
    );
  }, [
    evaluations,
    ModalRespondeButton,
    setIdFeedbackEdit,
    RespondeModal,
    rate,
  ]);

  return {
    Grid,
  };
};
