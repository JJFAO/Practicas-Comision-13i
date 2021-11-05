import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MemeFullScreen from '../components/MemeFullScreen';

export default function DetalleMeme() {
    const { memeId } = useParams();
    const [meme, setMeme] = useState({});
    const history = useHistory();

    useEffect(() => {
        const getMeme = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/memes/${memeId}`);
                setMeme(response.data);
            } catch (error) {
                console.log(error);
                history.push('/404');
            }
        };
        getMeme();
    }, []);

    return <MemeFullScreen meme={meme} />;
}
