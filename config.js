/* ぺりもっちチェックイン — 設定ファイル
 *
 * ここは空のままでも動きます（その場合はデモ表示・端末内保存）。
 * 値を入れた項目だけが本番モードに切り替わります。
 * 2つは独立しているので、片方だけ先に設定しても構いません。
 */
window.PERI_CONFIG = {

  // ① LINE Developers → LIFF タブ に表示される LIFF ID
  //    例: "2006123456-AbCdEfGh"
  //    空のままだと「あなた」名義のデモ表示になります。
  liffId: "2011627382-r9CDGTVf",

  // ② Firebase コンソール → プロジェクトの設定 → マイアプリ（ウェブ）
  //    の firebaseConfig をそのまま貼り付けてください。
  //    空のままだと投稿はこの端末のブラウザにだけ保存されます。
  //
  //    ※ ここに書く値は公開されて問題ないものです（ブラウザに配られる前提の値）。
  //       アクセス制御は Firestore のセキュリティルール側で行います。
  firebase: {
    // apiKey: "...",
    // authDomain: "xxx.firebaseapp.com",
    // projectId: "",
    // storageBucket: "xxx.appspot.com",
    // messagingSenderId: "...",
    // appId: "..."
  }
};
