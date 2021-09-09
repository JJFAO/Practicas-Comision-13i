import { useParams } from "react-router";
import Meme from "../components/Meme";
import { leerDeLocalStorage } from "../utils/localStorage";

export default function DetalleMeme() {
    const { memeId } = useParams();
    const memes = leerDeLocalStorage('memes');
    const memeEncontrado = memes.find((m) => m.id === memeId);

    return (
        <Meme meme={memeEncontrado} />
    )
}
