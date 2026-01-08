/**
 * 人生を楽にする哲学集
 * Life Philosophy Collection App
 */

class PhilosophyApp {
    constructor() {
        // 哲学データ
        this.philosophies = [
            // 仕事・キャリア
            {
                id: 1,
                quote: "完璧を目指すより、まず終わらせろ",
                author: "マーク・ザッカーバーグ",
                insight: "完璧主義は時に私たちを立ち止まらせます。100点を目指して何も始められないより、60点でも形にすることが大切。完成させてから改善すればいいのです。",
                category: "work"
            },
            {
                id: 2,
                quote: "選択肢を減らせば、人生は楽になる",
                author: "バリー・シュワルツ",
                insight: "選択肢が多すぎると私たちは疲弊します。「これ」と決めたら他は見ない。決断の質より、決断後の納得が大切です。",
                category: "work"
            },
            {
                id: 3,
                quote: "やる気が出るのを待つな。やり始めれば、やる気は後からついてくる",
                author: "行動心理学の知見",
                insight: "モチベーションは行動の前提条件ではありません。たった5分でいいから始めてみる。脳はやり始めると自然と集中モードに入ります。",
                category: "work"
            },
            {
                id: 4,
                quote: "80%の結果は20%の努力から生まれる",
                author: "パレートの法則",
                insight: "すべてに全力を注ぐ必要はありません。本当に重要な20%に集中することで、最大の成果が得られます。力の入れどころを見極めましょう。",
                category: "work"
            },
            {
                id: 5,
                quote: "今日できることを明日に延ばすな。でも、明日でいいことは今日やるな",
                author: "マーク・トウェイン（改）",
                insight: "優先順位をつけることが大切です。すべてを今日やる必要はありません。本当に今日必要なことだけに集中しましょう。",
                category: "work"
            },

            // 人間関係
            {
                id: 6,
                quote: "他人を変えることはできない。変えられるのは自分の反応だけ",
                author: "アドラー心理学",
                insight: "相手を変えようとするエネルギーは無駄になりがち。それより、相手の言動に対する自分の受け止め方を変える方がずっと簡単で効果的です。",
                category: "relationship"
            },
            {
                id: 7,
                quote: "すべての人に好かれようとすると、誰にも好かれなくなる",
                author: "アリストテレス",
                insight: "八方美人は結局、信頼を得られません。自分の価値観を大切にし、それを理解してくれる人との関係を深める方が幸せです。",
                category: "relationship"
            },
            {
                id: 8,
                quote: "相手の話の90%は、返事を求めているのではなく、ただ聞いてほしいだけ",
                author: "傾聴の知恵",
                insight: "アドバイスや解決策を急ぐ必要はありません。「うんうん」と聞くだけで、相手の心は軽くなります。聞くことは最高のプレゼントです。",
                category: "relationship"
            },
            {
                id: 9,
                quote: "「NO」と言えることは、自分を大切にすること",
                author: "境界線の哲学",
                insight: "断ることに罪悪感を感じる必要はありません。自分の時間とエネルギーには限りがあります。本当に大切なことのために、NOと言う勇気を持ちましょう。",
                category: "relationship"
            },
            {
                id: 10,
                quote: "期待は裏切られるものではなく、そもそも持ちすぎないもの",
                author: "仏教の智慧",
                insight: "他人への過度な期待は、失望の種になります。「こうあるべき」を手放すと、相手のありのままを受け入れられ、関係が楽になります。",
                category: "relationship"
            },

            // 自分自身
            {
                id: 11,
                quote: "自分を責めることに時間を使うな。その時間で一歩進め",
                author: "認知行動療法の考え方",
                insight: "失敗を責め続けても何も変わりません。反省は30秒で十分。あとは「次はどうするか」に意識を向けましょう。",
                category: "self"
            },
            {
                id: 12,
                quote: "あなたは、あなたが思うほど他人から見られていない",
                author: "スポットライト効果",
                insight: "私たちは自分が注目されていると過大評価しがち。実際、他人はそこまであなたを気にしていません。だから、もっと自由にふるまっていいのです。",
                category: "self"
            },
            {
                id: 13,
                quote: "比較は喜びを奪う泥棒である",
                author: "セオドア・ルーズベルト",
                insight: "SNSで他人の「見せたい部分」と自分を比べても意味がありません。比べるなら、過去の自分と今の自分だけ。小さな成長を認めましょう。",
                category: "self"
            },
            {
                id: 14,
                quote: "自分に優しくできない人は、他人にも本当には優しくできない",
                author: "セルフコンパッション",
                insight: "自分を許し、労わることは甘えではありません。心に余裕があってこそ、他人にも優しくなれます。まず自分を大切に。",
                category: "self"
            },
            {
                id: 15,
                quote: "「〜すべき」を「〜したい」に変えると、人生は軽くなる",
                author: "アルバート・エリス",
                insight: "「すべき」という言葉は自分を縛ります。本当にそうしたいのか、誰かに言われたからそう思っているのか、立ち止まって考えてみましょう。",
                category: "self"
            },

            // 人生・生き方
            {
                id: 16,
                quote: "人生の90%は、何が起きるかではなく、どう反応するかで決まる",
                author: "スティーブン・コヴィー",
                insight: "出来事自体はコントロールできません。でも、それにどう対応するかは100%あなた次第。この自由こそが人生を形作ります。",
                category: "life"
            },
            {
                id: 17,
                quote: "シンプルに生きろ。そうすれば、シンプルに生きられる",
                author: "ミニマリズムの哲学",
                insight: "物も予定も人間関係も、増やせば増やすほど管理が大変になります。本当に必要なものだけを残す。それが心の余白を生みます。",
                category: "life"
            },
            {
                id: 18,
                quote: "今日という日は、残りの人生の最初の日",
                author: "チャールズ・ディードリッヒ",
                insight: "過去は変えられません。でも今日からの人生は、今この瞬間からいくらでも変えられます。遅すぎることは決してありません。",
                category: "life"
            },
            {
                id: 19,
                quote: "幸せは目的地ではなく、旅の仕方である",
                author: "マーガレット・リー・ランベック",
                insight: "「これを達成すれば幸せ」と思っていても、達成した瞬間にまた次の目標が現れます。今この過程を楽しむことが、本当の幸せです。",
                category: "life"
            },
            {
                id: 20,
                quote: "人生で本当に後悔するのは、やったことより、やらなかったこと",
                author: "死の床の告白",
                insight: "多くの人が人生の終わりに後悔するのは、失敗よりも挑戦しなかったことだそうです。失敗しても「やった」という事実は残ります。",
                category: "life"
            },

            // ストレス対処
            {
                id: 21,
                quote: "心配事の96%は実際には起こらない",
                author: "ペンシルベニア大学の研究",
                insight: "私たちが心配に費やす時間のほとんどは、実際には起こらないことへの不安です。今、目の前のことだけに集中しましょう。",
                category: "stress"
            },
            {
                id: 22,
                quote: "変えられないことを受け入れ、変えられることに集中する",
                author: "ニーバーの祈り",
                insight: "天気、他人の性格、過去の出来事…変えられないことに悩むのは時間の無駄です。自分の影響力の及ぶ範囲だけに集中しましょう。",
                category: "stress"
            },
            {
                id: 23,
                quote: "深呼吸は、いつでもどこでも使える最強のリセットボタン",
                author: "マインドフルネス",
                insight: "ゆっくり4秒吸って、4秒止めて、4秒吐く。これだけで自律神経が落ち着き、冷静さを取り戻せます。今すぐ試してみてください。",
                category: "stress"
            },
            {
                id: 24,
                quote: "疲れたら休め。それは怠けではなく、メンテナンス",
                author: "休息の哲学",
                insight: "車も定期的にメンテナンスが必要なように、人間の心身も休息が必要です。休むことに罪悪感を持つ必要はありません。",
                category: "stress"
            },
            {
                id: 25,
                quote: "完璧な一日を目指すより、まあまあの一日を重ねる",
                author: "持続可能な生き方",
                insight: "毎日100点を目指すと疲弊します。60点の日が続いても、積み重なれば大きな成果になります。長い目で見ることが大切です。",
                category: "stress"
            },
            {
                id: 26,
                quote: "今この瞬間、あなたは十分に安全で、十分に存在している",
                author: "今ここの哲学",
                insight: "不安は未来への、後悔は過去への執着から生まれます。今この瞬間に意識を戻すと、心は穏やかになります。",
                category: "stress"
            },
            {
                id: 27,
                quote: "問題は解決するより、解消することがある",
                author: "問題解決の逆説",
                insight: "頑張って解決しようとしている問題が、時間が経てば自然と消えることもあります。「今は放っておく」という選択肢も忘れずに。",
                category: "stress"
            },
            {
                id: 28,
                quote: "小さな幸せを見つける力は、大きな幸せを作る力になる",
                author: "ポジティブ心理学",
                insight: "大きな幸せを待つより、今日あった小さな良いことに気づく練習をしましょう。その積み重ねが、幸せを感じやすい心を育てます。",
                category: "life"
            },
            {
                id: 29,
                quote: "あなたの「普通」は、誰かにとっての「すごい」",
                author: "相対性の視点",
                insight: "自分では当たり前だと思っていることが、他の人から見れば特別な才能かもしれません。自分の価値を過小評価しないでください。",
                category: "self"
            },
            {
                id: 30,
                quote: "人は皆、見えない戦いを抱えている。だから、優しくあれ",
                author: "プラトン（諸説あり）",
                insight: "イライラしている人にも、冷たい人にも、それぞれの事情があります。相手の背景を想像すると、怒りは優しさに変わることがあります。",
                category: "relationship"
            }
        ];

        // 状態管理
        this.currentPhilosophy = null;
        this.currentCategory = 'all';
        this.favorites = this.loadFavorites();
        this.shownIds = [];

        // DOM要素の取得
        this.setupElements();
        
        // イベントリスナーの設定
        this.setupEventListeners();
        
        // 初期化
        this.initialize();
    }

