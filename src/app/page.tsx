import FaqAccordion from "@/components/FaqAccordion";
import FadeInSection from "@/components/FadeInSection";

const services = [
  {
    title: "AIエージェント構築",
    description: "営業・サポート・社内FAQに対応する実務型AIエージェントを設計・実装します。",
  },
  {
    title: "業務自動化",
    description: "定型業務を自動化し、人的ミスと工数を削減。現場運用まで伴走します。",
  },
  {
    title: "チャットボット構築",
    description: "LINE・Web・社内ツール向けに、成果につながる会話設計のボットを提供します。",
  },
  {
    title: "AIコンサルティング",
    description: "課題整理からPoC、内製化までを最短ルートで支援し、導入を成功に導きます。",
  },
];

const kpis = [
  { label: "導入プロジェクト", value: "52+" },
  { label: "平均工数削減", value: "43%" },
  { label: "PoC成功率", value: "91%" },
  { label: "平均初期導入期間", value: "3.2週" },
];

const caseStudies = [
  {
    industry: "SaaS企業",
    challenge: "問い合わせ対応に時間がかかり、CSチームの負荷が高い",
    result: "AIチャットボット導入で一次回答を自動化し、対応時間を38%短縮",
  },
  {
    industry: "EC事業者",
    challenge: "在庫更新と受注処理が手作業で、ミスと残業が増加",
    result: "業務自動化フローを実装し、月間作業時間を72時間削減",
  },
  {
    industry: "人材サービス",
    challenge: "営業準備に情報収集時間がかかり、提案数が伸びない",
    result: "AIエージェントで事前調査を半自動化し、提案件数を1.6倍に改善",
  },
];

const demos = ["営業支援エージェント", "社内ヘルプデスクBot", "見積作成オートメーション"];

const testimonials = [
  {
    name: "株式会社BlueWave 代表",
    comment: "抽象的だったAI導入が具体化され、短期間で現場に定着しました。",
  },
  {
    name: "合同会社Sparkle COO",
    comment: "導入後の運用設計まで伴走してくれたので、社内で継続活用できています。",
  },
  {
    name: "TechBridge株式会社 PM",
    comment: "単なる開発ではなく、成果指標ベースで提案してくれる点が非常に心強いです。",
  },
];

const steps = [
  "ヒアリング（課題・目標の明確化）",
  "提案（要件定義・導入ロードマップ）",
  "実装（開発・検証・改善）",
  "運用（定着支援・内製化サポート）",
];

const faqs = [
  {
    question: "AI導入が初めてでも依頼できますか？",
    answer: "問題ありません。現状業務をヒアリングし、優先度の高い業務から段階的に導入します。",
  },
  {
    question: "どれくらいの期間で効果が出ますか？",
    answer: "内容によりますが、最短2〜4週間でPoCを開始し、早期に効果検証できる形で進めます。",
  },
  {
    question: "小規模チームでも対応可能ですか？",
    answer: "可能です。少人数でも運用できる設計を前提に、過剰な運用負荷が出ない構成を提案します。",
  },
];

