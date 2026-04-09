// ==================== 游戏默认数据 ====================
const DEFAULT_GAME_DATA = {
    // 基础角色信息
    roleName: "修真者",
    level: 1,
    exp: 0,
    maxExp: 100,
    realm: "炼气期",
    realmStage: "初期",
    // 核心属性
    hp: 500,
    mp: 300,
    atk: 50,
    def: 40,
    // 修罗海相关数据
    shura: {
        currentLevel: 1,
        highestLevel: 1,
        isFighting: false
    },
    // 资源
    stone: 1000,    // 灵石
    spirit: 300,    // 灵气
    // 材料/道具
    items: {
        lingQiDan: 5,    // 灵气丹
        jinDan: 0,       // 金丹丹
        accelerate: 3,   // 加速符
        lingCao: 0,      // 灵草
        iron: 0,         // 精铁
        strenStone: 0,   // 强化石
        zongmenToken: 1, // 宗门令牌
        lianQiDan: 10,   // 练气丹
        zhuJiDan: 0,     // 筑基丹
        jinDanYe: 0,     // 金丹液
        yuanYingGuo: 0,  // 元婴果
        huaShenJing: 0,  // 化神晶
        lianXuShi: 0,    // 炼虚石
        heTiLian: 0,     // 合体莲
        daChengGu: 0,    // 大乘骨
        duJieDan: 0,     // 渡劫丹
        baoDiFu: 0,      // 突破保底符
        // 新功法碎片
        kuangRenJueFragment: 0,    // 狂刃诀碎片
        tieGuGongFragment: 0,       // 铁骨功碎片
        shiXueShuFragment: 0,       // 嗜血术碎片
        poJiaJueFragment: 0,        // 破甲诀碎片
        ningShenJueFragment: 0,      // 凝神诀碎片
        lianZhanJueFragment: 0,     // 连斩诀碎片
        wuXiangDunFragment: 0,      // 无相盾碎片
        jiuZhuanShenFragment: 0,     // 九转身碎片
        wanFaJueFragment: 0,         // 万法诀碎片
        xiuLuoZhenShenFragment: 0    // 修罗真身碎片
    },
    // 修炼相关
    practiceState: "idle", // idle/practicing
    practiceEndTime: 0,    // 修炼结束时间戳
    expSpeed: 10,          // 基础经验速度
    spiritSpeed: 15,       // 基础灵气速度
    currentMap: "qingshan", // 当前修炼地图
    autoPractice: true,    // 自动修炼
    offlineTime: Date.now(),// 离线时间戳
    autoUseDan: false,     // 自动使用灵气丹
    autoGetOffline: true,  // 自动领取离线收益
    // 游戏平衡性参数
    balance: {
        expSpeedMultiplier: 1.0,     // 经验速度倍率
        spiritSpeedMultiplier: 1.0,   // 灵气速度倍率
        dropRateMultiplier: 1.0,      // 掉落率倍率
        breakSuccessMultiplier: 1.0,  // 突破成功率倍率
        resourceGainMultiplier: 1.0   // 资源获取倍率
    },
    // 新功法系统
    gongfa: [
        // 凡阶功法
        {name: "狂刃诀", quality: "凡阶", level: 0, maxLevel: 5, fragment: "kuangRenJueFragment", equipped: false, effects: {attack: [10, 15, 20, 25, 30]}},
        {name: "铁骨功", quality: "凡阶", level: 0, maxLevel: 5, fragment: "tieGuGongFragment", equipped: false, effects: {hp: [10, 15, 20, 25, 30]}},
        // 灵阶功法
        {name: "嗜血术", quality: "灵阶", level: 0, maxLevel: 5, fragment: "shiXueShuFragment", equipped: false, effects: {vampire: [3, 4, 5, 6, 7]}},
        {name: "破甲诀", quality: "灵阶", level: 0, maxLevel: 5, fragment: "poJiaJueFragment", equipped: false, effects: {damageIncrease: [10, 13, 16, 19, 22]}},
        {name: "凝神诀", quality: "灵阶", level: 0, maxLevel: 5, fragment: "ningShenJueFragment", equipped: false, effects: {crit: [5, 7, 9, 11, 13]}},
        // 天阶功法
        {name: "连斩诀", quality: "天阶", level: 0, maxLevel: 5, fragment: "lianZhanJueFragment", equipped: false, effects: {combo: [5, 7, 9, 11, 13]}},
        {name: "无相盾", quality: "天阶", level: 0, maxLevel: 5, fragment: "wuXiangDunFragment", equipped: false, effects: {damageReduction: [8, 10, 12, 14, 16]}},
        {name: "九转身", quality: "天阶", level: 0, maxLevel: 5, fragment: "jiuZhuanShenFragment", equipped: false, effects: {resurrect: [90, 80, 70, 60, 50]}},
        // 修罗阶功法
        {name: "万法诀", quality: "修罗阶", level: 0, maxLevel: 5, fragment: "wanFaJueFragment", equipped: false, effects: {allStats: [8, 11, 14, 17, 20]}},
        {name: "修罗真身", quality: "修罗阶", level: 0, maxLevel: 5, fragment: "xiuLuoZhenShenFragment", equipped: false, effects: {attack: [25, 30, 35, 40, 45], hp: [25, 30, 35, 40, 45]}}
    ],
    // 角色扩展属性
    extendedAttrs: {
        crit: 0,          // 暴击率（%）
        critDamage: 50,   // 暴击伤害（%）
        damageIncrease: 0, // 增伤（%）
        damageReduction: 0, // 减伤（%）
        combo: 0,         // 连击率（%）
        vampire: 0,       // 吸血（%）
        resurrect: false,  // 是否可复活
        resurrectCD: 0,    // 复活CD（秒）
        resurrectTime: 0   // 上次复活时间戳
    },
    // 炼丹炼器
    alchemyLevel: 0,
    alchemyExp: 0,
    alchemyTask: null,
    forgeLevel: 0,
    forgeExp: 0,
    forgeTask: null,
    forgeEquipped: null,
    // 宗门相关
    zongmen: null, // {name: "", level: 1, contribution: 0}
    // 竞技相关
    competeScore: 100,
    competeRank: 1256,
    competeTimes: 8,
    // 任务相关
    tasks: {
        daily: [
            {id: "daily1", name: "修炼2小时", progress: 0, target: 2, reward: {stone: 200, lingQiDan: 1}, completed: false},
            {id: "daily2", name: "突破1次境界", progress: 0, target: 1, reward: {stone: 300, lingCao: 5}, completed: false},
            {id: "daily3", name: "签到1次", progress: 0, target: 1, reward: {stone: 100, iron: 2}, completed: false},
            // 新增日常任务
            {id: "daily4", name: "挑战副本2次", progress: 0, target: 2, reward: {stone: 250, strenStone: 3}, completed: false},
            {id: "daily5", name: "炼制3颗丹药", progress: 0, target: 3, reward: {stone: 350, lingCao: 8}, completed: false},
            {id: "daily6", name: "升级1次功法", progress: 0, target: 1, reward: {stone: 400, spirit: 100}, completed: false}
        ],
        main: [
            {id: "main1", name: "突破至炼气期中期", progress: 0, target: 1, reward: {stone: 500, gongfaFragment: 2}, completed: false},
            {id: "main2", name: "等级提升至10级", progress: 1, target: 10, reward: {stone: 800, lingQiDan: 3}, completed: false},
            // 新增主线任务
            {id: "main3", name: "解锁材料秘境", progress: 0, target: 1, reward: {stone: 1000, lingCao: 10}, completed: false},
            {id: "main4", name: "等级提升至20级", progress: 0, target: 20, reward: {stone: 1500, iron: 15}, completed: false},
            {id: "main5", name: "突破至筑基期", progress: 0, target: 1, reward: {stone: 2000, lingQiDan: 10}, completed: false}
        ],
        achievement: [
            {id: "ach1", name: "首次突破境界", progress: 0, target: 1, reward: {achievementPoint: 10, stone: 1000}, completed: false},
            {id: "ach2", name: "炼制10颗丹药", progress: 0, target: 10, reward: {achievementPoint: 20, strenStone: 5}, completed: false},
            // 新增成就任务
            {id: "ach3", name: "挑战副本10次", progress: 0, target: 10, reward: {achievementPoint: 30, stone: 2000}, completed: false},
            {id: "ach4", name: "收集所有凡品功法", progress: 0, target: 3, reward: {achievementPoint: 25, lingQiDan: 5}, completed: false},
            {id: "ach5", name: "等级提升至30级", progress: 0, target: 30, reward: {achievementPoint: 40, stone: 3000}, completed: false}
        ]
    },
    // 福利相关
    signDays: 0,
    lastSignDate: "",
    onlineTime: 0, // 在线时长（秒）
    cdkUsed: [], // 已使用的兑换码
    // 副本相关
    dungeon: {
        unlocked: [], // 已解锁的副本
        cleared: {}, // 已通关的副本次数 {dungeonId: count}
        dailyLimit: {}, // 每日副本限制 {dungeonId: remaining}
        lastReset: new Date().toDateString() // 上次重置时间
    }
};

// ==================== 数据合并函数 ====================
function mergeGameData(savedData, defaultData) {
    // 创建一个新的对象，先复制默认值
    const result = JSON.parse(JSON.stringify(defaultData));
    
    // 如果保存的数据为空，直接返回默认值
    if (!savedData || typeof savedData !== 'object') {
        return result;
    }
    
    // 遍历保存的数据，用保存的值覆盖默认值
    for (const key in savedData) {
        if (savedData.hasOwnProperty(key)) {
            // 特殊处理功法数组
            if (key === 'gongfa' && Array.isArray(savedData[key]) && Array.isArray(result[key])) {
                // 保留保存的功法数据（包括等级和装备状态）
                result[key] = savedData[key].map((savedGongfa, index) => {
                    const defaultGongfa = result[key].find(g => g.name === savedGongfa.name);
                    if (defaultGongfa) {
                        // 合并保存的功法数据和默认数据
                        return {...defaultGongfa, ...savedGongfa};
                    }
                    return savedGongfa;
                });
            } else if (typeof savedData[key] === 'object' && savedData[key] !== null && !Array.isArray(savedData[key])) {
                // 递归合并对象
                result[key] = mergeGameData(savedData[key], result[key] || {});
            } else {
                // 直接覆盖基本类型的值
                result[key] = savedData[key];
            }
        }
    }
    
    return result;
}

// ==================== 全局游戏数据初始化 ====================
// 声明全局游戏数据变量
let gameData;
let currentSaveSlot = 1; // 当前使用的存档槽
let saveTimeout = null; // 存档防抖定时器

// 读取当前存档槽
currentSaveSlot = parseInt(localStorage.getItem('xiuzhen_current_slot')) || 1;

// 加载游戏数据
let loadedData = loadGame(currentSaveSlot);
if (!loadedData) {
    // 如果没有存档，使用默认数据
    loadedData = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA));
    // 保存到当前存档槽
    gameData = loadedData;
    saveGame();
} else {
    gameData = loadedData;
}

