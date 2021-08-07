import { useRef, useState } from "react";
import "./BottomNav.scss"

export const BottomNav = (props) => {
    const audioPlayer = useRef(null);
    const [filePath, setFilePath] = useState("/audio/freeSoundCanadianHorseAndCarriage.mp3");

    // const [ audio, setAudio ] = useState(require('../../../../audio/freeSoundCanadianHorseAndCarriage.mp3'));
    // const [ playing, setPlaying ] = useState(false);

    // const playPause = () => setPlaying(!playing);

    // useEffect(() => {
    //     playing ? audio.pause() : audio.play();
    // }, [playing]);

    const playPause = ()=>{
        if (audioPlayer.current.paused){
        audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    return (
        <div className="BottomNav">
            <nav className="navbarBottom navbar navbar-expand-lg navbar-light">
                <div className="audioControls container-fluid justify-content-center">
                    <a className="nav-link" href="#"><i className="fas fa-fast-backward"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-backward"></i></a>
                    {/* <a className="nav-link" href="#"><i className="fas fa-pause-circle"></i></a> */}
                    {/* <a className="nav-link" href="#"><i className="fas fa-play-circle"></i></a> */}
                    <a className="nav-link" href="#" onClick={playPause}><i className="fas fa-play-circle"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-forward"></i></a>
                    {/* <a className="nav-link" href="#"><i className="fas fa-fast-forward"></i></a> */}
                    <a className="nav-link" href="#"><i className="fas fa-volume-up"></i></a>
                </div>
                <audio ref={audioPlayer}><source src={filePath} type="audio/mpeg"></source></audio>
            </nav>
        </div>
    );
};


// Javascript audio Resources

// https://www.w3schools.com/tags/ref_av_dom.asp

// https://imajineweb.com/javascriptaudioplayer


// React audio example with hooks

// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js