export default function Home() {
  return (
    <main className="bg-[#1a365d] text-[#ffffff]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <FadeInSection className="grid gap-8 rounded-3xl border border-[#ffffff]/30 bg-[radial-gradient(circle_at_top_left,_#274d80,_#1a365d)] px-8 py-14 md:grid-cols-2 md:items-end">
          <div className="space-y-5">
            <p className="inline-block rounded-full border border-[#d4a94a]/70 bg-[#d4a94a]/20 px-4 py-1 text-xs font-semibold tracking-widest text-[#d4a94a]">
              AI ENABLEMENT PARTNER
            </p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              AI導入を最短で内製化し、
              <br />
              事業成長を加速させる。
            </h1>
            <p className="max-w-xl text-[#ffffff]/90">
              スタートアップ・Web担当者向けに、戦略から実装、運用まで一気通貫で支援します。
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-[#f59e0b] px-7 py-3 font-semibold text-[#1a365d] shadow-[0_8px_24px_rgba(245,158,11,0.45)] transition hover:bg-[#fbbf24] hover:shadow-[0_10px_28px_rgba(251,191,36,0.5)]"
            >
              無料相談を予約する
            </a>
          </div>
          <div className="rounded-2xl border border-[#ffffff]/25 bg-[#1a365d]/70 p-6 backdrop-blur">
            <p className="text-sm text-[#ffffff]/90">直近の支援実績</p>
            <p className="mt-3 text-3xl font-bold">平均43%の業務工数削減</p>
            <p className="mt-2 text-sm text-[#ffffff]/75">課題の可視化から定着まで、現場で使われるAIを重視しています。</p>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">サービス紹介</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
            {services.map((service) => (
              <article key={service.title} className="card-panel p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#ffffff]/90">{service.description}</p>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">数字で見る実績</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="card-panel p-6 text-center">
                <p className="text-3xl font-bold text-[#d4a94a]">{kpi.value}</p>
                <p className="mt-2 text-sm text-[#ffffff]/90">{kpi.label}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">導入事例</h2>
          <div className="mt-8 space-y-4">
            {caseStudies.map((item) => (
              <article key={item.industry} className="card-panel p-6">
                <p className="text-sm font-semibold text-[#d4a94a]">{item.industry}</p>
                <p className="mt-2 text-sm text-[#ffffff]/90">課題: {item.challenge}</p>
                <p className="mt-2 font-medium">成果: {item.result}</p>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">制作実績</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {demos.map((title, index) => (
              <article key={title} className="card-panel overflow-hidden">
                <div className="h-36 bg-gradient-to-br from-[#d4a94a]/45 via-[#1a365d] to-[#ffffff]/20" />
                <div className="p-5">
                  <p className="text-xs text-[#d4a94a]">DEMO {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-semibold">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">お客さまの声</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="card-panel p-6">
                <p className="text-sm leading-7 text-[#ffffff]/95">「{item.comment}」</p>
                <cite className="mt-4 block text-xs not-italic text-[#d4a94a]">{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">導入の流れ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="card-panel p-5">
                <p className="text-xs font-semibold text-[#d4a94a]">STEP {index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-[#ffffff]/95">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">よくある質問</h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28">
          <h2 className="section-title">プロフィール</h2>
          <div className="mt-8 card-panel p-7">
            <p className="text-lg font-semibold">AI導入パートナー / 山田 太郎（仮名）</p>
            <p className="mt-3 text-sm leading-7 text-[#ffffff]/90">
              Web開発・業務改善プロジェクトを中心に10年以上の実務経験。AIは導入が目的ではなく、成果を出すための手段という考えで、現場が使い続けられる仕組みづくりを重視しています。
            </p>
            <p className="mt-4 text-sm text-[#ffffff]/90">スキル: Next.js / TypeScript / Python / OpenAI API / 業務設計</p>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-24 md:mt-28" id="contact">
          <h2 className="section-title">お問い合わせ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <form className="card-panel space-y-4 p-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  お名前
                </label>
                <input id="name" name="name" required className="input-field" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  メールアドレス
                </label>
                <input id="email" name="email" type="email" required className="input-field" placeholder="example@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  ご相談内容
                </label>
                <textarea id="message" name="message" required rows={5} className="input-field resize-none" placeholder="ご相談したい課題や背景をご記入ください。" />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#f59e0b] px-6 py-3 font-semibold text-[#1a365d] shadow-[0_8px_24px_rgba(245,158,11,0.45)] transition hover:bg-[#fbbf24] hover:shadow-[0_10px_28px_rgba(251,191,36,0.5)]"
              >
                送信する
              </button>
            </form>
            <aside className="card-panel space-y-4 p-6">
              <p className="text-sm text-[#ffffff]/90">直接のご連絡はこちら</p>
              <p className="font-medium">contact@example.com</p>
              <p className="font-medium">03-1234-5678</p>
              <div className="space-y-2 pt-4 text-sm">
                <a href="#" className="block text-[#d4a94a] hover:text-[#e3bb67]">
                  X (Twitter)
                </a>
                <a href="#" className="block text-[#d4a94a] hover:text-[#e3bb67]">
                  LinkedIn
                </a>
                <a href="#" className="block text-[#d4a94a] hover:text-[#e3bb67]">
                  note
                </a>
              </div>
            </aside>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
