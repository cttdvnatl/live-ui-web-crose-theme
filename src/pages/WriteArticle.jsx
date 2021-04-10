import React, { useState } from "react";
import Header from "../components/Header";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../css/WriteArticle.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

function WriteArticle() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  //   console.log(convertToRaw(editorState.getCurrentContent()));
  return (
    <div>
      <Header />
      <div className="edition__container">
        <div className="events-area">
          <div className="container">
            <h1>CREATE A NEW ARTICLE</h1>

            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbarClassName="toolbar-class"
              onEditorStateChange={onEditorStateChange}
              placeholder="Enter your story..."
            />
            <div className="group__button">
              <button className="button-save" type="button">
                SAVE
              </button>
              <button className="button-preview" type="button">
                PREVIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteArticle;
