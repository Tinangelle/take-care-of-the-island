/**
 * One-off generator: merges April 2026 devlog entries into main.js
 * Run: node scripts/gen-devlog-april.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const mainPath = path.join(root, "main.js");

const entries = [
  {
    date: "2026-04-29",
    zh: {
      title: "AI 上下文与文档架构落地（开发工作流）",
      summary:
        "以 Cursor 与本地 docs/ 取代旧管线；确立 core_design、data_schema、devlog、coding_standard 四份断言式文档，并统一 organ_id 命名。",
    },
    en: {
      title: "Docs-driven workflow & architecture references",
      summary:
        "Replaced a fragile external-doc loop with Cursor @ references and a local docs/ library; landed four assertive specs and unified organ_id strings.",
    },
    fr: {
      title: "Documentation locale et convention organ_id",
      summary:
        "Nouveau flux centré sur Cursor + dossier docs/ ; quatre documents de référence et harmonisation des identifiants d’organes.",
    },
    detailZh: {
      paragraphs: [
        "【阶段性开发总结-12】开发工作流重构：彻底废弃「Gemini 生成 -> Google Doc -> NotebookLM -> 检索回编辑器」的低效链路。确立以 Cursor @ 引用为核心的本地化文档驱动开发，在 Godot 项目根目录建立 docs/ 上下文库。",
        "【核心架构文档】将机制设定提炼为四份面向 AI 的断言式规则：core_design.md（核心机制与世界观）、data_schema.md（数据字典与信号总线）、devlog.md（架构决策与避坑）、coding_standard.md（代码规范与目录，含 TaskData / EventData 字段）。",
      ],
      bullets: [
        "数据一致性：排查并修正 organ_id 历史命名冲突，统一使用如 \"Heart\", \"Brain\", \"Kidneys\" 等首字母大写格式，规避 KeyError。",
      ],
      note: "四月末为回顾性整理条目，日期为登记用近似顺序。",
    },
  },
  {
    date: "2026-04-26",
    zh: {
      title: "空间映射与分层 UI 架构（气泡 + 详情）",
      summary:
        "OrganIndicator / OrganDetailPanel 分层；BubbleManager 视口坐标同步；TaskData.target_organs 与摄像机 Tween 聚焦；Mouse Filter 与容器排版修正。",
    },
    en: {
      title: "Spatial UI layers & organ task routing",
      summary:
        "Split macro bubbles from detail panels; synced world-to-screen tracking; targeted tasks per organ; camera tween focus; fixed mouse filters.",
    },
    fr: {
      title: "UI spatiale en couches et routage par organe",
      summary:
        "Bulles légères + panneau détaillé ; suivi canvas ; tâches ciblées ; caméra tween ; filtres souris corrigés.",
    },
    detailZh: {
      paragraphs: [
        "【11】交互架构：确立「宏观气泡 (OrganIndicator) + 微观详情 (OrganDetailPanel)」双层方案，避免在地图空间直接渲染复杂面板造成的遮挡。",
        "空间坐标：BubbleManager 监听地图数据，在器官世界坐标实例化气泡；通过 canvas_transform 做世界坐标到视口坐标转换，随摄像机平移缩放同步。",
      ],
      bullets: [
        "数据：TaskData 扩充 target_organs；经济/任务侧打通 get_tasks_for_organ()，实现「摄入碳水」类任务精准下发至胃部等区域。",
        "摄像机：CameraController 混合手动平移、滚轮缩放、Tween 点击气泡后居中放大；修复初始视口极值导致的锁死。",
        "输入与排版：全局修正 Mouse Filter（剔除 Stop 误用）；修正 OrganDetailPanel / TaskQueueItem 嵌套与 VBox/ScrollContainer 规则。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-23",
    zh: {
      title: "视觉/逻辑双层地图与 MapManager、摄像机",
      summary:
        "31 块单图等距六边形 + Y-Sort；双 TileMapLayer + Custom Data organ_id；MapManager 构建 map_regions；EventDispatcher.organ_clicked。",
    },
    en: {
      title: "Dual tile layers, map regions & camera",
      summary:
        "Iso hex visuals with Y-sort; logic layer with organ_id metadata; MapManager builds regions dict; organ click signal wired.",
    },
    fr: {
      title: "Carte double couche et contrôle caméra",
      summary:
        "Hex iso + Y-sort ; métadonnées organ_id ; dictionnaire map_regions ; signal organ_clicked.",
    },
    detailZh: {
      paragraphs: [
        "【10】VisualLayer：31 块单图跑通等距六边形对齐与 Y-Sort 遮挡；环形群岛「地貌隐喻生理功能」布局。",
        "LogicLayer：视觉与数据分离双层 TileMapLayer；隐藏纯色图块 + Custom Data Layers (organ_id) 解耦器官归属与地貌。",
      ],
      bullets: [
        "MapManager：_ready 自动构建 map_regions；_unhandled_input 完成屏幕→网格→字典查询→世界中心点。",
        "CameraController：按绘制边界自动居中、无极滚轮缩放（调低 min_zoom）、右键拖拽平移速率修复。",
        "EventDispatcher：预留并成功触发 organ_clicked(organ_id, world_position)。",
      ],
      note: "",
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
      summary:
        "Split mandatory outcomes from optional digests so strategists get signal without cognitive flooding.",
    },
    fr: {
      title: "Rapport de fin de tour en couches",
      summary:
        "Séparer l’essentiel immédiat du détail consultable pour éviter la surcharge cognitive.",
    },
    detailZh: {
      paragraphs: [
        "参考实体战棋里「结算条 + 记录册」的习惯：前者短、可扫；后者长、可检索。",
      ],
      bullets: [
        "「立即层」只展示资源变化、关键状态迁移与可执行反制提示。",
        "「档案层」收录触发链路与随机种子引用，方便你之后写真正的开发博客。",
      ],
      note: "若公开 Demo，会隐藏档案层中的调试字段。",
    },
    enDetail: true,
    frDetail: true,
  },
  {
    date: "2026-04-17",
    zh: {
      title: "TurnReportPanel 解耦与数据驱动（EventData / world_flags）",
      summary:
        "弹窗独立场景；Array[Dictionary] 单向注入；EventData 资源池；world_flags 与 TaskData.complete_flag 收束分支状态。",
    },
    en: {
      title: "Turn report decoupling & data-driven events",
      summary:
        "Modular report panel; payload dictionaries; EventData resources; global flags replace brittle task_id checks.",
    },
    fr: {
      title: "Panneau de rapport modulaire et flags mondiaux",
      summary:
        "Scène dédiée ; dictionnaires injectés ; EventData ; world_flags et complete_flag.",
    },
    detailZh: {
      paragraphs: [
        "【9】TurnReportPanel.tscn：从 UIRoot 剥离回合结算弹窗；后端传 Array[Dictionary]，弹窗内解析渲染，避免 ui.gd 硬编码拼接。",
        "数据驱动：新增 EventData，将 event_manager 中疫苗/回合检测等迁入可配置资源；GameCore.world_flags 取代基于 task_id 的局部校验。",
      ],
      bullets: [
        "TaskData.complete_flag：任务完成后写入不可逆全局状态（如 vzv_defense_prepared）。",
        "已跑通：事件触发 → 限时任务 → 强制阻断 → Flag 写入 → 分支结算 → 模态反馈。",
        "排错：修复 String 与 Dictionary 混拼导致的春季结算崩溃。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-14",
    zh: {
      title: "容器化 UI 排版架构（流式布局与 Nine-Patch）",
      summary:
        "以 Margin/VBox/HBox 替代绝对坐标；Autowrap 与 Clip；Texture 尺寸约束；Nine-Patch / StyleBox；ScrollContainer 最小高度。",
    },
    en: {
      title: "Container-based UI layout refresh",
      summary:
        "Flow layout replaces absolute coords; text wrap/clamp; nine-patch cards; scroll viewport min sizes.",
    },
    fr: {
      title: "Refonte UI en conteneurs",
      summary:
        "Flux Margin/VBox/HBox ; texte cadré ; nine-patch ; scroll avec taille mini.",
    },
    detailZh: {
      paragraphs: [
        "【8】流式布局：摒弃绝对坐标；嵌套 MarginContainer、VBoxContainer、HBoxContainer，卡片尺寸由文案撑开。",
      ],
      bullets: [
        "文本：Autowrap Mode (Word) + Clip Text，防止溢出。",
        "图像：TextureButton 使用 Ignore Texture Size + Custom Minimum Size；Keep Aspect Centered。",
        "背景：StyleBoxTexture / NinePatchRect + Texture Margin 防圆角拉伸变形。",
        "ScrollContainer：显式 Custom Minimum Size 与 Expand；StyleBoxEmpty 去除多余阴影。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-11",
    zh: {
      title: "事件系统、时效任务与强制回合阻断",
      summary:
        "EventManager 挂载；TaskData.lifespan_turns / is_mandatory；Decay 与强制未完成任务拦截；水痘/疫苗叙事隐喻玩法框架。",
    },
    en: {
      title: "Event system, expiring tasks & mandatory gates",
      summary:
        "EventManager integrated; task decay and mandatory checks block advance; narrative vaccine scenario scaffolded.",
    },
    fr: {
      title: "Système d’événements et tâches obligatoires",
      summary:
        "EventManager ; durée de vie et mandatory ; blocage d’avance ; prototype vaccinal.",
    },
    detailZh: {
      paragraphs: [
        "【7】事件架构：GameCore 下挂载 EventManager；turn_ended 静态扫描主线/情报 vs health_stress 动态轮询惊恐的职责分离。",
        "任务生命周期：TaskData 增加 lifespan_turns、is_mandatory；EconomySystem 回合衰减，归零销毁。",
      ],
      bullets: [
        "阻断：_has_uncompleted_mandatory_task() 防止跳过「新手防线部署」等关键步。",
        "数据流：底层生成 → EventDispatcher → 侧边栏 preload → 卡片实例化；修复 cost_ap vs ap_cost 命名冲突与路径。",
        "叙事：麻腮风疫苗、春季水痘转化为「引入特种敌军演练」与「防线结算」；前置军费/演习触发不同分支。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-09",
    zh: {
      title: "器官代谢、高血压、焦虑弹窗与双 Autoload 重构验证",
      summary:
        "WorkIntensity 与 organs_state；代谢税与差异化 ROI；血压与三种行政干预；AnxietyPopup 与 anxiety 阈值；EventDispatcher + GameCore 子系统分拆。",
    },
    en: {
      title: "Organs, hypertension crises & anxiety UI spike",
      summary:
        "Organ workloads and tax loop; blood-pressure admin tools; anxiety popups; split autoloads verified in play.",
    },
    fr: {
      title: "Organes, hypertension, anxiété et autoloads",
      summary:
        "Intensités de travail ; boucle fiscale ; crises BP ; popups d’anxiété ; architecture modulaire.",
    },
    detailZh: {
      paragraphs: [
        "【总结-4 核心】器官：引入 WorkIntensity（温饱/负荷/极限）与 organs_state，已配置脑、肝、心、胃、肺，支持未来热插拔。",
        "经济与压榨：金钱来自器官「代谢税」；stress_penalty 差异化 ROI（例：大脑高收益高消耗，心脏低收益高系统压力）。advance_turn 内嵌 process_organs_turn_end，闭环至脂肪耗尽与跨阶段惩罚。",
      ],
      bullets: [
        "高血压：心脏高负荷累加 blood_pressure，上限触发「主干道决堤」永久扣最大行动力；三种干预——利尿剂（金钱+卡路里）、β阻滞剂（AP 锁心）、血管扩张剂（钜款提升 bp_max_capacity）。",
        "联调：独立 UI 测试面板验证接口与 resources_updated。",
        "【5-6】焦虑→惊恐：设计「无字报错弹窗」阶梯惩罚；AnxietyPopup 预制体随机视口坐标与关闭；global_data 中 anxiety_popup_triggered、check_anxiety_events（health_stress >200 偶发，>400 爆发）。",
        "【6】控制台验证：臃肿 global_data 拆为 EventDispatcher + GameCore；EconomySystem、OrganManager、TimeManager 挂载；单向数据流连通。",
      ],
      note: "本条目合并原「总结-4」中后期多段阶段性总结，便于站内浏览。",
    },
  },
  {
    date: "2026-04-06",
    zh: {
      title: "世界引擎：顶栏、侧边栏与 Mock 联调（总结-3）",
      summary:
        "放弃拖拽与多状态；顶栏 Observer 显示预扣资源；TaskQueueItem 与 task_cancelled；心理健康向任务设计草案。",
    },
    en: {
      title: "Top bar & task queue UX loop",
      summary:
        "Queued actions with frozen budgets; reactive top bar; cancellable queue items restoring map affordances.",
    },
    fr: {
      title: "Barre supérieure et file d’actions",
      summary:
        "Pré-déduction budgétaire ; observateur sur ressources ; annulation et signaux globaux.",
    },
    detailZh: {
      paragraphs: [
        "【阶段性开发总结-3】摒弃拖拽与 To-do/Doing 多状态，确立「原节点入列 → 侧边栏预扣除展示 → 回合结算或单点反悔」。",
        "顶栏：resources_updated 驱动，格式化如 AP「3 (-2) / 5」及警示色。",
      ],
      bullets: [
        "侧边栏：pending_tasks_changed 动态列表；TaskQueueItem 预制体；bind() + task_cancelled(task) 取消排队、退还资源、恢复地图气泡可点。",
        "Mock 数据跑通从生成、渲染到预扣除的全链路。",
        "任务设计草案：短期多巴胺代偿、情绪性进食维稳、认知重构与碎片整理（映射 AP / 金钱 / Health Stress）。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-04",
    zh: {
      title: "UI 根规范、TaskData 与指令排队（总结-2）",
      summary:
        "CanvasLayer 下 UIRoot 全屏基准；禁用滥用 Scale；自定义资源 TaskData；pending_tasks 与 queue_task/cancel；TileMapLayer + map_regions 规划。",
    },
    en: {
      title: "UI roots, TaskData resources & action queue",
      summary:
        "Fullscreen UI anchor; typed task resources; frozen budgets in a pending queue; hex grid via tilemap not per-cell nodes.",
    },
    fr: {
      title: "UI ancrée, TaskData et file d’intentions",
      summary:
        "Control plein écran ; ressources typées ; file avec gel budgétaire ; grille tuilée.",
    },
    detailZh: {
      paragraphs: [
        "【2-1】UI：CanvasLayer 下必须用全屏 Control (UIRoot) 作排版基准；少用 Scale，改用 Custom Minimum Size、Margin 与内容自适应。",
        "【2-2】TaskData：弃用字典数组，采用自定义资源 .tres；任务类型（健康、压力欲望等）与器官标签（胃、肺、通用）规划。",
      ],
      bullets: [
        "【2-3】指令排队：由即时扣除改为预算预扣除与回合统一结算；pending_tasks；下回合前可取消并退还。",
        "【2-4】地图：六边形不设独立节点，用 TileMapLayer + local_to_map；地图生成输出 map_regions，点击格查字典匹配器官并弹出任务气泡。",
        "【2-5】global_data：queued_ap_cost、queued_money_cost、queue_task、cancel_task；resources_updated、pending_tasks_changed。",
      ],
      note: "",
    },
  },
  {
    date: "2026-04-02",
    zh: {
      title: "Autoload 数据中枢与主 UI、模态结算（进度总结-1）",
      summary:
        "global_data 接管经济与时间与 health；生理代偿链；CanvasLayer 顶栏与推进按钮；ui.gd 模态回合结算。",
    },
    en: {
      title: "Global data core & first GUI shell",
      summary:
        "Autoload handles economy, life-stage clocks, and stress; metabolic loan chain; layered UI with modal turn resolution.",
    },
    fr: {
      title: "Données globales et première couche UI",
      summary:
        "Autoload économie/temps/santé ; chaîne de dette métabolique ; UI en couches et récap modal.",
    },
    detailZh: {
      paragraphs: [
        "【进度总结-1】确立底层数据中枢 (Autoload)：global_data.gd 接管全局经济（金钱）、能量（卡路里/脂肪储备）、时间（生命阶段/回合）、健康（压力值/最大行动力）。",
      ],
      bullets: [
        "生理代偿：热量缺口 → 消耗脂肪 → 储备耗尽转系统压力 → 跨生命阶段结算 → 永久 Debuff。",
        "主场景 UI：CanvasLayer 构建独立 2D GUI（顶栏数据监控 + 右下角推进），处理父子嵌套。",
        "模态结算：ui.gd 绑定前端与后端；「下一回合」后台演算后以黑色遮罩弹窗强制反馈结果。",
      ],
      note: "",
    },
  },
];

function enFromZh(detailZh) {
  return {
    paragraphs: [
      "Milestone notes from April 2026 production (see Chinese section for the authoritative checklist).",
    ],
    bullets: detailZh.bullets.slice(0, Math.min(4, detailZh.bullets.length)).map(function (b) {
      return "[EN] " + b.slice(0, 120) + (b.length > 120 ? "…" : "");
    }),
    note: detailZh.note || "",
  };
}

function frFromZh(detailZh) {
  return {
    paragraphs: [
      "Notes d’avancement (avril 2026) — référence détaillée en chinois.",
    ],
    bullets: detailZh.bullets.slice(0, Math.min(4, detailZh.bullets.length)).map(function (b) {
      return "[FR] " + b.slice(0, 120) + (b.length > 120 ? "…" : "");
    }),
    note: detailZh.note || "",
  };
}

function serializeDetailZh(dz) {
  return (
    "{\n          paragraphs: " +
    JSON.stringify(dz.paragraphs) +
    ",\n          bullets: " +
    JSON.stringify(dz.bullets) +
    ",\n          note: " +
    JSON.stringify(dz.note || "") +
    ",\n        }"
  );
}

function serializeEntry(e) {
  var zhDetail = serializeDetailZh(e.detailZh);
  var enDetail;
  var frDetail;
  if (e.enDetail && e.date === "2026-04-20") {
    enDetail = `{
          paragraphs: [
            "Borrowed from tabletop habits: a short resolution strip plus a reference log you can ignore until needed.",
          ],
          bullets: [
            "The urgent layer lists resource deltas, state transitions, and counterplay hooks only.",
            "The archive layer stores trigger chains and seed references for future write-ups.",
          ],
          note: "Demo builds will strip debug fields from the archive layer.",
        }`;
    frDetail = `{
          paragraphs: [
            "Inspiré du plateau : bandeau de résolution court + journal consultable quand nécessaire.",
          ],
          bullets: [
            "La couche urgente : deltas, transitions d’état, indices de contre-jeu.",
            "La couche archive : chaînes de déclenchement et références de graine pour articles futurs.",
          ],
          note: "Les champs debug disparaîtront des builds démo.",
        }`;
  } else {
    var enPack = enFromZh(e.detailZh);
    var frPack = frFromZh(e.detailZh);
    enDetail =
      "{\n          paragraphs: " +
      JSON.stringify(enPack.paragraphs) +
      ",\n          bullets: " +
      JSON.stringify(enPack.bullets) +
      ",\n          note: " +
      JSON.stringify(enPack.note) +
      ",\n        }";
    frDetail =
      "{\n          paragraphs: " +
      JSON.stringify(frPack.paragraphs) +
      ",\n          bullets: " +
      JSON.stringify(frPack.bullets) +
      ",\n          note: " +
      JSON.stringify(frPack.note) +
      ",\n        }";
  }

  return (
    `    {
      date: ${JSON.stringify(e.date)},
      zh: {
        title: ${JSON.stringify(e.zh.title)},
        summary: ${JSON.stringify(e.zh.summary)},
      },
      en: {
        title: ${JSON.stringify(e.en.title)},
        summary: ${JSON.stringify(e.en.summary)},
      },
      fr: {
        title: ${JSON.stringify(e.fr.title)},
        summary: ${JSON.stringify(e.fr.summary)},
      },
      detail: {
        zh: ${zhDetail},
        en: ${enDetail},
        fr: ${frDetail},
      },
    }`
  );
}

const aprilBlock = entries.map(serializeEntry).join(",\r\n");

const main = fs.readFileSync(mainPath, "utf8");
const out = main.replace(
  /\r?\n  var DEVLOG = \[[\s\S]*?\r?\n  \];/,
  "\r\n  var DEVLOG = [\r\n" + aprilBlock + "\r\n  ];"
);

if (out === main) {
  console.error("Could not replace DEVLOG block.");
  process.exit(1);
}

fs.writeFileSync(mainPath, out, "utf8");
console.log("Restored", mainPath, "—", entries.length, "April entries (template months removed).");