// ==================== 常量定义 ====================
// 境界配置（包含等级区间、突破条件、成功率、属性加成）
const REALM_CONFIG = [
    {name: "炼气期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [1, 10], baseExp: 100, expIncrement: 10, breakLevel: 10, breakMaterials: {lianQiDan: 10}, breakDungeon: "新手副本", successRate: 100, attrAdd: {hp: 200, mp: 100, atk: 20, def: 10}},
    {name: "筑基期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [11, 25], baseExp: 200, expIncrement: 20, breakLevel: 25, breakMaterials: {zhuJiDan: 30}, breakDungeon: "筑基秘境", successRate: 100, attrAdd: {hp: 500, mp: 300, atk: 100, def: 80}},
    {name: "金丹期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [26, 45], baseExp: 500, expIncrement: 50, breakLevel: 45, breakMaterials: {jinDanYe: 50}, breakDungeon: "金丹试炼", successRate: 90, attrAdd: {hp: 1000, mp: 800, atk: 200, def: 150}},
    {name: "元婴期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [46, 70], baseExp: 1500, expIncrement: 100, breakLevel: 70, breakMaterials: {yuanYingGuo: 80}, breakDungeon: "元婴洞天", successRate: 80, attrAdd: {hp: 2000, mp: 1500, atk: 400, def: 300}},
    {name: "化神期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [71, 100], baseExp: 4000, expIncrement: 200, breakLevel: 100, breakMaterials: {huaShenJing: 120}, breakDungeon: "化神之域", successRate: 70, attrAdd: {hp: 5000, mp: 3000, atk: 1000, def: 800}},
    {name: "炼虚期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [101, 140], baseExp: 10000, expIncrement: 500, breakLevel: 140, breakMaterials: {lianXuShi: 200}, breakDungeon: "炼虚秘境", successRate: 60, attrAdd: {hp: 10000, mp: 5000, atk: 2000, def: 1500}},
    {name: "合体期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [141, 190], baseExp: 25000, expIncrement: 1000, breakLevel: 190, breakMaterials: {heTiLian: 300}, breakDungeon: "合体圣境", successRate: 50, attrAdd: {hp: 20000, mp: 10000, atk: 4000, def: 3000}},
    {name: "大乘期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [191, 250], baseExp: 60000, expIncrement: 2000, breakLevel: 250, breakMaterials: {daChengGu: 500}, breakDungeon: "大乘神域", successRate: 40, attrAdd: {hp: 50000, mp: 20000, atk: 10000, def: 8000}},
    {name: "渡劫期", stages: ["初期", "中期", "后期", "巅峰"], levelRange: [251, 300], baseExp: 150000, expIncrement: 5000, breakLevel: 300, breakMaterials: {duJieDan: 1000}, breakDungeon: "渡劫仙台", successRate: 30, attrAdd: {hp: 100000, mp: 50000, atk: 20000, def: 15000}}
];

// 炼丹配方
const ALCHEMY_RECIPE = {
    lingQiDan: {name: "灵气丹", type: "辅助", effect: "修炼速度×2 持续10分钟", materials: {lingCao: 10, stone: 100}, time: 60, successRate: 90, exp: 10},
    jinDan: {name: "金丹丹", type: "break", effect: "筑基→金丹突破成功率+10%", materials: {lingCao: 50, stone: 1000}, time: 600, successRate: 70, exp: 50},
    // 新增丹药
    xueYuanDan: {name: "血元丹", type: "heal", effect: "恢复气血+200", materials: {lingCao: 15, stone: 200}, time: 90, successRate: 85, exp: 15},
    lingMingDan: {name: "灵命丹", type: "辅助", effect: "灵气恢复速度×2 持续10分钟", materials: {lingCao: 25, stone: 500}, time: 120, successRate: 80, exp: 25},
    yuanYingDan: {name: "元婴丹", type: "break", effect: "金丹→元婴突破成功率+10%", materials: {lingCao: 80, stone: 2000}, time: 900, successRate: 60, exp: 80}
};

// 炼器配方
const FORGE_RECIPE = {
    qinggangSword: {name: "青钢剑", type: "attack", effect: "攻击+50", materials: {iron: 10, stone: 200}, time: 120, successRate: 85, exp: 20, attrAdd: {atk: 50}},
    qinggangArmor: {name: "青钢甲", type: "defense", effect: "防御+40", materials: {iron: 15, stone: 300}, time: 180, successRate: 85, exp: 30, attrAdd: {def: 40}},
    // 新增法器
    lingyunBoots: {name: "凌云靴", type: "speed", effect: "移动速度+20%", materials: {iron: 8, stone: 150}, time: 90, successRate: 90, exp: 15, attrAdd: {speed: 20}},
    xuanjinShield: {name: "玄金盾", type: "defense", effect: "防御+80", materials: {iron: 25, stone: 500}, time: 240, successRate: 75, exp: 40, attrAdd: {def: 80}},
    huoyanBlade: {name: "火焰刀", type: "attack", effect: "攻击+120", materials: {iron: 30, stone: 800}, time: 300, successRate: 70, exp: 50, attrAdd: {atk: 120}},
    shengmingNecklace: {name: "生命项链", type: "defense", effect: "气血+300", materials: {iron: 20, stone: 600}, time: 210, successRate: 80, exp: 35, attrAdd: {hp: 300}}
};

// 兑换码配置
const CDK_CONFIG = {
    "wxzzz666": {stone: 500, lingQiDan: 5},
    "xiuzhen888": {lingCao: 10, iron: 5},
    "chuangjian666": {accelerate: 5, strenStone: 2}
};

// 地图配置
const MAP_CONFIG = {
    // 练气期地图
    qingshan: {
        id: "qingshan",
        name: "青丘山",
        realm: "练气期",
        level: 1,
        description: "适合练气期修士修炼的地方，灵气稀薄但安全",
        baseExp: 2,
        baseSpirit: 3,
        drops: [
            {item: "yinQiJueFragment", min: 1, max: 3, rate: 80},
            {item: "jiChuJianFaFragment", min: 1, max: 2, rate: 60},
            {item: "jiChuXinFaFragment", min: 1, max: 2, rate: 60},
            {item: "lingCao", min: 1, max: 3, rate: 50},
            {item: "stone", min: 10, max: 50, rate: 100}
        ]
    },
    // 筑基期地图
    tianchi: {
        id: "tianchi",
        name: "天池",
        realm: "筑基期",
        level: 11,
        description: "灵气充沛的天池，适合筑基期修士修炼",
        baseExp: 5,
        baseSpirit: 8,
        drops: [
            {item: "yuQiShuFragment", min: 1, max: 3, rate: 80},
            {item: "qingFengJianFaFragment", min: 1, max: 2, rate: 60},
            {item: "hunYuanXinFaFragment", min: 1, max: 2, rate: 60},
            {item: "zhuJiDan", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 2, max: 5, rate: 60},
            {item: "iron", min: 1, max: 3, rate: 50},
            {item: "stone", min: 50, max: 150, rate: 100}
        ]
    },
    // 金丹期地图
    yaochi: {
        id: "yaochi",
        name: "瑶池",
        realm: "金丹期",
        level: 26,
        description: "仙家瑶池，灵气浓郁，适合金丹期修士修炼",
        baseExp: 12,
        baseSpirit: 18,
        drops: [
            {item: "tianYanShuFragment", min: 1, max: 3, rate: 80},
            {item: "changHongGuanRiFragment", min: 1, max: 2, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 1, max: 2, rate: 60},
            {item: "jinDanYe", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 3, max: 8, rate: 70},
            {item: "iron", min: 2, max: 5, rate: 60},
            {item: "strenStone", min: 1, max: 3, rate: 40},
            {item: "stone", min: 150, max: 300, rate: 100}
        ]
    },
    // 元婴期地图
    xuantian: {
        id: "xuantian",
        name: "玄天秘境",
        realm: "元婴期",
        level: 46,
        description: "神秘的玄天秘境，灵气暴动，适合元婴期修士修炼",
        baseExp: 30,
        baseSpirit: 45,
        drops: [
            {item: "tianYanShuFragment", min: 2, max: 5, rate: 80},
            {item: "changHongGuanRiFragment", min: 2, max: 4, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 2, max: 4, rate: 60},
            {item: "yuanYingGuo", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 5, max: 12, rate: 80},
            {item: "iron", min: 3, max: 8, rate: 70},
            {item: "strenStone", min: 2, max: 5, rate: 50},
            {item: "stone", min: 300, max: 600, rate: 100}
        ]
    },
    // 练气期地图-绿柳谷
    greenValley: {
        id: "greenValley",
        name: "绿柳谷",
        realm: "练气期",
        level: 5,
        description: "绿树成荫的山谷，灵气比青丘山稍浓",
        baseExp: 3,
        baseSpirit: 4,
        drops: [
            {item: "yinQiJueFragment", min: 1, max: 3, rate: 70},
            {item: "jiChuJianFaFragment", min: 1, max: 2, rate: 50},
            {item: "jiChuXinFaFragment", min: 1, max: 2, rate: 50},
            {item: "lingCao", min: 1, max: 4, rate: 60},
            {item: "stone", min: 15, max: 60, rate: 100}
        ]
    },
    // 筑基期地图-云峰
    cloudPeak: {
        id: "cloudPeak",
        name: "云峰",
        realm: "筑基期",
        level: 18,
        description: "高耸入云的山峰，灵气比天池更加浓郁",
        baseExp: 7,
        baseSpirit: 10,
        drops: [
            {item: "yuQiShuFragment", min: 1, max: 3, rate: 70},
            {item: "qingFengJianFaFragment", min: 1, max: 2, rate: 50},
            {item: "hunYuanXinFaFragment", min: 1, max: 2, rate: 50},
            {item: "zhuJiDan", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 2, max: 6, rate: 70},
            {item: "iron", min: 1, max: 4, rate: 60},
            {item: "stone", min: 60, max: 180, rate: 100}
        ]
    },
    // 金丹期地图-仙洞
    fairyCave: {
        id: "fairyCave",
        name: "仙洞",
        realm: "金丹期",
        level: 35,
        description: "古老的仙人洞府，灵气极其浓郁",
        baseExp: 15,
        baseSpirit: 22,
        drops: [
            {item: "tianYanShuFragment", min: 1, max: 4, rate: 75},
            {item: "changHongGuanRiFragment", min: 1, max: 3, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 1, max: 3, rate: 55},
            {item: "jinDanYe", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 4, max: 10, rate: 75},
            {item: "iron", min: 2, max: 6, rate: 65},
            {item: "strenStone", min: 1, max: 4, rate: 45},
            {item: "stone", min: 180, max: 350, rate: 100}
        ]
    },
    // 元婴期地图-星空深渊
    starryAbyss: {
        id: "starryAbyss",
        name: "星空深渊",
        realm: "元婴期",
        level: 58,
        description: "充满星空之力的深渊，灵气狂暴且蕴含星辰之力",
        baseExp: 35,
        baseSpirit: 52,
        drops: [
            {item: "tianYanShuFragment", min: 2, max: 6, rate: 75},
            {item: "changHongGuanRiFragment", min: 2, max: 5, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 2, max: 5, rate: 55},
            {item: "yuanYingGuo", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 6, max: 15, rate: 85},
            {item: "iron", min: 3, max: 10, rate: 75},
            {item: "strenStone", min: 2, max: 6, rate: 55},
            {item: "stone", min: 350, max: 700, rate: 100}
        ]
    },
    // 化神期地图-化神之域
    godDomain: {
        id: "godDomain",
        name: "化神之域",
        realm: "化神期",
        level: 71,
        description: "化神期修士的专属领域，灵气中蕴含法则之力",
        baseExp: 60,
        baseSpirit: 90,
        drops: [
            {item: "tianYanShuFragment", min: 3, max: 7, rate: 80},
            {item: "changHongGuanRiFragment", min: 3, max: 6, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 3, max: 6, rate: 60},
            {item: "huaShenJing", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 8, max: 20, rate: 80},
            {item: "iron", min: 5, max: 15, rate: 70},
            {item: "strenStone", min: 3, max: 8, rate: 50},
            {item: "stone", min: 500, max: 1000, rate: 100}
        ]
    },
    // 化神期地图-法则之境
    lawRealm: {
        id: "lawRealm",
        name: "法则之境",
        realm: "化神期",
        level: 85,
        description: "蕴含各种法则之力的神秘空间，适合化神期修士感悟法则",
        baseExp: 70,
        baseSpirit: 105,
        drops: [
            {item: "tianYanShuFragment", min: 3, max: 8, rate: 75},
            {item: "changHongGuanRiFragment", min: 3, max: 7, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 3, max: 7, rate: 55},
            {item: "huaShenJing", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 9, max: 22, rate: 85},
            {item: "iron", min: 6, max: 18, rate: 75},
            {item: "strenStone", min: 3, max: 9, rate: 55},
            {item: "stone", min: 600, max: 1200, rate: 100}
        ]
    },
    // 炼虚期地图-炼虚秘境
    voidRealm: {
        id: "voidRealm",
        name: "炼虚秘境",
        realm: "炼虚期",
        level: 101,
        description: "炼虚期修士的修炼圣地，空间之力弥漫",
        baseExp: 120,
        baseSpirit: 180,
        drops: [
            {item: "tianYanShuFragment", min: 4, max: 10, rate: 80},
            {item: "changHongGuanRiFragment", min: 4, max: 8, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 4, max: 8, rate: 60},
            {item: "lianXuShi", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 10, max: 25, rate: 80},
            {item: "iron", min: 8, max: 20, rate: 70},
            {item: "strenStone", min: 5, max: 12, rate: 50},
            {item: "stone", min: 1000, max: 2000, rate: 100}
        ]
    },
    // 炼虚期地图-空间乱流
    spaceRift: {
        id: "spaceRift",
        name: "空间乱流",
        realm: "炼虚期",
        level: 120,
        description: "充满空间乱流的危险区域，蕴含强大的空间之力",
        baseExp: 140,
        baseSpirit: 210,
        drops: [
            {item: "tianYanShuFragment", min: 4, max: 12, rate: 75},
            {item: "changHongGuanRiFragment", min: 4, max: 10, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 4, max: 10, rate: 55},
            {item: "lianXuShi", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 12, max: 30, rate: 85},
            {item: "iron", min: 10, max: 25, rate: 75},
            {item: "strenStone", min: 6, max: 15, rate: 55},
            {item: "stone", min: 1200, max: 2400, rate: 100}
        ]
    },
    // 合体期地图-合体圣境
    unitySanctuary: {
        id: "unitySanctuary",
        name: "合体圣境",
        realm: "合体期",
        level: 141,
        description: "合体期修士的终极修炼场所，道韵流转",
        baseExp: 250,
        baseSpirit: 375,
        drops: [
            {item: "tianYanShuFragment", min: 5, max: 12, rate: 80},
            {item: "changHongGuanRiFragment", min: 5, max: 10, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 5, max: 10, rate: 60},
            {item: "heTiLian", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 15, max: 30, rate: 80},
            {item: "iron", min: 10, max: 25, rate: 70},
            {item: "strenStone", min: 8, max: 15, rate: 50},
            {item: "stone", min: 2000, max: 4000, rate: 100}
        ]
    },
    // 合体期地图-道韵之境
    daoRealm: {
        id: "daoRealm",
        name: "道韵之境",
        realm: "合体期",
        level: 165,
        description: "蕴含大道韵律的神秘空间，适合合体期修士感悟道韵",
        baseExp: 280,
        baseSpirit: 420,
        drops: [
            {item: "tianYanShuFragment", min: 5, max: 14, rate: 75},
            {item: "changHongGuanRiFragment", min: 5, max: 12, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 5, max: 12, rate: 55},
            {item: "heTiLian", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 18, max: 35, rate: 85},
            {item: "iron", min: 12, max: 30, rate: 75},
            {item: "strenStone", min: 10, max: 18, rate: 55},
            {item: "stone", min: 2500, max: 5000, rate: 100}
        ]
    },
    // 大乘期地图-大乘神域
    celestialRealm: {
        id: "celestialRealm",
        name: "大乘神域",
        realm: "大乘期",
        level: 191,
        description: "大乘期修士的神域，接近仙途",
        baseExp: 500,
        baseSpirit: 750,
        drops: [
            {item: "tianYanShuFragment", min: 6, max: 15, rate: 80},
            {item: "changHongGuanRiFragment", min: 6, max: 12, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 6, max: 12, rate: 60},
            {item: "daChengGu", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 20, max: 40, rate: 80},
            {item: "iron", min: 15, max: 30, rate: 70},
            {item: "strenStone", min: 10, max: 20, rate: 50},
            {item: "stone", min: 5000, max: 10000, rate: 100}
        ]
    },
    // 大乘期地图-仙途入口
    immortalGate: {
        id: "immortalGate",
        name: "仙途入口",
        realm: "大乘期",
        level: 220,
        description: "通往仙界的入口，蕴含浓郁的仙气",
        baseExp: 550,
        baseSpirit: 825,
        drops: [
            {item: "tianYanShuFragment", min: 6, max: 18, rate: 75},
            {item: "changHongGuanRiFragment", min: 6, max: 15, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 6, max: 15, rate: 55},
            {item: "daChengGu", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 25, max: 45, rate: 85},
            {item: "iron", min: 18, max: 35, rate: 75},
            {item: "strenStone", min: 12, max: 25, rate: 55},
            {item: "stone", min: 6000, max: 12000, rate: 100}
        ]
    },
    // 渡劫期地图-渡劫仙台
    tribulationPlatform: {
        id: "tribulationPlatform",
        name: "渡劫仙台",
        realm: "渡劫期",
        level: 251,
        description: "渡劫期修士的最终考验之地",
        baseExp: 1000,
        baseSpirit: 1500,
        drops: [
            {item: "tianYanShuFragment", min: 8, max: 20, rate: 80},
            {item: "changHongGuanRiFragment", min: 8, max: 15, rate: 60},
            {item: "jinGangBuHuaiFragment", min: 8, max: 15, rate: 60},
            {item: "duJieDan", min: 1, max: 2, rate: 40},
            {item: "lingCao", min: 30, max: 50, rate: 80},
            {item: "iron", min: 20, max: 40, rate: 70},
            {item: "strenStone", min: 15, max: 25, rate: 50},
            {item: "stone", min: 10000, max: 20000, rate: 100}
        ]
    },
    // 渡劫期地图-仙界边缘
    celestialEdge: {
        id: "celestialEdge",
        name: "仙界边缘",
        realm: "渡劫期",
        level: 280,
        description: "仙界的边缘地带，蕴含浓郁的仙气和法则之力",
        baseExp: 1200,
        baseSpirit: 1800,
        drops: [
            {item: "tianYanShuFragment", min: 8, max: 25, rate: 75},
            {item: "changHongGuanRiFragment", min: 8, max: 20, rate: 55},
            {item: "jinGangBuHuaiFragment", min: 8, max: 20, rate: 55},
            {item: "duJieDan", min: 1, max: 2, rate: 35},
            {item: "lingCao", min: 35, max: 55, rate: 85},
            {item: "iron", min: 25, max: 45, rate: 75},
            {item: "strenStone", min: 18, max: 30, rate: 55},
            {item: "stone", min: 12000, max: 24000, rate: 100}
        ]
    }
};

// 副本配置
const DUNGEON_CONFIG = {
    // 新手副本（练气期）
    newbiefb: {
        id: "newbiefb",
        name: "新手副本",
        level: 1,
        realm: "炼气期",
        dailyLimit: 5,
        energyCost: 5,
        rewards: {
            lianQiDan: [1, 3]
        },
        description: "新手入门副本，产出练气丹"
    },
    // 筑基秘境（筑基期）
    zhuji: {
        id: "zhuji",
        name: "筑基秘境",
        level: 10,
        realm: "筑基期",
        dailyLimit: 3,
        energyCost: 15,
        rewards: {
            zhuJiDan: [2, 5]
        },
        description: "筑基期专属副本，产出筑基丹"
    },
    // 金丹试炼（金丹期）
    jindan: {
        id: "jindan",
        name: "金丹试炼",
        level: 25,
        realm: "金丹期",
        dailyLimit: 3,
        energyCost: 25,
        rewards: {
            jinDanYe: [3, 6]
        },
        description: "金丹期专属副本，产出金丹液"
    },
    // 元婴洞天（元婴期）
    yuanying: {
        id: "yuanying",
        name: "元婴洞天",
        level: 45,
        realm: "元婴期",
        dailyLimit: 2,
        energyCost: 35,
        rewards: {
            yuanYingGuo: [4, 8]
        },
        description: "元婴期专属副本，产出元婴果"
    },
    // 化神之域（化神期）
    huashen: {
        id: "huashen",
        name: "化神之域",
        level: 70,
        realm: "化神期",
        dailyLimit: 2,
        energyCost: 50,
        rewards: {
            huaShenJing: [5, 10]
        },
        description: "化神期专属副本，产出化神晶"
    },
    // 炼虚秘境（炼虚期）
    lianxu: {
        id: "lianxu",
        name: "炼虚秘境",
        level: 100,
        realm: "炼虚期",
        dailyLimit: 1,
        energyCost: 70,
        rewards: {
            lianXuShi: [8, 15]
        },
        description: "炼虚期专属副本，产出炼虚石"
    },
    // 合体圣境（合体期）
    heti: {
        id: "heti",
        name: "合体圣境",
        level: 140,
        realm: "合体期",
        dailyLimit: 1,
        energyCost: 90,
        rewards: {
            heTiLian: [10, 20]
        },
        description: "合体期专属副本，产出合体莲"
    },
    // 大乘神域（大乘期）
    dacheng: {
        id: "dacheng",
        name: "大乘神域",
        level: 190,
        realm: "大乘期",
        dailyLimit: 1,
        energyCost: 120,
        rewards: {
            daChengGu: [15, 30]
        },
        description: "大乘期专属副本，产出大乘骨"
    },
    // 渡劫仙台（渡劫期）
    dujie: {
        id: "dujie",
        name: "渡劫仙台",
        level: 250,
        realm: "渡劫期",
        dailyLimit: 1,
        energyCost: 150,
        rewards: {
            duJieDan: [20, 40]
        },
        description: "渡劫期专属副本，产出渡劫丹"
    },
    // 虚空之地（无等级要求）
    xukong: {
        id: "xukong",
        name: "虚空之地",
        level: 0,
        realm: "无",
        dailyLimit: 1000,
        energyCost: 0,
        rewards: {
            exp: [9999999, 9999999],
            spirit: [999999, 999999],
            stone: [999999, 999999]
        },
        description: "我是拖"
    }
};

// ==================== 工具函数 ====================
// 存档系统

// 保存游戏数据到本地存储
function saveGame() {
    try {
        const saveData = {
            gameData: gameData,
            timestamp: Date.now(),
            level: gameData.level,
            realm: gameData.realm
        };
        localStorage.setItem(`xiuzhen_game_${currentSaveSlot}`, JSON.stringify(saveData));
        // 保存当前存档槽信息
        localStorage.setItem('xiuzhen_current_slot', currentSaveSlot.toString());
    } catch (error) {
        console.error('保存游戏失败:', error);
    }
}

// 加载指定存档槽的游戏数据
function loadGame(slot) {
    const saveData = localStorage.getItem(`xiuzhen_game_${slot}`);
    if (saveData) {
        try {
            const parsedData = JSON.parse(saveData);
            currentSaveSlot = slot;
            // 保存当前存档槽信息
            localStorage.setItem('xiuzhen_current_slot', currentSaveSlot.toString());
            
            // 确保加载的数据包含所有必要的属性
            const loadedData = parsedData.gameData;
            
            // 补充缺失的属性
            if (!loadedData.gongfa) {
                loadedData.gongfa = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA.gongfa));
            }
            if (!loadedData.extendedAttrs) {
                loadedData.extendedAttrs = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA.extendedAttrs));
            }
            if (!loadedData.shura) {
                loadedData.shura = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA.shura));
            }
            if (!loadedData.items) {
                loadedData.items = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA.items));
            }
            
            return loadedData;
        } catch (e) {
            console.error('加载存档失败:', e);
            return null;
        }
    }
    return null;
}

