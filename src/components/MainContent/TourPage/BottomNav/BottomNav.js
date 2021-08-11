import { useRef, useState } from "react";
import "./BottomNav.scss"

export const BottomNav = (props) => {
    const audioPlayer = useRef(null);
    const [filePath, setFilePath] = useState("/audio/freeSoundCanadianHorseAndCarriage.mp3");
    const [playPauseButton, setPlayPauseButton] = useState("fas fa-play-circle");

    const playPause = () => {
        if (audioPlayer.current.paused) {
            audioPlayer.current.play();
            setPlayPauseButton("fas fa-pause-circle");
        } else {
            audioPlayer.current.pause();
            setPlayPauseButton("fas fa-play-circle");
        };
    };

    const playFromStart = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime = 0;
        }
    };

    const rewind = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime -= 10.0;
        }
    };

    const fastForward = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime += 10.0;
        }
    };

    const volume = () => {
        console.log("volume")
        // if (audioPlayer.current.play()) {
        //     // defaults to 1
        //     // audioPlayer.current.volume += 0.1 // up
        //     // audioPlayer.current.volume -= 0.1 // down
        // }
    };

    return (
        <div className="BottomNav">
            <nav className="navbarBottom navbar navbar-expand-lg navbar-light">
                <div className="audioControls container-fluid justify-content-center">
                    <a className="nav-link" href="#" onClick={playFromStart}><i className="fas fa-fast-backward"></i></a>
                    <a className="nav-link" href="#" onClick={rewind}><i className="fas fa-backward"></i></a>
                    <a className="nav-link" href="#" onClick={playPause}><i className={playPauseButton}></i></a>
                    <a className="nav-link" href="#" onClick={fastForward}><i className="fas fa-forward"></i></a>
                    <a className="nav-link volumeIcon" href="#" onClick={volume}>
                        <i className="fas fa-volume-up"></i>
                    </a>
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