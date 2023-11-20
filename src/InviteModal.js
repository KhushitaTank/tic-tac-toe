import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InviteModal() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  const displayMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <div>
      <CopyToClipboard text={() => navigate("/")}>
        <button
          className="inviteButton"
          onClick={() => {
            displayMessage();
          }}>
          Invite a friend
        </button>
      </CopyToClipboard>
      {message && <p className="copyClip">Invite link copied</p>}
    </div>
  );
}
