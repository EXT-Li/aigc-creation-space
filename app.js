const state = { data: null, query: "", active: "home" };
const STANDALONE_HOME_HTML = "<div class=\"landing-home\">\n            <section class=\"landing-hero\" id=\"home-hero\">\n              <div class=\"landing-nav\">\n                <a class=\"landing-logo\" href=\"#home-hero\"><span class=\"landing-logo-mark\">L</span><span><strong>LUCIAN AIGC</strong><small>CREATION COMMUNITY</small></span></a>\n                <nav class=\"landing-links\"><a href=\"#home-path\">路径</a><a href=\"#home-method\">方法</a><a href=\"#home-cases\">案例</a><a href=\"#home-resources\">资源</a></nav>\n                <span class=\"landing-status\">AIGC VISUAL CREATION</span>\n              </div>\n              <div class=\"landing-hero-grid\">\n                <div class=\"landing-hero-copy\">\n                  <p class=\"landing-kicker\">AIGC VISUAL CREATION / 2026</p>\n                  <h1><span>让灵感</span><span>成为画面</span></h1>\n                  <p class=\"landing-hero-deck\">从工具选择、视觉基础、图片生成，到视频导演、提示词、风格与案例，把创作想法推进成可执行的视觉结果。</p>\n                  <div class=\"landing-actions\"><a class=\"landing-primary\" href=\"#home-path\">浏览创作路径 <span>↘</span></a></div>\n                </div>\n                <div class=\"hero-collage\">\n                  <div class=\"hero-collage-card hero-collage-1\"><img loading=\"eager\" fetchpriority=\"high\" decoding=\"async\" src=\"media/hero-scene-01.webp?v=20261119\" alt=\"桃花水乡场景\" /></div>\n                  <div class=\"hero-collage-card hero-collage-2\"><img loading=\"eager\" fetchpriority=\"high\" decoding=\"async\" src=\"media/hero-scene-02.webp?v=20261119\" alt=\"雪景庭院场景\" /></div>\n                  <div class=\"hero-collage-card hero-collage-3\"><img loading=\"eager\" fetchpriority=\"high\" decoding=\"async\" src=\"media/hero-scene-03.webp?v=20261119\" alt=\"白狐与人物角色\" /></div>\n                  <div class=\"hero-collage-card hero-collage-4\"><img loading=\"eager\" fetchpriority=\"high\" decoding=\"async\" src=\"media/hero-scene-04.webp?v=20261119\" alt=\"奇幻角色场景\" /></div>\n                  <div class=\"hero-collage-card hero-collage-5\"><img loading=\"eager\" fetchpriority=\"high\" decoding=\"async\" src=\"media/hero-scene-05.webp?v=20261119\" alt=\"云海山水场景\" /></div>\n                </div>\n              </div>\n              <div class=\"landing-hero-foot\"><span>从入门到进阶</span><span>工具 · 视觉 · 镜头 · 资源</span><span>SCROLL TO EXPLORE ↓</span></div>\n            </section>\n\n            <section class=\"home-marquee-section\" id=\"home-library\">\n              <div class=\"home-section-label\"><span>01 / VISUAL INPUT</span><span>用案例理解结果</span></div>\n              <div class=\"home-marquee-row marquee-right\"><div class=\"home-marquee-track\">\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-01.webp?v=20261119\" alt=\"视觉输入素材 01\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-02.webp?v=20261119\" alt=\"视觉输入素材 02\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-03.webp?v=20261119\" alt=\"视觉输入素材 03\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-04.webp?v=20261119\" alt=\"视觉输入素材 04\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-05.webp?v=20261119\" alt=\"视觉输入素材 05\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-06.webp?v=20261119\" alt=\"视觉输入素材 06\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-07.webp?v=20261119\" alt=\"视觉输入素材 07\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-08.webp?v=20261119\" alt=\"视觉输入素材 08\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-09.webp?v=20261119\" alt=\"视觉输入素材 09\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-10.webp?v=20261119\" alt=\"视觉输入素材 10\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-11.webp?v=20261119\" alt=\"视觉输入素材 11\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-12.webp?v=20261119\" alt=\"视觉输入素材 12\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-13.webp?v=20261119\" alt=\"视觉输入素材 13\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-14.webp?v=20261119\" alt=\"视觉输入素材 14\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-15.webp?v=20261119\" alt=\"视觉输入素材 15\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-16.webp?v=20261119\" alt=\"视觉输入素材 16\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-17.webp?v=20261119\" alt=\"视觉输入素材 17\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-18.webp?v=20261119\" alt=\"视觉输入素材 18\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-19.webp?v=20261119\" alt=\"视觉输入素材 19\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-20.webp?v=20261119\" alt=\"视觉输入素材 20\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-21.webp?v=20261119\" alt=\"视觉输入素材 21\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-22.webp?v=20261119\" alt=\"视觉输入素材 22\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-23.webp?v=20261119\" alt=\"视觉输入素材 23\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-24.webp?v=20261119\" alt=\"视觉输入素材 24\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-25.webp?v=20261119\" alt=\"视觉输入素材 25\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-01.webp?v=20261119\" alt=\"视觉输入素材 01\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-02.webp?v=20261119\" alt=\"视觉输入素材 02\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-03.webp?v=20261119\" alt=\"视觉输入素材 03\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-04.webp?v=20261119\" alt=\"视觉输入素材 04\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-05.webp?v=20261119\" alt=\"视觉输入素材 05\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-06.webp?v=20261119\" alt=\"视觉输入素材 06\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-07.webp?v=20261119\" alt=\"视觉输入素材 07\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-08.webp?v=20261119\" alt=\"视觉输入素材 08\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-09.webp?v=20261119\" alt=\"视觉输入素材 09\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-10.webp?v=20261119\" alt=\"视觉输入素材 10\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-11.webp?v=20261119\" alt=\"视觉输入素材 11\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-12.webp?v=20261119\" alt=\"视觉输入素材 12\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-13.webp?v=20261119\" alt=\"视觉输入素材 13\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-14.webp?v=20261119\" alt=\"视觉输入素材 14\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-15.webp?v=20261119\" alt=\"视觉输入素材 15\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-16.webp?v=20261119\" alt=\"视觉输入素材 16\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-17.webp?v=20261119\" alt=\"视觉输入素材 17\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-18.webp?v=20261119\" alt=\"视觉输入素材 18\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-19.webp?v=20261119\" alt=\"视觉输入素材 19\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-20.webp?v=20261119\" alt=\"视觉输入素材 20\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-21.webp?v=20261119\" alt=\"视觉输入素材 21\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-22.webp?v=20261119\" alt=\"视觉输入素材 22\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-23.webp?v=20261119\" alt=\"视觉输入素材 23\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-24.webp?v=20261119\" alt=\"视觉输入素材 24\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-25.webp?v=20261119\" alt=\"视觉输入素材 25\" /></div>\n              </div></div>\n              <div class=\"home-marquee-row marquee-left\"><div class=\"home-marquee-track\">\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-25.webp?v=20261119\" alt=\"视觉输入素材 25\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-24.webp?v=20261119\" alt=\"视觉输入素材 24\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-23.webp?v=20261119\" alt=\"视觉输入素材 23\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-22.webp?v=20261119\" alt=\"视觉输入素材 22\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-21.webp?v=20261119\" alt=\"视觉输入素材 21\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-20.webp?v=20261119\" alt=\"视觉输入素材 20\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-19.webp?v=20261119\" alt=\"视觉输入素材 19\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-18.webp?v=20261119\" alt=\"视觉输入素材 18\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-17.webp?v=20261119\" alt=\"视觉输入素材 17\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-16.webp?v=20261119\" alt=\"视觉输入素材 16\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-15.webp?v=20261119\" alt=\"视觉输入素材 15\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-14.webp?v=20261119\" alt=\"视觉输入素材 14\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-13.webp?v=20261119\" alt=\"视觉输入素材 13\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-12.webp?v=20261119\" alt=\"视觉输入素材 12\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-11.webp?v=20261119\" alt=\"视觉输入素材 11\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-10.webp?v=20261119\" alt=\"视觉输入素材 10\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-09.webp?v=20261119\" alt=\"视觉输入素材 09\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-08.webp?v=20261119\" alt=\"视觉输入素材 08\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-07.webp?v=20261119\" alt=\"视觉输入素材 07\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-06.webp?v=20261119\" alt=\"视觉输入素材 06\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-05.webp?v=20261119\" alt=\"视觉输入素材 05\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-04.webp?v=20261119\" alt=\"视觉输入素材 04\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-03.webp?v=20261119\" alt=\"视觉输入素材 03\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-02.webp?v=20261119\" alt=\"视觉输入素材 02\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-01.webp?v=20261119\" alt=\"视觉输入素材 01\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-25.webp?v=20261119\" alt=\"视觉输入素材 25\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-24.webp?v=20261119\" alt=\"视觉输入素材 24\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-23.webp?v=20261119\" alt=\"视觉输入素材 23\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-22.webp?v=20261119\" alt=\"视觉输入素材 22\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-21.webp?v=20261119\" alt=\"视觉输入素材 21\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-20.webp?v=20261119\" alt=\"视觉输入素材 20\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-19.webp?v=20261119\" alt=\"视觉输入素材 19\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-18.webp?v=20261119\" alt=\"视觉输入素材 18\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-17.webp?v=20261119\" alt=\"视觉输入素材 17\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-16.webp?v=20261119\" alt=\"视觉输入素材 16\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-15.webp?v=20261119\" alt=\"视觉输入素材 15\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-14.webp?v=20261119\" alt=\"视觉输入素材 14\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-13.webp?v=20261119\" alt=\"视觉输入素材 13\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-12.webp?v=20261119\" alt=\"视觉输入素材 12\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-11.webp?v=20261119\" alt=\"视觉输入素材 11\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-10.webp?v=20261119\" alt=\"视觉输入素材 10\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-09.webp?v=20261119\" alt=\"视觉输入素材 09\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-08.webp?v=20261119\" alt=\"视觉输入素材 08\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-07.webp?v=20261119\" alt=\"视觉输入素材 07\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-06.webp?v=20261119\" alt=\"视觉输入素材 06\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-05.webp?v=20261119\" alt=\"视觉输入素材 05\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-04.webp?v=20261119\" alt=\"视觉输入素材 04\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-03.webp?v=20261119\" alt=\"视觉输入素材 03\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-02.webp?v=20261119\" alt=\"视觉输入素材 02\" /></div>\n                <div class=\"home-marquee-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/visual-input-01.webp?v=20261119\" alt=\"视觉输入素材 01\" /></div>\n              </div></div>\n            </section>\n\n            <section class=\"home-intro-section\" id=\"home-about\"><div class=\"home-section-label\"><span>02 / WHY THIS COMMUNITY</span><span>把复杂创作拆成可执行动作</span></div><div class=\"home-intro-grid\"><h2>不只学习工具<br /><em>更要学会做出判断</em></h2><div class=\"home-intro-copy\"><p>好的 AIGC 作品来自目标、视觉语言、工具分工和迭代方法的共同作用。这里把图片、视频、提示词、分镜、角色、场景和风格放进一条连续路径。</p><p>你可以从一个具体目标开始，先看懂，再复制，最后把方法变成自己的创作习惯。</p><a class=\"text-link\" href=\"#home-path\">浏览学习路径 <span>↗</span></a></div></div></section>\n\n            <section class=\"home-path-section\" id=\"home-path\"><div class=\"home-section-label\"><span>03 / LEARNING PATH</span><span>从 START 到 ADVANCED</span></div><div class=\"home-section-heading\"><h2>你的创作路径</h2><p>8 个模块，按学习难度自然递进。</p></div><div class=\"path-grid\">\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">1</span><span class=\"path-stage\">START</span></div>\n                <div class=\"path-card-main path-card-main-text\"><div class=\"path-card-copy\"><h3>新手起步</h3><p>先建立创作地图，理解从目标到结果的基本路径。</p></div></div>\n                <div class=\"path-card-foot\"><span>建立基础</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">2</span><span class=\"path-stage\">TOOLS</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>AI工具全景与玩法</h3><p>认识图片、视频和辅助工具，学会按目标做选择。</p></div><div class=\"path-card-gallery\" aria-label=\"AI工具全景与玩法展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-02-01.webp?v=20261119\" alt=\"AI工具全景与玩法展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-02-02.webp?v=20261119\" alt=\"AI工具全景与玩法展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-02-03.webp?v=20261119\" alt=\"AI工具全景与玩法展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-02-04.webp?v=20261119\" alt=\"AI工具全景与玩法展示图 04\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>工具判断</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">3</span><span class=\"path-stage\">VISION</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>视觉基础与图片生成</h3><p>从主体、空间、构图、色彩和光影理解画面。</p></div><div class=\"path-card-gallery\" aria-label=\"视觉基础与图片生成展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-03-01.webp?v=20261119\" alt=\"视觉基础与图片生成展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-03-02.webp?v=20261119\" alt=\"视觉基础与图片生成展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-03-03.webp?v=20261119\" alt=\"视觉基础与图片生成展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-03-04.webp?v=20261119\" alt=\"视觉基础与图片生成展示图 04\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>视觉基础</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">4</span><span class=\"path-stage\">MOTION</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>AI视频与导演思维</h3><p>把静态画面推进成动作、镜头和连续片段。</p></div><div class=\"path-card-gallery\" aria-label=\"AI视频与导演思维展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-04-01.webp?v=20261119\" alt=\"AI视频与导演思维展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-04-02.webp?v=20261119\" alt=\"AI视频与导演思维展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-04-03.webp?v=20261119\" alt=\"AI视频与导演思维展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-04-04.webp?v=20261119\" alt=\"AI视频与导演思维展示图 04\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>镜头表达</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">5</span><span class=\"path-stage\">PROMPT</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>提示词库</h3><p>多种持续更新的skill，覆盖图片、视频与创作流程，帮助你整理出可复用的指令。</p></div><div class=\"path-card-gallery\" aria-label=\"提示词库展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-05-01.webp?v=20261119\" alt=\"提示词库展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-05-02.webp?v=20261119\" alt=\"提示词库展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-05-03.webp?v=20261119\" alt=\"提示词库展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-05-04.webp?v=20261119\" alt=\"提示词库展示图 04\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-05-05.webp?v=20261119\" alt=\"提示词库展示图 05\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>表达复用</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-method\">\n                <div class=\"path-card-top\"><span class=\"path-index\">6</span><span class=\"path-stage\">METHOD</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>AIGC影像创作方法论</h3><p>建立从 brief、生成、迭代到交付的工作闭环。</p></div><div class=\"path-card-gallery\" aria-label=\"AIGC影像创作方法论展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-01.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-02.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-03.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-04.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 04\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-05.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 05\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-06-06.webp?v=20261119\" alt=\"AIGC影像创作方法论展示图 06\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>稳定工作流</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-cases\">\n                <div class=\"path-card-top\"><span class=\"path-index\">7</span><span class=\"path-stage\">STYLE</span></div>\n                <div class=\"path-card-main\"><div class=\"path-card-copy\"><h3>视觉风格与画面语言</h3><p>找到可持续的视觉方向，提升系列作品的一致性。</p></div><div class=\"path-card-gallery\" aria-label=\"视觉风格与画面语言展示图片\"><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-07-01.webp?v=20261119\" alt=\"视觉风格与画面语言展示图 01\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-07-02.webp?v=20261119\" alt=\"视觉风格与画面语言展示图 02\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-07-03.webp?v=20261119\" alt=\"视觉风格与画面语言展示图 03\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-07-04.webp?v=20261119\" alt=\"视觉风格与画面语言展示图 04\" /></div><div class=\"path-gallery-tile\"><img loading=\"lazy\" decoding=\"async\" src=\"media/path-07-05.webp?v=20261119\" alt=\"视觉风格与画面语言展示图 05\" /></div></div></div>\n                <div class=\"path-card-foot\"><span>风格建立</span></div>\n              </a>\n              <a class=\"path-card\" href=\"#home-resources\">\n                <div class=\"path-card-top\"><span class=\"path-index\">8</span><span class=\"path-stage\">CASES</span></div>\n                <div class=\"path-card-main path-card-main-text\"><div class=\"path-card-copy\"><h3>创作资源</h3><p>把前面的工具、视觉与方法串联起来，形成可持续的创作流程。</p></div></div>\n                <div class=\"path-card-foot\"><span>深入实践</span></div>\n              </a>\n            </div></section>\n\n            <section class=\"home-method-section\" id=\"home-method\"><div class=\"home-section-label\"><span>04 / WORKFLOW</span><span>每次创作都能复用</span></div><div class=\"method-heading\"><h2>从想法到成片</h2><p>把一次灵感拆成四个阶段，减少盲目试错。</p></div><div class=\"method-grid\"><div class=\"method-step\"><span>01</span><h3>理解目标</h3><p>明确受众、画幅、交付形式和最不能出错的内容。</p></div><div class=\"method-step\"><span>02</span><h3>建立视觉</h3><p>拆解主体、空间、构图、色彩、材质、光影与动作。</p></div><div class=\"method-step\"><span>03</span><h3>生成与迭代</h3><p>选择工具，一次只调整一个变量，保留每轮结果。</p></div><div class=\"method-step\"><span>04</span><h3>验收与沉淀</h3><p>用检查点复盘，把有效提示词、案例和资产留下来。</p></div></div></section>\n\n            <section class=\"home-cases-section\" id=\"home-cases\"><div class=\"home-section-label\"><span>05 / SELECTED CASES</span><span>从真实案例中学习</span></div><div class=\"home-section-heading\"><h2>创作案例（持续更新）</h2><p>拆解技能特效、AI 打斗视频与人物设计的实际过程。</p></div><div class=\"case-grid\">\n              <div class=\"case-card\"><div class=\"case-card-head\"><span class=\"case-number\">01</span><span class=\"case-type\">技能特效</span><span class=\"case-arrow\">✦</span></div><div class=\"case-card-copy\"><h3>AIGC——技能特效篇</h3><p>拆解技能特效的视觉构成、能量形态与镜头表现，让创意更容易落地。</p></div><div class=\"case-card-media\"><img loading=\"lazy\" decoding=\"async\" src=\"media/case-cover-skill.webp?v=20261119\" alt=\"AIGC——技能特效篇\" /></div></div>\n              <div class=\"case-card\"><div class=\"case-card-head\"><span class=\"case-number\">02</span><span class=\"case-type\">视频拆解</span><span class=\"case-arrow\">✦</span></div><div class=\"case-card-copy\"><h3>AI打斗视频拆解</h3><p>从角色动作、力量反馈和镜头节奏出发，拆解 AI 打斗视频的制作思路。</p></div><div class=\"case-card-media\"><img loading=\"lazy\" decoding=\"async\" src=\"media/case-cover-fight.webp?v=20261119\" alt=\"AI打斗视频拆解\" /></div></div>\n              <div class=\"case-card\"><div class=\"case-card-head\"><span class=\"case-number\">03</span><span class=\"case-type\">人物设计</span><span class=\"case-arrow\">✦</span></div><div class=\"case-card-copy\"><h3>人物设计流程</h3><p>从人物定位、造型设计到视觉统一，梳理角色创作的完整流程。</p></div><div class=\"case-card-media\"><img loading=\"lazy\" decoding=\"async\" src=\"media/case-cover-character.webp?v=20261119\" alt=\"人物设计流程\" /></div></div>\n            </div></section>\n\n            <section class=\"home-resources-section\" id=\"home-resources\">\n              <div class=\"resource-hero\">\n                <p class=\"landing-kicker\">06 / CREATION COMMUNITY</p>\n                <h2>把方法<br />留在身边<br /><span>让创作有迹可循</span></h2>\n                <p>一个围绕 AIGC 影像创作整理的资源型社群。这里收集 AI 出图技巧、AI 视频拆解、提示词与创作资源，也保留影视创作、美学、分镜设计和剧本创作等资料包。群公告按主题整理好入口，需要时可以回来查一查、试一试，再继续完成自己的作品。</p>\n                <div class=\"resource-tags\" aria-label=\"社群内容分类\"><span>出图技巧</span><span>视频拆解</span><span>提示词资源</span><span>影视资料包</span></div>\n                <a class=\"landing-primary\" href=\"#home-path\">先看看创作路径 <span>↗</span></a>\n              </div>\n              <div class=\"resource-stats\" aria-label=\"社群资源索引\">\n                <div><span class=\"resource-card-index\">01</span><div class=\"resource-card-copy\"><strong>AI 出图</strong><span>构图、光影、风格与提示词，边看边试。</span></div><span class=\"resource-card-tag\">IMAGE / PRACTICE</span></div>\n                <div><span class=\"resource-card-index\">02</span><div class=\"resource-card-copy\"><strong>AI 视频</strong><span>镜头、动作、节奏与连续性的制作拆解。</span></div><span class=\"resource-card-tag\">VIDEO / BREAKDOWN</span></div>\n                <div><span class=\"resource-card-index\">03</span><div class=\"resource-card-copy\"><strong>创作资源</strong><span>Skill、图片提示词、视频提示词与 MJ 风格参数。</span></div><span class=\"resource-card-tag\">TOOLS / PROMPTS</span></div>\n                <div><span class=\"resource-card-index\">04</span><div class=\"resource-card-copy\"><strong>AIGC 资料包</strong><span>影视创作、美学、分镜设计与剧本创作等资料。</span></div><span class=\"resource-card-tag\">FILM / STUDY PACK</span></div>\n              </div>\n            </section>\n            <footer class=\"landing-footer\"><span>LUCIAN AIGC / CREATION COMMUNITY</span><span>MAKE IDEAS MOVE.</span><a href=\"#home-hero\">回到顶部 ↑</a></footer>\n          </div>";

