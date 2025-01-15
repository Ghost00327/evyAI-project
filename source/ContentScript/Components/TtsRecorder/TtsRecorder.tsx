import React from "react";
import { memo, useMemo, useRef, useState } from "react";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
import Mic from "../../../assets/svg/Mic";
import MicFilled from "../../../assets/svg/MicFilled";
import { useStyles } from "./TtsRecorder.style";

interface IParams {
  onTranscriptChange?: (transcript: string) => void;
  onStart?: () => void;
  onStop?: () => void;
  prependText?: string;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

function TtsRecorder({ onTranscriptChange, onStart, onStop, prependText }: IParams) {
  const [isListening, setIsListening] = useState(false);
  const { classes } = useStyles();

  const recognition = useMemo(() => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return null;
    const speechRec = new SpeechRec();
    speechRec.continuous = true;
    speechRec.interimResults = true;
    return speechRec;
  }, []);

  const lockedText = useRef("");

  const startListening = () => {
    lockedText.current = prependText || "";
    setIsListening(true);
    recognition.start();
    if (onStart) onStart();

    recognition.onresult = (event: any) => {
      const speechResult = [...event.results]
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .trim();

      if (onTranscriptChange) {
        onTranscriptChange((lockedText.current + " " + speechResult).trim());
      }
    };

    recognition.onerror = (event: any) => {
      EvyAILogger.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const stopListening = () => {
    console.log("stopping");
    setIsListening(false);
    recognition.stop();
    if (onStop) {
      onStop();
    }
  };

  if (!recognition) return null;

  return (
    <button
      type="button"
      onClick={isListening ? stopListening : startListening}
      className={`${classes.button} ${isListening ? "isListening" : ""}`}
    >
      <div className="mic">
        <Mic height="20px" width="20px" />
      </div>
      <div className="mic-filled">
        <MicFilled width="20px" height="20px" />
      </div>
    </button>
  );
}

export default memo(TtsRecorder);
