(function () {
  "use strict";

  var STORAGE_KEY = "tcoi-lang";

  var STR = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.gallery": "Gallery",
      "nav.devlog": "Dev Log",
      "nav.studio": "Ignis Solaris Studio",
      "hero.eyebrow": "Turn-based strategy · simulation",
      "hero.tagline":
        "Lead the island through seasons and shocks: procedural organ maps, metabolic crises, and calm, tactical decisions layered over living systems.",
      "hero.cta.explore": "Explore the game",
      "features.title": "Game features",
      "features.f1.title": "Turn-based strategy",
      "features.f1.body":
        "The game advances in discrete turns—you resolve the world globally and spend a limited pool of action points (AP) each round.",
      "features.f2.title": "Simulation / resource management",
      "features.f2.body":
        "Run central finances and the metabolic tax, balancing calories, cash, and systemic health stress while keeping organs online and constructing wonders.",
      "features.f3.title": "Procedural generation",
      "features.f3.body":
        "Every run randomises the map from a hydro skeleton, scattered non-overlapping nodes, and Voronoi partitioning into irregular archipelagos and organ territory boundaries.",
      "features.f4.title": "Crisis / survival management",
      "features.f4.body":
        "Contend with external threats (e.g. pathogen raids), calorie shortfalls, and misguided loyalty that triggers ‘bad compensation’ (e.g. spiking blood pressure during major bleeding); issue blocking administrative orders until the realm reaches a full-life close.",
      "features.f5.title": "Roguelite / lineage",
      "features.f5.body":
        "Includes an epilogue chronicle resolution and succession mode—heirs inherit prior wealth, cultural wonder remnants, and starting resistances shaped by the last ruler.",
      "features.f6.title": "Hex grid",
      "features.f6.body":
        "Spatial logic and visuals are built on an isometric hex grid.",
      "gallery.title": "Gallery",
      "gallery.placeholder": "Image placeholder",
      "devlog.title": "Development log",
      "devlog.viewDetails": "View details",
      "devlog.close": "Close",
      "devlog.openFull": "Open full Dev Log blog page",
      "devlog.pageTitle": "Development log",
      "devlog.backHome": "Back to homepage",
      "devlog.timelineTitle": "Timeline",
      "devlog.labelContent": "Content:",
      "devlog.labelNote": "Note:",
      "footer.visitStudio": "Visit studio homepage",
      "footer.top": "Back to top",
      "footer.copyLine": "Take Care of the Island. All rights reserved.",
    },
    zh: {
      "a11y.skip": "跳到正文",
      "nav.home": "首页",
      "nav.features": "特色",
      "nav.gallery": "画廊",
      "nav.devlog": "开发日志",
      "nav.studio": "Ignis Solaris Studio",
      "hero.eyebrow": "回合制策略 · 模拟",
      "hero.tagline":
        "执掌一座随季节与冲击起伏的岛屿：程序化「器官地图」、代谢层级危机与温柔而明确的战术取舍。",
      "hero.cta.explore": "探索游戏",
      "features.title": "游戏特色",
      "features.f1.title": "回合制策略",
      "features.f1.body":
        "游戏以回合制为单位推进，玩家需要进行全局结算，并合理分配每回合有限的行动点数（AP）。",
      "features.f2.title": "模拟经营 / 资源管理",
      "features.f2.body":
        "玩家需掌控中央财政与代谢税，平衡卡路里消耗、金钱与系统健康压力值，维持器官运行与奇观建造。",
      "features.f3.title": "程序化生成",
      "features.f3.body":
        "地图每周目随机，基于水系骨架、节点散布（防重叠）与 Voronoi 算法自动生成不规则的群岛地貌与器官物理边界。",
      "features.f4.title": "危机干预 / 生存管理",
      "features.f4.body":
        "玩家需要面对外患（如病菌入侵）、卡路里亏空以及底层愚忠引发的「错误代偿」（如大出血时升血压），并下达行政指令进行阻断式干预，终极目标是让世界运转至「寿终正寝」。",
      "features.f5.title": "轻度肉鸽 / 世代继承",
      "features.f5.body":
        "具有终局编年史结算，并支持传代模式，后代可以继承前朝的金钱、文化奇观遗迹以及受上代影响的初始抗性。",
      "features.f6.title": "六边形网格",
      "features.f6.body": "底层的空间映射与视觉展现基于等距六边形网格构建。",
      "gallery.title": "画廊",
      "gallery.placeholder": "图片占位",
      "devlog.title": "开发日志",
      "devlog.viewDetails": "查看详情",
      "devlog.close": "关闭",
      "devlog.openFull": "打开完整开发日志页面",
      "devlog.pageTitle": "开发日志",
      "devlog.backHome": "返回首页",
      "devlog.timelineTitle": "时间线",
      "devlog.labelContent": "内容：",
      "devlog.labelNote": "备注：",
      "footer.visitStudio": "访问工作室主页",
      "footer.top": "返回顶部",
      "footer.copyLine": "Take Care of the Island 保留所有权利。",
    },
    fr: {
      "a11y.skip": "Aller au contenu",
      "nav.home": "Accueil",
      "nav.features": "Caractéristiques",
      "nav.gallery": "Galerie",
      "nav.devlog": "Journal de dev",
      "nav.studio": "Ignis Solaris Studio",
      "hero.eyebrow": "Stratégie au tour par tour · simulation",
      "hero.tagline":
        "Guidez l’île à travers les saisons et les chocs : cartes « organiques » procédurales, crises métaboliques et décisions tactiques posées, calmes et lisibles.",
      "hero.cta.explore": "Explorer le jeu",
      "features.title": "Caractéristiques",
      "features.f1.title": "Stratégie au tour par tour",
      "features.f1.body":
        "Le jeu avance par tours—vous résolvez le monde globalement et répartissez un pool limité de points d’action (PA) à chaque round.",
      "features.f2.title": "Simulation / gestion des ressources",
      "features.f2.body":
        "Pilotez les finances centrales et la taxe métabolique, en équilibrant calories, liquidités et stress systémique pour maintenir les organes et bâtir des merveilles.",
      "features.f3.title": "Génération procédurale",
      "features.f3.body":
        "Chaque partie tire une carte aléatoire à partir d’un squelette hydrologique, de nœuds dispersés sans chevauchement et d’un Voronoi qui sculpte archipels irréguliers et frontières d’organes.",
      "features.f4.title": "Crises / survie",
      "features.f4.body":
        "Affrontez des menaces extérieures (incursions microbiennes), des déficits caloriques et une loyauté aveugle qui déclenche des « compensations erronées » (ex. hausse tensionnelle lors d’hémorragie majeure) ; émettez des ordres administratifs bloquants jusqu’à une clôture de cycle de vie.",
      "features.f5.title": "Roguelite / lignées",
      "features.f5.body":
        "Épilogue façon chronique et mode succession—les héritiers gardent richesse, vestiges culturels et résistances initiales façonnées par le règne précédent.",
      "features.f6.title": "Grille hexagonale",
      "features.f6.body":
        "La logique spatiale et la présentation reposent sur une grille hexagonale isométrique.",
      "gallery.title": "Galerie",
      "gallery.placeholder": "Emplacement image",
      "devlog.title": "Journal de développement",
      "devlog.viewDetails": "Voir le détail",
      "devlog.close": "Fermer",
      "devlog.openFull": "Ouvrir la page complète du journal",
      "devlog.pageTitle": "Journal de développement",
      "devlog.backHome": "Retour à l’accueil",
      "devlog.timelineTitle": "Chronologie",
      "devlog.labelContent": "Contenu :",
      "devlog.labelNote": "Remarque :",
      "footer.visitStudio": "Page d’accueil du studio",
      "footer.top": "Haut de page",
      "footer.copyLine": "Take Care of the Island. Tous droits réservés.",
    },
  };

  /** Max cards on the homepage devlog strip (full list remains on devlog.html). */
  var INDEX_DEVLOG_CARD_LIMIT = 3;

  var DEVLOG = [
    {
      date: "2026-05-11",
      zh: {
        title: "规范工作流与开发体系（架构—机制—UI—地图—文档）",
        summary:
          "双 Autoload 与 GameCore 全局锁；.tres 强类型、organs_state、world_flags；预扣/回合结算与 pending_tasks 单源；代谢税与代偿闭环；高血压/惊恐/扫描；UI 流式布局、阶段说明与密报降级；双 TileMapLayer 与摄像机混合控制；docs 四文档 + 叙事/代码命名双轨契约写入 PLAN/devlog。",
      },
      en: {
        title: "Formalizing workflow & dev stack (architecture through docs)",
        summary:
          "Dual Autoload + GameCore input lock; typed .tres resources, organs_state, world_flags; budget pre-hold with turn settlement and single-source pending_tasks; metabolic tax & compensation loops; hypertension, panic, external scans; UI layout rules, phase strip & briefing demotion; dual tile layers & hybrid camera; four docs/ specs plus narrative vs code naming contract in PLAN/devlog.",
      },
      fr: {
        title: "Normaliser le flux de travail et la stack (archi → docs)",
        summary:
          "Double Autoload + verrou d’entrée GameCore ; ressources .tres typées, organs_state, world_flags ; pré-réservation budgétaire et règlement en fin de tour avec pending_tasks unique ; taxe métabolique et boucles de compensation ; hypertension, panique, scans externes ; règles UI, bandeau de phase et briefing découplé ; double TileMapLayer et caméra hybride ; quatre docs + contrat de nommage narration/code dans PLAN/devlog.",
      },
      detail: {
        zh: {
          paragraphs: [
            "【阶段性汇总】在既有迭代之上，将底层架构、数据形态、核心机制闭环、UI 交互、地图摄像机与工作流文档一次性对齐为可复述的「体系规范」，便于后续 AI 上下文与团队协作复用。",
          ],
          bullets: [
            "一、底层架构与数据流 · 双 Autoload：废弃臃肿全局单例，落地 GameCore（主控）+ EventDispatcher（事件总线）；挂载 EconomySystem、OrganManager、TimeManager、EventManager。",
            "· GameCore.world_input_blocked：模态（如回合结算）时切断地图与摄像机输入。",
            "· 数据结构：以自定义资源 .tres（TaskData、EventData 等）取代松散字典数组，强类型 + 显式类型声明，废弃不可靠隐式推断。",
            "· organs_state：高扩展状态池，WorkIntensity 枚举（基础温饱 / 负荷运转 / 极限压榨），预留生命阶段热插拔器官。",
            "· world_flags：全局 Flag 中枢，替代基于 task_id 的局部校验；任务完成后记录不可逆分支状态（如 vzv_defense_prepared），动作与事件分支解耦。",
            "二、核心机制与逻辑闭环 · 指令排队：预算预扣除 + 回合统一结算，侧边栏排队、资源冻结、下一回合前可取消退还；经济系统废除双轨，预扣状态统一读取 GameCore.pending_tasks。",
            "· 经济—生理：器官代谢税为金钱主渠道；压榨 ROI 差异带来能耗与系统压力；跑通热量缺口→脂肪储备→压力→阶段结算→永久 Debuff 的代偿链。",
            "· 局部高危：blood_pressure 逐回合累加触顶永久惩罚，配套利尿剂 / β 阻滞剂 / 血管扩张剂博弈；惊恐发作跨阶段传递、无字报错弹窗指数倍增与视角阻断，医学观察结案 + 防刷屏线索快照；外部扫描阶梯定价、下拉、成本预览与扣费闭环。",
            "· 阶段时间：任务倒计时衰减与 is_mandatory；关键任务回合阻断；将生理叙事（如疫苗与水痘）封装为前置行为触发战役分支结算。",
            "三、UI 与交互 · CanvasLayer 下以 Control 为基准，Margin/VBox/HBox 流式排版，慎用 Scale；Autowrap、Clip Text、纹理 Ignore Size + Custom Minimum、九宫格背景。",
            "· 右下角「下一回合」上方新增阶段说明（中文季相+回合；婴儿期为「教学回合 (1/2)」）；密报从结算剥离为独立场景，顶栏按钮 set_loops 摆动提示，点击静止后打开，时序上可与惊恐弹窗交错。",
            "· ScanDrawerStrip：mouse_filter = IGNORE，ScanPanelHost 精准命中区穿透空白；closed_outer_width_px 48→52 修复手柄裁切；模态弹窗后端字典→暂存→实例化注入的单向数据流。",
            "四、空间与地图 · 双 TileMapLayer：表层 Y-Sort 等距渲染，底层 Custom Data 处理器官归属；宏观气泡 + 微观详情分层；初始化输出地契清单，鼠标→逻辑网格→字典→任务派发；canvas_transform 同步气泡与地图。",
            "· 摄像机：右键平移、无极滚轮缩放、自动居中、气泡点击 Tween 平滑放大。",
            "五、工作流与规范 · 本地化 docs/ 驱动开发；core_design.md、data_schema.md、devlog.md、coding_standard.md 四份断言式规则作为系统级 Prompt。",
            "· 叙事与代码命名双轨契约：玩家可见层用岛屿治理/君主隐喻；代码与数据层强制生理学/医学标准命名（PascalCase 如 Heart、Stomach）；已同步至 PLAN.md 与 devlog.md，作为文案审计与新功能最高准则。",
          ],
          note: "",
        },
        en: {
          paragraphs: [
            "This entry consolidates architecture, data, mechanics, UI, map/camera, and documentation conventions into one reproducible “system spec” for collaborators and AI context.",
          ],
          bullets: [
            "I. Architecture & data — Dual Autoload: GameCore (orchestrator) + EventDispatcher; modular EconomySystem, OrganManager, TimeManager, EventManager instead of a bloated global singleton.",
            "· GameCore.world_input_blocked freezes map & camera input under modals such as turn resolution.",
            "· Typed custom resources (.tres) for TaskData / EventData replace ad-hoc dict arrays; explicit typing replaces fragile inference.",
            "· organs_state pool with WorkIntensity enum (subsistence / loaded / extreme squeeze) and room for future organ hot-swap by life stage.",
            "· world_flags as a global flag hub—post-task irreversible branch state (e.g. vzv_defense_prepared) decouples actions from narrative forks without task_id-only checks.",
            "II. Mechanics — Sidebar queue with budget pre-hold and end-of-turn settlement; cancel-before-next-turn refunds; economy reads pending state only from GameCore.pending_tasks (single source).",
            "· Metabolic tax from organs as the primary cash channel; squeeze ROI drives energy cost and systemic pressure; calorie gap → fat drawdown → pressure → phase settlement → permanent debuff loop closed.",
            "· Hypertension: hidden blood_pressure ramps to a hard cap with lasting penalty; diuretics, beta-blockers, vasodilators as counterplay. Panic: cross-phase carry, wordless error-style popups scaling exponentially, view lock; medical observation closes the arc with anti-spam hint snapshots. External scan: tiered pricing, dropdown, preview, deduct loop.",
            "· Phase time: task decay timers + is_mandatory; blocking turns for critical missions; physiological beats (e.g. vaccine vs chickenpox) framed as prerequisite branches into battle outcomes.",
            "III. UI — Control-rooted flow under CanvasLayer (margins / VBox / HBox); avoid scale hacks; autowrap, clip text, texture min sizes, nine-slice backgrounds.",
            "· Phase strip above Next Turn (season + round; infancy as “tutorial round (1/2)”); secret briefing demoted from forced post-report to a looping top-bar nudge, open on click—can interleave with panic timing.",
            "· Scan drawer: strip ignores mouse; host wraps hit targets; closed_outer_width_px 48→52 fixes handle clipping; modals use dict → stash → instance inject one-way pipeline.",
            "IV. Map — Dual TileMapLayer: Y-sorted iso visuals + logic layer with custom data for organ ownership; macro bubble + micro detail split; deed registry at init; screen → grid → dict → task dispatch; canvas_transform keeps bubbles aligned.",
            "· Camera: right-drag pan, smooth wheel zoom, auto frame, tween focus on bubble clicks.",
            "V. Workflow — docs/-first development; four assertive specs (core_design, data_schema, devlog, coding_standard) as system prompts.",
            "· Dual naming contract: player-facing island/sovereign metaphor vs rigorous anatomical PascalCase in code/data; recorded in PLAN.md and devlog.md as the top rule for copy audits and new features.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "Synthèse : architecture, données, mécaniques, UI, carte/caméra et conventions documentaires alignées en une « spécification système » reproductible.",
          ],
          bullets: [
            "I. Archi & données — Double Autoload : GameCore + EventDispatcher ; sous-systèmes modulaires (économie, organes, temps, événements) à la place d’un singleton global lourd.",
            "· Verrou GameCore.world_input_blocked sous modales (fin de tour, etc.).",
            "· Ressources .tres typées (TaskData, EventData) ; typage explicite au lieu d’inférences fragiles.",
            "· organs_state + énumération WorkIntensity ; extension future par organes branchables selon l’âge.",
            "· world_flags : état global post-action irréversible (ex. vzv_defense_prepared), découplage des branches narrative des simples task_id.",
            "II. Mécaniques — File latérale avec pré-réservation budgétaire et solde en fin de tour ; annulation remboursable ; lecture unique de GameCore.pending_tasks côté économie.",
            "· Taxe métabolique des organes ; boucle déficit calorique → réserves → pression → palier → malus permanent. Hypertension, panique (pop-ups exponentielles, observation médicale), scan externe à paliers.",
            "· Temps de phase : compte à rebours + is_mandatory ; blocage des tours pour missions clés ; récits physiologiques comme prérequis de branches de bataille.",
            "III. UI — Control racine, conteneurs de flux ; autowrap, clip, textures, nine-slice.",
            "· Bandeau de phase au-dessus du bouton tour suivant ; briefing secret découplé du rapport, bouton animé en boucle. Tiroir de scan : strip transparent aux clics, hôte ciblé, largeur 52 px, pipeline modal dict → inject.",
            "IV. Carte — Double TileMapLayer ; bulles + panneau ; registre de parcelles ; pipeline souris → grille → dictionnaire ; canvas_transform.",
            "· Caméra : panoramique clic droit, zoom molette, cadrage auto, tween sur bulle.",
            "V. Flux — développement piloté par docs/ ; quatre documents assertifs. Contrat double nommage île/souverain côté joueur vs anatomie PascalCase côté code, inscrit dans PLAN.md et devlog.md.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-05-10",
      zh: {
        title: "交互层解耦、惊恐机制深化与代码规范重构",
        summary:
          "简报独立与 ScanDrawerStrip；惊恐递进与医学观察结案；economy 任务队列单源读取 GameCore；target_organs / 地图状态键统一 PascalCase；显式类型与 PLAN.md 阶段修订。",
      },
      en: {
        title: "Interaction-layer decoupling, deeper anxiety mechanics, and standards refactor",
        summary:
          "Standalone briefing + anchored scan drawer; escalating panic arcs and observation-based case closure; economy reads pending tasks only from GameCore; PascalCase organ keys everywhere; explicit typing sweep and PLAN.md phase updates.",
      },
      fr: {
        title: "Découplage UI, mécaniques d’anxiété approfondies et refactor normes",
        summary:
          "Briefing isolé + tiroir de scan latéral ; escalation de la panique et clôture par observation médicale ; file d’attente économique unifiée via GameCore ; clés d’organes en PascalCase ; typage explicite et mise à jour de PLAN.md.",
      },
      detail: {
        zh: {
          paragraphs: [
            "本节汇总近期在交互架构、惊恐/扫描玩法、数据一致性与 GDScript 可维护性上的集中改动；下方按主题列出要点。",
          ],
          bullets: [
            "1. 交互架构重构与 UI 解耦 · 下属情报 (Briefing) 独立于回合结算，新增 BriefingPanel.tscn；顶栏 SecretBriefingBtn 随时唤出并刷新；“回合结算关闭 → 简报 → 惊恐/Ticker 触发”链路回调顺畅。",
            "· 外部扫描抽屉：右侧锚定的 ScanDrawerStrip，带平滑展开补间；容器交叉轴对齐 (alignment = 0) 与最小尺寸限制，避免父级误拉伸。",
            "· 惊恐弹窗 (Anxiety Popup)：恢复底板结构与警告图标，清空预设文案；新增 TitleLabel，可由配置字典传入动态标题（如「惊恐发作」）。",
            "· 渲染与输入：GameCore.world_input_blocked 全局锁，TurnReport 等模态开启时阻断地图与摄像机输入；OrganDetailPanel 调整 mouse_filter 与 z_index，修复 UI 穿透到地图气泡的问题。",
            "2. 核心机制深化 · 「惊恐发作」仅夏季之后生效：春末压力 ≥ 220 埋预备标记、夏季爆发；发作期每回合不可控弹窗指数倍增（1→2→4→8…），关战报后强制限制玩家视角。",
            "· 侦破与结案（医学观察）：侧边栏「记入本轮医学观察」每回合一次；仅观察大脑可彻底结案（清焦虑链、降压）；误诊其他器官耗配额无实效；anxiety_symptom_hints_cached 防刷屏，保证战报与详情情报一致。",
            "· 外部扫描：与回合对齐的阶梯价；单器官每回合至多 3 次（首次免费 → 80 金 +1 AP → 200 金 +2 AP）；external_scan_panel 下拉、成本预览与扣费闭环完成。",
            "3. 数据流治理 · 废除 EconomySystem 与 GameCore 双轨 pending/active_tasks；经济侧预扣判定统一单向读取 GameCore.pending_tasks，消除脱节。",
            "· TaskData.target_organs 与地图状态字典键全面重构为 PascalCase（如 Stomach, Heart, Brain），规避大小写寻址错误。",
            "4. 代码规范与类型安全 · 大规模将隐式 := 改为显式类型声明或 int() 等强制转换（覆盖 organ_manager.gd、ui.gd、时间管理等），弱化跨脚本/autoload/.get() 推导缺陷引发的警告。",
            "· organ_manager.gd 去除数组非法尾随逗号；event_manager.gd 统一 Tab/空格缩进以符合 GDScript 规范。",
            "5. 架构文档 · PLAN.md 全面重写：阶段一原型已完工；「焦虑症表现丰富化」提升至阶段二；远期阶段三/四聚焦重要器官场景解耦与动态季节叙事。",
          ],
          note: "",
        },
        en: {
          paragraphs: [
            "This entry captures recent work on UI decoupling, panic/scan gameplay, data consistency, and GDScript maintainability.",
          ],
          bullets: [
            "1. UI architecture & decoupling — Briefing is no longer tied to turn resolution: dedicated BriefingPanel.tscn; SecretBriefingBtn can open anytime with fresh data; smooth callback chain turn report close → briefing → panic/ticker triggers.",
            "ScanDrawerStrip anchors to the right with tweened drawer motion; fixed cross-axis alignment (0) and min-size constraints so panels are not overstretched.",
            "Anxiety popup: restored backdrop + warning glyph, cleared canned text; TitleLabel accepts a config dict for dynamic titles (e.g. “Panic attack”).",
            "Input: GameCore.world_input_blocked (global lock) pauses map & camera input under TurnReport-sized modals; OrganDetailPanel mouse_filter + raised z_index stop clicks bleeding through organ bubbles.",
            "2. Core mechanics — Escalating “panic attacks” gated after summer: spring-end stress ≥ 220 plants a prelude flag detonating in summer; uncontrollable pop-ups double each turn (1→2→4→8…); post-report viewpoint lock enforced.",
            "Medical observation sidebar action (once per turn): observing only the brain closes the arc (clear anxiety chain, reduce pressure); mis-targeted organs consume the quota with no cure; anxiety_symptom_hints_cached keeps report vs detail clues aligned.",
            "External scan ladder pricing per aligned turn; ≤3 scans per organ (free → 80g+1 AP → 200g+2 AP); external_scan_panel wired for dropdown choice, cost preview, and deductions.",
            "3. Data flow — Removed dual bookkeeping of pending/active_tasks between EconomySystem and GameCore; economy now reads pending state solely from GameCore.pending_tasks.",
            "Renamed TaskData.target_organs labels and map state dict keys to strict PascalCase (Stomach, Heart, Brain) to kill case-mismatch lookups.",
            "4. Coding standards — Replaced wide use of inferred := with explicit var x: Type = … or casts for organ_manager.gd, ui.gd, time systems, trimming parser/autoload ambiguity warnings.",
            "organ_manager.gd: removed illegal trailing commas; event_manager.gd: normalized tabs/spaces to GDScript style.",
            "5. Documentation — PLAN.md rewritten: prototype phase-one done; richer anxiety presentation prioritized into phase two; longer horizon phases emphasize organ scene decoupling and dynamic seasonal narrative.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "Synthèse des travaux récents sur le découplage UI, la panique/le scan externe, la cohérence des données et le typage GDScript.",
          ],
          bullets: [
            "1. Architecture UI — Briefing retiré de la résolution de tour : BriefingPanel.tscn dédié ; SecretBriefingBtn ouvrable à la demande avec rafraîchissement ; chaîne fluide fermeture du rapport → briefing → déclenchement panique/ticker.",
            "ScanDrawerStrip ancré à droite avec animation d’ouverture tween ; alignment transversal = 0 et tailles min pour éviter l’étirement parasite.",
            "Pop-up anxiété : socle graphique et pictogramme d’alerte restaurés, texte figé supprimé ; TitleLabel alimentée par un dictionnaire (ex. « Crise de panique »).",
            "Entrées : verrou mondial GameCore.world_input_blocked pendant les modales type TurnReport ; mouse_filter et z_index d’OrganDetailPanel empêchant les clics de traverser vers les bulles carte.",
            "2. Mécaniques — Crises « panique » après l’été : stress fin printemps ≥220 pose un fanion qui explose à l’été ; pop-ups incontrôlables doublées chaque tour (1→2→4→8…) ; blocage perspectif forcé après le rapport.",
            "Observation médicale (barre latérale, 1 fois/tour) : seul le cerveau clôt la chaîne (efface anxiété, abaisse la pression) ; autres organes consomment le quota sans effet utile ; anxiety_symptom_hints_cached synchronise indices rapport/détail.",
            "Scan externe tarifé par paliers alignés aux tours ; max 3 scans/organe/tour (gratuit → 80 or +1 PA → 200 or +2 PA) ; external_scan_panel bouclé liste, aperçu coûts et débit.",
            "3. Données — Fin du double registre pending/active_tasks entre système économique et GameCore ; la logique lit uniquement GameCore.pending_tasks.",
            "Clés target_organs et état carte en PascalCase strict (Stomach, Heart, Brain) pour supprimer erreurs de casse.",
            "4. Code — Conversion massive de := implicites vers var nom: Type = … ou casts (organ_manager, ui, temps) pour éviter faux positifs/anomalies de déduction.",
            "organ_manager.gd : virgules finales illégales supprimées ; event_manager.gd : indentation unifiée (tabs/espaces).",
            "5. Docs — PLAN.md réécrit : phase 1 prototype bouclée ; richesse symptômes anxiété remontée en phase 2 ; phases 3/4 axes scènes d’organes dissociées et narration saisonnière dynamique.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-29",
      zh: {
        title: "AI 上下文与文档架构落地（开发工作流）",
        summary: "以 Cursor 与本地 docs/ 取代旧管线；确立 core_design、data_schema、devlog、coding_standard 四份断言式文档，并统一 organ_id 命名。",
      },
      en: {
        title: "Docs-driven workflow & architecture references",
        summary: "Replaced a fragile external-doc loop with Cursor @ references and a local docs/ library; landed four assertive specs and unified organ_id strings.",
      },
      fr: {
        title: "Documentation locale et convention organ_id",
        summary: "Nouveau flux centré sur Cursor + dossier docs/ ; quatre documents de référence et harmonisation des identifiants d’organes.",
      },
      detail: {
        zh: {
          paragraphs: ["【阶段性开发总结-12】开发工作流重构：彻底废弃「Gemini 生成 -> Google Doc -> NotebookLM -> 检索回编辑器」的低效链路。确立以 Cursor @ 引用为核心的本地化文档驱动开发，在 Godot 项目根目录建立 docs/ 上下文库。","【核心架构文档】将机制设定提炼为四份面向 AI 的断言式规则：core_design.md（核心机制与世界观）、data_schema.md（数据字典与信号总线）、devlog.md（架构决策与避坑）、coding_standard.md（代码规范与目录，含 TaskData / EventData 字段）。"],
          bullets: ["数据一致性：排查并修正 organ_id 历史命名冲突，统一使用如 \"Heart\", \"Brain\", \"Kidneys\" 等首字母大写格式，规避 KeyError。"],
          note: "四月末为回顾性整理条目，日期为登记用近似顺序。",
        },
        en: {
          paragraphs: [
            "Replaced the old Gemini→Doc→NotebookLM loop with Cursor @ references and a local docs/ folder.",
            "Four assertive specs: core_design.md, data_schema.md, devlog.md, coding_standard.md (TaskData / EventData fields included).",
          ],
          bullets: [
            "Resolved historical organ_id naming drift; standardized casing (e.g. Heart, Brain, Kidneys) to prevent KeyError at lookup.",
          ],
          note: "End-of-month retrospective entry; date is approximate sequencing.",
        },
        fr: {
          paragraphs: [
            "Abandon de l’ancienne chaîne Gemini → Doc → NotebookLM au profit de Cursor et d’un dossier docs/ local.",
            "Quatre documents de référence assertifs : core_design, data_schema, devlog, coding_standard (champs TaskData / EventData).",
          ],
          bullets: [
            "Conflits organ_id historiques corrigés ; casse unifiée (Heart, Brain, Kidneys…) pour éviter les KeyError.",
          ],
          note: "Entrée rétrospective fin avril ; date indicative.",
        },
      },
    },
    {
      date: "2026-04-26",
      zh: {
        title: "空间映射与分层 UI 架构（气泡 + 详情）",
        summary: "OrganIndicator / OrganDetailPanel 分层；BubbleManager 视口坐标同步；TaskData.target_organs 与摄像机 Tween 聚焦；Mouse Filter 与容器排版修正。",
      },
      en: {
        title: "Spatial UI layers & organ task routing",
        summary: "Split macro bubbles from detail panels; synced world-to-screen tracking; targeted tasks per organ; camera tween focus; fixed mouse filters.",
      },
      fr: {
        title: "UI spatiale en couches et routage par organe",
        summary: "Bulles légères + panneau détaillé ; suivi canvas ; tâches ciblées ; caméra tween ; filtres souris corrigés.",
      },
      detail: {
        zh: {
          paragraphs: ["【11】交互架构：确立「宏观气泡 (OrganIndicator) + 微观详情 (OrganDetailPanel)」双层方案，避免在地图空间直接渲染复杂面板造成的遮挡。","空间坐标：BubbleManager 监听地图数据，在器官世界坐标实例化气泡；通过 canvas_transform 做世界坐标到视口坐标转换，随摄像机平移缩放同步。"],
          bullets: ["数据：TaskData 扩充 target_organs；经济/任务侧打通 get_tasks_for_organ()，实现「摄入碳水」类任务精准下发至胃部等区域。","摄像机：CameraController 混合手动平移、滚轮缩放、Tween 点击气泡后居中放大；修复初始视口极值导致的锁死。","输入与排版：全局修正 Mouse Filter（剔除 Stop 误用）；修正 OrganDetailPanel / TaskQueueItem 嵌套与 VBox/ScrollContainer 规则。"],
          note: "",
        },
        en: {
          paragraphs: [
            "Two-layer UX: OrganIndicator bubbles plus OrganDetailPanel—keeps the map readable without heavy on-canvas panels.",
            "BubbleManager tracks world positions and maps them through the camera canvas transform for stable screen-space tracking.",
          ],
          bullets: [
            "TaskData gained target_organs; get_tasks_for_organ() routes tasks (e.g. carb intake) to stomach tiles.",
            "CameraController: pan, zoom, tween focus on bubble; fixed extreme default viewport bounds that locked the view.",
            "Mouse filter pass/fail fixed; OrganDetailPanel / TaskQueueItem nesting and VBox / ScrollContainer behaviour corrected.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "UX en deux couches : bulles OrganIndicator + panneau OrganDetailPanel pour limiter l’encombrement sur la carte.",
            "BubbleManager : positions monde → écran via la transform canvas de la caméra.",
          ],
          bullets: [
            "TaskData.target_organs ; get_tasks_for_organ() pour router les actions (ex. glucides vers l’estomac).",
            "CameraController : panoramique, zoom, tween ; correction des bornes viewport bloquantes.",
            "Filtres souris ; hiérarchie OrganDetailPanel / TaskQueueItem et règles VBox / ScrollContainer.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-23",
      zh: {
        title: "视觉/逻辑双层地图与 MapManager、摄像机",
        summary: "31 块单图等距六边形 + Y-Sort；双 TileMapLayer + Custom Data organ_id；MapManager 构建 map_regions；EventDispatcher.organ_clicked。",
      },
      en: {
        title: "Dual tile layers, map regions & camera",
        summary: "Iso hex visuals with Y-sort; logic layer with organ_id metadata; MapManager builds regions dict; organ click signal wired.",
      },
      fr: {
        title: "Carte double couche et contrôle caméra",
        summary: "Hex iso + Y-sort ; métadonnées organ_id ; dictionnaire map_regions ; signal organ_clicked.",
      },
      detail: {
        zh: {
          paragraphs: ["【10】VisualLayer：31 块单图跑通等距六边形对齐与 Y-Sort 遮挡；环形群岛「地貌隐喻生理功能」布局。","LogicLayer：视觉与数据分离双层 TileMapLayer；隐藏纯色图块 + Custom Data Layers (organ_id) 解耦器官归属与地貌。"],
          bullets: ["MapManager：_ready 自动构建 map_regions；_unhandled_input 完成屏幕→网格→字典查询→世界中心点。","CameraController：按绘制边界自动居中、无极滚轮缩放（调低 min_zoom）、右键拖拽平移速率修复。","EventDispatcher：预留并成功触发 organ_clicked(organ_id, world_position)。"],
          note: "",
        },
        en: {
          paragraphs: [
            "Visual layer: 31 iso hex tiles with Y-sort for depth; ring archipelago layout as a physiological metaphor.",
            "Logic layer: second TileMapLayer with solid tiles and Custom Data organ_id—decouples ownership from terrain look.",
          ],
          bullets: [
            "MapManager builds map_regions on _ready; _unhandled_input maps screen → grid → lookup → world anchor.",
            "CameraController: frame bounds, smooth wheel zoom (lower min_zoom), right-drag pan speed fix.",
            "EventDispatcher.organ_clicked(organ_id, world_position) wired for organ bubbles.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "Couche visuelle : 31 tuiles hex iso + Y-sort ; archipel annulaire comme métaphore fonctionnelle.",
            "Couche logique : TileMapLayer + organ_id en Custom Data, décorrélé du rendu.",
          ],
          bullets: [
            "MapManager : map_regions au _ready ; entrée souris → grille → dictionnaire → point monde.",
            "CameraController : cadrage, zoom molette (min_zoom abaissé), panoramique clic droit.",
            "EventDispatcher : signal organ_clicked(organ_id, world_position).",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-20",
      zh: {
        title: "回合结算的信息分层",
        summary: "把结算拆成「必须立即消化」与「可稍后查阅」，降低战略游戏的认知洪峰。",
      },
      en: {
        title: "Layered end-of-turn reporting",
        summary: "Split mandatory outcomes from optional digests so strategists get signal without cognitive flooding.",
      },
      fr: {
        title: "Rapport de fin de tour en couches",
        summary: "Séparer l’essentiel immédiat du détail consultable pour éviter la surcharge cognitive.",
      },
      detail: {
        zh: {
          paragraphs: ["参考实体战棋里「结算条 + 记录册」的习惯：前者短、可扫；后者长、可检索。"],
          bullets: ["「立即层」只展示资源变化、关键状态迁移与可执行反制提示。","「档案层」收录触发链路与随机种子引用，方便你之后写真正的开发博客。"],
          note: "若公开 Demo，会隐藏档案层中的调试字段。",
        },
        en: {
          paragraphs: [
            "Borrowed from tabletop habits: a short resolution strip plus a reference log you can ignore until needed.",
          ],
          bullets: [
            "The urgent layer lists resource deltas, state transitions, and counterplay hooks only.",
            "The archive layer stores trigger chains and seed references for future write-ups.",
          ],
          note: "Demo builds will strip debug fields from the archive layer.",
        },
        fr: {
          paragraphs: [
            "Inspiré du plateau : bandeau de résolution court + journal consultable quand nécessaire.",
          ],
          bullets: [
            "La couche urgente : deltas, transitions d’état, indices de contre-jeu.",
            "La couche archive : chaînes de déclenchement et références de graine pour articles futurs.",
          ],
          note: "Les champs debug disparaîtront des builds démo.",
        },
      },
    },
    {
      date: "2026-04-17",
      zh: {
        title: "TurnReportPanel 解耦与数据驱动（EventData / world_flags）",
        summary: "弹窗独立场景；Array[Dictionary] 单向注入；EventData 资源池；world_flags 与 TaskData.complete_flag 收束分支状态。",
      },
      en: {
        title: "Turn report decoupling & data-driven events",
        summary: "Modular report panel; payload dictionaries; EventData resources; global flags replace brittle task_id checks.",
      },
      fr: {
        title: "Panneau de rapport modulaire et flags mondiaux",
        summary: "Scène dédiée ; dictionnaires injectés ; EventData ; world_flags et complete_flag.",
      },
      detail: {
        zh: {
          paragraphs: ["【9】TurnReportPanel.tscn：从 UIRoot 剥离回合结算弹窗；后端传 Array[Dictionary]，弹窗内解析渲染，避免 ui.gd 硬编码拼接。","数据驱动：新增 EventData，将 event_manager 中疫苗/回合检测等迁入可配置资源；GameCore.world_flags 取代基于 task_id 的局部校验。"],
          bullets: ["TaskData.complete_flag：任务完成后写入不可逆全局状态（如 vzv_defense_prepared）。","已跑通：事件触发 → 限时任务 → 强制阻断 → Flag 写入 → 分支结算 → 模态反馈。","排错：修复 String 与 Dictionary 混拼导致的春季结算崩溃。"],
          note: "",
        },
        en: {
          paragraphs: [
            "TurnReportPanel moved to its own scene; payload is Array[Dictionary] rendered inside the panel—no more string pasting in ui.gd.",
            "EventData resources lift vaccine / turn checks out of code; GameCore.world_flags replaces ad-hoc task_id branching.",
          ],
          bullets: [
            "TaskData.complete_flag writes durable world state after completion (e.g. vzv_defense_prepared).",
            "Full loop shipped: event → timed task → mandatory gate → flag → branch payout → modal UI.",
            "Bugfix: spring settlement crash from mixing raw strings with dictionaries.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "TurnReportPanel isolé ; charge utile Array[Dictionary] rendue dans le panneau ; fini le collage de chaînes dans ui.gd.",
            "Ressources EventData ; world_flags dans GameCore à la place des branches fragiles sur task_id.",
          ],
          bullets: [
            "complete_flag écrit l’état monde durable après la tâche.",
            "Boucle : événement → tâche limitée → porte obligatoire → drapeau → branche → UI modale.",
            "Crash printemps : mélange String / Dictionary corrigé.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-14",
      zh: {
        title: "容器化 UI 排版架构（流式布局与 Nine-Patch）",
        summary: "以 Margin/VBox/HBox 替代绝对坐标；Autowrap 与 Clip；Texture 尺寸约束；Nine-Patch / StyleBox；ScrollContainer 最小高度。",
      },
      en: {
        title: "Container-based UI layout refresh",
        summary: "Flow layout replaces absolute coords; text wrap/clamp; nine-patch cards; scroll viewport min sizes.",
      },
      fr: {
        title: "Refonte UI en conteneurs",
        summary: "Flux Margin/VBox/HBox ; texte cadré ; nine-patch ; scroll avec taille mini.",
      },
      detail: {
        zh: {
          paragraphs: ["【8】流式布局：摒弃绝对坐标；嵌套 MarginContainer、VBoxContainer、HBoxContainer，卡片尺寸由文案撑开。"],
          bullets: ["文本：Autowrap Mode (Word) + Clip Text，防止溢出。","图像：TextureButton 使用 Ignore Texture Size + Custom Minimum Size；Keep Aspect Centered。","背景：StyleBoxTexture / NinePatchRect + Texture Margin 防圆角拉伸变形。","ScrollContainer：显式 Custom Minimum Size 与 Expand；StyleBoxEmpty 去除多余阴影。"],
          note: "",
        },
        en: {
          paragraphs: [
            "Flow layout only: Margin + VBox + HBox instead of absolute coordinates; card height follows copy.",
          ],
          bullets: [
            "Text: Autowrap (word) + clip to prevent overflow on small screens.",
            "Icons: TextureButton with ignore texture size + minimum size; keep aspect centered.",
            "Frames: StyleBoxTexture / nine-patch margins keep corners crisp when stretched.",
            "Scroll areas: explicit minimum size + expand flags; StyleBoxEmpty strips unwanted drop shadows.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "Mise en page fluide : Margin / VBox / HBox plutôt que le positionnement absolu.",
          ],
          bullets: [
            "Texte : retour à la ligne + clip.",
            "Icônes : taille mini + conserver les proportions.",
            "Cadres : nine-patch / marges de texture pour les angles.",
            "Scroll : taille mini + expansion ; StyleBoxEmpty pour retirer l’ombre parasite.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-11",
      zh: {
        title: "事件系统、时效任务与强制回合阻断",
        summary: "EventManager 挂载；TaskData.lifespan_turns / is_mandatory；Decay 与强制未完成任务拦截；水痘/疫苗叙事隐喻玩法框架。",
      },
      en: {
        title: "Event system, expiring tasks & mandatory gates",
        summary: "EventManager integrated; task decay and mandatory checks block advance; narrative vaccine scenario scaffolded.",
      },
      fr: {
        title: "Système d’événements et tâches obligatoires",
        summary: "EventManager ; durée de vie et mandatory ; blocage d’avance ; prototype vaccinal.",
      },
      detail: {
        zh: {
          paragraphs: ["【7】事件架构：GameCore 下挂载 EventManager；turn_ended 静态扫描主线/情报 vs health_stress 动态轮询惊恐的职责分离。","任务生命周期：TaskData 增加 lifespan_turns、is_mandatory；EconomySystem 回合衰减，归零销毁。"],
          bullets: ["阻断：_has_uncompleted_mandatory_task() 防止跳过「新手防线部署」等关键步。","数据流：底层生成 → EventDispatcher → 侧边栏 preload → 卡片实例化；修复 cost_ap vs ap_cost 命名冲突与路径。","叙事：麻腮风疫苗、春季水痘转化为「引入特种敌军演练」与「防线结算」；前置军费/演习触发不同分支。"],
          note: "",
        },
        en: {
          paragraphs: [
            "EventManager under GameCore: turn_ended handles narrative scans while stress polling stays separate for panic popups.",
            "Task lifespan and mandatory flags: decay each turn, destroy at zero, gate advance if unfinished business remains.",
          ],
          bullets: [
            "_has_uncompleted_mandatory_task() blocks skipping tutorial-critical steps like the novice defence drill.",
            "Pipeline: data emit → EventDispatcher → sidebar preload → card scenes; fixed cost_ap vs ap_cost typos and bad paths.",
            "Narrative frame: MMR vaccine + spring chickenpox mapped to ‘special incursion drill’ and defence payout branches tied to prep spend.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "EventManager sous GameCore : turn_ended pour la narration ; stress pour les popups de panique.",
            "Tâches avec durée de vie et drapeau obligatoire.",
          ],
          bullets: [
            "Blocage si tâche obligatoire inachevée (ligne de défense débutant).",
            "Flux données → EventDispatcher → cartes préchargées ; correctifs cost_ap / chemins.",
            "Cadre narratif vaccin / varicelle transformé en exercices de défense à embranchements.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-09",
      zh: {
        title: "器官代谢、高血压、焦虑弹窗与双 Autoload 重构验证",
        summary: "WorkIntensity 与 organs_state；代谢税与差异化 ROI；血压与三种行政干预；AnxietyPopup 与 anxiety 阈值；EventDispatcher + GameCore 子系统分拆。",
      },
      en: {
        title: "Organs, hypertension crises & anxiety UI spike",
        summary: "Organ workloads and tax loop; blood-pressure admin tools; anxiety popups; split autoloads verified in play.",
      },
      fr: {
        title: "Organes, hypertension, anxiété et autoloads",
        summary: "Intensités de travail ; boucle fiscale ; crises BP ; popups d’anxiété ; architecture modulaire.",
      },
      detail: {
        zh: {
          paragraphs: ["【总结-4 核心】器官：引入 WorkIntensity（温饱/负荷/极限）与 organs_state，已配置脑、肝、心、胃、肺，支持未来热插拔。","经济与压榨：金钱来自器官「代谢税」；stress_penalty 差异化 ROI（例：大脑高收益高消耗，心脏低收益高系统压力）。advance_turn 内嵌 process_organs_turn_end，闭环至脂肪耗尽与跨阶段惩罚。"],
          bullets: ["高血压：心脏高负荷累加 blood_pressure，上限触发「主干道决堤」永久扣最大行动力；三种干预——利尿剂（金钱+卡路里）、β阻滞剂（AP 锁心）、血管扩张剂（钜款提升 bp_max_capacity）。","联调：独立 UI 测试面板验证接口与 resources_updated。","【5-6】焦虑→惊恐：设计「无字报错弹窗」阶梯惩罚；AnxietyPopup 预制体随机视口坐标与关闭；global_data 中 anxiety_popup_triggered、check_anxiety_events（health_stress >200 偶发，>400 爆发）。","【6】控制台验证：臃肿 global_data 拆为 EventDispatcher + GameCore；EconomySystem、OrganManager、TimeManager 挂载；单向数据流连通。"],
          note: "本条目合并原「总结-4」中后期多段阶段性总结，便于站内浏览。",
        },
        en: {
          paragraphs: [
            "Organs adopt WorkIntensity bands plus organs_state for brain, liver, heart, stomach, lungs—hot-pluggable organs later.",
            "Metabolic tax: organs pay coin; stress_penalty tunes ROI (brain pays well but burns calories; heart yields little yet spikes systemic stress).",
          ],
          bullets: [
            "Hypertension track: high cardiac load stacks blood_pressure; breach applies permanent max-AP loss; three admin cures (diuretic burn, beta-block AP lock, vasodilator raises bp_max_capacity).",
            "Debug HUD proves resources_updated wiring.",
            "Anxiety ladder: silent error popups; AnxietyPopup randomises viewport placement; anxiety_popup_triggered with thresholds at stress >200 / >400.",
            "Split autoloads: EventDispatcher + GameCore hosting EconomySystem, OrganManager, TimeManager—unidirectional UI updates.",
          ],
          note: "Merged several mid-phase milestone notes for easier reading.",
        },
        fr: {
          paragraphs: [
            "Organes : WorkIntensity + dictionnaire d’état pour cerveau, foie, cœur, estomac, poumons.",
            "Impôt métabolique et stress_penalty pour moduler le retour sur pression.",
          ],
          bullets: [
            "Hypertension : blood_pressure jusqu’à rupture ; trois interventions médicamenteuses ludifiées.",
            "HUD test : signaux resources_updated.",
            "Anxiété : popups façon erreur silencieuse ; seuils stress 200 / 400.",
            "Autoloads scindés : EventDispatcher + GameCore + sous-systèmes.",
          ],
          note: "Fusion de plusieurs jalons avril pour la lecture web.",
        },
      },
    },
    {
      date: "2026-04-06",
      zh: {
        title: "世界引擎：顶栏、侧边栏与 Mock 联调（总结-3）",
        summary: "放弃拖拽与多状态；顶栏 Observer 显示预扣资源；TaskQueueItem 与 task_cancelled；心理健康向任务设计草案。",
      },
      en: {
        title: "Top bar & task queue UX loop",
        summary: "Queued actions with frozen budgets; reactive top bar; cancellable queue items restoring map affordances.",
      },
      fr: {
        title: "Barre supérieure et file d’actions",
        summary: "Pré-déduction budgétaire ; observateur sur ressources ; annulation et signaux globaux.",
      },
      detail: {
        zh: {
          paragraphs: ["【阶段性开发总结-3】摒弃拖拽与 To-do/Doing 多状态，确立「原节点入列 → 侧边栏预扣除展示 → 回合结算或单点反悔」。","顶栏：resources_updated 驱动，格式化如 AP「3 (-2) / 5」及警示色。"],
          bullets: ["侧边栏：pending_tasks_changed 动态列表；TaskQueueItem 预制体；bind() + task_cancelled(task) 取消排队、退还资源、恢复地图气泡可点。","Mock 数据跑通从生成、渲染到预扣除的全链路。","任务设计草案：短期多巴胺代偿、情绪性进食维稳、认知重构与碎片整理（映射 AP / 金钱 / Health Stress）。"],
          note: "",
        },
        en: {
          paragraphs: [
            "Dropped drag-and-drop and multi-column todo states for a leaner flow: enqueue on the map bubble, resolve or cancel from the planning rail.",
            "Top bar listens to resources_updated and renders preview drains like AP 3 (−2) / 5 with warning colours.",
          ],
          bullets: [
            "Sidebar rebuilds from pending_tasks_changed using TaskQueueItem; task_cancelled refunds resources and re-enables hex bubbles.",
            "Mock pipeline validated generation → UI queue → frozen costs.",
            "Psych task sketches tie dopamine hedging, emotional eating, and cognitive reframing to AP, cash, and health stress.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "Abandon du drag & drop : file unique depuis la carte vers le panneau de planification.",
            "Barre du haut branchée sur resources_updated avec retraits affichés.",
          ],
          bullets: [
            "Liste latérale pilotée par pending_tasks_changed + TaskQueueItem ; annulation et remboursement.",
            "Mock bout en bout.",
            "Ébauches de quêtes psyché mappées sur PA, argent et stress.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-04",
      zh: {
        title: "UI 根规范、TaskData 与指令排队（总结-2）",
        summary: "CanvasLayer 下 UIRoot 全屏基准；禁用滥用 Scale；自定义资源 TaskData；pending_tasks 与 queue_task/cancel；TileMapLayer + map_regions 规划。",
      },
      en: {
        title: "UI roots, TaskData resources & action queue",
        summary: "Fullscreen UI anchor; typed task resources; frozen budgets in a pending queue; hex grid via tilemap not per-cell nodes.",
      },
      fr: {
        title: "UI ancrée, TaskData et file d’intentions",
        summary: "Control plein écran ; ressources typées ; file avec gel budgétaire ; grille tuilée.",
      },
      detail: {
        zh: {
          paragraphs: ["【2-1】UI：CanvasLayer 下必须用全屏 Control (UIRoot) 作排版基准；少用 Scale，改用 Custom Minimum Size、Margin 与内容自适应。","【2-2】TaskData：弃用字典数组，采用自定义资源 .tres；任务类型（健康、压力欲望等）与器官标签（胃、肺、通用）规划。"],
          bullets: ["【2-3】指令排队：由即时扣除改为预算预扣除与回合统一结算；pending_tasks；下回合前可取消并退还。","【2-4】地图：六边形不设独立节点，用 TileMapLayer + local_to_map；地图生成输出 map_regions，点击格查字典匹配器官并弹出任务气泡。","【2-5】global_data：queued_ap_cost、queued_money_cost、queue_task、cancel_task；resources_updated、pending_tasks_changed。"],
          note: "",
        },
        en: {
          paragraphs: [
            "UI baseline: fullscreen UIRoot under CanvasLayer; ban abusive Scale hacks—lean on min sizes, margins, and intrinsic sizing.",
            "Task data now uses typed .tres resources with planned organ tags instead of dictionary soup.",
          ],
          bullets: [
            "Action queue: budgets freeze on click, settle on advance; pending_tasks cancellable until the turn ends.",
            "Hex map uses TileMapLayer + local_to_map; map_regions index keeps organ lookups cheap at click time.",
            "Global hooks: queued_ap_cost / queued_money_cost, queue_task, cancel_task, plus resources and pending task signals.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "UI : UIRoot plein écran ; éviter le Scale ; min size et marges.",
            "TaskData en ressources typées avec tags d’organe.",
          ],
          bullets: [
            "File d’intentions avec gel budgétaire et annulation avant le prochain tour.",
            "Grille tuilée + dictionnaire map_regions pour l’organe sous le curseur.",
            "Variables files d’AP / argent et signaux de refresh.",
          ],
          note: "",
        },
      },
    },
    {
      date: "2026-04-02",
      zh: {
        title: "Autoload 数据中枢与主 UI、模态结算（进度总结-1）",
        summary: "global_data 接管经济与时间与 health；生理代偿链；CanvasLayer 顶栏与推进按钮；ui.gd 模态回合结算。",
      },
      en: {
        title: "Global data core & first GUI shell",
        summary: "Autoload handles economy, life-stage clocks, and stress; metabolic loan chain; layered UI with modal turn resolution.",
      },
      fr: {
        title: "Données globales et première couche UI",
        summary: "Autoload économie/temps/santé ; chaîne de dette métabolique ; UI en couches et récap modal.",
      },
      detail: {
        zh: {
          paragraphs: ["【进度总结-1】确立底层数据中枢 (Autoload)：global_data.gd 接管全局经济（金钱）、能量（卡路里/脂肪储备）、时间（生命阶段/回合）、健康（压力值/最大行动力）。"],
          bullets: ["生理代偿：热量缺口 → 消耗脂肪 → 储备耗尽转系统压力 → 跨生命阶段结算 → 永久 Debuff。","主场景 UI：CanvasLayer 构建独立 2D GUI（顶栏数据监控 + 右下角推进），处理父子嵌套。","模态结算：ui.gd 绑定前端与后端；「下一回合」后台演算后以黑色遮罩弹窗强制反馈结果。"],
          note: "",
        },
        en: {
          paragraphs: [
            "global_data Autoload now owns cross-cutting economy, caloric reserves, life-stage clocks, and the stress / max-AP health rails.",
          ],
          bullets: [
            "Metabolic loan path: calorie gap → fat drawdown → stress spike when empty → stage transition debits → lasting debuffs.",
            "First GUI pass: CanvasLayer top telemetry plus end-turn button with clean parent/child nesting.",
            "Modal resolution: ui.gd binds UI to sim; advancing resolves in the background then forces a dimmed modal readout.",
          ],
          note: "",
        },
        fr: {
          paragraphs: [
            "L’Autoload global_data centralise économie, réserves, cycles de vie et jauge stress / PA max.",
          ],
          bullets: [
            "Chaîne de dette métabolique jusqu’aux malus persistants.",
            "Première UI : calque Canvas, barres de pilotage et bouton de fin de tour.",
            "Résolution modale après simulation en arrière-plan.",
          ],
          note: "",
        },
      },
    }
  ];

  var STUDIO_BASE = "https://ignissolarisstudio.com/?lang=";

  function getLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === "zh" || saved === "en" || saved === "fr") return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (nav === "zh") return "zh";
    if (nav === "fr") return "fr";
    return "en";
  }

  function applyDataI18n(lang) {
    var map = STR[lang] || STR.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && map[key] != null) el.textContent = map[key];
    });
  }

  function setLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "fr" ? "fr" : "en";
    var studioLang = lang === "zh" ? "zh" : lang === "fr" ? "fr" : "en";
    document.querySelectorAll("[data-studio-link]").forEach(function (a) {
      a.href = STUDIO_BASE + studioLang + "#welcome";
    });
    applyDataI18n(lang);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-current", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    if (document.getElementById("devlog-cards")) {
      renderIndexDevlogCards(lang);
    }

    if (document.getElementById("devlog-timeline")) {
      renderDevlogTimeline(lang);
    }

    var dialog = document.getElementById("devlog-dialog");
    if (dialog && dialog.open) {
      var idx = dialog.getAttribute("data-open-entry");
      if (idx != null && DEVLOG[parseInt(idx, 10)]) {
        fillDialog(DEVLOG[parseInt(idx, 10)], lang);
      }
    }
  }

  function formatMonthLabel(ym) {
    var parts = ym.split("-");
    if (parts.length < 2) return ym;
    return parts[0] + "-" + parts[1];
  }

  function appendDetailSection(root, langKey, entry, strings) {
    var pack = entry.detail[langKey];
    if (!pack) return;
    var wrap = document.createElement("div");
    wrap.className = "devlog-detail__lang";
    var h = document.createElement("h3");
    h.textContent = entry[langKey].title;
    wrap.appendChild(h);

    if (pack.paragraphs && pack.paragraphs.length) {
      pack.paragraphs.forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        wrap.appendChild(p);
      });
    }

    if (pack.bullets && pack.bullets.length) {
      var strong = document.createElement("p");
      var s = document.createElement("strong");
      s.textContent = strings["devlog.labelContent"];
      strong.appendChild(s);
      wrap.appendChild(strong);
      var ul = document.createElement("ul");
      pack.bullets.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
    }

    if (pack.note) {
      var nLabel = document.createElement("p");
      var ns = document.createElement("strong");
      ns.textContent = strings["devlog.labelNote"];
      nLabel.appendChild(ns);
      wrap.appendChild(nLabel);
      var np = document.createElement("p");
      np.textContent = pack.note;
      wrap.appendChild(np);
    }

    root.appendChild(wrap);
  }

  function fillDialog(entry, lang) {
    var body = document.getElementById("devlog-dialog-body");
    var dialog = document.getElementById("devlog-dialog");
    if (!body || !dialog) return;
    body.innerHTML = "";
    var langUi = lang || getLang();

    var dateEl = document.createElement("p");
    dateEl.className = "devlog-dialog__date";
    var t = document.createElement("time");
    t.dateTime = entry.date;
    t.textContent = entry.date;
    dateEl.appendChild(t);
    body.appendChild(dateEl);

    var lk = langUi === "zh" ? "zh" : langUi === "fr" ? "fr" : "en";
    appendDetailSection(body, lk, entry, STR[langUi] || STR.en);

    var title = entry[lk].title;
    dialog.setAttribute("aria-label", title);
    applyDataI18n(langUi);
  }

  function renderIndexDevlogCards(lang) {
    var host = document.getElementById("devlog-cards");
    if (!host) return;
    host.innerHTML = "";
    var langUi = lang || getLang();
    var lk = langUi === "zh" ? "zh" : langUi === "fr" ? "fr" : "en";

    DEVLOG.slice(0, INDEX_DEVLOG_CARD_LIMIT).forEach(function (entry, idx) {
      var art = document.createElement("article");
      art.className = "devlog-card";

      var date = document.createElement("p");
      date.className = "devlog-card__date";
      var time = document.createElement("time");
      time.dateTime = entry.date;
      time.textContent = entry.date;
      date.appendChild(time);
      art.appendChild(date);

      var h = document.createElement("h3");
      h.className = "devlog-card__title";
      h.textContent = entry[lk].title;
      art.appendChild(h);

      var sum = document.createElement("p");
      sum.className = "devlog-card__summary";
      sum.textContent = entry[lk].summary;
      art.appendChild(sum);

      var row = document.createElement("div");
      row.className = "devlog-card__actions";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "devlog-card__details";
      btn.setAttribute("data-devlog-open", String(idx));
      btn.textContent = (STR[langUi] || STR.en)["devlog.viewDetails"];
      row.appendChild(btn);
      art.appendChild(row);

      host.appendChild(art);
    });
  }

  function renderDevlogTimeline(lang) {
    var host = document.getElementById("devlog-timeline");
    if (!host) return;

    var langUi = lang || getLang();
    var strings = STR[langUi] || STR.en;
    var lk = langUi === "zh" ? "zh" : langUi === "fr" ? "fr" : "en";

    var groups = {};
    DEVLOG.forEach(function (entry) {
      var ym = entry.date.slice(0, 7);
      if (!groups[ym]) groups[ym] = [];
      groups[ym].push(entry);
    });
    var months = Object.keys(groups).sort(function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    });

    host.innerHTML = "";

    var aside = document.createElement("aside");
    aside.className = "devlog-toc";
    var tocTitle = document.createElement("h2");
    tocTitle.textContent = strings["devlog.timelineTitle"];
    aside.appendChild(tocTitle);
    var ulm = document.createElement("ul");
    months.forEach(function (ym) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#m-" + ym;
      a.textContent = formatMonthLabel(ym);
      li.appendChild(a);
      ulm.appendChild(li);
    });
    aside.appendChild(ulm);
    host.appendChild(aside);

    var mainCol = document.createElement("div");
    mainCol.className = "devlog-timeline__main";

    months.forEach(function (ym) {
      var sec = document.createElement("section");
      sec.className = "devlog-month";
      sec.id = "m-" + ym;
      var h2 = document.createElement("h2");
      h2.textContent = formatMonthLabel(ym);
      sec.appendChild(h2);

      groups[ym].forEach(function (entry) {
        var article = document.createElement("article");
        article.className = "devlog-full";

        var d = document.createElement("p");
        d.className = "devlog-full__date";
        var t = document.createElement("time");
        t.dateTime = entry.date;
        t.textContent = entry.date;
        d.appendChild(t);
        article.appendChild(d);

        appendDetailSection(article, lk, entry, strings);

        sec.appendChild(article);
      });

      mainCol.appendChild(sec);
    });

    host.appendChild(mainCol);
  }

  function setupDevlogDialog() {
    var dialog = document.getElementById("devlog-dialog");
    if (!dialog) return;

    var cards = document.getElementById("devlog-cards");
    if (cards) {
      cards.addEventListener("click", function (e) {
        var opener = e.target.closest("[data-devlog-open]");
        if (!opener) return;
        var i = parseInt(opener.getAttribute("data-devlog-open"), 10);
        if (isNaN(i) || !DEVLOG[i]) return;
        dialog.setAttribute("data-open-entry", String(i));
        fillDialog(DEVLOG[i], getLang());
        dialog.showModal();
        var closeBtn = dialog.querySelector(".devlog-dialog__close");
        if (closeBtn) closeBtn.focus();
      });
    }

    var closeBtn = dialog.querySelector(".devlog-dialog__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        dialog.close();
      });
    }

    dialog.addEventListener("close", function () {
      dialog.removeAttribute("data-open-entry");
    });
  }

  function init() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });

    var y = document.getElementById("y");
    if (y) y.textContent = String(new Date().getFullYear());

    setupDevlogDialog();
    setLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
