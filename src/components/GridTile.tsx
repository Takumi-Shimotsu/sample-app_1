import NewItemInfo from "../new_items_info.json";
import NewItemKuchikomi from "../new_items_kuchikomi.json";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export function GridTile(props) {
  const navigate = useNavigate();

  // タイルをランダムに出す
  /*const shuffleArray = (array) => {
    const shuffled = [...array]; // 元の配列のコピーを作成

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 要素の入れ替え
    }

    return shuffled;
  };*/

  // シャッフルされた配列を取得
  //const shuffledNewItemInfo = shuffleArray(NewItemInfo);

  // 商品限定フィルター
  const searchWord = NewItemInfo.filter((item) =>
    // 検索文字が含まれている商品に限定
    // item.item_name.includes(props.word)
    {
      // カタカナもしくはひらがなの文字列にマッチする正規表現
      const regex = new RegExp(
        props.word.replace(/[ぁ-んァ-ン]/g, (s) => {
          const katakana = String.fromCharCode(
            s.charCodeAt(0) + (s.charCodeAt(0) < 0x30a0 ? 0x60 : 0)
          );
          return `[${s}${katakana}]`;
        }),
        "i" // 'i' フラグは大文字小文字を区別しない
      );

      return regex.test(item.item_name);
    }
  );
  // console.log(chocolate);

  return (
    <div>
      <h1 className="text-center mt-5 text-2xl">
        検索結果：{searchWord.length}件
      </h1>
      <hr />
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-8">
          {searchWord.map((item) => (
            <button
              className="bg-white p-4 text-black rounded-xl shadow-md hover:shadow-2xl"
              onClick={() => navigate(`result/${item.item_name}`)}
            >
              <p className="text-xs">{item.item_name}</p>
              <hr className="h-0.5"></hr>
              <div className="flex justify-center items-center">
                <img src={item.image} className="mt-2 object-right w-4/6"></img>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
