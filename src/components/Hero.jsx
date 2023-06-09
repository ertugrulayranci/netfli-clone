import { useSelector } from "react-redux";
export const baseImgUrl = "https://image.tmdb.org/t/p/original/";
const Hero = () => {
  const state = useSelector((store) => store.movieReducer);

  //rastgeke sayı bulma
  const index = Math.floor(Math.random() * 19);
  //rastgele flmi bulma
  const film = state.popularFilms[index];

  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 gap-3 mb-3 border d-flex flex-column justify-content-center">
        <h1>{film?.title}</h1>
        <p className="text-warning">IMDB: {film?.vote_average}</p>
        <p> {film?.overview}</p>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-danger">Şimdi İzle</button>
          <button className="btn btn-info">Listeye Ekle</button>
        </div>
      </div>
      <div className=""></div>
      <img src={`${baseImgUrl}`} />
      <div></div>
    </div>
  );
};
export default Hero;