    setupElements() {
        this.quoteText = document.getElementById('quoteText');
        this.quoteAuthor = document.getElementById('quoteAuthor');
        this.insightText = document.getElementById('insightText');
        this.cardInsight = document.getElementById('cardInsight');
        this.featuredCard = document.getElementById('featuredCard');
        this.btnNext = document.getElementById('btnNext');
        this.btnFavorite = document.getElementById('btnFavorite');
        this.btnShare = document.getElementById('btnShare');
        this.categoryBtns = document.querySelectorAll('.category-btn');
        this.favoritesList = document.getElementById('favoritesList');
        this.toast = document.getElementById('toast');
    }

    setupEventListeners() {
        // 次の哲学ボタン
        this.btnNext.addEventListener('click', () => this.showNextPhilosophy());

        // お気に入りボタン
        this.btnFavorite.addEventListener('click', () => this.toggleFavorite());

        // 共有ボタン
        this.btnShare.addEventListener('click', () => this.sharePhilosophy());

        // カテゴリーボタン
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.setCategory(category);
            });
        });

        // キーボード操作
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (document.activeElement === document.body) {
                    e.preventDefault();
                    this.showNextPhilosophy();
                }
            }
        });
    }

    initialize() {
        this.showNextPhilosophy();
        this.renderFavorites();
        
        // 初回ガイダンス
        setTimeout(() => {
            this.showToast('✨ ボタンを押して、次の哲学を見てみましょう');
        }, 1500);
    }

    showNextPhilosophy() {
        // カテゴリーでフィルタリング
        let filteredPhilosophies = this.currentCategory === 'all' 
            ? this.philosophies 
            : this.philosophies.filter(p => p.category === this.currentCategory);

        // まだ表示していない哲学を優先
        let unshown = filteredPhilosophies.filter(p => !this.shownIds.includes(p.id));
        
        // 全部表示済みならリセット
        if (unshown.length === 0) {
            this.shownIds = [];
            unshown = filteredPhilosophies;
        }

        // ランダム選択
        const randomIndex = Math.floor(Math.random() * unshown.length);
        const philosophy = unshown[randomIndex];
        
        // 表示済みに追加
        this.shownIds.push(philosophy.id);
        
        // アニメーション付きで表示
        this.displayPhilosophy(philosophy);
    }

    displayPhilosophy(philosophy) {
        this.currentPhilosophy = philosophy;
        
        // カード変更アニメーション
        this.featuredCard.classList.add('card-changing');
        
        setTimeout(() => {
            // 内容を更新
            this.quoteText.textContent = `「${philosophy.quote}」`;
            this.quoteAuthor.textContent = `— ${philosophy.author}`;
            this.insightText.textContent = philosophy.insight;
            
            // お気に入りボタンの状態更新
            this.updateFavoriteButton();
            
            this.featuredCard.classList.remove('card-changing');
        }, 250);
    }

    setCategory(category) {
        this.currentCategory = category;
        this.shownIds = [];
        
        // ボタンのアクティブ状態更新
        this.categoryBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        // 新しいカテゴリーから表示
        this.showNextPhilosophy();
        
        const categoryNames = {
            all: 'すべて',
            work: '仕事・キャリア',
            relationship: '人間関係',
            self: '自分自身',
            life: '人生・生き方',
            stress: 'ストレス対処'
        };
        
        this.showToast(`📂 ${categoryNames[category]}の哲学を表示`);
    }

    toggleFavorite() {
        if (!this.currentPhilosophy) return;
        
        const index = this.favorites.findIndex(f => f.id === this.currentPhilosophy.id);
        
        if (index === -1) {
            // お気に入りに追加
            this.favorites.push({...this.currentPhilosophy});
            this.showToast('💖 お気に入りに追加しました');
        } else {
            // お気に入りから削除
            this.favorites.splice(index, 1);
            this.showToast('💔 お気に入りから削除しました');
        }
        
        this.saveFavorites();
        this.updateFavoriteButton();
        this.renderFavorites();
    }

    updateFavoriteButton() {
        if (!this.currentPhilosophy) return;
        
        const isFavorite = this.favorites.some(f => f.id === this.currentPhilosophy.id);
        this.btnFavorite.classList.toggle('active', isFavorite);
        this.btnFavorite.querySelector('.heart').textContent = isFavorite ? '♥' : '♡';
    }

    async sharePhilosophy() {
        if (!this.currentPhilosophy) return;
        
        const shareText = `「${this.currentPhilosophy.quote}」\n— ${this.currentPhilosophy.author}\n\n#人生を楽にする哲学集`;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '人生を楽にする哲学集',
                    text: shareText
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    this.copyToClipboard(shareText);
                }
            }
        } else {
            this.copyToClipboard(shareText);
        }
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('📋 クリップボードにコピーしました');
        }).catch(() => {
            this.showToast('⚠️ コピーに失敗しました');
        });
    }

    renderFavorites() {
        if (this.favorites.length === 0) {
            this.favoritesList.innerHTML = `
                <p class="empty-message">まだお気に入りがありません<br>♡ボタンで保存しましょう</p>
            `;
            return;
        }
        
        this.favoritesList.innerHTML = this.favorites.map(fav => `
            <div class="favorite-item" data-id="${fav.id}">
                <p class="fav-quote">「${fav.quote}」</p>
                <p class="fav-author">— ${fav.author}</p>
                <button class="fav-remove" title="削除">✕</button>
            </div>
        `).join('');
        
        // イベントリスナー追加
        this.favoritesList.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('fav-remove')) {
                    const id = parseInt(item.dataset.id);
                    this.removeFavorite(id);
                } else {
                    const id = parseInt(item.dataset.id);
                    const philosophy = this.philosophies.find(p => p.id === id);
                    if (philosophy) {
                        this.displayPhilosophy(philosophy);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
        });
    }

    removeFavorite(id) {
        const index = this.favorites.findIndex(f => f.id === id);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            this.renderFavorites();
            this.updateFavoriteButton();
            this.showToast('💔 お気に入りから削除しました');
        }
    }

    loadFavorites() {
        try {
            const saved = localStorage.getItem('philosophy_favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('philosophy_favorites', JSON.stringify(this.favorites));
        } catch (e) {
            console.warn('Failed to save favorites');
        }
    }

    showToast(message) {
        this.toast.textContent = message;
        this.toast.classList.add('show');
        
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', () => {
    new PhilosophyApp();
});