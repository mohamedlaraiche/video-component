import Hero from '../hero.PNG';
import './poster.css';
function Poster({ poster, playHandler }) {
  return (
    <div id='displayPoster '>
      <img onClick={playHandler} src={Hero} className={poster} alt='' />
    </div>
  );
}

export default Poster;
