"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Maximize2, Minimize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react";

const videoSrc = "/assets/home-hero-banquet-video.mp4";
const posterSrc = "/assets/hero-banquet-epc-premium.png";

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function SoundHeroVideo() {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(true);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  useEffect(() => {
    document.body.classList.toggle("sound-video-active", modalOpen && started);
    document.body.classList.toggle("video-modal-open", modalOpen);
    return () => {
      document.body.classList.remove("sound-video-active");
      document.body.classList.remove("video-modal-open");
    };
  }, [modalOpen, started]);

  useEffect(() => {
    function onFullscreenChange() {
      setFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  async function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setMuted(false);
    if (!started) {
      video.currentTime = 0;
    }
    await video.play();
    setStarted(true);
    setPlaying(true);
  }

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await playWithSound();
      return;
    }
    video.pause();
    setPlaying(false);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function seekTo(value) {
    const video = videoRef.current;
    if (!video || !duration) return;
    const nextTime = (Number(value) / 100) * duration;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await modalRef.current?.requestFullscreen();
  }

  function closeModal() {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setPlaying(false);
    setModalOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <section id="top" className="sound-hero" onClick={openModal}>
      <video
        className="sound-hero-video"
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="DINGSHENG banquet hall cinematic video preview"
      />
      <button className="sound-reopen-button" type="button" onClick={openModal}>
        <Play size={20} fill="currentColor" />
      </button>

      {modalOpen ? (
        <div className={`video-modal ${started ? "is-started" : ""}`} ref={modalRef} role="dialog" aria-modal="true">
          <video
            ref={videoRef}
            className="video-modal-player"
            src={videoSrc}
            poster={posterSrc}
            loop
            playsInline
            preload="auto"
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label="DINGSHENG full screen banquet hall video with sound"
          />

          {!started ? (
            <button className="video-modal-start" type="button" onClick={playWithSound}>
              <span>
                <Play size={34} fill="currentColor" />
              </span>
              <strong>Play With Sound</strong>
            </button>
          ) : null}

          {started ? (
            <div className="video-control-bar" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>
                {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <span className="video-time">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={(event) => seekTo(event.target.value)}
                aria-label="Video progress"
              />
              <span className="video-time">{formatTime(duration)}</span>
              <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"}>
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button type="button" onClick={toggleFullscreen} aria-label={fullscreen ? "Exit full screen" : "Full screen"}>
                {fullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
              <button type="button" onClick={closeModal} aria-label="Close video">
                <X size={21} />
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
