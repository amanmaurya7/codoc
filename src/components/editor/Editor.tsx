"use client";

import Theme from "./plugins/Theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $getRoot, $getSelection } from 'lexical';
import React, { useEffect, useState } from "react";

import {
  FloatingComposer,
  FloatingThreads,
  liveblocksConfig,
  LiveblocksPlugin,
  useEditorStatus,
} from "@liveblocks/react-lexical";
import Loader from "../Loader";

import FloatingToolbar from "./plugins/FloatingToolbarPlugin";
import { useThreads } from "@liveblocks/react/suspense";
import Comments from "../Comments";
import { DeleteModal } from "../DeleteModal";
import { Token } from "@clerk/nextjs/dist/types/server";

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}
function PredictionPlugin() {
  const [editor] = useLexicalComposerContext();
  const [prediction, setPrediction] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY - 200,
          left: rect.left + window.scrollX - 135,
        });
      }
    };

    const removeUpdateListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          updatePosition();
          const text = $getRoot().getTextContent();
          const words = text.trim().split(/\s+/);
          const lastTwoWords = words.slice(-5).join(' ');
          fetchPrediction(lastTwoWords);
        });
      }
    );

    const keyDownListener = (event) => {
      if (event.key === 'ArrowRight' && prediction) {
        event.preventDefault();
        editor.update(() => {
          const selection = $getSelection();
          if (selection) {
            selection.insertText(" " + prediction);
          }
        });
        setPrediction(''); // Clear the prediction after inserting
      }
    };

    document.addEventListener('keydown', keyDownListener);

    return () => {
      removeUpdateListener();
      document.removeEventListener('keydown', keyDownListener);
    };
  }, [editor, prediction]);

  const fetchPrediction = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/api/token-prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: text }),
      });
      if (response.ok) {
        const data = await response.json();
        setPrediction(data.token);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div style={{
      position: 'absolute',
      top: `${position.top}px`,
      left: `${position.left}px`,
      padding: '2px 5px',
      color: "lightgray",
      fontSize: '0.8em',
      zIndex: 1000,
    }}>
      {prediction}
    </div>
  );
}

export function Editor({
  roomId,
  currentUserType,
}: {
  roomId: string;
  currentUserType: any;
}) {
  const status = useEditorStatus();
  const { threads } = useThreads();


  const initialConfig = liveblocksConfig({
    namespace: "Editor",
    nodes: [HeadingNode],
    onError: (error: Error) => {
      console.error(error);
      throw error;
    },
    theme: Theme,
    editable: currentUserType === "editor",
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container size-full">
        <div className="toolbar-wrapper flex min-w-full justify-between">
          <ToolbarPlugin />
          {currentUserType === "editor" && <DeleteModal roomId={roomId} />}
        </div>

        <div className="editor-wrapper flex flex-col items-center justify-start">
          {status === "not-loaded" || status === "loading" ? (
            <Loader />
          ) : (
            <div className="editor-inner min-h-[1100px] relative mb-5 h-fit w-full max-w-[800px] shadow-md lg:mb-10">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="editor-input h-full" />
                }
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              {currentUserType === "editor" && <FloatingToolbar />}
              <PredictionPlugin />
              <HistoryPlugin />
              <AutoFocusPlugin />
            </div>
          )}

          <LiveblocksPlugin>
            <FloatingComposer className="w-[350px]" />
            <FloatingThreads threads={threads} />
            <Comments />
          </LiveblocksPlugin>
        </div>
      </div>
    </LexicalComposer>
  );
}