// 创建新存档（默认1级）
function createNewSave(slot) {
    const newGameData = JSON.parse(JSON.stringify(DEFAULT_GAME_DATA));
    const saveData = {
        gameData: newGameData,
        timestamp: Date.now(),
        level: 1,
        realm: "炼气期"
    };
    localStorage.setItem(`xiuzhen_game_${slot}`, JSON.stringify(saveData));
    return newGameData;
}

// 删除存档
function deleteSave(slot) {
    localStorage.removeItem(`xiuzhen_game_${slot}`);
}

// 获取所有存档信息
function getSaveSlots() {
    const slots = [];
    for (let i = 1; i <= 3; i++) {
        const saveData = localStorage.getItem(`xiuzhen_game_${i}`);
        if (saveData) {
            try {
                const parsedData = JSON.parse(saveData);
                slots.push({
                    slot: i,
                    exists: true,
                    level: parsedData.level || parsedData.gameData?.level || 1,
                    realm: parsedData.realm || parsedData.gameData?.realm || "炼气期",
                    timestamp: parsedData.timestamp || Date.now()
                });
            } catch (e) {
                console.error(`解析存档 ${i} 失败:`, e);
                slots.push({
                    slot: i,
                    exists: false
                });
            }
        } else {
            slots.push({
                slot: i,
                exists: false
            });
        }
    }
    return slots;
}

// 计算总战力
function calcPower() {
    // 计算带有功法加成的属性值
    const hpWithBonus = calculateAttributeWithGongfaBonus('hp');
    const atkWithBonus = calculateAttributeWithGongfaBonus('atk');
    return Math.floor((hpWithBonus + gameData.mp) * 0.5 + atkWithBonus * 1.2 + gameData.def * 0.8);
}

// 格式化时间（秒→分:秒）
function fmtTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));
    return `${Math.floor(seconds / 60)}分${seconds % 60}秒`;
}

// 添加操作日志
function addLog(msg) {
    const logPanel = document.getElementById("log-panel");
    const logItem = document.createElement("div");
    logItem.className = "log-item";
    logItem.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    logPanel.insertBefore(logItem, logPanel.firstChild);
    // 最多保留20条日志
    if (logPanel.children.length > 20) {
        logPanel.removeChild(logPanel.lastChild);
    }
}

// 检查是否满足突破条件
function checkBreakCondition() {
    const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
    const stageIdx = REALM_CONFIG[realmIdx].stages.findIndex(s => s === gameData.realmStage);
    
    // 检查是否达到当前境界的等级上限
    const currentRealm = REALM_CONFIG[realmIdx];
    const needLevel = currentRealm.breakLevel;
    
    // 检查突破材料（只有突破到下一个境界才需要材料）
    let breakMaterials = {};
    let hasMaterials = true;
    if (stageIdx === REALM_CONFIG[realmIdx].stages.length - 1) {
        // 突破到下一个境界，需要材料
        breakMaterials = currentRealm.breakMaterials || {};
        hasMaterials = Object.entries(breakMaterials).every(([material, amount]) => {
            return (gameData.items[material] || 0) >= amount;
        });
    }
    
    // 检查灵气需求（保留原逻辑作为额外需求）
    const needSpirit = realmIdx < REALM_CONFIG.length - 1 ? 1000 * (realmIdx + 1) : 0;
    
    const condition = {
        level: gameData.level >= needLevel,
        spirit: gameData.spirit >= needSpirit,
        materials: hasMaterials,
        needLevel,
        needSpirit,
        breakMaterials
    };
    return condition;
}

// 检查系统解锁状态
function checkSystemUnlock() {
    const unlock = {
        alchemy: gameData.realm === "筑基期",
        forge: gameData.realm === "金丹期",
        zongmen: gameData.realm === "元婴期",
        compete: gameData.realm === "化神期"
    };
    return unlock;
}

// 检查副本解锁状态
function checkDungeonUnlock(dungeonId) {
    const dungeon = DUNGEON_CONFIG[dungeonId];
    if (!dungeon) return false;
    
    // 特殊处理：等级为0或境界为"无"的副本无需条件
    if (dungeon.level === 0 || dungeon.realm === "无") {
        return true;
    }
    
    // 检查等级和境界要求
    if (gameData.level < dungeon.level) return false;
    
    const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
    const reqRealmIdx = REALM_CONFIG.findIndex(r => r.name === dungeon.realm);
    if (realmIdx < reqRealmIdx) return false;
    
    return true;
}

// 重置副本每日限制（已移除每日次数限制）
function resetDungeonDailyLimit() {
    // 不再需要重置每日次数限制
}

