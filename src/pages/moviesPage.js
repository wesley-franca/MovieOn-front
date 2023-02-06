import { MoviesPageIndex } from "../components/moviesComponents";
import { Wrapper } from "../styles/pageWrapperStyle";

export function MoviesPage() {
  return (
    <Wrapper color={"#ffffff"}>
      <MoviesPageIndex />
    </Wrapper>
  )
}
