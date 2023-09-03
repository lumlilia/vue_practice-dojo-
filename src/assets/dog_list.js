const DOG_LIST = {
  "en": [
    "affenpinscher","african","airedale","akita","appenzeller","shepherd australian","basenji","beagle","bluetick","borzoi",
    "bouvier","boxer","brabancon","briard","norwegian buhund","boston bulldog","english bulldog","french bulldog","staffordshire bullterrier","australian cattledog",
    "chihuahua","chow","clumber","cockapoo","border collie","coonhound","cardigan corgi","cotondetulear","dachshund","dalmatian",
    "great dane","scottish deerhound","dhole","dingo","doberman","norwegian elkhound","entlebucher","eskimo","lapphund finnish","bichon frise",
    "germanshepherd","italian greyhound","groenendael","havanese","afghan hound","basset hound","blood hound","english hound","ibizan hound","plott hound",
    "walker hound","husky","keeshond","kelpie","komondor","kuvasz","labradoodle","labrador","leonberg","lhasa",
    "malamute","malinois","maltese","bull mastiff","english mastiff","tibetan mastiff","mexicanhairless","bernese mountain","swiss mountain","newfoundland",
    "otterhound","caucasian ovcharka","papillon","pekinese","pembroke","miniature pinscher","pitbull","german pointer","germanlonghair pointer","pomeranian",
    "medium poodle","miniature poodle","standard poodle","toy poodle","pug","puggle","pyrenees","redbone","chesapeake retriever","curly retriever",
    "flatcoated retriever","golden retriever","rhodesian ridgeback","rottweiler","saluki","samoyed","schipperke","giant schnauzer","miniature schnauzer","italian segugio",
    "english setter","gordon setter","irish setter","sharpei","english sheepdog","shetland sheepdog","shiba","shihtzu","blenheim spaniel","brittany spaniel",
    "cocker spaniel","irish spaniel","japanese spaniel","sussex spaniel","welsh spaniel","japanese spitz","english springer","stbernard","american terrier","australian terrier",
    "bedlington terrier","border terrier","cairn terrier","dandie terrier","fox terrier","irish terrier","kerryblue terrier","lakeland terrier","norfolk terrier","norwich terrier",
    "patterdale terrier","russell terrier","scottish terrier","sealyham terrier","silky terrier","tibetan terrier","toy terrier","welsh terrier","westhighland terrier","wheaten terrier",
    "yorkshire terrier","tervuren","vizsla","spanish waterdog","weimaraner","whippet","irish wolfhound"
  ],
  "ja": [
    "アーフェンピンシャー","アフリカンワイルドドッグ","エアデール・テリア","秋田犬","アッペンツェラー・キャトル・ドッグ","オーストラリアン・シェパード","バセンジー","ビーグル","ブルーティック・クーンハウンド","ボルゾイ",
    "ブービエ・デ・アルデンヌ","ボクサー","プチ・ブラバンソン","ブリアード","ノルウェジアン・ブーフント","ボストン・テリア","ブルドッグ","フレンチ・ブルドッグ","スタッフォードシャー・ブル・テリア","オーストラリアン・キャトル・ドッグ",
    "チワワ","チャウチャウ","クランバー・スパニエル","コッカープー","ボーダー・コリー","クーンハウンド","ウェルシュ・コーギー・カーディガン","コトン・ド・テュレアール","ダックスフント","ダルメシアン",
    "グレート・デーン","スコティッシュ・ディアハウンド","ドール","ディンゴ","ドーベルマン","ノルウェジアン・エルクハウンド","エントレブッハー・マウンテン・ドッグ","アメリカン・エスキモー・ドッグ","フィニッシュ・ラップフンド","ビション・フリーゼ",
    "ジャーマン・シェパード","イタリアン・グレイハウンド","ベルジアン・シェパード・ドッグ・グローネンダール","ハバニーズ","アフガン・ハウンド","バセット・ハウンド","ブラッドハウンド","イングリッシュ・フォックスハウンド","イビザン・ハウンド","プロット・ハウンド",
    "ツリーイング・ウォーカー・クーンハウンド","シベリアン・ハスキー","キースホンド","オーストラリアン・ケルピー","コモンドール","クーバース","ラブラドゥードル","ラブラドール・レトリーバー","レオンベルガー","ラサ・アプソ",
    "アラスカン・マラミュート","ベルジアン・シェパード・ドッグ・マリノア","マルチーズ","ブルマスティフ","イングリッシュ・マスティフ","チベタン・マスティフ","メキシカン・ヘアレス・ドッグ","バーニーズ・マウンテン・ドッグ","グレーター・スイス・マウンテン・ドッグ","ニューファンドランド",
    "オッターハウンド","コーカシアン・シェパード・ドッグ","パピヨン","ペキニーズ","ウェルシュ・コーギー・ペンブローク","ミニチュア・ピンシャー","アメリカン・ピット・ブル・テリア","ジャーマン・ショートヘアード・ポインター","ジャーマン・ロングヘアード・ポインター","ポメラニアン",
    "ミディアム・プードル","ミニチュア・プードル","スタンダード・プードル","トイプードル","パグ","パグル","グレート・ピレニーズ","レッドボーン・クーンハウンド","チェサピーク・ベイ・レトリーバー","カーリーコーテッド・レトリーバー",
    "フラットコーテッド・レトリーバー","ゴールデン・レトリーバー","ローデシアン・リッジバック","ロットワイラー","サルーキ","サモエド","スキッパーキ","ジャイアント・シュナウザー","ミニチュア・シュナウザー","セグージョ・イタリアーノ",
    "イングリッシュ・セッター","ゴードン・セッター","アイリッシュ・セッター","シャー・ペイ","オールド・イングリッシュ・シープドッグ","シェットランド・シープドッグ","柴犬","シーズー","キング・チャールズ・スパニエル","ブリタニー・スパニエル",
    "イングリッシュ・コッカー・スパニエル","アイリッシュ・ウォーター・スパニエル","狆","サセックス・スパニエル","ウェルシュ・スプリンガー・スパニエル","日本スピッツ","イングリッシュ・スプリンガー・スパニエル","セント・バーナード","アメリカン・スタッフォードシャー・テリア","オーストラリアン・テリア",
    "ベドリントン・テリア","ボーダー・テリア","ケアーン・テリア","ダンディ・ディンモント・テリア","フォックス・テリア","アイリッシュ・テリア","ケリー・ブルー・テリア","レークランド・テリア","ノーフォーク・テリア","ノーリッチ・テリア",
    "パタデール・テリア","ジャック・ラッセル・テリア","スコティッシュ・テリア","シーリハム・テリア","オーストラリアン・シルキー・テリア","チベタン・テリア","トイ・テリア","ウェルシュ・テリア","ウエスト・ハイランド・ホワイト・テリア","ソフトコーテッド・ウィートン・テリア",
    "ヨークシャー・テリア","ベルジアン・シェパード・ドッグ・タービュレン","ショートヘアード・ハンガリアン・ビズラ","スパニッシュ・ウォーター・ドッグ","ワイマラナー","ウィペット","アイリッシュ・ウルフハウンド"
  ]
}

export default{
  DOG_LIST
};
