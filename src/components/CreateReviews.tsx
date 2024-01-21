import ChocolateKuchikomi from "../chocolate_item_kuchikomi_df_sample.json";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HelpIcon from "@mui/icons-material/Help";
import { useState, useEffect } from "react";

export function CreateReviews(props) {
  const itemName = props.itemName;
  const [itemKuchikomi, setItemKuchikomi] = useState(ChocolateKuchikomi);
  const antiSizzle = "しっとり,もちもち,プレミアム,甘い";
  const keywordsList = antiSizzle.split(",");
  const [clickedButtons, setClickedButtons] = useState([]);
  const initialStates = Object.fromEntries(
    keywordsList.map((key) => [key, false])
  );
  const [selectedButtons, setSelectedButtons] = useState(initialStates);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = (value) => {
    // console.log(`ボタンがクリックされました: ${value}`);

    // クリックされたボタンの情報を配列に追加または削除
    if (clickedButtons.includes(value)) {
      // ボタンがすでにクリックされている場合、削除
      setClickedButtons((prevButtons) =>
        prevButtons.filter((button) => button !== value)
      );
    } else {
      // ボタンがクリックされていない場合、追加
      setClickedButtons((prevButtons) => [...prevButtons, value]);
    }

    setSelectedButtons((prevSelectedButtons) => {
      const newSelectedButtons = { ...prevSelectedButtons };
      newSelectedButtons[value] = !newSelectedButtons[value];

      return newSelectedButtons;
    });
  };

  useEffect(() => {
    const filteredList = ChocolateKuchikomi.filter((item) => {
      const kuchikomiValue = item.kuchikomi;
      return clickedButtons.some((keyword) => kuchikomiValue.includes(keyword));
    });
    console.log(clickedButtons);

    // フィルタリングされたリストをセット
    if (clickedButtons.length !== 0) {
      setItemKuchikomi(filteredList);
    } else {
      setItemKuchikomi(ChocolateKuchikomi);
    }
  }, [clickedButtons]); // clickedButtonsが変更されたときだけ実行される

  return (
    <>
      <div className="flex flex-col mb-24">
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <h2 className="text-md lg:text-lg font-bold">タグワード</h2>
            <HelpIcon
              className="ml-1"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            />
          </div>

          {showTooltip && (
            <div className="bg-gray-50 text-black rounded p-2 mb-2">
              <LightbulbIcon />
              <span className="">タグを押すと口コミが絞れる</span>
            </div>
          )}

          <div className="">
            {keywordsList.map((word) => (
              <button
                key={word}
                className={`bg-${
                  selectedButtons[word]
                    ? "lime-500 text-white border border-lime-500"
                    : "white text-black border border-gray-300"
                } p-2 rounded-3xl shadow-sm hover:shadow-lg mx-2 my-2 font-semibold`}
                onClick={() => handleButtonClick(word)}
              >
                <LocalOfferIcon className="mr-2" />
                {word}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-md lg:text-lg font-bold my-2">クチコミ</h2>
        {itemKuchikomi.map((item) => (
          <div className="bg-white p-4 my-2 py-2 rounded-2xl shadow-md">
            <p className="text-xl mb-1">⭐️ {item.star_value}</p>
            <p>{item.kuchikomi}</p>
          </div>
        ))}
      </div>
    </>
  );
}