// 计算副本奖励
function calculateDungeonReward(dungeonId) {
    const dungeon = DUNGEON_CONFIG[dungeonId];
    if (!dungeon) return {};
    
    const rewards = {};
    for (const [resource, range] of Object.entries(dungeon.rewards)) {
        const min = range[0];
        const max = range[1];
        rewards[resource] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // 添加功法碎片掉落机制 - 50%几率掉落随机功法碎片
    if (Math.random() < 0.5) {
        // 所有功法碎片列表
        const fragmentList = [
            "kuangRenJueFragment",    // 狂刃诀碎片
            "tieGuGongFragment",       // 铁骨功碎片
            "shiXueShuFragment",       // 嗜血术碎片
            "poJiaJueFragment",        // 破甲诀碎片
            "ningShenJueFragment",      // 凝神诀碎片
            "lianZhanJueFragment",     // 连斩诀碎片
            "wuXiangDunFragment",      // 无相盾碎片
            "jiuZhuanShenFragment",     // 九转身碎片
            "wanFaJueFragment",         // 万法诀碎片
            "xiuLuoZhenShenFragment"    // 修罗真身碎片
        ];
        
        // 随机选择一个碎片
        const randomFragment = fragmentList[Math.floor(Math.random() * fragmentList.length)];
        rewards[randomFragment] = 1; // 掉落1个碎片
    }
    
    return rewards;
}

// ==================== 页面渲染函数 ====================
// 渲染顶部状态栏
function renderStatusBar() {
    try {
        // 确保游戏数据的关键属性存在
        if (!gameData.level) gameData.level = 1;
        if (!gameData.realm) gameData.realm = "炼气期";
        if (!gameData.realmStage) gameData.realmStage = "初期";
        
        const roleInfoEl = document.getElementById("role-info");
        const resInfoEl = document.getElementById("res-info");
        const stateInfoEl = document.getElementById("state-info");
        
        if (roleInfoEl) {
            roleInfoEl.textContent = `${gameData.roleName} | ${gameData.level}级·${gameData.realm}${gameData.realmStage} | 战力：${calcPower()}`;
        }
        if (resInfoEl) {
            resInfoEl.textContent = `灵石：${gameData.stone} | 灵气：${gameData.spirit} | 灵草：${gameData.items.lingCao} | 精铁：${gameData.items.iron}`;
        }
        if (stateInfoEl) {
            stateInfoEl.textContent = "正在历练 | 离线收益：8小时";
        }
    } catch (error) {
        console.error("Error rendering status bar:", error);
    }
}

// 渲染右侧信息栏
function renderSideInfo() {
    try {
        // 计算带有功法加成的属性值
        const hpWithBonus = calculateAttributeWithGongfaBonus('hp');
        const atkWithBonus = calculateAttributeWithGongfaBonus('atk');
        
        const sideHpEl = document.getElementById("side-hp");
        const sideMpEl = document.getElementById("side-mp");
        const sideAtkEl = document.getElementById("side-atk");
        const sideDefEl = document.getElementById("side-def");
        const sidePowerEl = document.getElementById("side-power");
        
        if (sideHpEl) sideHpEl.textContent = `${hpWithBonus}/${hpWithBonus}`;
        if (sideMpEl) sideMpEl.textContent = `${gameData.mp}/${gameData.mp}`;
        if (sideAtkEl) sideAtkEl.textContent = atkWithBonus;
        if (sideDefEl) sideDefEl.textContent = gameData.def;
        if (sidePowerEl) sidePowerEl.textContent = calcPower();
        
        // 显示扩展属性
        const sideCritEl = document.getElementById("side-crit");
        const sideCritDamageEl = document.getElementById("side-critDamage");
        const sideDamageIncreaseEl = document.getElementById("side-damageIncrease");
        const sideDamageReductionEl = document.getElementById("side-damageReduction");
        const sideComboEl = document.getElementById("side-combo");
        const sideVampireEl = document.getElementById("side-vampire");
        const sideResurrectEl = document.getElementById("side-resurrect");
        
        if (sideCritEl) sideCritEl.textContent = `${gameData.extendedAttrs?.crit || 0}%`;
        if (sideCritDamageEl) sideCritDamageEl.textContent = `${gameData.extendedAttrs?.critDamage || 50}%`;
        if (sideDamageIncreaseEl) sideDamageIncreaseEl.textContent = `${gameData.extendedAttrs?.damageIncrease || 0}%`;
        if (sideDamageReductionEl) sideDamageReductionEl.textContent = `${gameData.extendedAttrs?.damageReduction || 0}%`;
        if (sideComboEl) sideComboEl.textContent = `${gameData.extendedAttrs?.combo || 0}%`;
        if (sideVampireEl) sideVampireEl.textContent = `${gameData.extendedAttrs?.vampire || 0}%`;
        if (sideResurrectEl) sideResurrectEl.textContent = gameData.extendedAttrs?.resurrect ? "是" : "否";
        
        // 显示资源
        const sideStoneEl = document.getElementById("side-stone");
        const sideSpiritEl = document.getElementById("side-spirit");
        const sideLingCaoEl = document.getElementById("side-lingCao");
        const sideIronEl = document.getElementById("side-iron");
        
        if (sideStoneEl) sideStoneEl.textContent = gameData.stone;
        if (sideSpiritEl) sideSpiritEl.textContent = gameData.spirit;
        if (sideLingCaoEl) sideLingCaoEl.textContent = gameData.items.lingCao;
        if (sideIronEl) sideIronEl.textContent = gameData.items.iron;
    } catch (error) {
        console.error("Error rendering side info:", error);
    }
}

// 渲染首页
function renderHome() {
    try {
        const homeLevelEl = document.getElementById("home-level");
        const homeRealmEl = document.getElementById("home-realm");
        const homeSpeedEl = document.getElementById("home-speed");
        
        if (homeLevelEl) {
            homeLevelEl.textContent = `${gameData.level}级（${gameData.exp}/${gameData.maxExp}）`;
        }
        if (homeRealmEl) {
            homeRealmEl.textContent = `${gameData.realm}${gameData.realmStage}`;
        }
        if (homeSpeedEl) {
            homeSpeedEl.textContent = `${gameData.expSpeed}经验/分 | ${gameData.spiritSpeed}灵气/分`;
        }
    } catch (error) {
        console.error("Error rendering home view:", error);
    }
}

// 渲染修炼突破界面
function renderPractice() {
    try {
        // 修炼状态
        const practiceStateEl = document.getElementById("practice-state");
        const practiceTimeEl = document.getElementById("practice-time");
        
        if (practiceStateEl) {
            if (gameData.practiceState === "practicing") {
                const remainingTime = Math.max(0, Math.floor((gameData.practiceEndTime - Date.now())/1000));
                practiceStateEl.textContent = `修炼中（剩余：${fmtTime(remainingTime)}）`;
                practiceStateEl.className = "tag-success";
                
                // 计算已挂机时间
                const totalTime = 24 * 60; // 24小时
                const passedTime = totalTime - Math.floor(remainingTime / 60);
                if (practiceTimeEl) {
                    practiceTimeEl.textContent = `${passedTime}分钟`;
                }
            } else {
                practiceStateEl.textContent = "正在历练";
                practiceStateEl.className = "tag-success";
                if (practiceTimeEl) {
                    practiceTimeEl.textContent = "0分钟";
                }
            }
        }

        // 地图信息
        const currentMap = MAP_CONFIG[gameData.currentMap];
        if (currentMap) {
            const mapDescriptionEl = document.getElementById("map-description");
            const practiceBaseSpeedEl = document.getElementById("practice-base-speed");
            
            if (mapDescriptionEl) mapDescriptionEl.textContent = currentMap.description;
            if (practiceBaseSpeedEl) practiceBaseSpeedEl.textContent = `${currentMap.baseExp}经验/分 | ${currentMap.baseSpirit}灵气/分`;
        }

        // 修炼加成
        const practiceBonusEl = document.getElementById("practice-bonus");
        if (practiceBonusEl) {
            const forgeBonus = gameData.forgeEquipped ? `${gameData.forgeEquipped.name}+5%` : "无法器加成";
            practiceBonusEl.textContent = `加成：${forgeBonus} → 实际：${gameData.expSpeed}经验/分 | ${gameData.spiritSpeed}灵气/分`;
        }

        // 剩余升级经验
        const practiceExpEl = document.getElementById("practice-exp");
        if (practiceExpEl) {
            const leftExp = Math.max(0, gameData.maxExp - gameData.exp);
            const leftTime = leftExp / gameData.expSpeed;
            const expText = leftExp > 0 ? `当前经验：${gameData.exp}/${gameData.maxExp}（剩余${leftExp}，约${fmtTime(leftTime * 60)}）` : `当前经验：${gameData.exp}/${gameData.maxExp}（经验已满，可升级）`;
            practiceExpEl.textContent = expText;

            // 自动升级检查
            if (leftExp <= 0 && gameData.practiceState === "idle") {
                // 检查是否达到当前境界的等级上限
                const currentRealm = REALM_CONFIG.find(r => r.name === gameData.realm);
                if (currentRealm && gameData.level < currentRealm.levelRange[1]) {
                    gameData.exp -= gameData.maxExp;
                    gameData.level += 1;
                    
                    // 计算下一级所需经验
                    const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
                    const realmConfig = REALM_CONFIG[realmIdx];
                    const levelInRealm = gameData.level - realmConfig.levelRange[0] + 1;
                    gameData.maxExp = realmConfig.baseExp + (levelInRealm - 1) * realmConfig.expIncrement;
                    
                    addLog(`等级提升至${gameData.level}级！`);
                    saveGame();
                    renderPractice();
                }
            }
        }

        // 灵气丹数量
        const practiceDanEl = document.getElementById("practice-dan");
        if (practiceDanEl) {
            practiceDanEl.textContent = gameData.items.lingQiDan;
        }

        // 自动使用开关
        const autoUseDanEl = document.getElementById("auto-use-dan");
        const autoGetOfflineEl = document.getElementById("auto-get-offline");
        const autoPracticeEl = document.getElementById("auto-practice");
        
        if (autoUseDanEl) autoUseDanEl.checked = gameData.autoUseDan;
        if (autoGetOfflineEl) autoGetOfflineEl.checked = gameData.autoGetOffline;
        if (autoPracticeEl) autoPracticeEl.checked = gameData.autoPractice;

        // 突破模块
        const breakRealmEl = document.getElementById("break-realm");
        if (breakRealmEl) {
            const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
            if (realmIdx !== -1) {
                const stageIdx = REALM_CONFIG[realmIdx].stages.findIndex(s => s === gameData.realmStage);
                const nextStage = stageIdx < REALM_CONFIG[realmIdx].stages.length - 1 
                    ? REALM_CONFIG[realmIdx].stages[stageIdx + 1] 
                    : REALM_CONFIG[realmIdx + 1]?.stages[0] || "最高境界";
                const nextRealm = stageIdx < REALM_CONFIG[realmIdx].stages.length - 1 
                    ? gameData.realm 
                    : REALM_CONFIG[realmIdx + 1]?.name || gameData.realm;
                
                breakRealmEl.textContent = `${gameData.realm}${gameData.realmStage} → ${nextRealm}${nextStage}`;
            }
        }

        // 突破条件
        const breakCond = checkBreakCondition();
        const levelText = breakCond.level ? "✅" : "❌";
        const spiritText = breakCond.spirit ? "✅" : "❌";
        
        // 构建材料需求文本
        let materialsText = "";
        let materialsMet = true;
        const materialNames = {
            lianQiDan: "练气丹",
            zhuJiDan: "筑基丹",
            jinDanYe: "金丹液",
            yuanYingGuo: "元婴果",
            huaShenJing: "化神晶",
            lianXuShi: "炼虚石",
            heTiLian: "合体莲",
            daChengGu: "大乘骨",
            duJieDan: "渡劫丹"
        };
        
        const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
        const stageIdx = REALM_CONFIG[realmIdx].stages.findIndex(s => s === gameData.realmStage);
        
        if (stageIdx === REALM_CONFIG[realmIdx].stages.length - 1 && breakCond.breakMaterials) {
            // 突破到下一个境界，需要材料
            const materialConditions = Object.entries(breakCond.breakMaterials).map(([material, amount]) => {
                const current = gameData.items[material] || 0;
                const met = current >= amount;
                if (!met) materialsMet = false;
            return `${materialNames[material] || material}×${amount}（${met ? "✅" : `❌ 当前${current}`}）`;
        }).join("、");
        materialsText = `材料：${materialConditions}`;
    } else {
        materialsText = "无材料需求（✅）";
    }
    
    const conditionText = `等级≥${breakCond.needLevel}（${levelText}） | 灵气≥${breakCond.needSpirit}（${spiritText} 当前${gameData.spirit}） | ${materialsText}`;
    
    // 显示突破条件
    const breakConditionsEl = document.getElementById("break-conditions");
    if (breakConditionsEl) {
        breakConditionsEl.textContent = conditionText;
    }

    // 突破成功率
    const breakRateEl = document.getElementById("break-rate");
    if (breakRateEl) {
        const successRate = REALM_CONFIG[realmIdx]?.successRate || 0;
        breakRateEl.textContent = `${successRate}%（${gameData.realm}）`;
    }

    // 突破按钮状态
    const btnBreakEl = document.getElementById("btn-break");
    if (btnBreakEl) {
        btnBreakEl.disabled = !(breakCond.level && breakCond.spirit && materialsMet);
    }
    } catch (error) {
        console.error("Error rendering practice view:", error);
    }
}



// 渲染炼丹炼器界面
function renderAlchemy() {
    try {
        // 确保必要的数据存在
        if (!gameData.items) {
            gameData.items = {};
        }
        if (!gameData.alchemyLevel) {
            gameData.alchemyLevel = 1;
        }
        if (!gameData.alchemyExp) {
            gameData.alchemyExp = 0;
        }
        
        const unlock = checkSystemUnlock();
        
        // 炼丹模块
        const alchemyUnlockTipEl = document.getElementById("alchemy-unlock-tip");
        const btnMakeDanEl = document.getElementById("btn-make-dan");
        
        if (alchemyUnlockTipEl && btnMakeDanEl) {
            if (unlock.alchemy) {
                alchemyUnlockTipEl.innerHTML = `<span class="tag-success">已解锁：可炼制各类丹药</span>`;
                btnMakeDanEl.disabled = !((gameData.items.lingCao || 0) >= 10 && gameData.stone >= 100);
            } else {
                alchemyUnlockTipEl.innerHTML = `<span class="tag-warning">未解锁：需突破至筑基期（20级）</span>`;
                btnMakeDanEl.disabled = true;
            }
        }

        const alchemyLevelEl = document.getElementById("alchemy-level");
        if (alchemyLevelEl) {
            alchemyLevelEl.textContent = `${gameData.alchemyLevel}级（${gameData.alchemyExp}/${(gameData.alchemyLevel + 1) * 100}）`;
        }
        
        const alchemyTaskEl = document.getElementById("alchemy-task");
        if (alchemyTaskEl) {
            const alchemyTaskText = gameData.alchemyTask 
                ? `${gameData.alchemyTask.name}（剩余：${fmtTime((gameData.alchemyTask.endTime - Date.now())/1000)}）` 
                : "无";
            alchemyTaskEl.textContent = alchemyTaskText;
        }

        // 炼器模块
        const forgeUnlockTipEl = document.getElementById("forge-unlock-tip");
        const btnMakeForgeEl = document.getElementById("btn-make-forge");
        const btnStrenForgeEl = document.getElementById("btn-stren-forge");
        
        if (forgeUnlockTipEl && btnMakeForgeEl && btnStrenForgeEl) {
            if (unlock.forge) {
                forgeUnlockTipEl.innerHTML = `<span class="tag-success">已解锁：可打造各类法器</span>`;
                btnMakeForgeEl.disabled = !((gameData.items.iron || 0) >= 10 && gameData.stone >= 200);
                btnStrenForgeEl.disabled = !gameData.forgeEquipped || (gameData.items.strenStone || 0) < 2 || gameData.stone < 100;
            } else {
                forgeUnlockTipEl.innerHTML = `<span class="tag-warning">未解锁：需突破至金丹期（41级）</span>`;
                btnMakeForgeEl.disabled = true;
                btnStrenForgeEl.disabled = true;
            }
        }

        const forgeStrenItemEl = document.getElementById("forge-stren-item");
        if (forgeStrenItemEl) {
            forgeStrenItemEl.textContent = gameData.forgeEquipped ? gameData.forgeEquipped.name : "无";
        }
    } catch (error) {
        console.error("Error rendering alchemy:", error);
    }
}

// 渲染宗门界面
function renderZongmen() {
    try {
        // 确保必要的数据存在
        if (!gameData.items) {
            gameData.items = {};
        }
        
        const unlock = checkSystemUnlock();
        
        const zongmenUnlockTipEl = document.getElementById("zongmen-unlock-tip");
        const btnCreateZongmenEl = document.getElementById("btn-create-zongmen");
        const btnJoinZongmenEl = document.getElementById("btn-join-zongmen");
        
        if (zongmenUnlockTipEl && btnCreateZongmenEl && btnJoinZongmenEl) {
            if (unlock.zongmen) {
                zongmenUnlockTipEl.innerHTML = `<span class="tag-success">已解锁：可创建/加入宗门</span>`;
                btnCreateZongmenEl.disabled = !((gameData.items.zongmenToken || 0) >= 1 && gameData.stone >= 10000);
                btnJoinZongmenEl.disabled = false;
            } else {
                zongmenUnlockTipEl.innerHTML = `<span class="tag-warning">未解锁：需突破至元婴期（61级）</span>`;
                btnCreateZongmenEl.disabled = true;
                btnJoinZongmenEl.disabled = true;
            }
        }

        const zongmenStateEl = document.getElementById("zongmen-state");
        if (zongmenStateEl) {
            const zongmenStateText = gameData.zongmen ? `已加入：${gameData.zongmen.name}（等级${gameData.zongmen.level}） | 贡献：${gameData.zongmen.contribution}` : "未加入宗门";
            zongmenStateEl.textContent = zongmenStateText;
        }
    } catch (error) {
        console.error("Error rendering zongmen:", error);
    }
}

// 渲染竞技界面
function renderCompete() {
    try {
        // 确保必要的数据存在
        if (!gameData.competeScore) {
            gameData.competeScore = 0;
        }
        if (!gameData.competeRank) {
            gameData.competeRank = 0;
        }
        if (!gameData.competeTimes) {
            gameData.competeTimes = 0;
        }
        
        const unlock = checkSystemUnlock();
        
        const competeUnlockTipEl = document.getElementById("compete-unlock-tip");
        if (competeUnlockTipEl) {
            if (unlock.compete) {
                competeUnlockTipEl.innerHTML = `<span class="tag-success">已解锁：可参与竞技场</span>`;
            } else {
                competeUnlockTipEl.innerHTML = `<span class="tag-warning">未解锁：需突破至化神期（81级）</span>`;
            }
        }
        
        const competeScoreEl = document.getElementById("compete-score");
        if (competeScoreEl) {
            competeScoreEl.textContent = gameData.competeScore;
        }
        
        const competeRankEl = document.getElementById("compete-rank");
        if (competeRankEl) {
            competeRankEl.textContent = gameData.competeRank;
        }
        
        const competeTimesEl = document.getElementById("compete-times");
        if (competeTimesEl) {
            competeTimesEl.textContent = gameData.competeTimes;
        }
    } catch (error) {
        console.error("Error rendering compete:", error);
    }
}

// 渲染任务界面
function renderTask() {
    try {
        // 确保必要的数据存在
        if (!gameData.tasks) {
            gameData.tasks = {
                daily: [],
                main: [],
                achievement: []
            };
        }
        if (!gameData.refreshTimes) {
            gameData.refreshTimes = 3;
        }
        
        // 日常任务
        const dailyHtml = gameData.tasks.daily.map(task => {
            // 根据任务类型决定是否显示小数
            let progressDisplay = task.progress;
            if (task.id === "daily1") { // 修炼时间任务显示小数
                progressDisplay = task.progress.toFixed(2);
            } else if (Number.isInteger(task.progress)) { // 整数进度显示整数
                progressDisplay = Math.floor(task.progress);
            }
            const progressText = task.completed ? `<span class="tag-success">已完成</span>` : `<span class="tag-warning">进度：${progressDisplay}/${task.target}</span>`;
            const rewardText = Object.entries(task.reward).map(([k, v]) => {
                const nameMap = {stone: "灵石", lingQiDan: "灵气丹", lingCao: "灵草", iron: "精铁"};
                return `${nameMap[k] || k}×${v}`;
            }).join(" | ");
            const btnDisabled = !task.completed || task.rewarded;
            return `
                <div class="item">
                    <div>
                        <span>${task.name}</span>
                        ${progressText}
                    </div>
                    <button class="btn" onclick="gameActions.getTaskReward('${task.id}')" ${btnDisabled ? "disabled" : ""}>领取（${rewardText}）</button>
                </div>
            `;
        }).join("");
        
        const taskDailyEl = document.getElementById("task-daily");
        if (taskDailyEl) {
            taskDailyEl.innerHTML = dailyHtml;
        }

        // 主线任务
        const mainHtml = gameData.tasks.main.map(task => {
            // 根据任务类型决定是否显示小数
            let progressDisplay = task.progress;
            if (task.id === "daily1") { // 修炼时间任务显示小数
                progressDisplay = task.progress.toFixed(2);
            } else if (Number.isInteger(task.progress)) { // 整数进度显示整数
                progressDisplay = Math.floor(task.progress);
            }
            const progressText = task.completed ? `<span class="tag-success">已完成</span>` : `<span class="tag-warning">进度：${progressDisplay}/${task.target}</span>`;
            const rewardText = Object.entries(task.reward).map(([k, v]) => {
                const nameMap = {stone: "灵石", lingQiDan: "灵气丹", gongfaFragment: "引气诀碎片"};
                return `${nameMap[k] || k}×${v}`;
            }).join(" | ");
            const btnDisabled = !task.completed || task.rewarded;
            return `
                <div class="item">
                    <div>
                        <span>${task.name}</span>
                        ${progressText}
                    </div>
                    <button class="btn" onclick="gameActions.getTaskReward('${task.id}')" ${btnDisabled ? "disabled" : ""}>领取（${rewardText}）</button>
                </div>
            `;
        }).join("");
        
        const taskMainEl = document.getElementById("task-main");
        if (taskMainEl) {
            taskMainEl.innerHTML = mainHtml;
        }

        // 成就任务
        const achHtml = gameData.tasks.achievement.map(task => {
            // 根据任务类型决定是否显示小数
            let progressDisplay = task.progress;
            if (task.id === "daily1") { // 修炼时间任务显示小数
                progressDisplay = task.progress.toFixed(2);
            } else if (Number.isInteger(task.progress)) { // 整数进度显示整数
                progressDisplay = Math.floor(task.progress);
            }
            const progressText = task.completed ? `<span class="tag-success">已完成</span>` : `<span class="tag-warning">进度：${progressDisplay}/${task.target}</span>`;
            const rewardText = Object.entries(task.reward).map(([k, v]) => {
                const nameMap = {achievementPoint: "成就点", stone: "灵石", strenStone: "强化石"};
                return `${nameMap[k] || k}×${v}`;
            }).join(" | ");
            const btnDisabled = !task.completed || task.rewarded;
            return `
                <div class="item">
                    <div>
                        <span>${task.name}</span>
                        ${progressText}
                    </div>
                    <button class="btn" onclick="gameActions.getTaskReward('${task.id}')" ${btnDisabled ? "disabled" : ""}>领取（${rewardText}）</button>
                </div>
            `;
        }).join("");
        
        const taskAchievementEl = document.getElementById("task-achievement");
        if (taskAchievementEl) {
            taskAchievementEl.innerHTML = achHtml;
        }
        
        // 更新刷新任务按钮的剩余次数
        const refreshBtn = document.querySelector("button[onclick='gameActions.refreshDailyTask()']");
        if (refreshBtn) {
            const remainingTimes = gameData.refreshTimes || 3;
            refreshBtn.textContent = `刷新日常任务（剩余：${remainingTimes}/3次）`;
        }
    } catch (error) {
        console.error("Error rendering task:", error);
    }
}

// 渲染背包界面
function renderBag() {
    try {
        // 确保必要的数据存在
        if (!gameData.items) {
            gameData.items = {};
        }
        
        // 渲染背包物品
        const bagItems = [
            "lingQiDan", "jinDan", "accelerate", "lingCao", "iron", "strenStone",
            "zongmenToken", "competeCard", "lianQiDan", "zhuJiDan", "jinDanYe",
            "yuanYingGuo", "huaShenJing", "lianXuShi", "heTiLian", "daChengGu",
            "duJieDan", "baoDiFu"
        ];
        
        bagItems.forEach(item => {
            const element = document.getElementById(`bag-${item}`);
            if (element) {
                element.textContent = gameData.items[item] || 0;
            }
        });

        // 更新道具使用按钮状态
        const bagConsumeBtns = document.querySelectorAll("#bag-consume .btn");
        if (bagConsumeBtns.length > 0) {
            bagConsumeBtns.forEach(btn => {
                try {
                    const onclickAttr = btn.getAttribute("onclick");
                    if (onclickAttr) {
                        const match = onclickAttr.match(/'(\w+)'/);
                        if (match && match[1]) {
                            const itemType = match[1];
                            btn.disabled = (gameData.items[itemType] || 0) <= 0;
                        }
                    }
                } catch (error) {
                    console.error("Error updating bag button state:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error rendering bag:", error);
    }
}

// 渲染福利界面
function renderWelfare() {
    try {
        // 确保必要的数据存在
        if (!gameData.signDays) {
            gameData.signDays = 0;
        }
        if (!gameData.onlineTime) {
            gameData.onlineTime = 0;
        }
        
        const welfareSignEl = document.getElementById("welfare-sign");
        if (welfareSignEl) {
            welfareSignEl.textContent = `${gameData.signDays}/7`;
        }
        
        // 在线福利按钮状态
        const onlineMinutes = Math.floor(gameData.onlineTime / 60);
        
        const btnOnline5El = document.getElementById("btn-online-5");
        if (btnOnline5El) {
            btnOnline5El.disabled = onlineMinutes < 5;
        }
        
        const btnOnline15El = document.getElementById("btn-online-15");
        if (btnOnline15El) {
            btnOnline15El.disabled = onlineMinutes < 15;
        }
        
        const btnOnline30El = document.getElementById("btn-online-30");
        if (btnOnline30El) {
            btnOnline30El.disabled = onlineMinutes < 30;
        }
    } catch (error) {
        console.error("Error rendering welfare:", error);
    }
}

// 获取功法品质对应的颜色
function getGongfaColor(quality) {
    switch(quality) {
        case "凡阶": return "#ffffff"; // 白色
        case "灵阶": return "#00aaff"; // 蓝色
        case "天阶": return "#aa00ff"; // 紫色
        case "修罗阶": return "#ff8800"; // 橙色
        default: return "#ffffff";
    }
}

// 渲染功法系统界面
function renderGongfa() {
    try {
        // 确保gameData.gongfa存在
        if (!gameData.gongfa) {
            gameData.gongfa = [];
        }
        
        // 渲染已装备功法
        const equippedContainer = document.getElementById("gongfa-equipped");
        if (!equippedContainer) {
            console.error("gongfa-equipped container not found");
            return;
        }
        
        const equippedGongfa = gameData.gongfa.filter(g => g.equipped);
    
    if (equippedGongfa.length === 0) {
        equippedContainer.innerHTML = '<div class="item"><span>暂无装备功法</span><span class="tag-warning">点击下方装备</span></div>';
    } else {
        equippedContainer.innerHTML = equippedGongfa.map(gongfa => {
            const levelIndex = gongfa.level - 1;
            const effects = gongfa.effects;
            let effectText = "";
            const color = getGongfaColor(gongfa.quality);
            
            if (effects.attack) {
                effectText += `攻击+${effects.attack[levelIndex]}% `;
            }
            if (effects.hp) {
                effectText += `血量+${effects.hp[levelIndex]}% `;
            }
            if (effects.vampire) {
                effectText += `吸血+${effects.vampire[levelIndex]}% `;
            }
            if (effects.damageIncrease) {
                effectText += `增伤+${effects.damageIncrease[levelIndex]}% `;
            }
            if (effects.crit) {
                effectText += `暴击+${effects.crit[levelIndex]}% `;
            }
            if (effects.combo) {
                effectText += `连击+${effects.combo[levelIndex]}% `;
            }
            if (effects.damageReduction) {
                effectText += `减伤+${effects.damageReduction[levelIndex]}% `;
            }
            if (effects.resurrect) {
                effectText += `复活（CD${effects.resurrect[levelIndex]}秒） `;
            }
            if (effects.allStats) {
                effectText += `全属性+${effects.allStats[levelIndex]}% `;
            }
            
            return `
                <div class="item">
                    <span style="color: ${color};">${gongfa.name}（${gongfa.quality}·${gongfa.level}级）</span>
                    <span class="tag-success">${effectText}</span>
                </div>
            `;
        }).join('');
    }
    
    // 渲染功法列表
    const listContainer = document.getElementById("gongfa-list");
    if (listContainer) {
        listContainer.innerHTML = gameData.gongfa.map((gongfa, index) => {
        const fragmentCount = gameData.items[gongfa.fragment] || 0;
        const requiredFragments = gongfa.level === 0 ? 10 : 10 + gongfa.level * 10;
        const canUpgrade = gongfa.level > 0 && fragmentCount >= requiredFragments && gongfa.level < gongfa.maxLevel;
        const canEquip = gongfa.level > 0;
        
        const levelIndex = gongfa.level - 1;
        const effects = gongfa.effects;
        let effectText = "";
        const color = getGongfaColor(gongfa.quality);
        
        // 显示属性（无论是否升级）
        if (effects.attack) {
            effectText += `攻击+${gongfa.level > 0 ? effects.attack[levelIndex] : effects.attack[0]}% `;
        }
        if (effects.hp) {
            effectText += `血量+${gongfa.level > 0 ? effects.hp[levelIndex] : effects.hp[0]}% `;
        }
        if (effects.vampire) {
            effectText += `吸血+${gongfa.level > 0 ? effects.vampire[levelIndex] : effects.vampire[0]}% `;
        }
        if (effects.damageIncrease) {
            effectText += `增伤+${gongfa.level > 0 ? effects.damageIncrease[levelIndex] : effects.damageIncrease[0]}% `;
        }
        if (effects.crit) {
            effectText += `暴击+${gongfa.level > 0 ? effects.crit[levelIndex] : effects.crit[0]}% `;
        }
        if (effects.combo) {
            effectText += `连击+${gongfa.level > 0 ? effects.combo[levelIndex] : effects.combo[0]}% `;
        }
        if (effects.damageReduction) {
            effectText += `减伤+${gongfa.level > 0 ? effects.damageReduction[levelIndex] : effects.damageReduction[0]}% `;
        }
        if (effects.resurrect) {
            effectText += `复活（CD${gongfa.level > 0 ? effects.resurrect[levelIndex] : effects.resurrect[0]}秒） `;
        }
        if (effects.allStats) {
            effectText += `全属性+${gongfa.level > 0 ? effects.allStats[levelIndex] : effects.allStats[0]}% `;
        }
        
        // 检查是否可以合成
        const can合成 = gongfa.level === 0 && fragmentCount >= 10;
        
        return `
            <div class="item">
                <div>
                    <span style="color: ${color};">${gongfa.name}（${gongfa.quality}）</span>
                    <span>等级：${gongfa.level}/${gongfa.maxLevel}</span>
                </div>
                <div><span class="tag-info">${effectText}</span></div>
                <div>
                    <span>碎片：${fragmentCount}/${requiredFragments}</span>
                </div>
                <div>
                    ${can合成 ? 
                        `<button class="btn" onclick="gameActions.composeGongfa(${index})">合成</button>` : 
                        `<button class="btn" onclick="gameActions.upgradeGongfa(${index})" ${!canUpgrade ? 'disabled' : ''}>升级</button>`
                    }
                    <button class="btn" onclick="gameActions.toggleGongfa(${index})" ${!canEquip ? 'disabled' : ''}>${gongfa.equipped ? '卸下' : '装备'}</button>
                </div>
            </div>
        `;
    }).join('');
    } else {
        console.error("gongfa-list container not found");
    }
    } catch (error) {
        console.error("Error rendering gongfa:", error);
    }
}

// 切换视图
function switchView(viewId) {
    // 隐藏所有视图
    document.querySelectorAll(".content-view").forEach(el => {
        el.style.display = "none";
    });
    // 显示目标视图
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.style.display = "block";
    } else {
        console.error(`View ${viewId} not found`);
    }
    // 更新导航按钮状态
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-view") === viewId) {
            btn.classList.add("active");
        }
    });
    // 重新渲染对应视图
    try {
        switch (viewId) {
            case "home": renderHome(); break;
            case "practice": renderPractice(); break;
            case "gongfa": renderGongfa(); break;
            case "alchemy": renderAlchemy(); break;
            case "zongmen": renderZongmen(); break;
            case "dungeon": gameActions.renderDungeon(); break;
            case "task": renderTask(); break;
            case "bag": renderBag(); break;
            case "shura": 
                console.log("Switching to shura view");
                if (gameActions.renderShura) {
                    gameActions.renderShura();
                } else {
                    console.error("renderShura function not found");
                }
                break;
            case "welfare": renderWelfare(); break;
            case "compete": renderCompete(); break;
        }
    } catch (error) {
        console.error("Error rendering view:", error);
        addLog(`切换到${viewId}界面时出错`);
    }
}

// ==================== 功法系统辅助函数 ====================
// 计算带有功法加成的属性值
function calculateAttributeWithGongfaBonus(attribute) {
    let baseValue = gameData[attribute];
    let bonusValue = 0;
    
    // 映射属性名（处理attack和atk的差异）
    const attributeMap = {
        'atk': 'attack',
        'def': 'defense'
    };
    const gongfaAttribute = attributeMap[attribute] || attribute;
    
    // 计算所有装备功法的加成
    gameData.gongfa.forEach(gongfa => {
        if (gongfa.equipped && gongfa.level > 0) {
            const levelIndex = gongfa.level - 1;
            const effects = gongfa.effects;
            
            if (effects[gongfaAttribute]) {
                bonusValue += effects[gongfaAttribute][levelIndex];
            }
            if (effects.allStats) {
                bonusValue += effects.allStats[levelIndex];
            }
        }
    });
    
    // 计算最终值（基础值 + 百分比加成）
    const finalValue = Math.floor(baseValue * (1 + bonusValue / 100));
    return finalValue;
}

function calculateGongfaEffects() {
    try {
        // 确保gameData.extendedAttrs存在
        if (!gameData.extendedAttrs) {
            gameData.extendedAttrs = {};
        }
        
        // 重置扩展属性
        gameData.extendedAttrs = {
            crit: 0,
            critDamage: 50,
            damageIncrease: 0,
            damageReduction: 0,
            combo: 0,
            vampire: 0,
            resurrect: false,
            resurrectCD: 0,
            resurrectTime: gameData.extendedAttrs?.resurrectTime || 0
        };
        
        // 计算所有装备功法的效果
        if (gameData.gongfa && Array.isArray(gameData.gongfa)) {
            gameData.gongfa.forEach(gongfa => {
                if (gongfa.equipped && gongfa.level > 0) {
                    const levelIndex = gongfa.level - 1;
                    const effects = gongfa.effects;
                    
                    // 处理各种效果
                    if (effects.attack) {
                        // 攻击加成
                    }
                    if (effects.hp) {
                        // 血量加成
                    }
                    if (effects.vampire) {
                        gameData.extendedAttrs.vampire += effects.vampire[levelIndex];
                    }
                    if (effects.damageIncrease) {
                        gameData.extendedAttrs.damageIncrease += effects.damageIncrease[levelIndex];
                    }
                    if (effects.crit) {
                        gameData.extendedAttrs.crit += effects.crit[levelIndex];
                    }
                    if (effects.combo) {
                        gameData.extendedAttrs.combo += effects.combo[levelIndex];
                    }
                    if (effects.damageReduction) {
                        gameData.extendedAttrs.damageReduction += effects.damageReduction[levelIndex];
                    }
                    if (effects.resurrect) {
                        gameData.extendedAttrs.resurrect = true;
                        gameData.extendedAttrs.resurrectCD = effects.resurrect[levelIndex];
                    }
                    if (effects.allStats) {
                        // 全属性加成
                        const value = effects.allStats[levelIndex];
                        gameData.extendedAttrs.damageIncrease += value;
                        gameData.extendedAttrs.critDamage += value;
                    }
                }
            });
        }
    } catch (error) {
        console.error("Error calculating gongfa effects:", error);
    }
}

// ==================== 游戏核心操作函数 ====================
const gameActions = {
    // 切换地图
    changeMap: function(mapId) {
        const map = MAP_CONFIG[mapId];
        if (!map) return;
        
        // 检查境界是否满足（高级境界可以进入低级境界的地图）
        const currentRealm = gameData.realm;
        const realmOrder = ["练气期", "筑基期", "金丹期", "元婴期", "化神期", "炼虚期", "合体期", "大乘期", "渡劫期"];
        const currentRealmIndex = realmOrder.indexOf(currentRealm);
        const mapRealmIndex = realmOrder.indexOf(map.realm);
        
        if (currentRealmIndex < mapRealmIndex) {
            addLog(`境界不足，无法进入${map.name}`);
            return;
        }
        
        gameData.currentMap = mapId;
        gameData.expSpeed = map.baseExp;
        gameData.spiritSpeed = map.baseSpirit;
        saveGame();
        renderPractice();
        addLog(`切换到${map.name}，修炼速度：${map.baseExp}经验/分 | ${map.baseSpirit}灵气/分`);
    },

    // 开始自动修炼
    startAutoPractice: function() {
        if (gameData.practiceState === "practicing") return;
        
        gameData.practiceState = "practicing";
        gameData.practiceEndTime = Date.now() + 24 * 60 * 60 * 1000; // 24小时
        saveGame();
        renderPractice();
        renderStatusBar();
        addLog("开始自动修炼，持续24小时，离线也可获得收益");
    },

    // 停止修炼
    stopPractice: function() {
        if (gameData.practiceState === "idle") return;
        
        // 计算已修炼时间并发放收益
        const startTime = gameData.practiceEndTime - 24 * 60 * 60 * 1000;
        const endTime = Date.now();
        const duration = Math.min(24 * 60 * 60, Math.floor((endTime - startTime) / 1000));
        
        const gainedExp = Math.floor(gameData.expSpeed * (duration / 60));
        const gainedSpirit = Math.floor(gameData.spiritSpeed * (duration / 60));
        
        gameData.exp += gainedExp;
        gameData.spirit += gainedSpirit;
        gameData.practiceState = "idle";
        gameData.practiceEndTime = 0;
        
        saveGame();
        renderPractice();
        renderStatusBar();
        addLog(`停止修炼，获得${gainedExp}经验，${gainedSpirit}灵气`);
    },

    // 突破境界
    breakRealm: function() {
        const breakCond = checkBreakCondition();
        if (!breakCond.level || !breakCond.spirit || !breakCond.materials) {
            addLog("突破条件不足");
            return;
        }
        
        // 扣除材料（只有突破到下一个境界才需要材料）
        const realmIdx = REALM_CONFIG.findIndex(r => r.name === gameData.realm);
        const stageIdx = REALM_CONFIG[realmIdx].stages.findIndex(s => s === gameData.realmStage);
        if (stageIdx === REALM_CONFIG[realmIdx].stages.length - 1) {
            // 突破到下一个境界，扣除材料
            Object.entries(breakCond.breakMaterials).forEach(([material, amount]) => {
                gameData.items[material] -= amount;
            });
        }
        
        // 扣除灵气
        const needSpirit = realmIdx < REALM_CONFIG.length - 1 ? 1000 * (realmIdx + 1) : 0;
        gameData.spirit -= needSpirit;
        
        // 突破成功率
        const successRate = REALM_CONFIG[realmIdx].successRate;
        const isSuccess = Math.random() * 100 < successRate;
        
        if (isSuccess) {
            // 突破成功
            const stageIdx = REALM_CONFIG[realmIdx].stages.findIndex(s => s === gameData.realmStage);
            
            if (stageIdx < REALM_CONFIG[realmIdx].stages.length - 1) {
                // 突破到当前境界的下一个阶段
                gameData.realmStage = REALM_CONFIG[realmIdx].stages[stageIdx + 1];
                addLog(`突破成功！${gameData.realm}${gameData.realmStage}！`);
            } else if (realmIdx < REALM_CONFIG.length - 1) {
                // 突破到下一个境界
                const nextRealm = REALM_CONFIG[realmIdx + 1];
                gameData.realm = nextRealm.name;
                gameData.realmStage = nextRealm.stages[0];
                
                // 境界突破属性加成
                const attrAdd = nextRealm.attrAdd;
                gameData.hp += attrAdd.hp;
                gameData.mp += attrAdd.mp;
                gameData.atk += attrAdd.atk;
                gameData.def += attrAdd.def;
                
                addLog(`突破成功！${gameData.realm}${gameData.realmStage}！`);
            }
            
            saveGame();
            renderPractice();
            renderStatusBar();
        } else {
            addLog("突破失败，材料已消耗");
        }
    },

    // 兑换码
    redeemCDK: function() {
        const cdk = document.getElementById("cdk-input").value.trim();
        if (!cdk) {
            addLog("请输入兑换码");
            return;
        }
        
        if (gameData.cdkUsed.includes(cdk)) {
            addLog("兑换码已使用");
            return;
        }
        
        const reward = CDK_CONFIG[cdk];
        if (reward) {
            // 发放奖励
            for (const [item, amount] of Object.entries(reward)) {
                if (item in gameData) {
                    gameData[item] += amount;
                } else if (item in gameData.items) {
                    gameData.items[item] += amount;
                }
            }
            
            gameData.cdkUsed.push(cdk);
            saveGame();
            renderStatusBar();
            renderSideInfo();
            addLog(`兑换码兑换成功：${Object.entries(reward).map(([k, v]) => `${k}×${v}`).join(' | ')}`);
        } else {
            addLog("无效的兑换码");
        }
    },

    // 渲染副本列表
    renderDungeon: function() {
        try {
            resetDungeonDailyLimit();
            
            // 物品名称映射表
            const itemNames = {
                lianQiDan: "练气丹",
                zhuJiDan: "筑基丹",
                jinDanYe: "金丹液",
                yuanYingGuo: "元婴果",
                huaShenJing: "化神晶",
                lianXuShi: "炼虚石",
                heTiLian: "合体莲",
                daChengGu: "大乘骨",
                duJieDan: "渡劫丹",
                kuangRenJueFragment: "狂刃诀碎片",
                tieGuGongFragment: "铁骨功碎片",
                shiXueShuFragment: "嗜血术碎片",
                poJiaJueFragment: "破甲诀碎片",
                ningShenJueFragment: "凝神诀碎片",
                lianZhanJueFragment: "连斩诀碎片",
                wuXiangDunFragment: "无相盾碎片",
                jiuZhuanShenFragment: "九转身碎片",
                wanFaJueFragment: "万法诀碎片",
                xiuLuoZhenShenFragment: "修罗真身碎片"
            };
            
            const dungeonContainer = document.getElementById("dungeon-content");
            if (dungeonContainer) {
                const dungeonHtml = Object.entries(DUNGEON_CONFIG).map(([id, dungeon]) => {
                    const isUnlocked = checkDungeonUnlock(id);
                    
                    // 生成奖励文本，使用中文名称
                    const rewardText = Object.entries(dungeon.rewards).map(([k, v]) => {
                        const itemName = itemNames[k] || k;
                        return `${itemName}${v[0]}-${v[1]}`;
                    }).join(' | ');
                    
                    return `
                        <div class="item">
                            <div>
                                <span>${dungeon.name}</span>
                                <span>（${dungeon.realm}）</span>
                            </div>
                            <div>需求：等级${dungeon.level}</div>
                            <div>消耗：灵气${dungeon.energyCost} 每次</div>
                            <div>奖励：${rewardText}</div>
                            <div>挑战次数：
                                <select id="dungeon-count-${id}" style="padding: 5px; margin: 0 10px; background: #24242e; border: 1px solid #333; color: #fff; border-radius: 4px;">
                                    <option value="1">1次</option>
                                    <option value="5">5次</option>
                                    <option value="10">10次</option>
                                    <option value="20">20次</option>
                                    <option value="50">50次</option>
                                    <option value="100">100次</option>
                                </select>
                            </div>
                            <button class="btn" onclick="gameActions.enterDungeon('${id}')" ${!isUnlocked ? 'disabled' : ''}>
                                ${isUnlocked ? '进入' : '未解锁'}
                            </button>
                        </div>
                    `;
                }).join('');
                dungeonContainer.innerHTML = dungeonHtml;
            } else {
                console.error("dungeon-content container not found");
            }
        } catch (error) {
            console.error("Error rendering dungeon:", error);
        }
    },

    // 进入副本（具体副本）
    enterDungeon: function(dungeonId) {
        const dungeon = DUNGEON_CONFIG[dungeonId];
        if (!dungeon) return;
        
        if (!checkDungeonUnlock(dungeonId)) {
            addLog(`等级不足，无法进入${dungeon.name}`);
            return;
        }
        
        // 获取选择的挑战次数
        const countSelect = document.getElementById(`dungeon-count-${dungeonId}`);
        const count = parseInt(countSelect ? countSelect.value : 1);
        
        // 检查灵气
        const totalEnergyCost = dungeon.energyCost * count;
        if (gameData.spirit < totalEnergyCost) {
            addLog(`灵气不足，需要${totalEnergyCost}灵气`);
            return;
        }
        
        // 扣除灵气
        gameData.spirit -= totalEnergyCost;
        
        // 记录通关次数
        gameData.dungeon.cleared[dungeonId] = (gameData.dungeon.cleared[dungeonId] || 0) + count;
        
        // 计算奖励（多次挑战的总奖励）
        const totalRewards = {};
        for (let i = 0; i < count; i++) {
            const rewards = calculateDungeonReward(dungeonId);
            for (const [item, amount] of Object.entries(rewards)) {
                totalRewards[item] = (totalRewards[item] || 0) + amount;
            }
        }
        
        // 物品名称映射表
        const itemNames = {
            lianQiDan: "练气丹",
            zhuJiDan: "筑基丹",
            jinDanYe: "金丹液",
            yuanYingGuo: "元婴果",
            huaShenJing: "化神晶",
            lianXuShi: "炼虚石",
            heTiLian: "合体莲",
            daChengGu: "大乘骨",
            duJieDan: "渡劫丹",
            kuangRenJueFragment: "狂刃诀碎片",
            tieGuGongFragment: "铁骨功碎片",
            shiXueShuFragment: "嗜血术碎片",
            poJiaJueFragment: "破甲诀碎片",
            ningShenJueFragment: "凝神诀碎片",
            lianZhanJueFragment: "连斩诀碎片",
            wuXiangDunFragment: "无相盾碎片",
            jiuZhuanShenFragment: "九转身碎片",
            wanFaJueFragment: "万法诀碎片",
            xiuLuoZhenShenFragment: "修罗真身碎片"
        };
        
        // 发放奖励
        let rewardText = [];
        for (const [item, amount] of Object.entries(totalRewards)) {
            const itemName = itemNames[item] || item;
            if (item in gameData) {
                gameData[item] += amount;
                rewardText.push(`${itemName}×${amount}`);
            } else if (item in gameData.items) {
                gameData.items[item] += amount;
                rewardText.push(`${itemName}×${amount}`);
            }
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        addLog(`通关${dungeon.name}${count}次，获得奖励：${rewardText.join(' | ')}`);
    },

    // 签到
    sign: function() {
        const today = new Date().toDateString();
        if (gameData.lastSignDate === today) {
            addLog("今日已签到");
            return;
        }
        
        gameData.signDays = Math.min(7, gameData.signDays + 1);
        gameData.lastSignDate = today;
        
        // 签到奖励
        const rewards = {
            1: {stone: 100, lingQiDan: 1},
            2: {stone: 200, lingCao: 5},
            3: {stone: 300, iron: 3},
            4: {stone: 500, lingQiDan: 2},
            5: {stone: 800, strenStone: 2},
            6: {stone: 1000, lingCao: 10},
            7: {stone: 2000, zhuJiDan: 1}
        };
        
        const dayReward = rewards[gameData.signDays];
        for (const [item, amount] of Object.entries(dayReward)) {
            if (item in gameData) {
                gameData[item] += amount;
            } else if (item in gameData.items) {
                gameData.items[item] += amount;
            }
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        addLog(`签到成功，获得第${gameData.signDays}天奖励：${Object.entries(dayReward).map(([k, v]) => `${k}×${v}`).join(' | ')}`);
    },

    // 领取在线福利
    claimOnlineReward: function(minutes) {
        if (gameData.onlineTime < minutes * 60) {
            addLog(`在线时间不足${minutes}分钟`);
            return;
        }
        
        const rewards = {
            5: {stone: 100, lingQiDan: 1},
            15: {stone: 300, lingCao: 5},
            30: {stone: 500, strenStone: 2}
        };
        
        const reward = rewards[minutes];
        for (const [item, amount] of Object.entries(reward)) {
            if (item in gameData) {
                gameData[item] += amount;
            } else if (item in gameData.items) {
                gameData.items[item] += amount;
            }
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        addLog(`领取${minutes}分钟在线福利，获得：${Object.entries(reward).map(([k, v]) => `${k}×${v}`).join(' | ')}`);
    },

    // 开始修炼（兼容HTML调用）
    startPractice: function() {
        this.startAutoPractice();
    },

    // 领取离线收益（兼容HTML调用）
    getOfflineReward: function() {
        const now = Date.now();
        const offlineDuration = Math.min(8 * 60 * 60, Math.floor((now - gameData.offlineTime) / 1000));
        if (offlineDuration > 0) {
            const gainedExp = Math.floor(gameData.expSpeed * (offlineDuration / 60));
            const gainedSpirit = Math.floor(gameData.spiritSpeed * (offlineDuration / 60));
            
            gameData.exp += gainedExp;
            gameData.spirit += gainedSpirit;
            
            addLog(`领取离线收益：${gainedExp}经验，${gainedSpirit}灵气`);
        }
        gameData.offlineTime = now;
        saveGame();
        renderStatusBar();
        renderSideInfo();
    },

    // 炼制丹药（兼容HTML调用）
    makeAlchemy: function(danType) {
        this.makeDan();
    },

    // 显示宗门列表（兼容HTML调用）
    showZongmenList: function() {
        document.getElementById('zongmen-list').style.display = 'block';
    },

    // 申请加入宗门（兼容HTML调用）
    applyZongmen: function(zongmenName) {
        gameData.zongmen = {
            name: zongmenName,
            level: 1,
            contribution: 0
        };
        saveGame();
        renderZongmen();
        addLog(`申请加入${zongmenName}成功`);
    },

    // 签到（兼容HTML调用）
    signIn: function() {
        this.sign();
    },

    // 兑换CDK（兼容HTML调用）
    exchangeCDK: function() {
        this.redeemCDK();
    },

    // 领取在线奖励（兼容HTML调用）
    getOnlineReward: function(minutes) {
        this.claimOnlineReward(minutes);
    },

    // 开始修罗海战斗
    startShuraFight: function() {
        addLog('开始修罗海战斗');
        const battleArea = document.getElementById('shura-battle');
        battleArea.style.display = 'block';
        
        // 获取当前关卡
        const currentLevel = gameData.shura.currentLevel;
        
        // 计算角色属性（带有功法加成）
        const playerHp = calculateAttributeWithGongfaBonus('hp');
        const playerAtk = calculateAttributeWithGongfaBonus('atk');
        
        // 计算怪物属性（根据关卡提升）
        const monsterHp = 100 + (currentLevel - 1) * 500;
        const monsterAtk = 10 + (currentLevel - 1) * 20;
        
        // 更新战斗界面显示
        document.getElementById('player-hp').textContent = `${playerHp}/${playerHp}`;
        document.getElementById('player-hp-fill').style.width = '100%';
        document.getElementById('enemy-hp').textContent = `${monsterHp}/${monsterHp}`;
        document.getElementById('enemy-hp-fill').style.width = '100%';
        
        // 清空战斗日志
        const battleLog = document.getElementById('battle-log');
        battleLog.innerHTML = `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(76,175,80,0.2); text-align: center;"><span style="color: #4CAF50; font-weight: bold;">【战斗开始】</span></div>`;
        
        // 隐藏下一关按钮
        document.getElementById('shura-next').style.display = 'none';
        
        // 开始战斗循环
        let playerCurrentHp = playerHp;
        let monsterCurrentHp = monsterHp;
        
        const battleInterval = setInterval(() => {
            // 玩家攻击
            let playerDamage = Math.max(1, playerAtk - Math.floor(monsterAtk * 0.3));
            
            // 应用增伤效果
            playerDamage = Math.floor(playerDamage * (1 + gameData.extendedAttrs.damageIncrease / 100));
            
            // 检查是否暴击
            let isCrit = false;
            if (Math.random() * 100 < gameData.extendedAttrs.crit) {
                isCrit = true;
                playerDamage = Math.floor(playerDamage * (1 + gameData.extendedAttrs.critDamage / 100));
            }
            
            // 检查是否连击
            let isCombo = false;
            if (Math.random() * 100 < gameData.extendedAttrs.combo) {
                isCombo = true;
                playerDamage = Math.floor(playerDamage * 1.5); // 连击额外50%伤害
            }
            
            // 应用减伤效果到怪物攻击
            monsterCurrentHp = Math.max(0, monsterCurrentHp - playerDamage);
            
            // 更新怪物血量
            const monsterHpPercent = (monsterCurrentHp / monsterHp) * 100;
            document.getElementById('enemy-hp').textContent = `${monsterCurrentHp}/${monsterHp}`;
            document.getElementById('enemy-hp-fill').style.width = `${monsterHpPercent}%`;
            
            // 添加战斗日志
            let attackLog = `<span style="color: #4CAF50;">【你】</span> 攻击了 <span style="color: #FF5722;">【修罗魔主】</span>，造成 <span style="font-weight: bold;">${playerDamage}</span> 点伤害！`;
            if (isCrit) attackLog += ' <span style="color: #F44336; font-weight: bold;">【暴击】</span>！';
            if (isCombo) attackLog += ' <span style="color: #4CAF50; font-weight: bold;">【连击】</span>！';
            battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(0,0,0,0.2);">${attackLog}</div>`;
            battleLog.scrollTop = battleLog.scrollHeight;
            
            // 应用吸血效果
            if (gameData.extendedAttrs.vampire > 0) {
                const vampireHeal = Math.floor(playerDamage * (gameData.extendedAttrs.vampire / 100));
                playerCurrentHp = Math.min(playerHp, playerCurrentHp + vampireHeal);
                battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(244,67,54,0.1);"><span style="color: #F44336; font-weight: bold;">【吸血】</span> 你恢复了 ${vampireHeal} 点气血！</div>`;
                battleLog.scrollTop = battleLog.scrollHeight;
            }
            
            // 检查怪物是否死亡
            if (monsterCurrentHp <= 0) {
                clearInterval(battleInterval);
                battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(76,175,80,0.2); text-align: center;"><span style="color: #4CAF50; font-weight: bold;">【战斗胜利】</span> 你击败了修罗魔主！</div>`;
                document.getElementById('shura-next').style.display = 'block';
                
                // 更新最高关卡
                gameData.shura.highestLevel = Math.max(gameData.shura.highestLevel, gameData.shura.currentLevel);
                document.getElementById('shura-highest').textContent = `第${gameData.shura.highestLevel}关`;
                saveGame();
                
                return;
            }
            
            // 怪物攻击
            let monsterDamage = Math.max(1, monsterAtk - Math.floor(playerAtk * 0.2));
            
            // 应用减伤效果
            monsterDamage = Math.floor(monsterDamage * (1 - gameData.extendedAttrs.damageReduction / 100));
            
            playerCurrentHp = Math.max(0, playerCurrentHp - monsterDamage);
            
            // 更新玩家血量
            const playerHpPercent = (playerCurrentHp / playerHp) * 100;
            document.getElementById('player-hp').textContent = `${playerCurrentHp}/${playerHp}`;
            document.getElementById('player-hp-fill').style.width = `${playerHpPercent}%`;
            
            // 添加战斗日志
            let monsterAttackLog = `<span style="color: #FF5722;">【修罗魔主】</span> 攻击了你，造成 <span style="font-weight: bold;">${monsterDamage}</span> 点伤害！`;
            battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(255,87,34,0.1);">${monsterAttackLog}</div>`;
            battleLog.scrollTop = battleLog.scrollHeight;
            
            // 检查玩家是否死亡
            if (playerCurrentHp <= 0) {
                // 检查是否可以复活
                if (gameData.extendedAttrs.resurrect) {
                    const now = Date.now();
                    if (now - (gameData.extendedAttrs.resurrectTime || 0) > gameData.extendedAttrs.resurrectCD * 1000) {
                        playerCurrentHp = Math.floor(playerHp * 0.5); // 复活后恢复50%气血
                        gameData.extendedAttrs.resurrectTime = now;
                        battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(255,215,0,0.2);"><span style="color: #FFD700; font-weight: bold;">【复活】</span> 你复活了！恢复了50%气血！</div>`;
                        battleLog.scrollTop = battleLog.scrollHeight;
                    } else {
                        clearInterval(battleInterval);
                        battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(244,67,54,0.2); text-align: center;"><span style="color: #F44336; font-weight: bold;">【战斗失败】</span> 你被修罗魔主击败了！</div>`;
                        return;
                    }
                } else {
                    clearInterval(battleInterval);
                    battleLog.innerHTML += `<div class="log-item" style="margin: 2px 0; padding: 2px 5px; border-radius: 3px; background: rgba(244,67,54,0.2); text-align: center;"><span style="color: #F44336; font-weight: bold;">【战斗失败】</span> 你被修罗魔主击败了！</div>`;
                    return;
                }
            }
        }, 1000); // 每秒攻击一次
    },

    // 跳关功能
    jumpShuraLevel: function(levels) {
        const maxJumpLevel = gameData.shura.highestLevel + 500;
        const newLevel = gameData.shura.currentLevel + levels;
        
        if (newLevel > maxJumpLevel) {
            addLog(`跳关失败：最高只能跳到第${maxJumpLevel}关`);
            return;
        }
        
        gameData.shura.currentLevel = newLevel;
        document.getElementById('shura-level').textContent = `第${gameData.shura.currentLevel}关`;
        addLog(`跳转到第${gameData.shura.currentLevel}关`);
        saveGame();
    },

    // 减少关卡
    decreaseShuraLevel: function(levels) {
        gameData.shura.currentLevel = Math.max(1, gameData.shura.currentLevel - levels);
        document.getElementById('shura-level').textContent = `第${gameData.shura.currentLevel}关`;
        addLog(`调整到第${gameData.shura.currentLevel}关`);
        saveGame();
    },

    // 下一关
    nextShuraLevel: function() {
        gameData.shura.currentLevel += 1;
        gameData.shura.highestLevel = Math.max(gameData.shura.highestLevel, gameData.shura.currentLevel);
        document.getElementById('shura-level').textContent = `第${gameData.shura.currentLevel}关`;
        document.getElementById('shura-highest').textContent = `第${gameData.shura.highestLevel}关`;
        addLog(`进入第${gameData.shura.currentLevel}关`);
        saveGame();
    },

    // 自动闯关
    autoShura: function() {
        addLog('开始自动闯关');
        
        // 自动战斗直到失败
        const autoBattle = setInterval(() => {
            // 检查当前是否在战斗中
            if (gameData.shura.isFighting) return;
            
            // 开始战斗
            gameData.shura.isFighting = true;
            this.startShuraFight();
            
            // 检查战斗是否结束
            const checkBattleEnd = setInterval(() => {
                const nextButton = document.getElementById('shura-next');
                if (nextButton && nextButton.style.display === 'block') {
                    // 战斗胜利，进入下一关
                    clearInterval(checkBattleEnd);
                    gameData.shura.isFighting = false;
                    this.nextShuraLevel();
                }
            }, 2000);
        }, 3000);
        
        // 保存自动闯关状态
        gameData.shura.autoFighting = true;
        saveGame();
        
        addLog('自动闯关已启动');
    },

    // 领取任务奖励
    getTaskReward: function(taskId) {
        const task = gameData.tasks.daily.find(t => t.id === taskId) || 
                    gameData.tasks.main.find(t => t.id === taskId) || 
                    gameData.tasks.achievement.find(t => t.id === taskId);
        
        if (!task) return;
        if (!task.completed) return;
        if (task.rewarded) return;
        
        // 发放奖励
        for (const [item, amount] of Object.entries(task.reward)) {
            if (item in gameData) {
                gameData[item] += amount;
            } else if (item in gameData.items) {
                gameData.items[item] += amount;
            }
        }
        
        task.rewarded = true;
        saveGame();
        renderStatusBar();
        renderSideInfo();
        addLog(`领取任务奖励：${Object.entries(task.reward).map(([k, v]) => `${k}×${v}`).join(' | ')}`);
    },

    // 刷新日常任务
    refreshDailyTask: function() {
        const remainingTimes = gameData.refreshTimes || 3;
        if (remainingTimes <= 0) {
            addLog("今日刷新次数已用完");
            return;
        }
        
        // 重置日常任务
        gameData.tasks.daily.forEach(task => {
            task.progress = 0;
            task.completed = false;
            task.rewarded = false;
        });
        
        gameData.refreshTimes = remainingTimes - 1;
        saveGame();
        renderTask();
        addLog("日常任务已刷新");
    },

    // 使用道具
    useItem: function(itemType) {
        if (gameData.items[itemType] <= 0) return;
        
        switch(itemType) {
            case "lingQiDan":
                gameData.spirit += 100;
                break;
            case "accelerate":
                // 加速符效果
                break;
        }
        
        gameData.items[itemType] -= 1;
        saveGame();
        renderStatusBar();
        renderSideInfo();
        addLog(`使用了${itemType}`);
    },

    // 炼制丹药
    makeDan: function() {
        if (gameData.items.lingCao < 10 || gameData.stone < 100) {
            addLog("材料不足");
            return;
        }
        
        gameData.items.lingCao -= 10;
        gameData.stone -= 100;
        
        // 模拟炼丹过程
        const success = Math.random() < 0.9;
        if (success) {
            gameData.items.lingQiDan += 3;
            gameData.alchemyExp += 10;
            addLog("炼丹成功，获得3颗灵气丹");
        } else {
            addLog("炼丹失败");
        }
        
        // 检查炼丹等级
        if (gameData.alchemyExp >= (gameData.alchemyLevel + 1) * 100) {
            gameData.alchemyExp -= (gameData.alchemyLevel + 1) * 100;
            gameData.alchemyLevel += 1;
            addLog(`炼丹等级提升至${gameData.alchemyLevel}级`);
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        renderAlchemy();
    },

    // 打造法器
    makeForge: function() {
        if (gameData.items.iron < 10 || gameData.stone < 200) {
            addLog("材料不足");
            return;
        }
        
        gameData.items.iron -= 10;
        gameData.stone -= 200;
        
        // 模拟打造过程
        const success = Math.random() < 0.85;
        if (success) {
            const forgeItem = {
                name: "青钢剑",
                type: "attack",
                effect: "攻击+50",
                level: 1
            };
            gameData.forgeEquipped = forgeItem;
            gameData.forgeExp += 20;
            addLog("打造成功，获得青钢剑");
        } else {
            addLog("打造失败");
        }
        
        // 检查炼器等级
        if (gameData.forgeExp >= (gameData.forgeLevel + 1) * 100) {
            gameData.forgeExp -= (gameData.forgeLevel + 1) * 100;
            gameData.forgeLevel += 1;
            addLog(`炼器等级提升至${gameData.forgeLevel}级`);
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        renderAlchemy();
    },

    // 强化法器
    strengthenForge: function() {
        if (!gameData.forgeEquipped) {
            addLog("暂无装备法器");
            return;
        }
        
        if (gameData.items.strenStone < 2 || gameData.stone < 100) {
            addLog("材料不足");
            return;
        }
        
        gameData.items.strenStone -= 2;
        gameData.stone -= 100;
        
        // 模拟强化过程
        const success = Math.random() < 0.8;
        if (success) {
            gameData.forgeEquipped.level += 1;
            addLog(`强化成功，${gameData.forgeEquipped.name}等级提升至${gameData.forgeEquipped.level}级`);
        } else {
            addLog("强化失败");
        }
        
        saveGame();
        renderStatusBar();
        renderSideInfo();
        renderAlchemy();
    },

    // 创建宗门
    createZongmen: function() {
        const zongmenName = document.getElementById("zongmen-name").value.trim();
        if (!zongmenName) {
            addLog("请输入宗门名称");
            return;
        }
        
        if (gameData.items.zongmenToken < 1 || gameData.stone < 10000) {
            addLog("材料不足");
            return;
        }
        
        gameData.items.zongmenToken -= 1;
        gameData.stone -= 10000;
        gameData.zongmen = {
            name: zongmenName,
            level: 1,
            contribution: 0
        };
        
        saveGame();
        renderZongmen();
        addLog(`创建宗门${zongmenName}成功`);
    },

    // 加入宗门
    joinZongmen: function() {
        // 简化版：直接加入一个默认宗门
        gameData.zongmen = {
            name: "昊天宗",
            level: 3,
            contribution: 0
        };
        
        saveGame();
        renderZongmen();
        addLog("加入昊天宗成功");
    },

    // 升级功法
    upgradeGongfa: function(index) {
        const gongfa = gameData.gongfa[index];
        if (!gongfa) return;
        
        const fragmentCount = gameData.items[gongfa.fragment] || 0;
        const requiredFragments = 10 + gongfa.level * 10;
        
        if (fragmentCount < requiredFragments) {
            addLog(`碎片不足，需要${requiredFragments}个${gongfa.fragment}`);
            return;
        }
        
        if (gameData.spirit < 100) {
            addLog("灵气不足，需要100灵气");
            return;
        }
        
        if (gongfa.level >= gongfa.maxLevel) {
            addLog("功法已达最高等级");
            return;
        }
        
        gameData.items[gongfa.fragment] -= requiredFragments;
        gameData.spirit -= 100;
        gongfa.level += 1;
        
        // 计算功法效果
        calculateGongfaEffects();
        
        saveGame();
        renderGongfa();
        renderStatusBar();
        renderSideInfo();
        addLog(`${gongfa.name}升级至${gongfa.level}级`);
    },

    // 装备/卸下功法
    toggleGongfa: function(index) {
        const gongfa = gameData.gongfa[index];
        if (!gongfa) return;
        
        if (gongfa.level === 0) {
            addLog("功法未合成，无法装备");
            return;
        }
        
        gongfa.equipped = !gongfa.equipped;
        
        // 计算功法效果
        calculateGongfaEffects();
        
        saveGame();
        renderGongfa();
        renderStatusBar();
        renderSideInfo();
        addLog(`${gongfa.name}已${gongfa.equipped ? '装备' : '卸下'}`);
    },

    // 合成功法
    composeGongfa: function(index) {
        const gongfa = gameData.gongfa[index];
        if (!gongfa) return;
        
        if (gongfa.level > 0) {
            addLog("功法已合成");
            return;
        }
        
        const fragmentCount = gameData.items[gongfa.fragment] || 0;
        if (fragmentCount < 10) {
            addLog(`碎片不足，需要10个${gongfa.fragment}`);
            return;
        }
        
        gameData.items[gongfa.fragment] -= 10;
        gongfa.level = 1;
        
        saveGame();
        renderGongfa();
        addLog(`合成${gongfa.name}成功`);
    },

    // 初始化修罗海
    initShura: function() {
        if (typeof ShuraSea === 'undefined') {
            console.error('ShuraSea is not defined');
            return;
        }
        
        ShuraSea.init();
    },

    // 渲染修罗海
    renderShura: function() {
        // 确保shura数据存在
        if (!gameData.shura) {
            gameData.shura = {
                currentLevel: 1,
                highestLevel: 1,
                isFighting: false
            };
        }
        
        // 默认显示在最高关卡
        gameData.shura.currentLevel = gameData.shura.highestLevel;
        
        // 更新修罗海界面显示（添加错误处理）
        try {
            const shuraLevelEl = document.getElementById('shura-level');
            const shuraHighestEl = document.getElementById('shura-highest');
            if (shuraLevelEl) {
                shuraLevelEl.textContent = `第${gameData.shura.currentLevel}关`;
            }
            if (shuraHighestEl) {
                shuraHighestEl.textContent = `第${gameData.shura.highestLevel}关`;
            }
        } catch (error) {
            console.error("Error updating shura UI:", error);
        }
        
        // 保存数据
        saveGame();
    },
    
    // 打开存档管理界面
    openSaveManager: function() {
        const saveSlots = getSaveSlots();
        let html = `
            <div class="save-manager" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #1a1a2e; border: 1px solid #333; border-radius: 8px; padding: 20px; z-index: 1000; width: 400px;">
                <h2 style="color: #fff; text-align: center; margin-bottom: 20px;">存档管理</h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
        `;
        
        saveSlots.forEach(slot => {
            const slotId = slot.slot;
            html += `
                <div style="background: #24242e; border-radius: 4px; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 style="color: #fff; margin: 0 0 5px 0;">存档 ${slotId}</h3>
                        ${slot.exists ? `
                            <p style="color: #aaa; margin: 0; font-size: 12px;">等级: ${slot.level} | ${slot.realm}</p>
                            <p style="color: #aaa; margin: 0; font-size: 12px;">保存时间: ${new Date(slot.timestamp).toLocaleString()}</p>
                        ` : `
                            <p style="color: #666; margin: 0; font-size: 12px;">空存档</p>
                        `}
                    </div>
                    <div style="display: flex; gap: 10px;">
                        ${slot.exists ? `
                            <button class="btn" onclick="gameActions.loadSave(${slotId})" style="padding: 5px 10px; background: #4CAF50; border: none; border-radius: 4px; color: white; cursor: pointer;">加载</button>
                            <button class="btn" onclick="gameActions.deleteSave(${slotId})" style="padding: 5px 10px; background: #f44336; border: none; border-radius: 4px; color: white; cursor: pointer;">删除</button>
                        ` : `
                            <button class="btn" onclick="gameActions.createSave(${slotId})" style="padding: 5px 10px; background: #2196F3; border: none; border-radius: 4px; color: white; cursor: pointer;">创建</button>
                        `}
                        ${slotId !== currentSaveSlot ? `
                            <button class="btn" onclick="gameActions.saveToSlot(${slotId})" style="padding: 5px 10px; background: #ff9800; border: none; border-radius: 4px; color: white; cursor: pointer;">保存当前</button>
                        ` : `
                            <span style="color: #4CAF50; font-size: 12px;">当前存档</span>
                        `}
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn" onclick="document.querySelector('.save-manager').remove(); document.querySelector('.save-manager-overlay').remove();" style="padding: 8px 20px; background: #666; border: none; border-radius: 4px; color: white; cursor: pointer;">关闭</button>
                </div>
            </div>
            <div class="save-manager-overlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 999;"></div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', html);
        
        // 点击遮罩关闭
        document.querySelector('.save-manager-overlay').addEventListener('click', function() {
            document.querySelector('.save-manager').remove();
            document.querySelector('.save-manager-overlay').remove();
        });
    },
    
    // 加载存档
    loadSave: function(slot) {
        const loadedData = loadGame(slot);
        if (loadedData) {
            gameData = loadedData;
            saveGame();
            // 关闭存档管理界面
            try {
                document.querySelector('.save-manager').remove();
                document.querySelector('.save-manager-overlay').remove();
            } catch (error) {
                console.error("Error closing save manager:", error);
            }
            location.reload(); // 刷新页面以应用新数据
        }
    },
    
    // 创建新存档
    createSave: function(slot) {
        const newData = createNewSave(slot);
        addLog(`创建新存档到槽位 ${slot}`);
        // 刷新存档管理界面
        document.querySelector('.save-manager').remove();
        document.querySelector('.save-manager-overlay').remove();
        this.openSaveManager();
    },
    
    // 删除存档
    deleteSave: function(slot) {
        if (confirm(`确定要删除存档 ${slot} 吗？`)) {
            deleteSave(slot);
            addLog(`删除存档 ${slot}`);
            // 刷新存档管理界面
            document.querySelector('.save-manager').remove();
            document.querySelector('.save-manager-overlay').remove();
            this.openSaveManager();
        }
    },
    
    // 保存当前数据到指定槽位
    saveToSlot: function(slot) {
        const oldSlot = currentSaveSlot;
        currentSaveSlot = slot;
        saveGame();
        currentSaveSlot = oldSlot; // 恢复当前槽位
        addLog(`保存当前数据到存档 ${slot}`);
        // 刷新存档管理界面
        document.querySelector('.save-manager').remove();
        document.querySelector('.save-manager-overlay').remove();
        this.openSaveManager();
    }
};

// ==================== 初始化 ====================
// 页面加载完成后初始化
window.onload = function() {
    try {
        // 计算功法效果
        calculateGongfaEffects();
    } catch (error) {
        console.error("Error calculating gongfa effects during init:", error);
    }
    
    try {
        // 渲染初始界面
        renderStatusBar();
        renderSideInfo();
        switchView("home");
    } catch (error) {
        console.error("Error rendering initial views:", error);
    }
    
    // 添加导航栏点击事件监听器 - 这是最关键的部分，必须确保执行
    try {
        const navButtons = document.querySelectorAll(".nav-btn");
        console.log(`Found ${navButtons.length} nav buttons`);
        navButtons.forEach(btn => {
            btn.addEventListener("click", function() {
                const viewId = this.getAttribute("data-view");
                console.log(`Nav button clicked, viewId: ${viewId}`);
                if (viewId) {
                    switchView(viewId);
                }
                // 对于没有data-view属性的按钮（如存档管理），不执行任何操作，让onclick属性生效
            });
        });
        console.log("Navigation event listeners added successfully");
    } catch (error) {
        console.error("Error adding navigation event listeners:", error);
    }
    
    // 初始化修罗海
    if (!gameData.shura) {
        gameData.shura = {
            currentLevel: 1,
            highestLevel: 1,
            isFighting: false
        };
    }
    if (typeof ShuraSea !== 'undefined') {
        ShuraSea.init();
    }
    
    // 自动领取离线收益
    if (gameData.autoGetOffline) {
        const now = Date.now();
        const offlineDuration = Math.min(8 * 60 * 60, Math.floor((now - gameData.offlineTime) / 1000));
        if (offlineDuration > 0) {
            const gainedExp = Math.floor(gameData.expSpeed * (offlineDuration / 60));
            const gainedSpirit = Math.floor(gameData.spiritSpeed * (offlineDuration / 60));
            
            gameData.exp += gainedExp;
            gameData.spirit += gainedSpirit;
            
            addLog(`领取离线收益：${gainedExp}经验，${gainedSpirit}灵气`);
        }
        gameData.offlineTime = now;
        saveGame();
        renderStatusBar();
        renderSideInfo();
    }
    
    // 自动开始修炼
    if (gameData.autoPractice && gameData.practiceState === "idle") {
        gameActions.startAutoPractice();
    }
    
    // 开始在线时间计时
    setInterval(() => {
        if (!gameData.onlineTime) {
            gameData.onlineTime = 0;
        }
        gameData.onlineTime += 1;
        saveGame();
    }, 1000);
    
    // 定时保存游戏
    setInterval(saveGame, 30000); // 30秒自动保存
};

// 关闭页面时保存游戏
window.onbeforeunload = function() {
    saveGame();
};