function toggleStandaloneHomeStyles(enabled) {
  const style = document.getElementById("standalone-home-style");
  if (style) style.disabled = !enabled;
}
const page = document.getElementById("page");
const sideNav = document.getElementById("side-nav");
const searchInput = document.getElementById("search-input");
const crumbCurrent = document.getElementById("crumb-current");
const toast = document.getElementById("toast");
const sidebar = document.querySelector(".sidebar");

const CONTENT_PLAN = [
  { id: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", title: "AIGC 创作空间", category: "创作空间", parentId: "", depth: 0, order: 1 },
  { id: "doc-KaEkwOp4hi9gbckzzlOc10EJnNb", title: "00｜新手起步", category: "00｜新手起步", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 2 },
  { id: "doc-Aqs5wqxz0im2LAkDhsQcGEJCnQb", parentId: "doc-KaEkwOp4hi9gbckzzlOc10EJnNb", depth: 2, order: 3 },
  { id: "doc-P5cEw6ibBiuOn5kqy1Jc1rx8nmg", parentId: "doc-KaEkwOp4hi9gbckzzlOc10EJnNb", depth: 2, order: 4 },
  { id: "doc-CSD6wSxsYilXSHkHkkYc9MP3nBc", parentId: "doc-KaEkwOp4hi9gbckzzlOc10EJnNb", depth: 2, order: 5 },
  { id: "doc-ZahNwxKLLiFMf4kdVNRcQxCvnZp", title: "01｜工具全景与玩法", category: "01｜工具全景与玩法", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 6 },
  { id: "doc-B15UwqhjRi4W3qkuk0vc8ghsnSg", parentId: "doc-ZahNwxKLLiFMf4kdVNRcQxCvnZp", depth: 2, order: 7 },
  { id: "doc-OW1RwtIWPijjwmk9SamcZKlXneb", parentId: "doc-B15UwqhjRi4W3qkuk0vc8ghsnSg", depth: 3, order: 8 },
  { id: "doc-HW6FwdbwqiwfIUkHTugcoECvnOc", parentId: "doc-B15UwqhjRi4W3qkuk0vc8ghsnSg", depth: 3, order: 9 },
  { id: "doc-R0nawfGkqivwF7kJveRcaDgMnEf", parentId: "doc-B15UwqhjRi4W3qkuk0vc8ghsnSg", depth: 3, order: 10 },
  { id: "doc-XkVNwym1piIXWdkVAiScUgsNnBc", parentId: "doc-B15UwqhjRi4W3qkuk0vc8ghsnSg", depth: 3, order: 11 },
  { id: "doc-M6RpwKmMdi12NJkMEtOc6fgXnSg", parentId: "doc-ZahNwxKLLiFMf4kdVNRcQxCvnZp", depth: 2, order: 12 },
  { id: "doc-W57FwKHWxiuLZPkhtHWcP29TnUl", parentId: "doc-M6RpwKmMdi12NJkMEtOc6fgXnSg", depth: 3, order: 13 },
  { id: "doc-ITHewlzlhizGh5kT8q0cTCbGn7g", parentId: "doc-M6RpwKmMdi12NJkMEtOc6fgXnSg", depth: 3, order: 14 },
  { id: "doc-DKyMwvi5AijV87kyCa3cHpNcnx1", parentId: "doc-ZahNwxKLLiFMf4kdVNRcQxCvnZp", depth: 2, order: 15 },
  { id: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", title: "02｜视觉基础与图片生成", category: "02｜视觉基础与图片生成", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 16 },
  { id: "doc-VonEwWinvildwbkjXMocc0jYnuK", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 17 },
  { id: "doc-GgUawaUx0iurRqkWFr8cDop2nH3", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 18 },
  { id: "doc-DThlwz47LivkaHkftk1cBExhnNi", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 19 },
  { id: "doc-JoUZw0iriiW7aGkYupncMnHCnAd", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 20 },
  { id: "doc-Ey4uwsf4Likp6jks6IacjjB0nzc", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 21 },
  { id: "doc-Eyi5ww2GiiBmc8kVmdZcZSDZnWk", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 22 },
  { id: "doc-GPgpw9aGHiO4mIkJCSscRVfbnCg", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 23 },
  { id: "doc-P98KwYFkbiYD7gkw5vocyOe2nLh", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 24 },
  { id: "doc-MZYYwTan8iKtftkCZgjc2z3Znzc", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 25 },
  { id: "doc-IdRowZILtiU8zkkm0uPcyGHnnWc", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 26 },
  { id: "doc-XsaNwWapjiL84LkBiXecLdK6nAc", parentId: "doc-B12Mw8QdDi9IgskpuH3c1y4xnFh", depth: 2, order: 27 },
  { id: "doc-USRpwcMOOind8gkrm8YcAhW9nk4", title: "03｜视频生成与导演思维", category: "03｜视频生成与导演思维", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 28 },
  { id: "doc-P4Iqwsr71ibFp7kdy9LcahV4nth", parentId: "doc-USRpwcMOOind8gkrm8YcAhW9nk4", depth: 2, order: 29 },
  { id: "doc-RBIFw015iiqG9vkdcOscpnCKntc", parentId: "doc-USRpwcMOOind8gkrm8YcAhW9nk4", depth: 2, order: 30 },
  { id: "doc-A6oywoySGih6Dykp2VEcuAo6nwh", parentId: "doc-USRpwcMOOind8gkrm8YcAhW9nk4", depth: 2, order: 31 },
  { id: "doc-V3LdwQNRbiK0NwkE7nFcfpt2nPA", title: "04｜提示词库与技能", category: "04｜提示词库与技能", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 32 },
  { id: "doc-AZScwE861iOKCOkB3VNcIxWPnhc", parentId: "doc-V3LdwQNRbiK0NwkE7nFcfpt2nPA", depth: 2, order: 33 },
  { id: "doc-RZFPw2hT4ioxV9k0srQcxX8Znvg", parentId: "doc-V3LdwQNRbiK0NwkE7nFcfpt2nPA", depth: 2, order: 34 },
  { id: "doc-PWXxwc52FiPQHlk2Xx8crzvlnzc", parentId: "doc-RZFPw2hT4ioxV9k0srQcxX8Znvg", depth: 3, order: 35 },
  { id: "doc-IXmmwzXLIiJYp0kAutQcxZ4Pn3f", parentId: "doc-RZFPw2hT4ioxV9k0srQcxX8Znvg", depth: 3, order: 36 },
  { id: "doc-UKNywWSKiixtJRkdN5eccaUOnSe", parentId: "doc-RZFPw2hT4ioxV9k0srQcxX8Znvg", depth: 3, order: 37 },
  { id: "doc-EJ5kwHf7aivUNAkp42pcPIYxnzb", title: "05｜AIGC影像创作方法", category: "05｜AIGC影像创作方法", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 38 },
  { id: "doc-LLp6w8MNYiijPZka4WVc0xXFnVh", parentId: "doc-EJ5kwHf7aivUNAkp42pcPIYxnzb", depth: 2, order: 39 },
  { id: "doc-MfZAwGTx0iUJTEkuv9McBfTrn6g", parentId: "doc-EJ5kwHf7aivUNAkp42pcPIYxnzb", depth: 2, order: 40 },
  { id: "doc-THldw2mPEipPnwkj6cYcYOy1nog", title: "06｜视觉风格与画面语言", category: "06｜视觉风格与画面语言", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 41 },
  { id: "doc-WqLtwwW82i0i22kpa9McNwxdnVd", parentId: "doc-THldw2mPEipPnwkj6cYcYOy1nog", depth: 2, order: 42 },
  { id: "doc-ZNBxwFGpwi2GMfkf3ducyP19ndf", parentId: "doc-THldw2mPEipPnwkj6cYcYOy1nog", depth: 2, order: 43 },
  { id: "doc-Z92ewqJaQi4twukyTxTc6sP4nph", parentId: "doc-THldw2mPEipPnwkj6cYcYOy1nog", depth: 2, order: 44 },
  { id: "doc-Dulewx6EmitLqZkdRXkcBM5XnWv", title: "07｜案例与资源", category: "07｜案例与资源", parentId: "doc-VMBRwZpxqijWdwkNJqac2hROnPb", depth: 1, order: 45, hasChildren: true },
  { id: "doc-AvWnwsD9niDHbekqhDXcMxU7njd", title: "案例｜技能特效篇", category: "07｜案例与资源", parentId: "doc-Dulewx6EmitLqZkdRXkcBM5XnWv", depth: 2, order: 46 },
  { id: "doc-JVbYwko5AimOOckqhhScvSYPnvb", title: "案例｜AI打斗视频拆解", category: "07｜案例与资源", parentId: "doc-Dulewx6EmitLqZkdRXkcBM5XnWv", depth: 2, order: 47 },
  { id: "doc-PHK1wZWr1iZ25vkeHYncd97HnY9", title: "流程｜人物设计", category: "07｜案例与资源", parentId: "doc-Dulewx6EmitLqZkdRXkcBM5XnWv", depth: 2, order: 48 },
  { id: "doc-UD7HwKiIri6qvTkBSJBcUdhAnsc", title: "案例｜打斗 Skill V3.1", category: "07｜案例与资源", parentId: "doc-Dulewx6EmitLqZkdRXkcBM5XnWv", depth: 2, order: 49 }
];

function cleanCopy(value) {
  return String(value ?? "")
    .replace(/LucianAIGC/g, "AIGC")
    .replace(/Lucian/g, "")
    .replace(/飞书知识库/g, "创作内容")
    .replace(/飞书云文档/g, "创作内容")
    .replace(/飞书/g, "创作平台")
    .replace(/镜像/g, "独立版本")
    .replace(/私有/g, "专属")
    .replace(/文档/g, "内容")
    .replace(/知识空间/g, "创作空间")
    .replace(/知识库/g, "创作库")
    .replace(/来自创作平台的\s*/g, "来自")
    .replace(/完整网站独立版本/g, "完整网站");
}

function applyContentPlan(data) {
  const byId = new Map((data.documents || []).map((doc) => [doc.id, doc]));
  CONTENT_PLAN.forEach((item) => {
    const doc = byId.get(item.id);
    if (doc) Object.assign(doc, item);
  });
  data.spaceTitle = "AIGC 创作空间";
  return data;
}

function escapeHtml(value) {
  return cleanCopy(value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

function inline(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return text;
}

function attr(attrs, name) {
  const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i"));
  return match ? match[1] : "";
}

function videoMarkup(token, name, assets) {
  const asset = assets[token];
  if (!asset) return `<div class="media-missing">${escapeHtml(name || "视频素材")}暂时不可用</div>`;
  if (Array.isArray(asset)) {
    return `<video class="chunked-video" controls preload="none" data-parts='${escapeHtml(JSON.stringify(asset))}'></video><figcaption class="media-caption">${escapeHtml(name)} · 点击视频开始加载</figcaption>`;
  }
  return `<video controls preload="metadata" src="${escapeHtml(asset)}"></video><figcaption class="media-caption">${escapeHtml(name)}</figcaption>`;
}

function imageMarkup(token, altText, remote, assets) {
  const source = assets[token];
  if (!source || Array.isArray(source)) return `<div class="media-missing">${escapeHtml(altText || "图片素材")}暂时不可用</div>`;
  return `<figure class="media-card"><img loading="lazy" src="${escapeHtml(source)}" alt="${escapeHtml(altText || "创作图片")}" /><figcaption class="media-caption">${escapeHtml(altText || "图片素材")}</figcaption></figure>`;
}

function formatBytes(value) {
  const size = Number(value || 0);
  if (!size) return "大小未知";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
  return `${(size / 1024 / 1024 / 1024).toFixed(1)} GB`;
}

function isArchiveMime(mime, name) {
  return /zip|compressed|archive/i.test(String(mime || "")) || /\.zip$/i.test(String(name || ""));
}

function archiveMarkup(token, name, size, assets) {
  const source = assets[token] || "";
  const download = source
    ? `<a class="archive-download" href="${escapeHtml(source)}" download="${escapeHtml(name || "skill.zip")}">下载</a>`
    : `<button class="archive-download" type="button" disabled>暂不可用</button>`;
  return `<article class="archive-card" data-archive-token="${escapeHtml(token)}"><div class="archive-icon">ZIP</div><div class="archive-copy"><h3>${escapeHtml(name || "Skill 压缩包")}</h3><p>${formatBytes(size)} · 站内资源</p></div><div class="archive-actions">${download}<button class="archive-remove" type="button" data-remove-archive="${escapeHtml(token)}">删除</button></div></article>`;
}

function splitTableRow(row) {
  return row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isTableSeparator(line) {
  return /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(line.trim());
}

function renderTable(headerLine, rowLines) {
  const headers = splitTableRow(headerLine);
  const rows = rowLines.map(splitTableRow);
  return `<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${headers.map((_, index) => `<td>${inline(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderLoosePipeTable(rowLines) {
  const rows = rowLines.map(splitTableRow).filter((row) => row.some((cell) => cell.trim()));
  if (!rows.length) return "";
  const columnCount = Math.max(...rows.map((row) => row.length));
  return `<div class="table-wrap loose-table"><table><tbody>${rows.map((row) => `<tr>${Array.from({ length: columnCount }, (_, index) => `<td>${inline(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderMarkdown(markdown, assets) {
  let source = String(markdown || "").replace(/\r/g, "").replace(/[\uFEFF\u200B\u200C\u200D]/g, "");
  source = source.replace(/<!--[\s\S]*?-->/g, "");
  source = source.replace(/^<title>.*?<\/title>\s*/i, "");
  source = source.replace(/<sub-page-list\b[^>]*>[\s\S]*?<\/sub-page-list>/gi, "\n");
  source = source.replace(/<\/?sub-page\b[^>]*\/?>/gi, "");
  const blocks = [];
  const marker = (html) => { const id = `@@BLOCK_${blocks.length}@@`; blocks.push(html); return `\n${id}\n`; };

  source = source.replace(/<figure[^>]*>\s*<source([^>]*)\/?\s*>\s*<\/figure>/gis, (_, attrs) => {
    const token = attr(attrs, "token");
    const name = attr(attrs, "name") || "视频案例";
    const mime = attr(attrs, "mime");
    const size = attr(attrs, "size");
    if (isArchiveMime(mime, name)) return marker(archiveMarkup(token, name, size, assets));
    if (!mime.startsWith("video/")) return "";
    return marker(`<figure class="media-card">${videoMarkup(token, name, assets)}</figure>`);
  });
  source = source.replace(/<source([^>]*)\/?\s*>/gis, (_, attrs) => {
    const mime = attr(attrs, "mime");
    const token = attr(attrs, "token");
    const name = attr(attrs, "name") || "视频案例";
    const size = attr(attrs, "size");
    if (isArchiveMime(mime, name)) return marker(archiveMarkup(token, name, size, assets));
    if (!mime.startsWith("video/")) return "";
    return marker(`<figure class="media-card">${videoMarkup(token, name, assets)}</figure>`);
  });
  source = source.replace(/<img([^>]*)\/?\s*>/gis, (_, attrs) => {
    const token = attr(attrs, "token");
    const remote = attr(attrs, "src");
    const altText = attr(attrs, "alt");
    if (!token && !remote) return "";
    const remoteToken = token || (remote.match(/\/file\/([A-Za-z0-9_-]+)/) || [])[1] || "";
    return marker(imageMarkup(remoteToken, altText, remote, assets));
  });
  source = source.replace(/!\[([^\]]*)\]\((https?:\/\/feishu\.cn\/file\/([^\)]+))\)/g, (_, altText, remote, token) => marker(imageMarkup(token, altText, remote, assets)));
  source = source.replace(/https?:\/\/[^\s)"']*feishu\.cn[^\s)"']*/gi, "");
  source = source.replace(/<br\s*\/?\s*>/gi, "\n");
  source = source.replace(/<callout[^>]*>/gi, "\n@@CALLOUT_OPEN@@\n").replace(/<\/callout>/gi, "\n@@CALLOUT_CLOSE@@\n");
  source = source.replace(/<grid[^>]*>/gi, "\n@@GRID_OPEN@@\n").replace(/<\/grid>/gi, "\n@@GRID_CLOSE@@\n");
  source = source.replace(/<column[^>]*>/gi, "\n@@COLUMN_OPEN@@\n").replace(/<\/column>/gi, "\n@@COLUMN_CLOSE@@\n");
  source = source.replace(/<\/?(?:figure|table|tbody|thead|tr|td|th|p|div|span|docx|wiki|page|page-list|mention|link-preview)\b[^>]*>/gi, "");
  source = source.replace(/<\/?(?:sub-page|sub-page-list)\b[^>]*>/gi, "");

  const lines = source.split("\n");
  let html = "";
  let paragraph = [];
  let list = null;
  let inCallout = false;
  let inGrid = false;
  let inCode = false;
  let codeLanguage = "";
  let codeLines = [];
  const flushParagraph = () => {
    if (paragraph.length) {
      html += `<p>${paragraph.join("<br />")}</p>`;
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) { html += `</${list}>`; list = null; }
  };
  const flushCode = () => {
    html += `<pre><code${codeLanguage ? ` class="language-${escapeHtml(codeLanguage)}"` : ""}>${escapeHtml(codeLines.join("\n"))}</code></pre>`;
    codeLines = [];
    codeLanguage = "";
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();
    if (line.startsWith("```") && !inCode) {
      flushParagraph();
      flushList();
      inCode = true;
      codeLanguage = line.slice(3).trim();
      continue;
    }
    if (inCode) {
      if (line.startsWith("```")) {
        inCode = false;
        flushCode();
      } else {
        codeLines.push(rawLine);
      }
      continue;
    }
    const blockMatch = line.match(/^@@BLOCK_(\d+)@@$/);
    if (blockMatch) { flushParagraph(); flushList(); html += blocks[Number(blockMatch[1])]; continue; }
    if (line === "@@CALLOUT_OPEN@@") { flushParagraph(); flushList(); html += `<div class="callout"><div class="callout-label">✦</div>`; inCallout = true; continue; }
    if (line === "@@CALLOUT_CLOSE@@") { flushParagraph(); flushList(); html += `</div>`; inCallout = false; continue; }
    if (line === "@@GRID_OPEN@@") { flushParagraph(); flushList(); html += `<div class="media-grid">`; inGrid = true; continue; }
    if (line === "@@GRID_CLOSE@@") { flushParagraph(); flushList(); html += `</div>`; inGrid = false; continue; }
    if (line === "@@COLUMN_OPEN@@" || line === "@@COLUMN_CLOSE@@") { flushParagraph(); flushList(); continue; }
    if (!line) { flushParagraph(); flushList(); continue; }

    const nextLine = lines[index + 1] ? lines[index + 1].trim() : "";
    if (line.includes("|") && isTableSeparator(nextLine)) {
      flushParagraph();
      flushList();
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes("|") && lines[index].trim()) {
        rows.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      html += renderTable(line, rows);
      continue;
    }

    if (/^\|.*\|$/.test(line)) {
      flushParagraph();
      flushList();
      const rowLines = [line];
      let cursor = index + 1;
      while (cursor < lines.length && /^\|.*\|$/.test(lines[cursor].trim()) && !isTableSeparator(lines[cursor].trim())) {
        rowLines.push(lines[cursor].trim());
        cursor += 1;
      }
      html += renderLoosePipeTable(rowLines);
      index = cursor - 1;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) { flushParagraph(); flushList(); const level = heading[1].length; html += `<h${level}>${inline(heading[2])}</h${level}>`; continue; }
    const ordered = line.match(/^\d+[、.)]\s*(.+)$/);
    const unordered = line.match(/^[\-*]\s+(.+)$/);
    if (ordered || unordered) {
      flushParagraph();
      const type = ordered ? "ol" : "ul";
      if (list !== type) { flushList(); list = type; html += `<${type}>`; }
      html += `<li>${inline((ordered || unordered)[1])}</li>`;
      continue;
    }
    if (line.startsWith(">")) { flushParagraph(); flushList(); html += `<blockquote>${inline(line.replace(/^>\s?/, ""))}</blockquote>`; continue; }
    paragraph.push(inline(line.replace(/  $/, "")));
  }
  if (inCode) flushCode();
  flushParagraph();
  flushList();
  return html;
}

function docsInOrder() {
  return [...(state.data.documents || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
}

function childrenOf(parentId) {
  return docsInOrder().filter((doc) => doc.parentId === parentId);
}

function sectionAnchor(id) {
  return `embedded-${id}`;
}

function stripDuplicateHeading(markdown, title) {
  const lines = String(markdown || "").replace(/\r/g, "").split("\n");
  const expected = String(title || "").replace(/\*\*/g, "").trim();
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;
    if (/^<title>.*<\/title>$/i.test(line)) continue;
    const heading = line.match(/^#{1,2}\s+(.+)$/);
    if (heading && heading[1].replace(/\*\*/g, "").trim() === expected) lines.splice(index, 1);
    break;
  }
  return lines.join("\n");
}

function renderChapterMap(children, parentId, inlineChildren = true) {
  if (!children.length) return "";
  const links = children.map((child, index) => {
    const href = inlineChildren ? `#doc=${encodeURIComponent(parentId)}&section=${encodeURIComponent(sectionAnchor(child.id))}` : `#doc=${encodeURIComponent(child.id)}`;
    return `<a class="chapter-link" href="${href}"><span class="chapter-number">${String(index + 1).padStart(2, "0")}</span><span class="chapter-link-copy"><strong>${escapeHtml(child.title)}</strong><small>${escapeHtml(child.summary || "打开这一节，继续阅读方法与案例")}</small></span><span class="chapter-link-arrow">↗</span></a>`;
  }).join("");
  return `<section class="chapter-map"><div class="chapter-map-head"><div><p class="chapter-kicker">READING PATH</p><h2>本章路线</h2><p>每个子章节都和正文、图片、视频与案例关联在同一阅读页面。</p></div><span class="chapter-map-count">${children.length} 个子章节</span></div><div class="chapter-map-grid">${links}</div></section>`;
}

function renderEmbeddedDoc(doc, level, ancestors) {
  const lineage = ancestors || [];
  if (lineage.includes(doc.id)) return "";
  const children = childrenOf(doc.id);
  const body = renderMarkdown(stripDuplicateHeading(doc.markdown, doc.title), state.data.assets || {});
  const childContent = children.length ? `<div class="embedded-children">${renderChapterMap(children, doc.id)}${children.map((child) => renderEmbeddedDoc(child, (level || 1) + 1, [...lineage, doc.id])).join("")}</div>` : "";
  const mediaCount = (doc.imageCount || 0) + (doc.videoCount || 0);
  return `<section id="${sectionAnchor(doc.id)}" class="embedded-doc embedded-level-${Math.min(level || 1, 3)}"><header class="embedded-head"><div><span class="tag">${escapeHtml(doc.category || "创作章节")}</span><h2>${escapeHtml(doc.title)}</h2><p>${escapeHtml(doc.summary || "")}</p></div><div class="embedded-meta"><span>${mediaCount ? `${mediaCount} 项素材` : "正文"}</span>${children.length ? `<span>${children.length} 个下级</span>` : ""}</div></header><div class="article-body embedded-body">${body}</div>${childContent}</section>`;
}

function homeDocs() {
  return docsInOrder().filter((doc) => doc.depth === 1);
}

function filteredDocs() {
  const query = state.query.trim().toLowerCase();
  if (!query) return homeDocs();
  return docsInOrder().filter((doc) => `${doc.title} ${doc.section} ${doc.summary} ${doc.markdown}`.toLowerCase().includes(query));
}

function totals() {
  return state.data.documents.reduce((acc, doc) => ({ docs: acc.docs + 1, images: acc.images + (doc.imageCount || 0), videos: acc.videos + (doc.videoCount || 0) }), { docs: 0, images: 0, videos: 0 });
}

function renderNav() {
  const docs = docsInOrder();
  const links = docs.map((doc) => {
    const count = (doc.imageCount || 0) + (doc.videoCount || 0);
    const marker = doc.hasChildren ? "⌄" : "·";
    const active = state.active === doc.id ? "active" : "";
    const depth = Math.min(Number(doc.depth || 0), 6);
    return `<a class="side-link depth-${depth} ${active}" href="#doc=${encodeURIComponent(doc.id)}"><span class="side-title"><span class="tree-marker">${marker}</span><span>${escapeHtml(doc.title)}</span></span><span class="count">${count ? String(count).padStart(2, "0") : ""}</span></a>`;
  }).join("");
  sideNav.innerHTML = `<a class="side-link home-link ${state.active === "home" ? "active" : ""}" href="#home"><span class="side-title"><span class="tree-marker">⌂</span><span>首页</span></span><span class="count">⌂</span></a>${links}`;
}

function homeImages(limit = 18) {
  return Object.entries(state.data.assets || {})
    .filter(([, source]) => typeof source === "string" && /\.(?:webp|png|jpe?g|gif)$/i.test(source))
    .slice(0, limit)
    .map(([token, source]) => ({ token, source }));
}

function homeImage(item, alt, className = "") {
  if (!item) return `<div class="home-media-empty">正在准备素材</div>`;
  return `<img class="${className}" src="${escapeHtml(item.source)}" alt="${escapeHtml(alt)}" loading="lazy" />`;
}

function homeSummary(doc, fallback) {
  return String(doc?.summary || fallback || "").replace(/https?:\/\/\S+/gi, "资源入口");
}

function homePathCard(doc, index) {
  const stages = ["START", "TOOLS", "VISION", "MOTION", "PROMPT", "METHOD", "STYLE", "CASES"];
  const childCount = childrenOf(doc.id).length;
  return `<a class="path-card" href="#doc=${encodeURIComponent(doc.id)}"><div class="path-card-top"><span class="path-index">${String(index).padStart(2, "0")}</span><span class="path-stage">${stages[index] || "LAB"}</span></div><h3>${escapeHtml(doc.title.replace(/^\d+｜/, ""))}</h3><p>${escapeHtml(homeSummary(doc, "进入模块，开始阅读与练习"))}</p><div class="path-card-foot"><span>${childCount ? `${childCount} 个关联章节` : "独立内容"}</span><span>打开 →</span></div></a>`;
}

function renderSearchHome(docs, totalsValue) {
  toggleStandaloneHomeStyles(false);
  document.body.classList.remove("home-mode");
  page.innerHTML = `<section class="search-landing"><p class="landing-kicker">SEARCH THE LAB</p><h1>搜索创作内容</h1><p>在 ${totalsValue.docs} 个内容页中找到 ${docs.length} 个匹配结果。</p></section><div class="section-head search-section-head"><div><h2>匹配结果</h2><p>可以继续输入工具、风格、镜头或提示词关键词。</p></div></div><div class="doc-grid">${docs.length ? docs.map(renderCard).join("") : `<div class="empty">没有找到匹配内容，换个关键词试试。</div>`}</div>`;
  renderNav();
}

function hydrateStandaloneHome() {
  document.querySelectorAll('.landing-home a[href^="#home-"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      history.replaceState(null, "", "#" + targetId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sectionDocs = homeDocs().filter((doc) => !doc.legacy);
  document.querySelectorAll(".path-card").forEach((card, index) => {
    const doc = sectionDocs[index];
    if (!doc) return;
    card.href = "#doc=" + encodeURIComponent(doc.id);
    card.setAttribute("aria-label", "打开 " + cleanCopy(doc.title));
  });

  const caseIds = ["doc-AvWnwsD9niDHbekqhDXcMxU7njd", "doc-JVbYwko5AimOOckqhhScvSYPnvb", "doc-PHK1wZWr1iZ25vkeHYncd97HnY9"];
  document.querySelectorAll(".case-card").forEach((card, index) => {
    const id = caseIds[index];
    if (!id) return;
    card.dataset.docId = id;
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    const open = () => { location.hash = "doc=" + encodeURIComponent(id); };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderHome() {
  state.active = "home";
  const docs = filteredDocs();
  const totalsValue = totals();
  crumbCurrent.textContent = state.query ? "搜索：" + cleanCopy(state.query) : "首页";
  if (state.query) {
    toggleStandaloneHomeStyles(false);
    document.body.classList.remove("home-mode");
    renderSearchHome(docs, totalsValue);
    return;
  }
  toggleStandaloneHomeStyles(true);
  document.body.classList.add("home-mode");
  page.innerHTML = STANDALONE_HOME_HTML;
  hydrateStandaloneHome();
  renderNav();
}
function renderCard(doc, index) {
  const childCount = childrenOf(doc.id).length;
  const childLabel = childCount ? `↳ ${childCount} 个关联章节` : "";
  const stage = index === 0 ? "START" : index < 3 ? "FOUNDATION" : index < 6 ? "BUILD" : "ADVANCED";
  return `<a class="doc-card" data-stage="${stage.toLowerCase()}" href="#doc=${encodeURIComponent(doc.id)}"><div class="card-top"><span class="tag">${escapeHtml(doc.category || "创作专题")}</span><span class="stage-chip">${stage}</span></div><h3>${escapeHtml(doc.title)}</h3><p>${escapeHtml(doc.summary || "打开页面，开始阅读与练习")}</p><div class="card-foot"><span>▧ ${doc.imageCount || 0} 图</span><span>▷ ${doc.videoCount || 0} 视频</span><span>${childLabel}</span><span>↗ 开始阅读</span></div></a>`;
}

const ARCHIVE_DB_NAME = "lucian-aigc-skill-library";
const ARCHIVE_STORE_NAME = "zip-archives";
const HIDDEN_ARCHIVES_KEY = "lucian-aigc-hidden-skill-archives";

function renderSkillManager() {
  return `<section class="skill-manager" id="skill-manager"><div class="skill-manager-head"><div><p class="chapter-kicker">SKILL ARCHIVE MANAGER</p><h2>Skill 压缩包管理</h2><p>支持直接上传 ZIP、下载和删除。上传的文件仅保存在当前浏览器中，不会改变其他创作内容。</p></div><label class="upload-zip-button">＋ 上传 ZIP<input id="skill-zip-input" type="file" accept=".zip,application/zip,application/x-zip-compressed" multiple /></label></div><div class="skill-manager-note"><span>本地上传</span><span>ZIP 格式</span><span>可多选</span><button id="restore-skill-archives" type="button">恢复已隐藏的原始包</button></div><div id="local-zip-list" class="local-zip-list"><div class="archive-empty">正在读取本地压缩包…</div></div></section>`;
}

function openArchiveDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("当前浏览器不支持本地文件存储"));
      return;
    }
    const request = window.indexedDB.open(ARCHIVE_DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(ARCHIVE_STORE_NAME)) request.result.createObjectStore(ARCHIVE_STORE_NAME, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("无法打开本地文件存储"));
  });
}

function archiveRequest(db, mode, operation) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ARCHIVE_STORE_NAME, mode);
    const request = operation(transaction.objectStore(ARCHIVE_STORE_NAME));
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("本地压缩包操作失败"));
  });
}

function hiddenArchiveTokens() {
  try {
    return new Set(JSON.parse(window.localStorage.getItem(HIDDEN_ARCHIVES_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveHiddenArchiveTokens(tokens) {
  window.localStorage.setItem(HIDDEN_ARCHIVES_KEY, JSON.stringify([...tokens]));
}

function localArchiveId() {
  return `local-${window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
}

function renderLocalArchiveCard(item) {
  const date = item.uploadedAt ? new Date(item.uploadedAt).toLocaleDateString("zh-CN") : "刚刚上传";
  return `<article class="archive-card local-archive-card" data-local-archive-id="${escapeHtml(item.id)}"><div class="archive-icon">ZIP</div><div class="archive-copy"><h3>${escapeHtml(item.name)}</h3><p>${formatBytes(item.size)} · 上传于 ${escapeHtml(date)}</p></div><div class="archive-actions"><button class="archive-download" type="button" data-download-local-archive="${escapeHtml(item.id)}">下载</button><button class="archive-remove" type="button" data-delete-local-archive="${escapeHtml(item.id)}">删除</button></div></article>`;
}

async function refreshLocalArchives(db, container) {
  const items = (await archiveRequest(db, "readonly", (store) => store.getAll())).sort((a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0));
  container.innerHTML = items.length ? items.map(renderLocalArchiveCard).join("") : `<div class="archive-empty">还没有本地上传的 ZIP。点击右上角“上传 ZIP”添加 Skill 压缩包。</div>`;
  container.querySelectorAll("[data-download-local-archive]").forEach((button) => button.addEventListener("click", async () => {
    const item = await archiveRequest(db, "readonly", (store) => store.get(button.dataset.downloadLocalArchive));
    if (!item?.blob) return;
    const url = window.URL.createObjectURL(item.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = item.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => window.URL.revokeObjectURL(url), 1000);
  }));
  container.querySelectorAll("[data-delete-local-archive]").forEach((button) => button.addEventListener("click", async () => {
    if (window.confirm && !window.confirm("确定删除这个本地 ZIP 吗？删除后无法从网站恢复。")) return;
    await archiveRequest(db, "readwrite", (store) => store.delete(button.dataset.deleteLocalArchive));
    showToast("ZIP 已删除");
    await refreshLocalArchives(db, container);
  }));
}

function hydrateSkillLibrary() {
  const input = document.getElementById("skill-zip-input");
  const container = document.getElementById("local-zip-list");
  if (!input || !container) return;

  const hidden = hiddenArchiveTokens();
  document.querySelectorAll("[data-archive-token]").forEach((card) => {
    if (hidden.has(card.dataset.archiveToken)) card.remove();
  });
  document.querySelectorAll("[data-remove-archive]").forEach((button) => button.addEventListener("click", () => {
    const tokens = hiddenArchiveTokens();
    tokens.add(button.dataset.removeArchive);
    saveHiddenArchiveTokens(tokens);
    button.closest("[data-archive-token]")?.remove();
    showToast("原始 ZIP 已从当前浏览器隐藏");
  }));
  document.getElementById("restore-skill-archives")?.addEventListener("click", () => {
    window.localStorage.removeItem(HIDDEN_ARCHIVES_KEY);
    showToast("原始 ZIP 已恢复");
    route();
  });

  openArchiveDatabase().then(async (db) => {
    await refreshLocalArchives(db, container);
    input.addEventListener("change", async () => {
      const files = [...(input.files || [])].filter((file) => /\.zip$/i.test(file.name) || /zip|compressed/i.test(file.type));
      input.value = "";
      if (!files.length) {
        showToast("请选择 ZIP 格式的压缩包");
        return;
      }
      for (const file of files) {
        await archiveRequest(db, "readwrite", (store) => store.put({ id: localArchiveId(), name: file.name, size: file.size, type: file.type || "application/zip", uploadedAt: Date.now(), blob: file }));
      }
      showToast(`已上传 ${files.length} 个 ZIP`);
      await refreshLocalArchives(db, container);
    });
  }).catch((error) => {
    container.innerHTML = `<div class="archive-empty">${escapeHtml(error.message || "当前浏览器无法保存本地 ZIP")}</div>`;
  });
}

function renderDoc(id, sectionId = "") {
  toggleStandaloneHomeStyles(false);
  document.body.classList.remove("home-mode");
  const doc = state.data.documents.find((item) => item.id === id);
  if (!doc) return renderHome();
  state.active = id;
  crumbCurrent.textContent = cleanCopy(doc.title);
  const pathParts = [];
  let current = doc;
  const seen = new Set();
  while (current && !seen.has(current.id)) {
    pathParts.unshift(current.title);
    seen.add(current.id);
    current = state.data.documents.find((item) => item.id === current.parentId);
  }
  const pathText = pathParts.join(" / ");
  const children = childrenOf(doc.id);
  const isRoot = doc.id === state.data.rootId;
  const isSkillChapter = doc.title.includes("第十八章") && doc.title.includes("Skill");
  const chapterMap = renderChapterMap(children, doc.id, !isRoot);
  const childContent = children.length && !isRoot ? `<section class="chapter-content"><div class="chapter-content-head"><p class="chapter-kicker">FULL CHAPTER CONTENT</p><h2>关联章节正文</h2><p>本页将子章节、图片、视频、表格和模板串联在一起，打开后可以连续阅读。</p></div>${children.map((child) => renderEmbeddedDoc(child, 1, [doc.id])).join("")}</section>` : "";
  page.innerHTML = `<article><header class="article-head"><a class="back-link" href="#home">← 返回创作首页</a><p class="article-path">${escapeHtml(pathText)}</p><span class="tag">${escapeHtml(doc.category || "创作专题")}</span><h1>${escapeHtml(doc.title)}</h1><p class="article-deck">${escapeHtml(doc.summary || "")}</p><div class="article-stats"><span class="article-stat">${doc.imageCount || 0} 张图片</span><span class="article-stat">${doc.videoCount || 0} 个视频</span>${children.length ? `<span class="article-stat">${children.length} 个关联章节</span>` : ""}<span class="article-stat">更新版 ${escapeHtml(doc.revision)}</span></div></header>${isSkillChapter ? renderSkillManager() : ""}<div class="article-body">${renderMarkdown(doc.markdown, state.data.assets || {})}</div>${chapterMap}${childContent}</article>`;
  hydrateChunkedVideos();
  if (isSkillChapter) hydrateSkillLibrary();
  renderNav();
  const target = sectionId ? document.getElementById(sectionId) : null;
  if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "smooth" }));
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

function hydrateChunkedVideos() {
  document.querySelectorAll("video[data-parts]").forEach((video) => {
    let loading = false;
    const load = async () => {
      if (loading || video.dataset.ready === "1") return;
      loading = true;
      try {
        showToast("正在加载视频…");
        const parts = JSON.parse(video.dataset.parts || "[]");
        const buffers = await Promise.all(parts.map((part) => fetch(part).then((response) => {
          if (!response.ok) throw new Error(`media ${response.status}`);
          return response.arrayBuffer();
        })));
        video.src = URL.createObjectURL(new Blob(buffers, { type: "video/mp4" }));
        video.dataset.ready = "1";
        showToast("视频已就绪");
        await video.play();
      } catch {
        showToast("视频加载失败，请稍后重试");
        loading = false;
      }
    };
    video.addEventListener("click", load);
    video.addEventListener("play", load, { once: true });
  });
}

function route() {
  const hash = location.hash.replace(/^#/, "");
  const match = hash.match(/^doc=([^&]+)(?:&section=(.+))?$/);
  if (match) renderDoc(decodeURIComponent(match[1]), match[2] ? decodeURIComponent(match[2]) : ""); else renderHome();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

searchInput.addEventListener("input", (event) => { state.query = event.target.value; if (location.hash !== "#home") location.hash = "home"; renderHome(); });
document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); } });
document.getElementById("menu-toggle").addEventListener("click", () => sidebar.classList.toggle("open"));
window.addEventListener("hashchange", () => { sidebar.classList.remove("open"); route(); });

fetch("data.json").then((response) => response.json()).then((data) => { state.data = applyContentPlan(data); route(); }).catch(() => { page.innerHTML = `<div class="empty">创作内容加载失败，请稍后刷新。</div>`; showToast("内容加载失败"); });
