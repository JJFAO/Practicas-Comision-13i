import { Redirect, useParams } from 'react-router';
import MemeFullScreen from '../components/MemeFullScreen';
import { leerDeLocalStorage } from '../utils/localStorage';

export default function DetalleMeme() {
    const { memeId } = useParams();
    const memes = leerDeLocalStorage('memes') || [];

    const memeEncontrado = memes.find((m) => m.id === memeId);

    if (memeEncontrado === undefined) {
        return <Redirect to="/404" />;
    }

    return <MemeFullScreen meme={memeEncontrado} />;
}
