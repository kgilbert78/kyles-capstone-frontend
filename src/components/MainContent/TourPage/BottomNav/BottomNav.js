import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import "./BottomNav.scss"

export const BottomNav = (props) => {
    const audioPlayer = useRef(null);
    const [playPauseButton, setPlayPauseButton] = useState("fas fa-play-circle fa-lg");
    // const [display, setDisplay] = useState();

    useEffect(() => {
        if (!audioPlayer.current.paused) {
            audioPlayer.current.pause();
        }
        
        audioPlayer.current.currentTime = 0;
        
        setTimeout(() => {
            audioPlayer.current.load();
        },500)

        console.log("audio in navbar:", props.audioFilePath)
    },[props.audioFilePath]) // audioplayer.current.ended()

    const playPause = () => {
        if (audioPlayer.current.paused) {
            audioPlayer.current.play();
            setPlayPauseButton("fas fa-pause-circle fa-lg");
        } else {
            audioPlayer.current.pause();
            setPlayPauseButton("fas fa-play-circle fa-lg");
        };
    };

    const playFromStart = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime = 0;
            playPause();
        };
    };

    const rewind = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime -= 10.0;
        };
    };

    const fastForward = () => {
        if (audioPlayer.current.play() || audioPlayer.current.pause()) {
            audioPlayer.current.currentTime += 10.0;
        };
    };

    const volumeDown = () => {
        if (audioPlayer.current.play() && audioPlayer.current.volume > 0.11) {
            // 0 to 1
            audioPlayer.current.volume -= 0.1;
            console.log(
                "volumeDown", 
                Math.round(audioPlayer.current.volume * 10)
            );
        };
    };
    const volumeUp = () => {
        if (audioPlayer.current.play() && audioPlayer.current.volume < 0.9) {
            // 0 to 1
            audioPlayer.current.volume += 0.1;
            console.log(
                "volumeUp", 
                Math.round(audioPlayer.current.volume * 10)
            );
        };
    };

    const ended = ()=>{
        setPlayPauseButton("fas fa-play-circle fa-lg");
    }


    return (
        <div className="BottomNav">
            <nav className="navbarBottom navbar navbar-expand-lg navbar-light">
            
            <div className="audioControls container-fluid justify-content-center">
                <span className="nav-link" href="#" onClick={playFromStart}>&nbsp;<i className="fas fa-fast-backward"></i></span>
                <span className="nav-link" href="#" onClick={rewind}><i className="fas fa-backward"></i></span>
                <span className="nav-link" href="#" onClick={playPause}><i className={playPauseButton}></i></span>
                <span className="nav-link" href="#" onClick={fastForward}><i className="fas fa-forward"></i></span>
                <span className="nav-link volumeIcon m-0 px-2 py-0" href="#" style={{border: "solid black 2px"}}>
                    <i className="fas fa-volume-down fa-xs" onClick={volumeDown}></i>
                    &nbsp; &nbsp;
                    <i className="fas fa-volume-up fa-xs" onClick={volumeUp}></i>
                </span>
            </div>

            <audio ref={audioPlayer} onEnded={ended}><source src={props.audioFilePath} type="audio/mpeg"></source></audio>
            </nav>
        </div>
    );
};