import React, { useState } from "react";
import { Button } from "./button"; // adjust import path
import { Mail } from "lucide-react";

const email = "dongjunathahm@gmail.com";

export default function EmailCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300 ${
          copied ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        role="alert"
        aria-live="assertive"
      >
        Copied to clipboard
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={handleCopy}
        aria-label="Copy email address to clipboard"
      >
        <Mail className="h-4 w-4" />
      </Button>
    </>
  );
}
