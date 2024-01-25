import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CreateTable } from "./CreateTable";
import { CreateReviews } from "./CreateReviews";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import NewItemInfo from "../new_items_info.json";
import NewItemKuchikomi from "../new_items_kuchikomi.json";

export function ResultPage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const params = useParams();

  // 商品限定フィルター
  const itemInfo = NewItemInfo.filter(
    (item) =>
      // 検索文字が含まれている商品に限
      item.item_name === params.info
  );
  console.log(itemInfo[0]);

  const { item_name, total_value, item_info, url, image, tag_word, ...values } =
    itemInfo[0];
  const valuesSum =
    itemInfo[0]["★1"] +
    itemInfo[0]["★2"] +
    itemInfo[0]["★3"] +
    itemInfo[0]["★4"] +
    itemInfo[0]["★5"] +
    itemInfo[0]["★6"] +
    itemInfo[0]["★7"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo({ top: 0 });
    };

    unlisten();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        {/*　画像とテキストコンポネント */}

        <div className="fixed flex flex-row justify-around bottom-0 md:top-0 md:bottom-auto left-0 right-0">
          {/* ホームボタン */}
          <button
            onClick={() => navigate("/")}
            className="text-black bg-lime-200 w-1/2 border border-white flex justify-center space-x-2 p-1.5"
          >
            <HomeIcon
              style={{
                fontSize: "2rem",
              }}
            />
            {/* 適切なアイコンコンポーネントを表示 */}
            <span className="text-black text-2xl">Home</span>
          </button>

          {/* 画面トップ */}
          <button
            onClick={scrollToTop}
            className="text-black bg-lime-200 w-1/2 border border-white flex justify-center space-x-2 p-1.5"
          >
            <KeyboardDoubleArrowUpIcon
              style={{
                fontSize: "2rem",
              }}
            />
            {/* 適切なアイコンコンポーネントを表示 */}
            <span className="text-black text-2xl pr-3">Top</span>
          </button>
        </div>

        <p className="mt-8 md:mt-24 text-3xl font-bold">商品情報</p>

        <div className="flex flex-col my-4 mx-4 w-5/6">
          <h1 className="mt-2 md:mt-8 text-xl font-bold text-center">
            {itemInfo[0].item_name}
          </h1>
          <hr className="border-t-2 border-lime-400 w-full pt-4" />
        </div>

        <div className="flex flex-col sm:flex-row w-5/6">
          <div className="flex flex-col my-4 mx-2 sm:w-1/2">
            <div className="flex justify-center">
              <img src={itemInfo[0].image} alt="Image" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col my-4 sm:my-1 mx-1 sm:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-md lg:text-lg font-bold mt-2">商品紹介</h2>
              <p className="text-sm lg:text-lg ">{itemInfo[0].item_info}</p>
              <h2 className="text-md lg:text-lg font-bold mt-4">
                詳細　
                <span className="text-md lg:text-lg mt-4">
                  <a
                    href={itemInfo[0].url}
                    target=""
                    rel="noopener noreferrer"
                    className="font-medium text-blue-500 hover:text-blue-700 hover:font-bold hover:underline underline-offset-4"
                  >
                    もぐナビサイト
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-4 mx-4 w-5/6">
          <div className="flex flex-row justify-center">
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={!isButtonClicked}
              className={`${isButtonClicked ? "bg-gray-200" : "bg-lime-500"} ${
                isButtonClicked ? "text-black" : "text-white"
              } font-bold text-lg rounded-t-xl rounded-b-none w-1/2 p-2 mr-1`}
            >
              評価
            </button>
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={isButtonClicked}
              className={`${isButtonClicked ? "bg-lime-500" : "bg-gray-200"} ${
                isButtonClicked ? "text-white" : "text-black"
              } font-bold text-lg rounded-t-xl rounded-b-none w-1/2 p-2 ml-1`}
            >
              レビュー
            </button>
          </div>

          <hr className="border-t-2 border-lime-400 w-full" />
        </div>

        <div className="flex flex-col my-4 mx-4 w-5/6">
          {!isButtonClicked ? (
            <div className="flex flex-col">
              <div className="flex justify-center items-end">
                <p className="text-5xl text-center whitespace-pre">
                  ⭐️ {itemInfo[0].total_value}
                </p>
                <p className="text-3xl whitespace-pre">({valuesSum}件)</p>
              </div>

              <CreateTable {...values} />
            </div>
          ) : (
            <CreateReviews itemName={itemInfo[0].item_name} />
          )}
        </div>

        {/*<div className="flex flex-col my-4 mx-4 w-5/6">
          <h1 className="mt-8 text-lg font-bold text-center">評価</h1>
          <hr className="border-t-2 border-lime-400 w-full pt-4" />
          <div className="flex flex-col">
            <div className="flex justify-center items-end">
              <p className="text-5xl text-center whitespace-pre">⭐️ 5.7</p>
              <p className="text-3xl whitespace-pre">({valuesSum}件)</p>
            </div>

            <CreateTable {...values} />
          </div>
        </div>

        <div className="flex flex-col my-4 mx-4 w-5/6">
          <h1 className="mt-8 text-lg font-bold text-center">口コミ</h1>
          <hr className="border-t-2 border-lime-400 w-full pt-4" />
          <CreateReviews itemName={itemInfo[0].item_name} />
        </div>
            */}
      </div>
    </>
  );
}
