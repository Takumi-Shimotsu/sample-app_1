import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import React, { useEffect } from "react";

export function TopPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/search");

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo({ top: 0 });
    };

    unlisten();
  }, []);

  return (
    <>
      <div className="object-center">
        <h1 className="text-5xl text-center mt-40">システム</h1>
      </div>
      <div className="flex items-center justify-center h-screen">
        <button
          type="button"
          className="bg-lime-500 text-white font-bold px-16 py-4 text-2xl mb-96 rounded-xl hover:bg-lime-400 hover:shadow-lg"
          onClick={handleClick}
        >
          検索
        </button>
      </div>
    </>
  );
}
