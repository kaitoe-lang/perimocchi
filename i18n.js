/* ぺりもっちチェックイン — 表示文言
 *
 * 言語を直したいときはこのファイルだけを編集してください（アプリ本体は触らなくて大丈夫です）。
 * 構造はどの言語も同じです。ja の行を見ながら対応する行を直すのが安全です。
 * {mood} {name} {n} は値が差し込まれる場所なので、消さずに残してください。
 */
window.PERI_I18N = {

/* ===================== 日本語 ===================== */
ja: {
  mascot: "ぺりもっち",
  langLabel: "ことば", langNote: "LINEの言語設定に合わせて自動で切り替わります。ここで変えることもできます。",
  tabs: { home:"ホーム", feed:"みんな", me:"じぶん" },
  mood: { 5:"げんき", 4:"いいかんじ", 3:"ふつう", 2:"しんどい", 1:"つらい" },
  say: {
    greet:"おはよう。今日の気分、どんな感じ？",
    m5:"いいね、その調子。明るい話をふくろいっぱいに入れてきたよ。",
    m4:"よかった。読みやすいものを3つ、ふくろから出すね。",
    m3:"ふつうの日も、ちゃんといい日。軽めのものを選んでおいたよ。",
    m2:"しんどいね。とりあえず魚、持ってきたよ。今日はゆっくりめの話にしたから。",
    m1:"話してくれてありがとう。今日はぼくも一緒にのびてる。何もしなくていい日にしよう。",
    low:"ここ数日、しんどい日が続いてるみたいだね。無理に元気を出さなくて大丈夫。とりあえず魚、持ってきたよ。",
    quiet:"わかった。ぼくもここで休んでるね。おなかすいたら言って。",
    hello:"はじめまして。ぼくはぺりもっち。よかったら、どのチームか教えて。"
  },
  home: {
    hint1:"ワンタップだけ。あとから変えられます。", hint2:"タップし直せば、今日の記録を変えられます。",
    forYou:"今日のあなたに",
    noteHigh:"元気な日なので、明るい話題を多めにしています",
    noteMid:"軽めの話題を中心に選んでいます",
    noteLow:"今日はゆっくり読める、静かな話題を多めにしています",
    newsDisclaimer:"※ 記事はすべて架空のサンプルです。本番ではニュースAPIから収集し、AIがほっこり度の判定・要約・不適切な記事の除外を行う想定です。",
    ctaEyebrow:"よみおわったら", ctaTitle:"あなたの「いいこと」も、ぺりもっちのふくろに入れてみませんか？",
    ctaTopic:"今日のお題：", ctaButton:"今日のいいことを書く",
    consult:"産業医・人事に相談する", later:"今はそっとしておいて",
    medical:"このアプリは医療的な診断や助言を行うものではありません。相談内容は、あなたが同意した場合にのみ担当者に共有されます。"
  },
  feed: {
    topicEyebrow:"きょうのお題", write:"書いてみる", title:"みんなのいいこと", sub:"社内タイムライン",
    shared:"※ 投稿は社内で共有されています。", dummy:"※ 表示されている氏名・部署・投稿はすべて架空のダミーデータです。"
  },
  compose: {
    title:"今日のいいこと", close:"とじる",
    placeholder:"一言でどうぞ。「エレベーターで知らない人にドアを押さえてもらった」くらいで十分です。",
    useTopic:"お題「{topic}」で書く", addPhoto:"写真をつける", submit:"投稿する", photo:"写真",
    warnStrong:"顧客名・案件名・社外秘は書かないでください。",
    warnBody:"投稿は社内タイムライン（全員）に表示されます。気分スコアとは紐付きません。"
  },
  me: {
    chartTitle:"気分の推移", chartReal:"あなたの記録（{n}回）", chartSample:"サンプル履歴（{n}回分）",
    legendHigh:"5 = げんき", legendLow:"1 = つらい",
    avg:"直近5回の平均", today:"今日の記録", notYet:"まだです",
    privacy:"このグラフは<strong>あなたにしか見えません</strong>。気分の記録は共有データベースに送らず、この端末の中にだけ保存しています。",
    tasteTitle:"あなたの好み", tasteSub:"お気に入りから学習",
    tasteNote:"気分スコアとお気に入りジャンルの相関を定期的に学習し、配信するニュースの出し分けに反映します。",
    favTitle:"お気に入り", favCount:"{n}件",
    favEmpty:"まだありません。ホームのニュースの♡を押すと、ぺりもっちのふくろに貯まっていきます。",
    nameTitle:"タイムラインに出るなまえ", nameButton:"なまえを変える",
    nameNote:"これから書く投稿に反映されます。本名でなくて構いません。",
    whoTitle:"誰に何が見えるか",
    whoYou:"あなた", whoYouV:"自分の気分ログ（この端末の中だけに保存）、お気に入り、投稿履歴、ぺりもっちからの個別の声かけ",
    whoMgr:"マネージャー", whoMgrV:"チーム平均の推移と、「ケアが必要かもしれない人が◯名」という匿名の件数のみ。<strong>個人名・個人のスコアは表示されません。</strong>",
    whoHr:"人事・産業医", whoHrV:"あなたが同意のボタンを押した場合に限り、個別の相談としてつながります。",
    medical:"このアプリは体調や気分の記録を助けるものであり、医療的な診断・助言を行うものではありません。つらさが続くときは産業医や医療機関にご相談ください。"
  },
  mgr: {
    bannerTitle:"マネージャーに見えている画面",
    bannerBody:"個人名・個人ごとのスコア・誰がどの投稿をしたかは、この画面には一切表示されません。表示されるのは集計値だけです。",
    back:"社員の画面に戻る", teamTitle:"チームの元気度", teamSub:"カスタマーサクセス / 9名",
    legend1:"週平均（5段階）", legend2:"直近8週", avgWeek:"今週の平均", vsLast:"先週比",
    below:"今週は注意ライン {t} を下回っています", within:"注意ラインの範囲内です", thresholdLabel:"注意ライン {t}",
    sourceReal:"実データ（{n}日分）", sourceSample:"サンプル表示",
    minNote:"1日に{m}名以上がチェックインした日だけ集計します。人数が少ないと個人が推測できるためです。",
    noData:"実データはまだ{m}名分たまっていません。下のグラフはサンプルです。",
    anon:"この数字は加算された合計だけで、誰が何点かはデータベースに存在しません。",
    careTitle:"ケアの目安", careChip:"ケアが必要かもしれない人：{n}名",
    careNote:"3日以上続けて低いスコアが記録された人数です。<strong>誰であるかは表示されません。</strong>本人には、ぺりもっちから直接そっと声をかけています。",
    a1:"1on1の頻度を一時的に上げる（全員に対して、名指しせずに）",
    a2:"今週の締め切りのうち、後ろ倒しできるものを探す",
    a3:"産業医面談の案内を、チーム全体にあらためて共有する",
    notShownTitle:"この画面に出ないもの",
    n1:"誰がどのスコアを付けたか", n2:"個人ごとの気分の推移グラフ",
    n3:"投稿と気分スコアの紐付け", n4:"チーム人数が5名未満のときの集計値（個人が特定できるため非表示）"
  },
  register: {
    nameLabel:"タイムラインに出るなまえ", namePlaceholder:"ぺりもっち好き",
    nameNote:"初期値はLINEの表示名です。<strong>本名でなくて構いません。</strong>ニックネームをおすすめします。あとから変えられます。",
    teamLabel:"チーム（選ぶとはじまります）",
    note:"なまえとチームは、タイムラインの表示にだけ使います。気分の記録には紐付きません。"
  },
  depts: ["マーケティング","セールス","カスタマーサクセス","プロダクト","コーポレート","その他"],
  genres: { animal:"動物", moving:"感動", local:"地域", life:"くらし" },
  topic: "今日のランチ自慢",
  you: "あなた", anon: "名無し",
  ago: { now:"たった今", min:"{n}分前", hour:"{n}時間前", yesterday:"昨日", day:"{n}日前" },
  toast: {
    recorded:"記録しました。{mood}な一日になりますように。", posted:"投稿しました",
    writeSomething:"一言だけでも書いてみてください", welcome:"ようこそ、{name}さん",
    renamed:"なまえを変えました", enterName:"なまえを入れてください",
    later:"わかった。またいつでも。", consult:"あなたが同意した場合にだけ、産業医につながります",
    postFailed:"投稿できませんでした。通信を確認してください"
  },
  chart: { today:"今日", ariaPersonal:"自分の気分の推移。縦軸は1（つらい）から5（げんき）。", ariaTeam:"チーム平均の元気度の週次推移。縦軸は1から5。" },
  alt: {
    front:"正面を向いて立っているぺりもっち", side:"くちばしのふくろを見せているぺりもっち",
    shout:"大きな口を開けてよろこんでいるぺりもっち", fish:"ふくろに魚を入れているぺりもっち",
    blank:"ぼんやりしているぺりもっち", back:"背中を向けているぺりもっち",
    walk:"ぺたぺた歩いているぺりもっち", tired:"うつぶせで休んでいるぺりもっち"
  },
  news: [
    { g:"animal", t:"駅で迷子になった柴犬、駅員が3時間見守り 飼い主と再会",
      s:"改札の内側でじっと座り込んでいた柴犬を、駅員が交代で見守り。夕方に息を切らして駆けつけた飼い主のもとへ戻りました。" },
    { g:"local", t:"閉店予定だった銭湯、常連客のクラウドファンディングで存続が決定",
      s:"築58年、番台のタイルもそのまま。目標額は公開から11日で到達し、支援者の8割が半径2km以内の住民でした。" },
    { g:"life", t:"小学生が育てたひまわり、種になって500km先の学校へ",
      s:"6年生が花壇で採った種を封筒に小分けし、交流のある学校へ郵送。来年は向こうの校庭で咲く予定です。" },
    { g:"moving", t:"台南の食堂、22年続く「お腹がすいた人はお代いりません」の貼り紙",
      s:"店主いわく「うちも昔、同じことをしてもらった」。張り紙は色あせるたびに、新しい紙に書き直されています。" },
    { g:"animal", t:"引退した競走馬、保護牧場でセラピー馬に 週末は子どもたちと過ごす",
      s:"走ることをやめた後の10年をどう過ごすか。ブラシをかけられている間、ずっと目を細めているそうです。" },
    { g:"life", t:"夜勤明けのパン屋が焼く「6時のパン」、無言で並ぶ常連たち",
      s:"開店前の6時、看板もないのに5人ほどが待っています。誰も話しかけず、焼き上がりの匂いだけが合図です。" }
  ],
  posts: [
    { dept:"カスタマーサクセス", text:"近所の猫が、半年かけてやっと撫でさせてくれました。今日はもう勝った気分でいます。" },
    { dept:"プロダクト（台北）", text:"日本チームにパイナップルケーキを送りました。会議前の3分、全員が無言で食べていたのが面白かったです。" },
    { dept:"セールス", text:"半年追いかけていた案件で、担当の方から「あなたでよかった」と言われました。受注はまだですが、今日はそれで十分です。" },
    { dept:"マーケティング", text:"今日のランチ自慢：会社の下の定食屋、日替わりが唐揚げの日だけ10分早く出るのがコツです。" }
  ]
},

/* ===================== 繁體中文 ===================== */
zh: {
  mascot: "佩里",
  langLabel: "語言", langNote: "會依照 LINE 的語言設定自動切換，也可以在這裡自己選。",
  tabs: { home:"首頁", feed:"大家", me:"自己" },
  mood: { 5:"很好", 4:"還不錯", 3:"普通", 2:"有點累", 1:"很難受" },
  say: {
    greet:"早安。今天心情怎麼樣？",
    m5:"很好，就是這個節奏。我在袋子裡裝滿了開心的消息。",
    m4:"太好了。我從袋子裡挑了三則好讀的給你。",
    m3:"普通的日子，也是好好的一天。我選了輕鬆一點的。",
    m2:"有點累吧。先給你一條魚。今天我挑了慢一點的話題。",
    m1:"謝謝你願意說。今天我也陪你一起躺著，什麼都不用做。",
    low:"這幾天好像一直不太好受。不用勉強打起精神。先給你一條魚。",
    quiet:"好，我就在這裡陪著。肚子餓了再跟我說。",
    hello:"初次見面，我是佩里。方便的話，告訴我你在哪個團隊。"
  },
  home: {
    hint1:"只要點一下，之後也可以改。", hint2:"再點一次，就能改今天的記錄。",
    forYou:"今天給你的",
    noteHigh:"今天狀態不錯，所以多放了明亮的話題",
    noteMid:"以輕鬆的話題為主",
    noteLow:"今天多放了可以慢慢讀的、安靜的話題",
    newsDisclaimer:"※ 這些報導都是虛構的範例。正式版本會從新聞 API 收集，由 AI 判斷溫暖程度、摘要並排除不適當的內容。",
    ctaEyebrow:"讀完之後", ctaTitle:"要不要也把你的「好事」放進佩里的袋子裡？",
    ctaTopic:"今天的主題：", ctaButton:"寫下今天的好事",
    consult:"聯絡職醫或人資", later:"現在先讓我靜一靜",
    medical:"這個應用程式不提供醫療診斷或建議。只有在你同意的情況下，諮詢內容才會分享給負責人員。"
  },
  feed: {
    topicEyebrow:"今天的主題", write:"寫寫看", title:"大家的好事", sub:"公司內部動態",
    shared:"※ 貼文會分享給公司內部的同事。", dummy:"※ 這裡顯示的姓名、部門、貼文全部都是虛構的範例資料。"
  },
  compose: {
    title:"今天的好事", close:"關閉",
    placeholder:"一句話就好。「在電梯裡有陌生人幫我按住門」這種程度就很夠了。",
    useTopic:"用主題「{topic}」來寫", addPhoto:"加上照片", submit:"發布", photo:"照片",
    warnStrong:"請不要寫客戶名稱、專案名稱或公司機密。",
    warnBody:"貼文會顯示在公司內部動態（所有人都看得到）。不會和心情分數連結。"
  },
  me: {
    chartTitle:"心情的變化", chartReal:"你的記錄（{n} 次）", chartSample:"範例記錄（{n} 次）",
    legendHigh:"5 = 很好", legendLow:"1 = 很難受",
    avg:"最近 5 次的平均", today:"今天的記錄", notYet:"還沒記錄",
    privacy:"這張圖<strong>只有你看得到</strong>。心情記錄不會送到共用資料庫，只保存在這台裝置裡。",
    tasteTitle:"你的偏好", tasteSub:"從收藏中學習",
    tasteNote:"系統會定期學習心情分數與收藏類型的關聯，反映在推送的內容上。",
    favTitle:"收藏", favCount:"{n} 則",
    favEmpty:"還沒有收藏。在首頁的報導上按♡，就會存進佩里的袋子裡。",
    nameTitle:"動態上顯示的名字", nameButton:"更改名字",
    nameNote:"會套用在之後的貼文。不用真名也可以。",
    whoTitle:"誰看得到什麼",
    whoYou:"你自己", whoYouV:"自己的心情記錄（只存在這台裝置裡）、收藏、貼文記錄、佩里的個別關心",
    whoMgr:"主管", whoMgrV:"只有團隊平均的變化，以及「可能需要關心的人有◯位」這樣的匿名人數。<strong>不會顯示姓名和個人分數。</strong>",
    whoHr:"人資・職醫", whoHrV:"只有在你按下同意之後，才會以個別諮詢的方式接上。",
    medical:"這個應用程式只是幫助你記錄身體狀況和心情，不提供醫療診斷或建議。如果難受的狀態持續，請諮詢職醫或醫療機構。"
  },
  mgr: {
    bannerTitle:"主管看到的畫面",
    bannerBody:"姓名、個人分數、誰發了哪篇貼文，在這個畫面上完全不會顯示。只會顯示統計數值。",
    back:"回到員工畫面", teamTitle:"團隊的活力", teamSub:"客戶成功 / 9 人",
    legend1:"週平均（5 階段）", legend2:"最近 8 週", avgWeek:"本週平均", vsLast:"與上週相比",
    below:"本週低於注意線 {t}", within:"在注意線的範圍內", thresholdLabel:"注意線 {t}",
    sourceReal:"實際數據（{n} 天）", sourceSample:"範例顯示",
    minNote:"只統計當天有 {m} 人以上打卡的日子。人數太少會被推測出是誰。",
    noData:"實際數據還沒累積到 {m} 人。下面的圖是範例。",
    anon:"這些數字只是加總後的結果，誰打了幾分並不存在於資料庫裡。",
    careTitle:"關心的參考", careChip:"可能需要關心的人：{n} 位",
    careNote:"連續 3 天以上記錄到偏低分數的人數。<strong>不會顯示是誰。</strong>佩里已經直接、輕輕地跟本人打過招呼了。",
    a1:"暫時提高 1on1 的頻率（對所有人，不指名）",
    a2:"看看這週的截止日有哪些可以往後延",
    a3:"再次向整個團隊說明職醫面談的管道",
    notShownTitle:"這個畫面不會出現的東西",
    n1:"誰打了哪個分數", n2:"個人的心情變化圖",
    n3:"貼文和心情分數的連結", n4:"團隊人數少於 5 人時的統計值（因為可能識別出個人，所以不顯示）"
  },
  register: {
    nameLabel:"動態上顯示的名字", namePlaceholder:"喜歡佩里",
    nameNote:"預設是你的 LINE 顯示名稱。<strong>不用真名也可以</strong>，建議用暱稱。之後也能改。",
    teamLabel:"團隊（選好就開始）",
    note:"名字和團隊只會用在動態的顯示上，不會和心情記錄連結。"
  },
  depts: ["行銷","業務","客戶成功","產品","管理部門","其他"],
  genres: { animal:"動物", moving:"感動", local:"在地", life:"生活" },
  topic: "今天的午餐",
  you: "你", anon: "無名氏",
  ago: { now:"剛剛", min:"{n} 分鐘前", hour:"{n} 小時前", yesterday:"昨天", day:"{n} 天前" },
  toast: {
    recorded:"記錄好了。希望今天是{mood}的一天。", posted:"已發布",
    writeSomething:"寫一句話也可以", welcome:"歡迎你，{name}",
    renamed:"名字改好了", enterName:"請輸入名字",
    later:"好，隨時都可以找我。", consult:"只有在你同意之後，才會接上職醫",
    postFailed:"發布失敗，請確認網路連線"
  },
  chart: { today:"今天", ariaPersonal:"自己的心情變化。縱軸從 1（很難受）到 5（很好）。", ariaTeam:"團隊平均活力的每週變化。縱軸 1 到 5。" },
  alt: {
    front:"正面站著的佩里", side:"展示嘴袋的佩里", shout:"張大嘴巴很開心的佩里",
    fish:"把魚放進袋子裡的佩里", blank:"發呆中的佩里", back:"背對著的佩里",
    walk:"啪噠啪噠走路的佩里", tired:"趴著休息的佩里"
  },
  news: [
    { g:"animal", t:"柴犬在車站迷路，站務員輪流看顧三小時後與飼主重逢",
      s:"牠一直乖乖坐在閘門裡側，站務員輪班陪著。傍晚時，氣喘吁吁趕來的飼主終於把牠接回家。" },
    { g:"local", t:"原本要結束營業的澡堂，靠常客募資決定繼續經營",
      s:"屋齡 58 年，櫃台的磁磚也維持原樣。募資目標在公開後第 11 天達成，八成的贊助者住在半徑兩公里內。" },
    { g:"life", t:"小學生種的向日葵，化成種子送到 500 公里外的學校",
      s:"六年級的學生把花圃採下的種子分裝進信封，寄給交流的學校。明年就會在那邊的操場開花。" },
    { g:"moving", t:"台南的小吃店，22 年來一直貼著「肚子餓的人不用付錢」",
      s:"老闆說：「以前也有人這樣對我。」那張紙每次褪色，就會重新寫一張新的貼上去。" },
    { g:"animal", t:"退休的賽馬成為療癒馬，週末和孩子們一起度過",
      s:"不再奔跑之後的十年要怎麼過。聽說被刷毛的時候，牠總是瞇著眼睛。" },
    { g:"life", t:"大夜班結束後烤的「六點的麵包」，常客安靜地排著隊",
      s:"開店前的六點，明明沒有招牌，卻已經有五個人在等。沒有人說話，出爐的香味就是信號。" }
  ],
  posts: [
    { dept:"客戶成功", text:"鄰居家的貓，花了半年終於願意讓我摸了。今天已經覺得自己贏了。" },
    { dept:"產品（台北）", text:"寄了鳳梨酥給日本團隊。開會前的三分鐘，大家安靜地吃著，畫面很有趣。" },
    { dept:"業務", text:"追了半年的案子，窗口跟我說「還好是你負責」。雖然還沒成交，但今天這樣就夠了。" },
    { dept:"行銷", text:"今天的午餐：公司樓下的定食店，只有炸雞的日子要提早十分鐘去才是訣竅。" }
  ]
},

/* ===================== English ===================== */
en: {
  mascot: "Peri",
  langLabel: "Language", langNote: "Follows your LINE language setting automatically. You can also change it here.",
  tabs: { home:"Home", feed:"Everyone", me:"You" },
  mood: { 5:"Great", 4:"Pretty good", 3:"Okay", 2:"Rough", 1:"Really hard" },
  say: {
    greet:"Morning. How are you feeling today?",
    m5:"Nice, keep it going. I filled my pouch with bright stories for you.",
    m4:"Good to hear. Here are three easy reads from my pouch.",
    m3:"An ordinary day is still a good day. I picked some light ones.",
    m2:"That's rough. Here, have a fish. I kept today's stories slow and quiet.",
    m1:"Thank you for telling me. I'll lie down here with you. Today you don't have to do anything.",
    low:"Looks like it's been hard for a few days now. You don't have to cheer up. Here, have a fish.",
    quiet:"Okay. I'll rest here with you. Just say the word if you get hungry.",
    hello:"Hi, I'm Peri. If you don't mind, tell me which team you're on."
  },
  home: {
    hint1:"One tap is enough. You can change it later.", hint2:"Tap again to change today's entry.",
    forYou:"For you today",
    noteHigh:"You're doing well, so I picked brighter stories",
    noteMid:"Mostly light reading today",
    noteLow:"Quieter stories today, the kind you can read slowly",
    newsDisclaimer:"These articles are all fictional samples. In production they'd be collected from a news API, with AI judging warmth, summarising, and filtering out anything unsuitable.",
    ctaEyebrow:"Now that you've read", ctaTitle:"Want to put your own good thing into Peri's pouch?",
    ctaTopic:"Today's prompt: ", ctaButton:"Write today's good thing",
    consult:"Talk to HR or occupational health", later:"Just leave me be for now",
    medical:"This app does not provide medical diagnosis or advice. What you share is passed on only if you agree to it."
  },
  feed: {
    topicEyebrow:"Today's prompt", write:"Give it a go", title:"Everyone's good things", sub:"Company timeline",
    shared:"Posts are shared with everyone in the company.", dummy:"All names, teams and posts shown here are fictional sample data."
  },
  compose: {
    title:"Today's good thing", close:"Close",
    placeholder:"One line is plenty. Something like \"a stranger held the lift door for me\" works.",
    useTopic:"Write about \"{topic}\"", addPhoto:"Add a photo", submit:"Post", photo:"Photo",
    warnStrong:"Please don't include client names, deal names, or anything confidential.",
    warnBody:"Your post appears on the company timeline, visible to everyone. It is never linked to your mood score."
  },
  me: {
    chartTitle:"Your mood over time", chartReal:"Your entries ({n})", chartSample:"Sample history ({n} entries)",
    legendHigh:"5 = Great", legendLow:"1 = Really hard",
    avg:"Average of last 5", today:"Today", notYet:"Not yet",
    privacy:"This chart is <strong>visible only to you</strong>. Mood entries are never sent to the shared database — they stay on this device.",
    tasteTitle:"What you like", tasteSub:"Learned from your favourites",
    tasteNote:"We periodically learn how your mood relates to the kinds of stories you save, and use it to choose what to send.",
    favTitle:"Favourites", favCount:"{n}",
    favEmpty:"Nothing yet. Tap ♡ on a story on the Home tab and it goes into Peri's pouch.",
    nameTitle:"Your name on the timeline", nameButton:"Change name",
    nameNote:"Applies to posts you write from now on. It doesn't have to be your real name.",
    whoTitle:"Who sees what",
    whoYou:"You", whoYouV:"Your own mood log (stored on this device only), favourites, post history, and Peri's messages to you",
    whoMgr:"Your manager", whoMgrV:"Only the team average over time, plus an anonymous count: \"N people may need support\". <strong>No names, no individual scores.</strong>",
    whoHr:"HR / occupational health", whoHrV:"Connected as an individual conversation only if you tap to consent.",
    medical:"This app helps you keep track of how you're doing. It is not medical diagnosis or advice. If the hard days keep going, please talk to occupational health or a medical professional."
  },
  mgr: {
    bannerTitle:"What your manager sees",
    bannerBody:"Names, individual scores, and who wrote which post never appear on this screen. Only aggregate numbers are shown.",
    back:"Back to the employee view", teamTitle:"Team energy", teamSub:"Customer Success / 9 people",
    legend1:"Weekly average (1–5)", legend2:"Last 8 weeks", avgWeek:"This week", vsLast:"vs last week",
    below:"Below the attention line of {t} this week", within:"Within the attention line", thresholdLabel:"Attention line {t}",
    sourceReal:"Real data ({n} days)", sourceSample:"Sample view",
    minNote:"Only days with {m} or more check-ins are counted. Below that, an individual could be inferred.",
    noData:"Not yet {m} check-ins of real data. The chart below is a sample.",
    anon:"These are summed totals only. Who scored what does not exist in the database.",
    careTitle:"Where support may help", careChip:"May need support: {n}",
    careNote:"The number of people with low scores three or more days running. <strong>Who they are is never shown.</strong> Peri has already reached out to them quietly and directly.",
    a1:"Temporarily increase 1-on-1 frequency — for everyone, without singling anyone out",
    a2:"Look for deadlines this week that could move back",
    a3:"Share the occupational health contact with the whole team again",
    notShownTitle:"What this screen never shows",
    n1:"Who gave which score", n2:"Any individual's mood chart",
    n3:"Any link between a post and a mood score", n4:"Aggregates for teams smaller than 5 (an individual could be identified)"
  },
  register: {
    nameLabel:"Your name on the timeline", namePlaceholder:"Peri fan",
    nameNote:"Defaults to your LINE display name. <strong>It doesn't have to be your real name</strong> — a nickname is fine. You can change it later.",
    teamLabel:"Team (pick one to start)",
    note:"Your name and team are used only for the timeline. They are never linked to your mood entries."
  },
  depts: ["Marketing","Sales","Customer Success","Product","Corporate","Other"],
  genres: { animal:"Animals", moving:"Moving", local:"Local", life:"Everyday" },
  topic: "Today's lunch",
  you: "You", anon: "Anonymous",
  ago: { now:"just now", min:"{n}m ago", hour:"{n}h ago", yesterday:"yesterday", day:"{n}d ago" },
  toast: {
    recorded:"Saved. Hope today treats you kindly.", posted:"Posted",
    writeSomething:"Even one line is enough", welcome:"Welcome, {name}",
    renamed:"Name updated", enterName:"Please enter a name",
    later:"Okay. Whenever you're ready.", consult:"You'll only be connected if you give consent",
    postFailed:"Couldn't post. Please check your connection."
  },
  chart: { today:"Today", ariaPersonal:"Your mood over time. Vertical axis from 1 (really hard) to 5 (great).", ariaTeam:"Weekly team average energy. Vertical axis 1 to 5." },
  alt: {
    front:"Peri standing and facing forward", side:"Peri showing the pouch on its beak",
    shout:"Peri with its beak wide open, delighted", fish:"Peri with a fish in its pouch",
    blank:"Peri looking blank", back:"Peri seen from behind",
    walk:"Peri waddling along", tired:"Peri lying down, resting"
  },
  news: [
    { g:"animal", t:"Lost Shiba waits at the station; staff watch over it for three hours before its owner arrives",
      s:"It sat quietly just inside the ticket gates while staff took turns keeping an eye on it. By evening its owner arrived, out of breath." },
    { g:"local", t:"Bathhouse due to close stays open after regulars crowdfund its future",
      s:"Fifty-eight years old, the tiles by the counter untouched. The target was met eleven days in, with 80% of backers living within two kilometres." },
    { g:"life", t:"Sunflowers grown by primary school pupils travel 500km as seeds",
      s:"Sixth-graders divided the seeds from their flower bed into envelopes and posted them to a partner school. They'll bloom in that playground next year." },
    { g:"moving", t:"A Tainan diner has kept the same sign for 22 years: \"If you're hungry, you don't have to pay\"",
      s:"\"Someone once did the same for me,\" the owner says. Every time the paper fades, it gets written out again." },
    { g:"animal", t:"Retired racehorse becomes a therapy horse, spending weekends with children",
      s:"What to do with the ten years after the running stops. Apparently it narrows its eyes the whole time it's being brushed." },
    { g:"life", t:"The \"six o'clock bread\", baked after the night shift, with regulars queueing in silence",
      s:"At six, before opening, about five people are already waiting although there's no sign outside. Nobody speaks; the smell is the signal." }
  ],
  posts: [
    { dept:"Customer Success", text:"After six months, the neighbourhood cat finally let me pet it. I'm counting today as a win." },
    { dept:"Product (Taipei)", text:"Sent pineapple cakes to the Japan team. The three minutes before the meeting where everyone ate in total silence were very funny." },
    { dept:"Sales", text:"Six months chasing this account, and the client said \"I'm glad it was you\". Still no signature, but today that's enough." },
    { dept:"Marketing", text:"Today's lunch: the set-meal place downstairs. The trick is to go ten minutes early on karaage day." }
  ]
},

/* ===================== ไทย ===================== */
th: {
  mascot: "เปริ",
  langLabel: "ภาษา", langNote: "เปลี่ยนอัตโนมัติตามการตั้งค่าภาษาของ LINE และเลือกเองตรงนี้ก็ได้",
  tabs: { home:"หน้าแรก", feed:"ทุกคน", me:"ของฉัน" },
  mood: { 5:"สดใส", 4:"ค่อนข้างดี", 3:"เฉย ๆ", 2:"เหนื่อย", 1:"หนักใจมาก" },
  say: {
    greet:"อรุณสวัสดิ์ วันนี้รู้สึกยังไงบ้าง",
    m5:"ดีเลย รักษาจังหวะนี้ไว้นะ วันนี้ใส่เรื่องสดใสมาเต็มถุงเลย",
    m4:"ดีจัง เลือกเรื่องอ่านง่าย ๆ มาให้สามเรื่องจากในถุง",
    m3:"วันธรรมดา ๆ ก็เป็นวันที่ดีได้ เลือกเรื่องเบา ๆ มาให้แล้ว",
    m2:"เหนื่อยสินะ เอาปลาไปก่อนนะ วันนี้เลือกเรื่องช้า ๆ มาให้",
    m1:"ขอบคุณที่บอกนะ วันนี้เรานอนแผ่ด้วยกันก็ได้ ไม่ต้องทำอะไรเลย",
    low:"ช่วงนี้ดูเหนื่อยติดกันหลายวันเลย ไม่ต้องฝืนร่าเริงก็ได้ เอาปลาไปก่อนนะ",
    quiet:"ได้เลย เราอยู่ตรงนี้เป็นเพื่อน หิวเมื่อไหร่บอกได้นะ",
    hello:"สวัสดี เราชื่อเปริ ถ้าไม่ว่าอะไร บอกหน่อยว่าอยู่ทีมไหน"
  },
  home: {
    hint1:"แตะครั้งเดียวพอ เปลี่ยนทีหลังได้", hint2:"แตะอีกครั้งเพื่อแก้การบันทึกของวันนี้",
    forYou:"สำหรับคุณวันนี้",
    noteHigh:"วันนี้อารมณ์ดี เลยใส่เรื่องสดใสมาเยอะหน่อย",
    noteMid:"เน้นเรื่องเบา ๆ เป็นหลัก",
    noteLow:"วันนี้ใส่เรื่องเงียบ ๆ ที่ค่อย ๆ อ่านได้มาเยอะหน่อย",
    newsDisclaimer:"ข่าวทั้งหมดเป็นตัวอย่างสมมติ ในเวอร์ชันจริงจะดึงจาก News API แล้วให้ AI ประเมินความอบอุ่น สรุป และคัดเนื้อหาที่ไม่เหมาะสมออก",
    ctaEyebrow:"อ่านจบแล้ว", ctaTitle:"อยากใส่ \"เรื่องดี ๆ\" ของคุณลงในถุงของเปริไหม",
    ctaTopic:"หัวข้อวันนี้: ", ctaButton:"เขียนเรื่องดี ๆ ของวันนี้",
    consult:"ปรึกษาฝ่ายบุคคลหรือแพทย์", later:"ตอนนี้ขออยู่เงียบ ๆ ก่อน",
    medical:"แอปนี้ไม่ได้ให้การวินิจฉัยหรือคำแนะนำทางการแพทย์ เนื้อหาที่ปรึกษาจะถูกส่งต่อเฉพาะเมื่อคุณยินยอมเท่านั้น"
  },
  feed: {
    topicEyebrow:"หัวข้อวันนี้", write:"ลองเขียนดู", title:"เรื่องดี ๆ ของทุกคน", sub:"ไทม์ไลน์ภายในบริษัท",
    shared:"โพสต์จะแชร์ให้คนในบริษัทเห็น", dummy:"ชื่อ ทีม และโพสต์ที่แสดงทั้งหมดเป็นข้อมูลตัวอย่างสมมติ"
  },
  compose: {
    title:"เรื่องดี ๆ ของวันนี้", close:"ปิด",
    placeholder:"ประโยคเดียวก็พอ แค่ \"มีคนไม่รู้จักช่วยกดค้างประตูลิฟต์ให้\" ก็เพียงพอแล้ว",
    useTopic:"เขียนตามหัวข้อ \"{topic}\"", addPhoto:"ใส่รูป", submit:"โพสต์", photo:"รูป",
    warnStrong:"กรุณาอย่าเขียนชื่อลูกค้า ชื่อโปรเจกต์ หรือข้อมูลลับของบริษัท",
    warnBody:"โพสต์จะแสดงบนไทม์ไลน์ของบริษัท (ทุกคนเห็น) และจะไม่เชื่อมกับคะแนนอารมณ์"
  },
  me: {
    chartTitle:"อารมณ์ที่ผ่านมา", chartReal:"บันทึกของคุณ ({n} ครั้ง)", chartSample:"ข้อมูลตัวอย่าง ({n} ครั้ง)",
    legendHigh:"5 = สดใส", legendLow:"1 = หนักใจมาก",
    avg:"เฉลี่ย 5 ครั้งล่าสุด", today:"วันนี้", notYet:"ยังไม่ได้บันทึก",
    privacy:"กราฟนี้<strong>มีแค่คุณที่เห็น</strong> บันทึกอารมณ์ไม่ถูกส่งไปยังฐานข้อมูลส่วนกลาง แต่เก็บไว้ในเครื่องนี้เท่านั้น",
    tasteTitle:"สิ่งที่คุณชอบ", tasteSub:"เรียนรู้จากรายการโปรด",
    tasteNote:"ระบบจะเรียนรู้ความสัมพันธ์ระหว่างคะแนนอารมณ์กับหมวดที่คุณชอบเป็นระยะ แล้วนำไปใช้เลือกเนื้อหาที่ส่งให้",
    favTitle:"รายการโปรด", favCount:"{n} รายการ",
    favEmpty:"ยังไม่มี กด ♡ ที่ข่าวในหน้าแรก แล้วมันจะไปสะสมอยู่ในถุงของเปริ",
    nameTitle:"ชื่อที่แสดงบนไทม์ไลน์", nameButton:"เปลี่ยนชื่อ",
    nameNote:"จะมีผลกับโพสต์ที่เขียนหลังจากนี้ ไม่ต้องใช้ชื่อจริงก็ได้",
    whoTitle:"ใครเห็นอะไรบ้าง",
    whoYou:"ตัวคุณเอง", whoYouV:"บันทึกอารมณ์ของตัวเอง (เก็บในเครื่องนี้เท่านั้น) รายการโปรด ประวัติโพสต์ และข้อความที่เปริทักมาเป็นการส่วนตัว",
    whoMgr:"หัวหน้า", whoMgrV:"เห็นแค่ค่าเฉลี่ยของทีมกับจำนวนแบบไม่ระบุตัวตนว่า \"อาจมีคนต้องการการดูแล ◯ คน\" เท่านั้น <strong>ไม่แสดงชื่อและคะแนนรายบุคคล</strong>",
    whoHr:"ฝ่ายบุคคล / แพทย์", whoHrV:"จะเชื่อมต่อเป็นการปรึกษารายบุคคลเฉพาะเมื่อคุณกดยินยอมเท่านั้น",
    medical:"แอปนี้ช่วยบันทึกสภาพร่างกายและอารมณ์ ไม่ใช่การวินิจฉัยหรือคำแนะนำทางการแพทย์ หากยังรู้สึกหนักใจต่อเนื่อง กรุณาปรึกษาแพทย์ประจำบริษัทหรือสถานพยาบาล"
  },
  mgr: {
    bannerTitle:"หน้าจอที่หัวหน้าเห็น",
    bannerBody:"ชื่อ คะแนนรายบุคคล และใครเขียนโพสต์ไหน จะไม่ปรากฏบนหน้าจอนี้เลย แสดงเฉพาะค่าสรุปเท่านั้น",
    back:"กลับไปหน้าจอพนักงาน", teamTitle:"พลังของทีม", teamSub:"Customer Success / 9 คน",
    legend1:"ค่าเฉลี่ยรายสัปดาห์ (1–5)", legend2:"8 สัปดาห์ล่าสุด", avgWeek:"สัปดาห์นี้", vsLast:"เทียบสัปดาห์ก่อน",
    below:"สัปดาห์นี้ต่ำกว่าเส้นเฝ้าระวัง {t}", within:"อยู่ในเกณฑ์เส้นเฝ้าระวัง", thresholdLabel:"เส้นเฝ้าระวัง {t}",
    sourceReal:"ข้อมูลจริง ({n} วัน)", sourceSample:"ตัวอย่าง",
    minNote:"นับเฉพาะวันที่มีคนเช็คอิน {m} คนขึ้นไป ถ้าน้อยกว่านั้นอาจเดาได้ว่าเป็นใคร",
    noData:"ข้อมูลจริงยังไม่ถึง {m} คน กราฟด้านล่างเป็นตัวอย่าง",
    anon:"ตัวเลขเหล่านี้เป็นแค่ผลรวม ใครได้กี่คะแนนไม่มีอยู่ในฐานข้อมูล",
    careTitle:"แนวทางการดูแล", careChip:"อาจต้องการการดูแล: {n} คน",
    careNote:"จำนวนคนที่มีคะแนนต่ำติดต่อกัน 3 วันขึ้นไป <strong>ไม่แสดงว่าเป็นใคร</strong> เปริได้ทักไปหาเจ้าตัวโดยตรงอย่างนุ่มนวลแล้ว",
    a1:"เพิ่มความถี่ 1on1 ชั่วคราว โดยทำกับทุกคนและไม่ระบุตัว",
    a2:"ดูว่ามีเดดไลน์สัปดาห์นี้ที่เลื่อนออกไปได้บ้างไหม",
    a3:"แจ้งช่องทางปรึกษาแพทย์ประจำบริษัทให้ทั้งทีมทราบอีกครั้ง",
    notShownTitle:"สิ่งที่หน้าจอนี้ไม่แสดง",
    n1:"ใครให้คะแนนเท่าไร", n2:"กราฟอารมณ์ของแต่ละคน",
    n3:"ความเชื่อมโยงระหว่างโพสต์กับคะแนนอารมณ์", n4:"ค่าสรุปเมื่อทีมมีสมาชิกน้อยกว่า 5 คน (เพราะอาจระบุตัวบุคคลได้)"
  },
  register: {
    nameLabel:"ชื่อที่แสดงบนไทม์ไลน์", namePlaceholder:"แฟนคลับเปริ",
    nameNote:"ค่าเริ่มต้นคือชื่อที่แสดงใน LINE <strong>ไม่ต้องใช้ชื่อจริงก็ได้</strong> แนะนำให้ใช้ชื่อเล่น เปลี่ยนทีหลังได้",
    teamLabel:"ทีม (เลือกแล้วเริ่มได้เลย)",
    note:"ชื่อและทีมใช้แค่กับการแสดงผลบนไทม์ไลน์ ไม่เชื่อมกับบันทึกอารมณ์"
  },
  depts: ["การตลาด","ฝ่ายขาย","Customer Success","ผลิตภัณฑ์","ฝ่ายบริหาร","อื่น ๆ"],
  genres: { animal:"สัตว์", moving:"ซาบซึ้ง", local:"ชุมชน", life:"ชีวิตประจำวัน" },
  topic: "มื้อกลางวันวันนี้",
  you: "คุณ", anon: "ไม่ระบุชื่อ",
  ago: { now:"เมื่อสักครู่", min:"{n} นาทีที่แล้ว", hour:"{n} ชั่วโมงที่แล้ว", yesterday:"เมื่อวาน", day:"{n} วันที่แล้ว" },
  toast: {
    recorded:"บันทึกแล้ว ขอให้วันนี้เป็นวันที่ดีนะ", posted:"โพสต์แล้ว",
    writeSomething:"เขียนแค่ประโยคเดียวก็ได้", welcome:"ยินดีต้อนรับ {name}",
    renamed:"เปลี่ยนชื่อแล้ว", enterName:"กรุณาใส่ชื่อ",
    later:"ได้เลย พร้อมเมื่อไหร่บอกได้", consult:"จะเชื่อมต่อให้เฉพาะเมื่อคุณยินยอมเท่านั้น",
    postFailed:"โพสต์ไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อ"
  },
  chart: { today:"วันนี้", ariaPersonal:"อารมณ์ที่ผ่านมาของคุณ แกนตั้งจาก 1 (หนักใจมาก) ถึง 5 (สดใส)", ariaTeam:"ค่าเฉลี่ยพลังของทีมรายสัปดาห์ แกนตั้ง 1 ถึง 5" },
  alt: {
    front:"เปริยืนหันหน้าตรง", side:"เปริโชว์ถุงใต้จะงอยปาก",
    shout:"เปริอ้าปากกว้างด้วยความดีใจ", fish:"เปริใส่ปลาไว้ในถุง",
    blank:"เปริทำหน้าเบลอ ๆ", back:"เปริหันหลังให้",
    walk:"เปริเดินต้วมเตี้ยม", tired:"เปรินอนคว่ำพักผ่อน"
  },
  news: [
    { g:"animal", t:"ชิบะหลงทางที่สถานี เจ้าหน้าที่ผลัดกันเฝ้าสามชั่วโมงจนเจ้าของมารับ",
      s:"มันนั่งนิ่งอยู่ด้านในประตูตรวจตั๋ว เจ้าหน้าที่ผลัดกันคอยดู จนช่วงเย็นเจ้าของก็วิ่งหอบมาถึง" },
    { g:"local", t:"โรงอาบน้ำที่จะปิดตัว ได้ไปต่อด้วยเงินระดมทุนจากลูกค้าประจำ",
      s:"อายุ 58 ปี กระเบื้องตรงเคาน์เตอร์ยังเหมือนเดิม ยอดถึงเป้าในวันที่ 11 และ 80% ของผู้สนับสนุนอยู่ในรัศมีสองกิโลเมตร" },
    { g:"life", t:"ทานตะวันที่เด็กประถมปลูก กลายเป็นเมล็ดเดินทางไกล 500 กิโลเมตร",
      s:"เด็ก ป.6 แบ่งเมล็ดจากแปลงดอกไม้ใส่ซอง ส่งไปให้โรงเรียนที่แลกเปลี่ยนกัน ปีหน้าจะบานที่สนามของอีกฝั่ง" },
    { g:"moving", t:"ร้านอาหารในไถหนาน ติดป้าย \"ถ้าหิว ไม่ต้องจ่ายก็ได้\" มา 22 ปี",
      s:"เจ้าของบอกว่า \"เมื่อก่อนก็มีคนทำแบบนี้กับผมเหมือนกัน\" ทุกครั้งที่กระดาษซีด ก็จะเขียนใหม่แล้วติดกลับไป" },
    { g:"animal", t:"ม้าแข่งที่ปลดระวาง กลายเป็นม้าบำบัด สุดสัปดาห์ใช้เวลากับเด็ก ๆ",
      s:"สิบปีหลังจากเลิกวิ่งจะใช้ยังไงดี ได้ยินว่าตอนถูกแปรงขน มันหรี่ตาอย่างมีความสุขตลอดเลย" },
    { g:"life", t:"\"ขนมปังหกโมง\" ที่อบหลังกะดึก ลูกค้าประจำต่อแถวเงียบ ๆ",
      s:"หกโมงก่อนร้านเปิด ทั้งที่ไม่มีป้าย ก็มีคนรออยู่ราวห้าคนแล้ว ไม่มีใครพูดอะไร กลิ่นขนมปังคือสัญญาณ" }
  ],
  posts: [
    { dept:"Customer Success", text:"แมวแถวบ้านยอมให้ลูบแล้ว หลังจากใช้เวลาครึ่งปี วันนี้รู้สึกเหมือนชนะแล้ว" },
    { dept:"ผลิตภัณฑ์ (ไทเป)", text:"ส่งขนมสับปะรดไปให้ทีมญี่ปุ่น สามนาทีก่อนประชุมที่ทุกคนนั่งกินกันเงียบ ๆ ภาพนั้นตลกดี" },
    { dept:"ฝ่ายขาย", text:"ดีลที่ตามมาครึ่งปี ลูกค้าบอกว่า \"ดีใจที่เป็นคุณ\" ยังไม่ปิดการขาย แต่วันนี้แค่นี้ก็พอแล้ว" },
    { dept:"การตลาด", text:"มื้อกลางวันวันนี้: ร้านอาหารชุดใต้ตึก เคล็ดลับคือวันที่เมนูเป็นไก่ทอดต้องไปเร็วขึ้นสิบนาที" }
  ]
}

};
