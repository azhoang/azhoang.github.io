import React from "react";

export default function BlogCommentForm() {
  return (
    <>
      <form className="comment-form">
        <textarea
          id="commentForm"
          className="textarea textarea--white form-control"
          placeholder="Click to Comment..."
          rows={1}
          defaultValue={""}
          disabled
        />
        <button type="submit" className="btn" disabled>
          <i className="fa-solid fa-paper-plane fa-fw" />
        </button>
        <div className="dropdown dropup">
          <i
            className="fa-regular fa-face-smile-beam fa-fw"
            id="dropdownEmoji"
            data-toggle="dropdown"
            aria-haspopup="true"
          />
          <div
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="dropdownEmoji"
          >
            <div className="emoji-wrap">
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-laughing.svg"
                title=":laughing:"
                alt="laughing"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-happy-2.svg"
                title=":happy 2:"
                alt="happy 2"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-crazy.svg"
                title=":crazy:"
                alt="crazy"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-bad.svg"
                title=":bad:"
                alt="bad"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-angry.svg"
                title=":angry:"
                alt="angry"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-happy.svg"
                title="happy"
                alt="happy"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-thinking.svg"
                title=":thinking:"
                alt="thinking"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-sad.svg"
                title=":sad:"
                alt="sad"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-pressure.svg"
                title=":pressure:"
                alt="pressure"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-in-love.svg"
                title=":in love:"
                alt="in love"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-nerd.svg"
                title=":laughing:"
                alt="nerd"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-happy-3.svg"
                title=":happy 3:"
                alt="happy 3"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-shocked.svg"
                title=":shocked:"
                alt="shocked"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-wink.svg"
                title=":wink:"
                alt="wink"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-sweating.svg"
                title=":sweating:"
                alt="sweating"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-shocked-2.svg"
                title=":shocked 2:"
                alt="shocked 2"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-shocked-3.svg"
                title=":shocked 3:"
                alt="shocked 3"
              />
              <img
                className="emoji"
                src="../assets/icons/emoji/emoji-sad-2.svg"
                title=":sad 2:"
                alt="sad 2"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
