import Meme from '../components/Meme';

const Memes = ({ memes }) => {
    const mapMemes = memes.map((meme, i) => (<Meme key={i} meme={meme} />));

    return (
        <>
            <h2>Memes</h2>
            <div className="d-flex flex-wrap justify-content-between">{mapMemes}</div>
        </>
    );
};

export default Memes;
