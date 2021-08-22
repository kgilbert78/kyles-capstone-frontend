import { useEffect, useRef, useState } from "react";
import "./BottomNav.scss"

export const BottomNav = (props) => {
    const audioPlayer = useRef(null);
    // const [filePath, setFilePath] = useState("/audio/freeSoundCanadianHorseAndCarriage.mp3");
    const [playPauseButton, setPlayPauseButton] = useState("fas fa-play-circle");
    // const [display, setDisplay] = useState();

    useEffect(() => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
        audioPlayer.current.load();
        // somehow tell it to check the source in the html again. use "ref"?
        // playFromStart(); // playPause();
        console.log("audio in navbar:", props.audioFilePath)
    },[props.audioFilePath])

    // useEffect(() => {
    //     // update display of h2 in volumeControlsDiv when volume changes
    // },[audioPlayer.current.volume]) // Cannot read property 'volume' of null because initial useRef is null

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

    const volume = () => {
        console.log("volume")
        // rename & use to toggle between displaying volumeControls & audioControls (with setDisplay). Or put volumeControls in a dropdown(dropup?) menu like TopNav has? Or modal? https://www.npmjs.com/package/reactjs-popup
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

/*
    const audioControlsDiv = () => {
        return (
            <div className="audioControls container-fluid justify-content-center">
                <span className="nav-link" href="#" onClick={playFromStart}><i className="fas fa-fast-backward"></i></span>
                <span className="nav-link" href="#" onClick={rewind}><i className="fas fa-backward"></i></span>
                <span className="nav-link" href="#" onClick={playPause}><i className={playPauseButton}></i></span>
                <span className="nav-link" href="#" onClick={fastForward}><i className="fas fa-forward"></i></span>
                <span className="nav-link volumeIcon" href="#" onClick={volume}>
                    <i className="fas fa-volume-up"></i>
                </span>
            </div>
        );
    };

    

    const volumeControlsDiv = () => {
        return (
            <div>
                <div className="volumeControls container-fluid justify-content-center">
                    <span><i className="fas fa-minus-square fa-2x ms-5 me-5" onClick={volumeDown}></i></span>
                    <h2>{Math.round(audioPlayer.current.volume * 10)}</h2>
                    <span><i className="fas fa-plus-square fa-2x ms-5 me-5" onClick={volumeUp}></i></span>
                </div>
                <span><i className="fas fa-undo fa-lg me-2"></i></span>
            </div>
        );
    };
*/
    return (
        <div className="BottomNav">
            <nav className="navbarBottom navbar navbar-expand-lg navbar-light">
            
            <div className="audioControls container-fluid justify-content-center">
                <span className="nav-link" href="#" onClick={playFromStart}><i className="fas fa-fast-backward"></i></span>
                <span className="nav-link" href="#" onClick={rewind}><i className="fas fa-backward"></i></span>
                <span className="nav-link" href="#" onClick={playPause}><i className={playPauseButton}></i></span>
                <span className="nav-link" href="#" onClick={fastForward}><i className="fas fa-forward"></i></span>
                <span className="nav-link volumeIcon" href="#" onClick={volume}>
                    <i className="fas fa-volume-up"></i>
                </span>
            </div>

            <audio ref={audioPlayer}><source src={props.audioFilePath} type="audio/mpeg"></source></audio>
            </nav>
        </div>
    );
};


// Javascript audio Resources

// https://www.w3schools.com/tags/ref_av_dom.asp

// https://imajineweb.com/javascriptaudioplayer


// React audio example with hooks

// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js