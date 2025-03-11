"use client";

import { SetStateAction, useState } from "react";

const usePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [url, setUrl] = useState("");
  const handleChangeURL = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUrl(e.target.value);
  };

  const handleClickPDF = async () => {
    try {
      const currentUrl = window.location.href;
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: currentUrl }),
      });

      if (!response.ok) {
        throw new Error("PDF生成に失敗しました");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "document.pdf";
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      alert("エラーが発生しました");
    }
  };

  return {
    handleClickPDF,
    handleChangeURL,
  };
};
export default usePage;
