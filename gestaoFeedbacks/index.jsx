import { useContext, useEffect } from "react";
import { GlobalContext } from "../../shared/contexts/globalContext/GlobalContext";
import { useGridData } from "./hooks/useGridData";
import { useForm } from "react-hook-form";
import { Star } from "./components/RowGrid/index.style";

export default function GestaoFeedbacks() {
  const { setPageTitle, user } = useContext(GlobalContext);
  const { watch, register } = useForm();

  const userIsAdmin = user?.role === "admin";

  const rate = watch("rate");

  useEffect(() => {
    setPageTitle("Gestão de Feedbacks");
  }, [setPageTitle]);

  const { Grid } = useGridData({ rate });

  if (!userIsAdmin)
    return (
      <div>
        <h1>Você não tem permissão para acessar essa página!</h1>
      </div>
    );

  return (
    <div>
      <select
        id="rate"
        name="rate"
        placeholder="Filtre pela nota"
        {...register("rate")}
      >
        <option value={0}>Todos</option>
        <option value={1}>
          <Star filled={true}>★</Star>
        </option>
        <option value={2}>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
        </option>
        <option value={3}>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
        </option>
        <option value={4}>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
        </option>
        <option value={5}>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
          <Star filled={true}>★</Star>
        </option>
      </select>
      <Grid />
    </div>
  );
}
