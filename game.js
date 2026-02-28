// ===== MATH QUEST: TEARS OF KNOWLEDGE — Game Engine v2 =====
// Full-featured engine: pools, badges, streaks, VFX, confetti, tabs, character select.

(function () {
  "use strict";

  // ── Constants ──
  const SAVE_KEY_PREFIX = "mathquest_save";
  const SAVE_SLOTS = 3;
  function getSaveKey(slot) { return SAVE_KEY_PREFIX + "_" + slot; }
  const PLAYABLE_WORLDS = 15;
  const SHRINE_HEARTS = 3;
  const BOSS_HEARTS = 5;
  const DEFAULT_SHRINES = 10;
  const BOSS_PROBLEMS = 5;
  const SHRINE_REQ_RATIO = 0.7; // must complete 70% of shrines to unlock boss
  const XP_CORRECT_FIRST = 50;
  const XP_CORRECT_RETRY = 25;
  const XP_BOSS_CORRECT = 100;
  const XP_BOSS_DEFEAT = 200;
  const XP_PERFECT_BONUS = 30;
  const COINS_CORRECT = 10;
  const COINS_BOSS = 50;
  const HINT_COSTS = [5, 10, 20];
  const RETRY_COST = 15;
  const BOSS_TIMER_SECONDS = 30; // countdown per boss question

  // ── Lightweight LaTeX-to-HTML math renderer ──
  // Converts \div, \times, \frac{a}{b}, \gcd, \text{...} inside any HTML string.
  function renderMath(html) {
    if (typeof html !== "string") return html;
    return html
      // \frac{a}{b} → HTML fraction using sup/sub style
      .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '<span class="mfrac"><span class="mfrac-num">$1</span><span class="mfrac-bar"></span><span class="mfrac-den">$2</span></span>')
      // \div → ÷
      .replace(/\\div/g, '\u00F7')
      // \times → ×
      .replace(/\\times/g, '\u00D7')
      // \gcd → gcd (roman text)
      .replace(/\\gcd/g, 'gcd')
      // \text{...} → plain text
      .replace(/\\text\{([^}]*)\}/g, '$1');
  }

  // ── Character Options ──
  const CHARACTERS = [
    { id: "warrior", icon: "⚔️", name: "Warrior", desc: "Brave blade of the frontier" },
    { id: "mage", icon: "🔮", name: "Mage", desc: "Seeker of arcane truth" },
    { id: "scholar", icon: "📖", name: "Scholar", desc: "Keeper of ancient scrolls" },
    { id: "explorer", icon: "🧭", name: "Explorer", desc: "Wanderer of the sky isles" },
  ];

  // ── Shop Items (purchasable with coins) ──
  const SHOP_ITEMS = [
    // Weapons (held in right hand)
    { id: "wooden_sword",   cat: "weapon", name: "Wooden Sword",    cost: 50,   tier: 1, desc: "A humble training blade",          color: "#a0724a" },
    { id: "iron_blade",     cat: "weapon", name: "Iron Blade",      cost: 150,  tier: 2, desc: "Forged in Hateno steel",           color: "#b0b8c0" },
    { id: "guardian_sword",  cat: "weapon", name: "Guardian Sword",  cost: 300,  tier: 3, desc: "Ancient Sheikah technology",       color: "#00d4aa" },
    { id: "master_sword",   cat: "weapon", name: "Master Sword",    cost: 500,  tier: 4, desc: "The blade that seals the darkness", color: "#60c0ff" },
    { id: "void_cleaver",   cat: "weapon", name: "Void Cleaver",    cost: 800,  tier: 5, desc: "Ripped from the void itself",      color: "#b040ff" },

    // Armor (body overlay)
    { id: "leather_tunic",  cat: "armor",  name: "Leather Tunic",   cost: 75,   tier: 1, desc: "Simple but trusty protection",     color: "#8b6914" },
    { id: "chain_mail",     cat: "armor",  name: "Chain Mail",      cost: 200,  tier: 2, desc: "Woven rings of iron",              color: "#8a9aaa" },
    { id: "knight_plate",   cat: "armor",  name: "Knight Plate",    cost: 400,  tier: 3, desc: "Royal guard standard issue",       color: "#d4a842" },
    { id: "crystal_armor",  cat: "armor",  name: "Crystal Armor",   cost: 600,  tier: 4, desc: "Zonai crystal-fused plating",      color: "#00d4aa" },
    { id: "radiant_armor",  cat: "armor",  name: "Radiant Armor",   cost: 900,  tier: 5, desc: "Forged from pure starlight",       color: "#ffd700" },

    // Magic (aura effect)
    { id: "fire_rune",      cat: "magic",  name: "Fire Rune",       cost: 100,  tier: 1, desc: "Wreath yourself in flame",         color: "#ff6030" },
    { id: "ice_crystal",    cat: "magic",  name: "Ice Crystal",     cost: 250,  tier: 2, desc: "A shield of frozen air",           color: "#80d0ff" },
    { id: "lightning_bolt",  cat: "magic",  name: "Lightning Bolt",  cost: 350,  tier: 3, desc: "Crackling storm energy",           color: "#ffe040" },
    { id: "wind_gale",      cat: "magic",  name: "Wind Gale",       cost: 500,  tier: 4, desc: "Revali's favorite trick",          color: "#40e0a0" },
    { id: "void_star",      cat: "magic",  name: "Void Star",       cost: 750,  tier: 5, desc: "Cosmic force made manifest",       color: "#c060ff" },
  ];

  // ── Encouraging Quotes (shown on wrong answers) ──
  const ENCOURAGE_QUOTES = [
    // Scientists & Mathematicians
    { quote: "Anyone who has never made a mistake has never tried anything new.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },
    { quote: "It is not that I'm so smart. But I stay with the questions much longer.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },
    { quote: "The only way to learn mathematics is to do mathematics.",
      author: "Paul Halmos",
      bio: "Hungarian-American mathematician and author" },
    { quote: "Do not worry about your difficulties in mathematics. I can assure you mine are still greater.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },
    { quote: "Mathematics is not about numbers, equations, or algorithms: it is about understanding.",
      author: "William Paul Thurston",
      bio: "American mathematician who won the Fields Medal" },
    { quote: "Pure mathematics is the world's best game. It is more absorbing than chess, more of a gamble than poker.",
      author: "Frederick Soddy",
      bio: "English chemist who won the Nobel Prize" },
    { quote: "In mathematics you don't understand things. You just get used to them.",
      author: "John von Neumann",
      bio: "Mathematician who helped invent computers" },
    { quote: "The essence of math is not to make simple things complicated, but to make complicated things simple.",
      author: "Stan Gudder",
      bio: "American mathematician and professor" },
    { quote: "Mistakes are the portals of discovery.",
      author: "James Joyce",
      bio: "Irish novelist and one of the greatest writers" },

    // Inventors & Leaders
    { quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas Edison",
      bio: "Inventor of the light bulb and phonograph" },
    { quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius",
      bio: "Ancient Chinese philosopher and teacher" },
    { quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      bio: "Ancient Chinese philosopher and teacher" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      bio: "British Prime Minister during World War II" },
    { quote: "The expert in anything was once a beginner.",
      author: "Helen Hayes",
      bio: "American actress known as the First Lady of Theater" },
    { quote: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },

    // Educators & Thinkers
    { quote: "Education is not the filling of a pail, but the lighting of a fire.",
      author: "William Butler Yeats",
      bio: "Irish poet who won the Nobel Prize in Literature" },
    { quote: "The beautiful thing about learning is that nobody can take it away from you.",
      author: "B.B. King",
      bio: "Legendary American blues guitarist" },
    { quote: "You don't have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
      bio: "American motivational speaker and author" },
    { quote: "Fall seven times, stand up eight.",
      author: "Japanese Proverb",
      bio: "Traditional wisdom from Japanese culture" },
    { quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      bio: "26th President of the United States" },

    // Scientists & Pioneers
    { quote: "Nothing in life is to be feared, it is only to be understood.",
      author: "Marie Curie",
      bio: "Physicist and chemist, first woman to win a Nobel Prize" },
    { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },
    { quote: "I was taught that the way of progress is neither swift nor easy.",
      author: "Marie Curie",
      bio: "Physicist and chemist, first woman to win a Nobel Prize" },
    { quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
      author: "Elbert Hubbard",
      bio: "American writer and philosopher" },
    { quote: "There are no shortcuts to any place worth going.",
      author: "Beverly Sills",
      bio: "American opera singer and arts leader" },

    // Athletes & Modern Figures
    { quote: "I've missed more than 9000 shots in my career. And that is why I succeed.",
      author: "Michael Jordan",
      bio: "Basketball legend, 6-time NBA champion" },
    { quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
      bio: "Legendary American football coach" },
    { quote: "Persistence can change failure into extraordinary achievement.",
      author: "Marv Levy",
      bio: "Hall of Fame football coach" },
    { quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      bio: "American motivational speaker and author" },
    { quote: "Difficult roads often lead to beautiful destinations.",
      author: "Zig Ziglar",
      bio: "American motivational speaker and author" },

    // Writers & Artists
    { quote: "Ever tried. Ever failed. No matter. Try again. Fail better.",
      author: "Samuel Beckett",
      bio: "Irish novelist and Nobel Prize winner" },
    { quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
      bio: "American author of Tom Sawyer and Huckleberry Finn" },
    { quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
      bio: "Physicist who discovered the theory of relativity" },
    { quote: "What we know is a drop, what we don't know is an ocean.",
      author: "Isaac Newton",
      bio: "Mathematician who discovered gravity and calculus" },
    { quote: "If people never did silly things, nothing intelligent would ever get done.",
      author: "Ludwig Wittgenstein",
      bio: "Austrian philosopher and logician" },

    // More Math-Specific
    { quote: "Go down deep enough into anything and you will find mathematics.",
      author: "Dean Schlicter",
      bio: "American mathematics educator" },
    { quote: "Without mathematics, there's nothing you can do. Everything around you is mathematics.",
      author: "Shakuntala Devi",
      bio: "Indian math prodigy known as the Human Computer" },
    { quote: "The study of mathematics is apt to commence in disappointment... but the reward is great.",
      author: "Alfred North Whitehead",
      bio: "English mathematician and philosopher" },
    { quote: "No great discovery was ever made without a bold guess.",
      author: "Isaac Newton",
      bio: "Mathematician who discovered gravity and calculus" },
    { quote: "One must learn by doing the thing; for though you think you know it, you have no certainty until you try.",
      author: "Sophocles",
      bio: "Ancient Greek playwright, one of the great tragedians" },
  ];

  // ── Badge Definitions (55 badges across 12 categories) ──
  const BADGES = [
    // ── Journey (first-time milestones) ──
    { id: "first_step",     icon: "🌱", name: "First Step",      desc: "Solve your first problem",     cat: "Journey" },
    { id: "first_shrine",   icon: "⛩️", name: "Shrine Opener",   desc: "Complete your first shrine",   cat: "Journey" },
    { id: "first_tear",     icon: "💧", name: "Tear Bearer",     desc: "Collect your first Tear",      cat: "Journey" },
    { id: "first_rebattle", icon: "🔄", name: "Rematch",         desc: "Re-battle a defeated boss",    cat: "Journey" },

    // ── Problem Solving ──
    { id: "solve_10",   icon: "📝", name: "Apprentice",      desc: "Solve 10 problems",   cat: "Solving" },
    { id: "solve_25",   icon: "📄", name: "Dedicated",       desc: "Solve 25 problems",   cat: "Solving" },
    { id: "solve_50",   icon: "📚", name: "Scholar",         desc: "Solve 50 problems",   cat: "Solving" },
    { id: "solve_100",  icon: "🏛️", name: "Centurion",       desc: "Solve 100 problems",  cat: "Solving" },
    { id: "solve_200",  icon: "🏰", name: "Fortress Mind",   desc: "Solve 200 problems",  cat: "Solving" },
    { id: "solve_500",  icon: "🌌", name: "Infinite Wisdom", desc: "Solve 500 problems",  cat: "Solving" },

    // ── Streaks ──
    { id: "streak_3",   icon: "🔥", name: "On Fire",       desc: "Get a 3-answer streak",  cat: "Streak" },
    { id: "streak_5",   icon: "💥", name: "Blazing",       desc: "Get a 5-answer streak",  cat: "Streak" },
    { id: "streak_10",  icon: "☄️", name: "Unstoppable",   desc: "Get a 10-answer streak", cat: "Streak" },
    { id: "streak_20",  icon: "🌋", name: "Eruption",      desc: "Get a 20-answer streak", cat: "Streak" },
    { id: "streak_50",  icon: "🌠", name: "Supernova",     desc: "Get a 50-answer streak", cat: "Streak" },

    // ── Tears of Knowledge ──
    { id: "tears_3",    icon: "💦", name: "Droplet Seeker",    desc: "Collect 3 Tears",      cat: "Tears" },
    { id: "tears_5",    icon: "🌊", name: "Tide Caller",       desc: "Collect 5 Tears",      cat: "Tears" },
    { id: "tears_10",   icon: "🌀", name: "Tempest",           desc: "Collect 10 Tears",     cat: "Tears" },
    { id: "tears_15",   icon: "👑", name: "Crystal Restored",  desc: "Collect all 15 Tears", cat: "Tears" },

    // ── Perfect Shrines (3-star) ──
    { id: "perfect_1",    icon: "⭐", name: "Flawless",          desc: "Get 3 stars on a shrine",    cat: "Stars" },
    { id: "perfect_5",    icon: "🌟", name: "Star Collector",    desc: "3 stars on 5 shrines",       cat: "Stars" },
    { id: "perfect_10",   icon: "💫", name: "Star Forger",       desc: "3 stars on 10 shrines",      cat: "Stars" },
    { id: "perfect_25",   icon: "✨", name: "Constellation",     desc: "3 stars on 25 shrines",      cat: "Stars" },
    { id: "perfect_50",   icon: "🌙", name: "Galaxy Weaver",     desc: "3 stars on 50 shrines",      cat: "Stars" },
    { id: "perfect_100",  icon: "☀️", name: "Radiant Perfection", desc: "3 stars on 100 shrines",    cat: "Stars" },

    // ── Boss Combat ──
    { id: "boss_1",    icon: "🐉", name: "Boss Slayer",       desc: "Defeat your first boss",  cat: "Boss" },
    { id: "boss_3",    icon: "🗡️", name: "Guardian Bane",     desc: "Defeat 3 bosses",         cat: "Boss" },
    { id: "boss_5",    icon: "⚡", name: "Guardian Hunter",   desc: "Defeat 5 bosses",         cat: "Boss" },
    { id: "boss_10",   icon: "🛡️", name: "Temple Champion",   desc: "Defeat 10 bosses",        cat: "Boss" },
    { id: "boss_15",   icon: "🏆", name: "Void Conqueror",    desc: "Defeat all 15 bosses",    cat: "Boss" },

    // ── Speed Runs ──
    { id: "speed_120",  icon: "⏱️", name: "Quick Draw",    desc: "Beat a boss under 2 minutes", cat: "Speed" },
    { id: "speed_60",   icon: "⚡", name: "Lightning",     desc: "Beat a boss under 1 minute",  cat: "Speed" },
    { id: "speed_30",   icon: "🌪️", name: "Blitz",         desc: "Beat a boss under 30 seconds", cat: "Speed" },

    // ── Wealth ──
    { id: "coins_100",   icon: "🪙", name: "Coin Hoarder",    desc: "Accumulate 100 coins",    cat: "Wealth" },
    { id: "coins_250",   icon: "💎", name: "Gem Finder",       desc: "Accumulate 250 coins",    cat: "Wealth" },
    { id: "coins_500",   icon: "💰", name: "Treasure Vault",   desc: "Accumulate 500 coins",    cat: "Wealth" },
    { id: "coins_1000",  icon: "👸", name: "Royal Treasury",   desc: "Accumulate 1000 coins",   cat: "Wealth" },

    // ── Leveling ──
    { id: "level_3",   icon: "🎯", name: "Rising Star",      desc: "Reach level 3",  cat: "Level" },
    { id: "level_5",   icon: "🎖️", name: "Rank Up",           desc: "Reach level 5",  cat: "Level" },
    { id: "level_7",   icon: "🏅", name: "High Commander",    desc: "Reach level 7",  cat: "Level" },
    { id: "level_10",  icon: "🌟", name: "Crystal Guardian",  desc: "Reach max level 10", cat: "Level" },

    // ── Accuracy ──
    { id: "accuracy_80", icon: "🎯", name: "Sharp Mind",     desc: "80% accuracy (20+ attempts)",  cat: "Accuracy" },
    { id: "accuracy_90", icon: "🏹", name: "Eagle Eye",      desc: "90% accuracy (50+ attempts)",  cat: "Accuracy" },
    { id: "accuracy_95", icon: "💎", name: "Diamond Focus",   desc: "95% accuracy (100+ attempts)", cat: "Accuracy" },

    // ── Mastery (hint-free solves) ──
    { id: "no_hints_10",  icon: "👁️", name: "True Sight",      desc: "Solve 10 without hints",  cat: "Mastery" },
    { id: "no_hints_25",  icon: "🔮", name: "Inner Vision",    desc: "Solve 25 without hints",  cat: "Mastery" },
    { id: "no_hints_50",  icon: "🧿", name: "All-Seeing",      desc: "Solve 50 without hints",  cat: "Mastery" },

    // ── Shrine Completion (total shrines cleared) ──
    { id: "shrines_10",   icon: "⛩️", name: "Shrine Walker",   desc: "Complete 10 shrines",     cat: "Shrines" },
    { id: "shrines_25",   icon: "🏯", name: "Shrine Runner",   desc: "Complete 25 shrines",     cat: "Shrines" },
    { id: "shrines_50",   icon: "🏗️", name: "Shrine Master",   desc: "Complete 50 shrines",     cat: "Shrines" },
    { id: "shrines_100",  icon: "🗼", name: "Shrine Legend",    desc: "Complete 100 shrines",    cat: "Shrines" },
    { id: "shrines_150",  icon: "🌅", name: "Every Last One",   desc: "Complete all 150 shrines", cat: "Shrines" },

    // ── World Mastery (all 10 shrines in a world) ──
    { id: "world_mastery_1",   icon: "🗺️", name: "Explorer",         desc: "Complete all shrines in 1 world",  cat: "World" },
    { id: "world_mastery_5",   icon: "🧭", name: "Cartographer",     desc: "Complete all shrines in 5 worlds", cat: "World" },
    { id: "world_mastery_15",  icon: "🌍", name: "World Conqueror",  desc: "Complete all shrines in all 15 worlds", cat: "World" },
  ];

  // ══════════════ SOUND FX (Web Audio API) ══════════════

  const SFX = (function () {
    let ctx = null;
    let muted = false;

    function getCtx() {
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }

    function tone(freq, dur, type, vol, delay) {
      if (muted) return;
      const c = getCtx();
      const t = delay ? c.currentTime + delay : c.currentTime;
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = type || "sine";
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(vol || 0.15, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + dur);
    }

    function noise(dur, vol) {
      if (muted) return;
      const c = getCtx();
      const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
      const src = c.createBufferSource();
      const g = c.createGain();
      src.buffer = buf;
      g.gain.setValueAtTime(vol || 0.08, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
      src.connect(g); g.connect(c.destination);
      src.start();
    }

    return {
      setMuted: function (m) { muted = m; },
      isMuted: function () { return muted; },

      // UI click
      click: function () { tone(800, 0.06, "square", 0.06); },

      // Correct answer — rising two-note chime
      correct: function () {
        tone(523, 0.12, "sine", 0.15);
        tone(784, 0.2, "sine", 0.18, 0.1);
      },

      // Wrong answer — low buzz
      wrong: function () {
        tone(180, 0.15, "sawtooth", 0.12);
        tone(140, 0.25, "sawtooth", 0.10, 0.1);
      },

      // Perfect shrine (3 stars) — ascending triad
      perfect: function () {
        tone(523, 0.15, "sine", 0.14);
        tone(659, 0.15, "sine", 0.16, 0.12);
        tone(784, 0.3, "sine", 0.18, 0.24);
      },

      // Boss battle start — deep rumble
      bossStart: function () {
        tone(80, 0.5, "sawtooth", 0.12);
        tone(60, 0.7, "sawtooth", 0.10, 0.2);
        noise(0.3, 0.06);
      },

      // Boss hit (player correct in boss) — sharp impact
      bossHit: function () {
        noise(0.08, 0.12);
        tone(400, 0.08, "square", 0.1);
        tone(600, 0.12, "sine", 0.12, 0.05);
      },

      // Boss attacks player — damage thud
      bossAttack: function () {
        noise(0.15, 0.14);
        tone(120, 0.3, "sawtooth", 0.12);
        tone(80, 0.2, "sawtooth", 0.08, 0.15);
      },

      // Boss defeated — victory fanfare
      victory: function () {
        tone(523, 0.15, "sine", 0.15);
        tone(659, 0.15, "sine", 0.15, 0.13);
        tone(784, 0.15, "sine", 0.15, 0.26);
        tone(1047, 0.4, "sine", 0.2, 0.39);
      },

      // Game over — descending somber
      gameOver: function () {
        tone(400, 0.25, "sine", 0.12);
        tone(300, 0.25, "sine", 0.10, 0.2);
        tone(200, 0.5, "sine", 0.08, 0.4);
      },

      // Buy item — coin register
      buy: function () {
        tone(1200, 0.06, "square", 0.08);
        tone(1600, 0.08, "square", 0.10, 0.06);
        tone(2000, 0.1, "sine", 0.08, 0.12);
      },

      // Equip item — metallic click
      equip: function () {
        noise(0.04, 0.08);
        tone(600, 0.06, "square", 0.08);
        tone(900, 0.1, "sine", 0.10, 0.04);
      },

      // Badge earned — achievement sparkle
      badge: function () {
        tone(880, 0.1, "sine", 0.12);
        tone(1108, 0.1, "sine", 0.14, 0.08);
        tone(1318, 0.2, "sine", 0.16, 0.16);
      },

      // Hint reveal — mystical whoosh
      hint: function () {
        if (muted) return;
        const c = getCtx();
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(300, c.currentTime);
        o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.2);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.3);
        o.connect(g); g.connect(c.destination);
        o.start(); o.stop(c.currentTime + 0.3);
      },

      // Countdown tick (last 5 seconds)
      tick: function () { tone(1000, 0.04, "square", 0.06); },

      // Heart lost
      heartLost: function () {
        tone(300, 0.12, "sawtooth", 0.10);
        tone(200, 0.2, "sawtooth", 0.08, 0.08);
      },

      // Coin earned — light chime
      coin: function () { tone(1400, 0.08, "sine", 0.06); },

      // Navigate / screen transition
      navigate: function () { tone(600, 0.05, "sine", 0.05); tone(800, 0.06, "sine", 0.05, 0.04); },
    };
  })();

  // ── Game State (persisted) ──
  let state = {
    xp: 0,
    coins: 50,
    tearsCollected: [],
    worldProgress: {},
    totalSolved: 0,
    totalAttempts: 0,
    currentStreak: 0,
    bestStreak: 0,
    badges: [],           // array of badge id strings
    character: null,       // character id
    solvedNoHints: 0,      // count of problems solved without any hints
    totalPerfectShrines: 0,
    bossTimes: {},         // { [worldId]: best time in seconds }
    totalBossRebattles: 0, // number of times player re-battled a defeated boss
    inventory: [],         // array of shop item IDs owned
    equipped: { weapon: null, armor: null, magic: null }, // currently equipped item IDs
    soundMuted: false,
  };

  // ── Session State ──
  let session = {
    activeSlot: 1,
    currentScreen: "title",
    currentWorld: null,
    currentShrineIndex: null,
    currentProblemIndex: 0,
    problems: [],
    hearts: SHRINE_HEARTS,
    hintsUsed: 0,
    wrongThisShrine: 0,
    isBoss: false,
    bossHP: 0,
    bossMaxHP: 0,
    worldSelections: {},
    particleTimers: [],
    timerInterval: null,
    timerStart: 0,
    bossCountdownId: null,
    bossCountdownRemaining: 0,
  };

  // ── Helpers ──
  function $(id) { return document.getElementById(id); }
  function $$(sel) { return document.querySelectorAll(sel); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr, n) {
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function formatTime(totalSecs) {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  }

  // ══════════════ TIMER ══════════════

  function startTimer() {
    stopTimer();
    session.timerStart = Date.now();
    updateTimerDisplay();
    session.timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  function stopTimer() {
    if (session.timerInterval) {
      clearInterval(session.timerInterval);
      session.timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const elapsed = Math.floor((Date.now() - session.timerStart) / 1000);
    const formatted = formatTime(elapsed);
    // Shrine timer (count-up)
    const el = $("timer-text");
    if (el) el.textContent = formatted;
    // Boss elapsed timer (also count-up, shown during boss fights)
    const bossEl = $("boss-elapsed-text");
    if (bossEl && session.isBoss) bossEl.textContent = formatted;
  }

  // ══════════════ BOSS COUNTDOWN ══════════════

  function startBossCountdown() {
    stopBossCountdown();
    session.bossCountdownRemaining = BOSS_TIMER_SECONDS;
    updateBossCountdownDisplay();
    session.bossCountdownId = setInterval(tickBossCountdown, 1000);
  }

  function stopBossCountdown() {
    if (session.bossCountdownId) {
      clearInterval(session.bossCountdownId);
      session.bossCountdownId = null;
    }
  }

  function tickBossCountdown() {
    session.bossCountdownRemaining--;
    if (session.bossCountdownRemaining <= 0) {
      session.bossCountdownRemaining = 0;
      stopBossCountdown();
      bossTimerExpired();
    } else if (session.bossCountdownRemaining <= 5) {
      SFX.tick();
    }
    updateBossCountdownDisplay();
  }

  function updateBossCountdownDisplay() {
    const remaining = session.bossCountdownRemaining;
    const pct = (remaining / BOSS_TIMER_SECONDS) * 100;
    const fill = $("boss-countdown-fill");
    const text = $("boss-countdown-text");
    const label = $("boss-countdown").querySelector(".boss-countdown-label");

    if (!fill || !text) return;

    text.textContent = remaining;
    fill.style.width = pct + "%";

    // Color states
    fill.classList.remove("warning", "danger");
    if (label) label.classList.remove("urgent");

    if (remaining <= 5) {
      fill.classList.add("danger");
      if (label) label.classList.add("urgent");
    } else if (remaining <= 10) {
      fill.classList.add("warning");
    }
  }

  function bossTimerExpired() {
    // Time ran out — boss attacks the player (same as wrong answer)
    session.wrongThisShrine++;
    state.currentStreak = 0;
    state.totalAttempts++;
    saveGame();

    // Play the boss attack animation + red flash
    handleBossWrong();

    // If player is still alive, re-enable the answer area for the same question
    if (session.hearts > 0) {
      const area = $("boss-answer-area");
      // For numeric inputs, clear and re-enable
      const input = area.querySelector(".answer-input");
      if (input) {
        setTimeout(() => {
          input.disabled = false; input.value = ""; input.focus();
          const submit = area.querySelector(".answer-submit");
          if (submit) submit.disabled = false;
        }, 700);
      }
      // Re-start countdown for same question
      setTimeout(() => startBossCountdown(), 800);
    }
  }

  // ══════════════ VFX: PARTICLES ══════════════

  function spawnFireflies(containerId, count) {
    const container = $(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle particle-firefly";
      p.style.left = rand(5, 95) + "%";
      p.style.top = rand(10, 90) + "%";
      p.style.setProperty("--dur", rand(5, 10) + "s");
      p.style.setProperty("--delay", rand(0, 6) + "s");
      p.style.setProperty("--dx", rand(-60, 60) + "px");
      p.style.setProperty("--dy", rand(-80, -20) + "px");
      p.style.setProperty("--dx2", rand(-80, 80) + "px");
      p.style.setProperty("--dy2", rand(-140, -60) + "px");
      container.appendChild(p);
    }
  }

  function spawnSparkles(x, y, count) {
    const layer = $("vfx-layer");
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle particle-sparkle";
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.setProperty("--delay", rand(0, 0.3) + "s");
      p.style.setProperty("--dx", rand(-60, 60) + "px");
      p.style.setProperty("--dy", rand(-120, -40) + "px");
      layer.appendChild(p);
      setTimeout(() => p.remove(), 1600);
    }
  }

  // ══════════════ VFX: GOLDEN BURST / RED RINGS ══════════════

  function vfxGoldenBurst(x, y) {
    const el = document.createElement("div");
    el.className = "vfx-golden-burst";
    el.style.left = (x - 60) + "px";
    el.style.top = (y - 60) + "px";
    el.style.width = "120px"; el.style.height = "120px";
    $("vfx-layer").appendChild(el);
    spawnSparkles(x, y, 12);
    setTimeout(() => el.remove(), 800);
  }

  function vfxRedRings(x, y) {
    const layer = $("vfx-layer");
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement("div");
      ring.className = "vfx-red-ring";
      ring.style.left = (x - 30) + "px";
      ring.style.top = (y - 30) + "px";
      ring.style.width = "60px"; ring.style.height = "60px";
      ring.style.setProperty("--delay", (i * 0.15) + "s");
      ring.style.setProperty("--dur", "0.6s");
      layer.appendChild(ring);
      setTimeout(() => ring.remove(), 900);
    }
  }

  // ══════════════ VFX: CONFETTI ══════════════

  let confettiPieces = [];
  let confettiAnim = null;

  function launchConfetti(duration) {
    const canvas = $("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    confettiPieces = [];
    const colors = ["#d4a842", "#00d4aa", "#60c0ff", "#ff4060", "#8040c0", "#f39c12", "#2ecc71"];
    for (let i = 0; i < 80; i++) {
      confettiPieces.push({
        x: rand(0, canvas.width),
        y: rand(-canvas.height, 0),
        w: rand(6, 12), h: rand(4, 8),
        vx: rand(-2, 2), vy: rand(2, 6),
        rot: rand(0, 360), vr: rand(-5, 5),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
      });
    }
    const start = performance.now();
    function draw(now) {
      const elapsed = now - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const fade = elapsed > duration - 500 ? Math.max(0, (duration - elapsed) / 500) : 1;
      confettiPieces.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        p.vy += 0.05; // gravity
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = p.opacity * fade;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (elapsed < duration) {
        confettiAnim = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiAnim = null;
      }
    }
    if (confettiAnim) cancelAnimationFrame(confettiAnim);
    confettiAnim = requestAnimationFrame(draw);
  }

  // ══════════════ VFX: BADGE TOAST ══════════════

  function showBadgeToast(badge) {
    SFX.badge();
    const toast = document.createElement("div");
    toast.className = "badge-toast";
    toast.innerHTML = `<div class="badge-toast-icon">${badge.icon}</div><div class="badge-toast-text">Badge Unlocked: ${badge.name}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }

  // ══════════════ POOL SELECTION ══════════════

  // Per-world shrine count (set by topics.js, defaults to 10)
  function getShrineCount(worldId) {
    const w = WORLDS[worldId];
    return (w && w.shrineCount) ? w.shrineCount : DEFAULT_SHRINES;
  }

  // Shrine requirement to unlock boss (70% of shrines, rounded up)
  function getShrineReq(worldId) {
    return Math.ceil(getShrineCount(worldId) * SHRINE_REQ_RATIO);
  }

  function getWorldSelection(worldId) {
    const world = WORLDS[worldId];
    const pool = world.pool;
    if (!pool) return { shrines: world.problems || [], boss: world.bossProblems || [] };

    // Pick 1 random question from each topic pool every time.
    // This ensures each shrine entry gets a fresh random question from the pool.
    // topicPools (built by topics.js) contains one array per topic with all available questions.
    // Falls back to the legacy group-of-3 slicing if topicPools is missing.
    const shrines = [];
    if (pool.topicPools) {
      for (let t = 0; t < pool.topicPools.length; t++) {
        const tp = pool.topicPools[t];
        shrines.push(tp[Math.floor(Math.random() * tp.length)]);
      }
    } else {
      // Legacy fallback: groups of 3 in flat arrays
      const tutorialTopics = Math.floor(pool.tutorial.length / 3);
      for (let t = 0; t < tutorialTopics; t++) {
        const group = pool.tutorial.slice(t * 3, t * 3 + 3);
        shrines.push(group[Math.floor(Math.random() * group.length)]);
      }
      const challengeTopics = Math.floor(pool.challenge.length / 3);
      for (let t = 0; t < challengeTopics; t++) {
        const group = pool.challenge.slice(t * 3, t * 3 + 3);
        shrines.push(group[Math.floor(Math.random() * group.length)]);
      }
    }
    const bossPick = pickRandom(pool.boss, BOSS_PROBLEMS);
    return { shrines: shrines, boss: bossPick };
  }

  // ── Player Level ──
  function getPlayerLevel() {
    for (let i = LEVEL_TITLES.length - 1; i >= 0; i--) {
      if (state.xp >= LEVEL_TITLES[i].xp) return LEVEL_TITLES[i];
    }
    return LEVEL_TITLES[0];
  }

  function getNextLevelXP() {
    const cur = getPlayerLevel();
    const idx = LEVEL_TITLES.indexOf(cur);
    if (idx < LEVEL_TITLES.length - 1) return LEVEL_TITLES[idx + 1].xp;
    return cur.xp;
  }

  // ── World Progress ──
  function getWorldProgress(worldId) {
    const sc = getShrineCount(worldId);
    if (!state.worldProgress[worldId]) {
      state.worldProgress[worldId] = { shrineStars: new Array(sc).fill(0), bossDefeated: false };
    }
    const wp = state.worldProgress[worldId];
    while (wp.shrineStars.length < sc) wp.shrineStars.push(0);
    return wp;
  }

  function countCompletedShrines(worldId) {
    return getWorldProgress(worldId).shrineStars.filter((s) => s > 0).length;
  }

  function isWorldUnlocked(worldId) {
    if (worldId === 0) return true;
    if (worldId >= PLAYABLE_WORLDS) return false;
    return getWorldProgress(worldId - 1).bossDefeated;
  }

  function hasPool(worldId) {
    const w = WORLDS[worldId];
    return w && w.pool && w.pool.tutorial && w.pool.tutorial.length > 0;
  }

  // ── Save / Load ──
  function saveGame() {
    try { localStorage.setItem(getSaveKey(session.activeSlot), JSON.stringify(state)); } catch (e) {}
  }

  // Load save data from a specific slot (or active slot by default)
  function loadGame(slot) {
    var s = slot !== undefined ? slot : session.activeSlot;
    try {
      const data = localStorage.getItem(getSaveKey(s));
      if (data) {
        const parsed = JSON.parse(data);
        state = { ...state, ...parsed };
        // Ensure new fields exist from older saves
        if (!state.badges) state.badges = [];
        if (!state.character) state.character = null;
        if (state.currentStreak === undefined) state.currentStreak = 0;
        if (state.bestStreak === undefined) state.bestStreak = 0;
        if (state.solvedNoHints === undefined) state.solvedNoHints = 0;
        if (state.totalPerfectShrines === undefined) state.totalPerfectShrines = 0;
        if (!state.bossTimes) state.bossTimes = {};
        if (state.totalBossRebattles === undefined) state.totalBossRebattles = 0;
        if (!state.inventory) state.inventory = [];
        if (!state.equipped) state.equipped = { weapon: null, armor: null, magic: null };
        if (state.soundMuted === undefined) state.soundMuted = false;
        SFX.setMuted(state.soundMuted);
        return true;
      }
    } catch (e) {}
    return false;
  }

  // Peek at a slot's data without modifying state (for save slot preview)
  function peekSlot(slot) {
    try {
      const data = localStorage.getItem(getSaveKey(slot));
      if (data) return JSON.parse(data);
    } catch (e) {}
    return null;
  }

  function resetState() {
    state = {
      xp: 0, coins: 50, tearsCollected: [], worldProgress: {},
      totalSolved: 0, totalAttempts: 0, currentStreak: 0, bestStreak: 0,
      badges: [], character: null, solvedNoHints: 0, totalPerfectShrines: 0, bossTimes: {}, totalBossRebattles: 0,
      inventory: [], equipped: { weapon: null, armor: null, magic: null },
      soundMuted: false,
    };
    SFX.setMuted(false);
    session.worldSelections = {};
  }

  function deleteSlot(slot) {
    localStorage.removeItem(getSaveKey(slot));
  }

  // Migrate legacy single save (mathquest_save) to slot 1 on first visit
  function migrateLegacySave() {
    try {
      var legacy = localStorage.getItem("mathquest_save");
      if (legacy && !localStorage.getItem(getSaveKey(1))) {
        localStorage.setItem(getSaveKey(1), legacy);
        localStorage.removeItem("mathquest_save");
      }
    } catch (e) {}
  }

  // ══════════════ BADGE SYSTEM ══════════════

  function awardBadge(badgeId) {
    if (state.badges.includes(badgeId)) return;
    state.badges.push(badgeId);
    const badge = BADGES.find((b) => b.id === badgeId);
    if (badge) showBadgeToast(badge);
    saveGame();
  }

  // ── Badge Helper Functions ──

  function countTotalShrinesCompleted() {
    let total = 0;
    for (const wId in state.worldProgress) {
      const wp = state.worldProgress[wId];
      if (wp.shrineStars) {
        total += wp.shrineStars.filter((s) => s > 0).length;
      }
    }
    return total;
  }

  function countFullyExploredWorlds() {
    let count = 0;
    for (const wId in state.worldProgress) {
      const wp = state.worldProgress[wId];
      const sc = getShrineCount(parseInt(wId));
      if (wp.shrineStars && wp.shrineStars.length >= sc) {
        if (wp.shrineStars.slice(0, sc).every((s) => s > 0)) count++;
      }
    }
    return count;
  }

  function countBossesDefeated() {
    return Object.values(state.worldProgress).filter((w) => w.bossDefeated).length;
  }

  function fastestBossTime() {
    const times = Object.values(state.bossTimes);
    return times.length > 0 ? Math.min(...times) : Infinity;
  }

  function checkBadges() {
    // Journey
    if (state.totalSolved >= 1) awardBadge("first_step");
    if (countTotalShrinesCompleted() >= 1) awardBadge("first_shrine");
    if (state.tearsCollected.length >= 1) awardBadge("first_tear");
    if (state.totalBossRebattles >= 1) awardBadge("first_rebattle");

    // Solving
    if (state.totalSolved >= 10) awardBadge("solve_10");
    if (state.totalSolved >= 25) awardBadge("solve_25");
    if (state.totalSolved >= 50) awardBadge("solve_50");
    if (state.totalSolved >= 100) awardBadge("solve_100");
    if (state.totalSolved >= 200) awardBadge("solve_200");
    if (state.totalSolved >= 500) awardBadge("solve_500");

    // Streaks (use bestStreak so it persists across sessions)
    if (state.bestStreak >= 3) awardBadge("streak_3");
    if (state.bestStreak >= 5) awardBadge("streak_5");
    if (state.bestStreak >= 10) awardBadge("streak_10");
    if (state.bestStreak >= 20) awardBadge("streak_20");
    if (state.bestStreak >= 50) awardBadge("streak_50");

    // Tears of Knowledge
    if (state.tearsCollected.length >= 3) awardBadge("tears_3");
    if (state.tearsCollected.length >= 5) awardBadge("tears_5");
    if (state.tearsCollected.length >= 10) awardBadge("tears_10");
    if (state.tearsCollected.length >= 15) awardBadge("tears_15");

    // Perfect Stars
    if (state.totalPerfectShrines >= 1) awardBadge("perfect_1");
    if (state.totalPerfectShrines >= 5) awardBadge("perfect_5");
    if (state.totalPerfectShrines >= 10) awardBadge("perfect_10");
    if (state.totalPerfectShrines >= 25) awardBadge("perfect_25");
    if (state.totalPerfectShrines >= 50) awardBadge("perfect_50");
    if (state.totalPerfectShrines >= 100) awardBadge("perfect_100");

    // Boss Combat
    const bossCount = countBossesDefeated();
    if (bossCount >= 1) awardBadge("boss_1");
    if (bossCount >= 3) awardBadge("boss_3");
    if (bossCount >= 5) awardBadge("boss_5");
    if (bossCount >= 10) awardBadge("boss_10");
    if (bossCount >= 15) awardBadge("boss_15");

    // Speed Runs
    const fastest = fastestBossTime();
    if (fastest <= 120) awardBadge("speed_120");
    if (fastest <= 60) awardBadge("speed_60");
    if (fastest <= 30) awardBadge("speed_30");

    // Wealth
    if (state.coins >= 100) awardBadge("coins_100");
    if (state.coins >= 250) awardBadge("coins_250");
    if (state.coins >= 500) awardBadge("coins_500");
    if (state.coins >= 1000) awardBadge("coins_1000");

    // Leveling
    const lvl = getPlayerLevel();
    if (lvl.level >= 3) awardBadge("level_3");
    if (lvl.level >= 5) awardBadge("level_5");
    if (lvl.level >= 7) awardBadge("level_7");
    if (lvl.level >= 10) awardBadge("level_10");

    // Accuracy (with minimum attempt thresholds)
    if (state.totalAttempts >= 20 && (state.totalSolved / state.totalAttempts) >= 0.80) awardBadge("accuracy_80");
    if (state.totalAttempts >= 50 && (state.totalSolved / state.totalAttempts) >= 0.90) awardBadge("accuracy_90");
    if (state.totalAttempts >= 100 && (state.totalSolved / state.totalAttempts) >= 0.95) awardBadge("accuracy_95");

    // Mastery (hint-free solves)
    if (state.solvedNoHints >= 10) awardBadge("no_hints_10");
    if (state.solvedNoHints >= 25) awardBadge("no_hints_25");
    if (state.solvedNoHints >= 50) awardBadge("no_hints_50");

    // Shrine Completion
    const totalShrines = countTotalShrinesCompleted();
    if (totalShrines >= 10) awardBadge("shrines_10");
    if (totalShrines >= 25) awardBadge("shrines_25");
    if (totalShrines >= 50) awardBadge("shrines_50");
    if (totalShrines >= 100) awardBadge("shrines_100");
    if (totalShrines >= 150) awardBadge("shrines_150");

    // World Mastery
    const fullWorlds = countFullyExploredWorlds();
    if (fullWorlds >= 1) awardBadge("world_mastery_1");
    if (fullWorlds >= 5) awardBadge("world_mastery_5");
    if (fullWorlds >= 15) awardBadge("world_mastery_15");
  }

  // ── Screen Management ──
  function showScreen(screenId) {
    SFX.navigate();
    const current = document.querySelector(".screen.active");
    const next = $("screen-" + screenId);
    $$(".overlay").forEach((o) => (o.style.display = "none"));
    if (current && current !== next) {
      current.classList.add("screen-exit");
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        current.classList.remove("active", "screen-exit");
        if (next) next.classList.add("active");
      };
      current.addEventListener("transitionend", finish, { once: true });
      setTimeout(finish, 400); // fallback
    } else {
      $$(".screen").forEach((s) => s.classList.remove("active"));
      if (next) next.classList.add("active");
    }
    session.currentScreen = screenId;
  }

  // ── HUD ──
  function updateHUD() {
    const lvl = getPlayerLevel();
    const nextXP = getNextLevelXP();
    const prevXP = lvl.xp;
    const pct = nextXP > prevXP ? ((state.xp - prevXP) / (nextXP - prevXP)) * 100 : 100;
    $("hud-level").textContent = "Lv." + lvl.level;
    $("hud-title").textContent = lvl.title;
    $("hud-xp-fill").style.width = pct + "%";
    $("hud-xp-text").textContent = state.xp + " / " + nextXP + " XP";
    $("hud-coins").textContent = "\u{1FA99} " + state.coins;
    $("hud-tears").textContent = "\uD83D\uDCA7 " + state.tearsCollected.length + " / 15";
  }

  // ══════════════ CHARACTER SELECT ══════════════

  function renderCharSelect() {
    const grid = $("char-select-grid");
    grid.innerHTML = "";
    let selected = state.character || null;
    CHARACTERS.forEach((ch) => {
      const div = document.createElement("div");
      div.className = "char-option" + (selected === ch.id ? " selected" : "");
      div.innerHTML = `<div class="char-icon">${ch.icon}</div><div class="char-name">${ch.name}</div><div class="char-desc">${ch.desc}</div>`;
      div.onclick = function () {
        selected = ch.id;
        grid.querySelectorAll(".char-option").forEach((o) => o.classList.remove("selected"));
        div.classList.add("selected");
        $("btn-char-confirm").disabled = false;
      };
      grid.appendChild(div);
    });
    $("btn-char-confirm").disabled = !selected;
    $("btn-char-confirm").onclick = function () {
      state.character = selected;
      saveGame();
      showScreen("world-map");
      renderWorldMap();
      updateHUD();
    };
  }

  // ── Title Screen ──
  function initTitleScreen() {
    migrateLegacySave();
    // Hide the old continue button — save select screen replaces it
    $("btn-continue").style.display = "none";
    // Spawn fireflies on title
    spawnFireflies("particles-title", 15);

    $("btn-new-game").onclick = function () {
      showScreen("saveselect");
      renderSaveSelect();
    };

    $("btn-save-back").onclick = function () {
      showScreen("title");
    };
  }

  // ══════════════ SAVE SLOT SELECT ══════════════

  function renderSaveSelect() {
    var container = $("save-slot-container");
    container.innerHTML = "";

    for (var i = 1; i <= SAVE_SLOTS; i++) {
      (function (slot) {
        var data = peekSlot(slot);
        var div = document.createElement("div");
        div.className = "save-slot" + (data ? "" : " empty");

        if (data) {
          var ch = CHARACTERS.find(function (c) { return c.id === data.character; });
          var charIcon = ch ? ch.icon : "🎮";
          var charName = ch ? ch.name : "Hero";
          var worldsDone = 0;
          if (data.worldProgress) {
            for (var w in data.worldProgress) {
              if (data.worldProgress[w] && data.worldProgress[w].bossDefeated) worldsDone++;
            }
          }
          var lvl = 1;
          for (var li = LEVEL_TITLES.length - 1; li >= 0; li--) {
            if ((data.xp || 0) >= LEVEL_TITLES[li].xp) { lvl = li + 1; break; }
          }
          div.innerHTML =
            '<div class="save-slot-number">' + charIcon + '</div>' +
            '<div class="save-slot-info">' +
              '<div class="save-slot-char">File ' + slot + ': ' + charName + '</div>' +
              '<div class="save-slot-details">' +
                '<span>Lv.' + lvl + '</span>' +
                '<span>XP: ' + (data.xp || 0) + '</span>' +
                '<span>Worlds: ' + worldsDone + '/15</span>' +
                '<span>Solved: ' + (data.totalSolved || 0) + '</span>' +
              '</div>' +
            '</div>';
          // Delete button
          var delBtn = document.createElement("button");
          delBtn.className = "save-slot-delete";
          delBtn.textContent = "Delete";
          delBtn.onclick = function (e) {
            e.stopPropagation();
            if (confirm("Delete Save File " + slot + "? This cannot be undone.")) {
              deleteSlot(slot);
              renderSaveSelect();
            }
          };
          div.appendChild(delBtn);

          // Click to load and continue
          div.onclick = function () {
            session.activeSlot = slot;
            resetState();
            loadGame(slot);
            showScreen("world-map");
            renderWorldMap();
            updateHUD();
          };
        } else {
          div.innerHTML =
            '<div class="save-slot-number">' + slot + '</div>' +
            '<div class="save-slot-info">' +
              '<div class="save-slot-empty-label">— Empty —</div>' +
            '</div>';
          // Click to start new game in this slot
          div.onclick = function () {
            session.activeSlot = slot;
            resetState();
            showScreen("charselect");
            renderCharSelect();
          };
        }

        container.appendChild(div);
      })(i);
    }
  }

  // ══════════════ WORLD MAP ══════════════

  function renderWorldMap() {
    const container = $("world-map-container");
    container.innerHTML = "";

    WORLDS.forEach((world, idx) => {
      const unlocked = isWorldUnlocked(idx);
      const wp = getWorldProgress(idx);
      const completed = countCompletedShrines(idx);
      const available = hasPool(idx);
      const bossBeaten = wp.bossDefeated;

      const div = document.createElement("div");
      div.className = "world-island";
      div.setAttribute("data-world", idx);

      if (!unlocked || !available) div.classList.add("locked");
      if (bossBeaten) div.classList.add("completed");
      if (unlocked && available && !bossBeaten) div.classList.add("current");

      div.innerHTML = `
        <div class="island-icon">${world.icon}</div>
        <div class="island-name-label">${world.name}</div>
        ${available
          ? `<div class="island-shrines-count">${completed}/${getShrineCount(idx)} shrines</div>
             <div class="island-stars">${"\u2B50".repeat(Math.min(completed, 5))}</div>
             <div class="island-tear ${bossBeaten ? "collected" : ""}">\uD83D\uDCA7</div>`
          : `<div class="island-lock">\uD83D\uDD12</div>
             <div class="island-shrines-count">Coming Soon</div>`
        }`;

      if (unlocked && available) {
        div.onclick = function () {
          SFX.click();
          session.currentWorld = idx;
          showScreen("island");
          renderIslandView(idx);
        };
      }
      container.appendChild(div);
    });
    updateHUD();
  }

  // ══════════════ ISLAND VIEW ══════════════

  function renderIslandView(worldId) {
    const world = WORLDS[worldId];
    const wp = getWorldProgress(worldId);
    getWorldSelection(worldId);

    $("island-name").textContent = world.name;
    $("island-name").style.color = world.color;
    const sc = getShrineCount(worldId);
    const shrineReq = getShrineReq(worldId);
    $("island-progress").textContent = countCompletedShrines(worldId) + " / " + sc + " Shrines";

    const grid = $("shrine-grid");
    grid.innerHTML = "";

    const topics = world.topics || [];
    const tutorialCount = Math.floor((world.pool && world.pool.tutorial ? world.pool.tutorial.length : 15) / 3);
    for (let idx = 0; idx < sc; idx++) {
      const stars = wp.shrineStars[idx];
      const done = stars > 0;
      const type = idx < tutorialCount ? "tutorial" : "challenge";
      const topicName = topics[idx] ? topics[idx].name : ("Shrine " + (idx + 1));
      const div = document.createElement("div");
      div.className = "shrine-marker" + (done ? " completed" : "");
      div.innerHTML = `
        <div class="shrine-number">${done ? "\u2713" : (idx + 1)}</div>
        <div class="shrine-type-label ${type}">${type}</div>
        <div class="shrine-topic-label">${topicName}</div>
        ${done ? `<div class="shrine-stars-display">${"\u2B50".repeat(stars)}</div>` : ""}
      `;
      div.onclick = function () { SFX.click(); startShrine(worldId, idx); };
      grid.appendChild(div);
    }

    const shrinesDone = countCompletedShrines(worldId);
    const bossUnlocked = shrinesDone >= shrineReq;
    $("temple-boss-name").textContent = world.bossName;

    // Best time display
    const bestTimeEl = $("temple-best-time");
    const bestTime = state.bossTimes[worldId];
    if (wp.bossDefeated && bestTime !== undefined) {
      bestTimeEl.style.display = "flex";
      $("temple-time-value").textContent = formatTime(bestTime);
    } else {
      bestTimeEl.style.display = "none";
    }

    if (wp.bossDefeated) {
      $("temple-req").textContent = "\u2713 Guardian Defeated";
    } else if (bossUnlocked) {
      $("temple-req").textContent = "The temple doors are open!";
    } else {
      $("temple-req").textContent = `Complete ${shrineReq - shrinesDone} more shrine${shrineReq - shrinesDone !== 1 ? "s" : ""} to enter`;
    }

    const bossBtn = $("btn-enter-boss");
    bossBtn.className = "btn-ancient btn-boss"; // reset classes
    if (wp.bossDefeated) {
      // Allow re-battle
      bossBtn.disabled = false;
      bossBtn.textContent = "\u2694\uFE0F Re-Battle";
      bossBtn.classList.add("rebattle");
    } else if (bossUnlocked) {
      bossBtn.disabled = false;
      bossBtn.textContent = "Enter Temple";
    } else {
      bossBtn.disabled = true;
      bossBtn.textContent = "Enter Temple";
    }
    bossBtn.onclick = function () { SFX.click(); startBoss(worldId); };
  }

  // ══════════════ SHRINE ══════════════

  function startShrine(worldId, shrineIdx) {
    const sel = getWorldSelection(worldId);
    session.currentWorld = worldId;
    session.currentShrineIndex = shrineIdx;
    session.currentProblemIndex = 0;
    session.problems = [sel.shrines[shrineIdx]];
    session.hearts = SHRINE_HEARTS;
    session.hintsUsed = 0;
    session.wrongThisShrine = 0;
    session.isBoss = false;

    showScreen("shrine");

    // Show knowledge note intro if topic data exists
    const world = WORLDS[worldId];
    const topic = world.topics && world.topics[shrineIdx];
    const noteEl = $("knowledge-note");
    const tabletEl = $("ancient-tablet");
    const answerEl = $("answer-area");
    const hintEl = document.querySelector(".hint-section");

    if (topic && topic.note) {
      // Show note, hide puzzle elements
      noteEl.style.display = "block";
      tabletEl.style.display = "none";
      answerEl.style.display = "none";
      if (hintEl) hintEl.style.display = "none";
      $("knowledge-note-title").textContent = topic.name;
      $("knowledge-note-body").innerHTML = renderMath(topic.note);

      $("btn-knowledge-continue").onclick = function () {
        SFX.click();
        noteEl.style.display = "none";
        tabletEl.style.display = "";
        answerEl.style.display = "";
        if (hintEl) hintEl.style.display = "";
        startTimer();
        renderShrineProblem();
      };
    } else {
      // No topic data — go straight to problem
      noteEl.style.display = "none";
      tabletEl.style.display = "";
      answerEl.style.display = "";
      if (hintEl) hintEl.style.display = "";
      startTimer();
      renderShrineProblem();
    }
  }

  function renderShrineProblem() {
    const prob = session.problems[session.currentProblemIndex];
    if (!prob) return;

    renderHearts($("shrine-hearts"), session.hearts, SHRINE_HEARTS);
    $("shrine-progress-text").textContent = "Puzzle " + (session.currentProblemIndex + 1) + " of " + session.problems.length;
    $("shrine-coins").textContent = "\u{1FA99} " + state.coins;
    $("tablet-difficulty").textContent = "\u2B50".repeat(prob.difficulty);
    $("tablet-question").innerHTML = renderMath(prob.question);

    const area = $("answer-area");
    area.innerHTML = "";

    if (prob.type === "mc") {
      shuffle(prob.choices).forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerHTML = renderMath(choice);
        btn.onclick = function () { handleAnswer(choice, prob, btn, area); };
        area.appendChild(btn);
      });
    } else if (prob.type === "numeric") {
      const wrap = document.createElement("div"); wrap.className = "answer-input-wrap";
      const input = document.createElement("input");
      input.type = "text"; input.inputMode = "decimal"; input.className = "answer-input";
      input.placeholder = "Your answer"; input.autocomplete = "off";
      const submit = document.createElement("button");
      submit.className = "answer-submit"; submit.textContent = "Submit";
      submit.onclick = function () { handleAnswer(input.value.trim(), prob, submit, area); };
      input.onkeydown = function (e) { if (e.key === "Enter") submit.click(); };
      wrap.appendChild(input); wrap.appendChild(submit);
      area.appendChild(wrap);
      setTimeout(() => input.focus(), 100);
    }

    session.hintsUsed = 0;
    $("hint-text").style.display = "none";
    $("hint-text").textContent = "";
    updateHintButton(prob);
  }

  function updateHintButton(prob) {
    const btn = $("btn-hint");
    if (!prob.hints || session.hintsUsed >= prob.hints.length) {
      btn.style.display = "none"; return;
    }
    btn.style.display = "inline-block";
    const cost = HINT_COSTS[Math.min(session.hintsUsed, HINT_COSTS.length - 1)];
    $("hint-cost").textContent = "(" + cost + " \u{1FA99})";
    btn.onclick = function () {
      if (state.coins < cost) {
        $("hint-text").style.display = "block";
        $("hint-text").textContent = "Not enough coins!"; return;
      }
      state.coins -= cost;
      SFX.hint();
      $("shrine-coins").textContent = "\u{1FA99} " + state.coins;
      $("hint-text").style.display = "block";
      $("hint-text").innerHTML = renderMath(prob.hints[session.hintsUsed]);
      session.hintsUsed++;
      updateHintButton(prob);
      saveGame();
    };
  }

  // ══════════════ ANSWER HANDLING ══════════════

  function handleAnswer(given, prob, clickedEl, area) {
    const correct = String(given).trim() === String(prob.answer).trim();
    state.totalAttempts++;

    // Get position for VFX (center of clicked element)
    const rect = clickedEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    if (correct) {
      clearEncourageMsg();
      SFX.correct();
      SFX.coin();
      state.totalSolved++;
      state.currentStreak++;
      if (state.currentStreak > state.bestStreak) state.bestStreak = state.currentStreak;
      if (session.hintsUsed === 0) state.solvedNoHints++;
      clickedEl.classList.add("correct");
      disableAnswers(area);

      // VFX
      vfxGoldenBurst(cx, cy);

      const firstTry = session.wrongThisShrine === 0;
      const xpGain = session.isBoss ? XP_BOSS_CORRECT : (firstTry ? XP_CORRECT_FIRST : XP_CORRECT_RETRY);
      const coinGain = session.isBoss ? COINS_BOSS : COINS_CORRECT;
      state.xp += xpGain;
      state.coins += coinGain;

      let stars = 3;
      if (session.wrongThisShrine > 0 || session.hintsUsed > 0) stars = 2;
      if (session.wrongThisShrine >= 2 || session.hintsUsed >= 2) stars = 1;

      if (session.isBoss) {
        handleBossCorrect(prob);
      } else {
        const wp = getWorldProgress(session.currentWorld);
        const prevStars = wp.shrineStars[session.currentShrineIndex];
        if (stars > prevStars) wp.shrineStars[session.currentShrineIndex] = stars;

        // Perfect shrine bonus
        let bonusXP = 0;
        if (stars === 3) {
          bonusXP = XP_PERFECT_BONUS;
          state.xp += bonusXP;
          if (prevStars < 3) state.totalPerfectShrines++;
          launchConfetti(2000);
          SFX.perfect();
        }

        saveGame();
        checkBadges();
        setTimeout(() => showFeedback(true, xpGain + bonusXP, coinGain, stars, prob), 500);
      }
    } else {
      SFX.wrong();
      session.wrongThisShrine++;
      state.currentStreak = 0;
      clickedEl.classList.add("wrong");

      // VFX
      vfxRedRings(cx, cy);

      // Show encouraging message
      showEncourageMsg(area);

      if (session.isBoss) {
        handleBossWrong();
        if (prob.type === "numeric") {
          setTimeout(() => {
            clickedEl.classList.remove("wrong"); clickedEl.disabled = false;
            const input = area.querySelector(".answer-input");
            if (input) { input.disabled = false; input.value = ""; input.focus(); }
            if (session.hearts > 0) startBossCountdown();
          }, 600);
        } else {
          setTimeout(() => { clickedEl.disabled = true; clickedEl.style.opacity = "0.4"; }, 400);
          // Restart countdown if still alive (MC — wrong choice disabled, player picks again)
          if (session.hearts > 0) setTimeout(() => startBossCountdown(), 500);
        }
      } else {
        session.hearts--;
        SFX.heartLost();
        renderHearts($("shrine-hearts"), session.hearts, SHRINE_HEARTS);
        if (session.hearts <= 0) {
          disableAnswers(area);
          setTimeout(() => showGameOver(), 600);
        } else {
          if (prob.type === "numeric") {
            setTimeout(() => {
              clickedEl.classList.remove("wrong"); clickedEl.disabled = false;
              const input = area.querySelector(".answer-input");
              if (input) { input.disabled = false; input.value = ""; input.focus(); }
            }, 500);
          } else {
            setTimeout(() => { clickedEl.disabled = true; clickedEl.style.opacity = "0.4"; }, 400);
          }
        }
      }
      saveGame();
    }
  }

  function showEncourageMsg(area) {
    // Remove any existing message
    const existing = area.parentElement.querySelector(".encourage-msg");
    if (existing) existing.remove();
    const entry = ENCOURAGE_QUOTES[Math.floor(Math.random() * ENCOURAGE_QUOTES.length)];
    const msg = document.createElement("div");
    msg.className = "encourage-msg";
    msg.innerHTML =
      `<div class="encourage-quote">\u201C${entry.quote}\u201D</div>` +
      `<div class="encourage-author">\u2014 ${entry.author}</div>` +
      `<div class="encourage-bio">${entry.bio}</div>`;
    area.parentElement.appendChild(msg);
    // Message stays visible until next answer attempt or screen change
  }

  function clearEncourageMsg() {
    document.querySelectorAll(".encourage-msg").forEach((el) => el.remove());
  }

  function disableAnswers(area) {
    area.querySelectorAll(".answer-btn").forEach((b) => (b.disabled = true));
    area.querySelectorAll(".answer-submit").forEach((b) => (b.disabled = true));
    area.querySelectorAll(".answer-input").forEach((b) => (b.disabled = true));
  }

  function renderHearts(container, current, max) {
    container.innerHTML = "";
    for (let i = 0; i < max; i++) {
      const span = document.createElement("span");
      span.className = "heart" + (i >= current ? " heart-lost" : "");
      span.textContent = i < current ? "\u2764\uFE0F" : "\uD83D\uDDA4";
      container.appendChild(span);
    }
  }

  // ── Feedback ──
  function showFeedback(correct, xp, coins, stars, prob) {
    stopTimer();
    const overlay = $("overlay-feedback");
    overlay.style.display = "flex";
    $("feedback-icon").textContent = correct ? "\u2728" : "\uD83D\uDC94";
    const titleText = correct
      ? (stars === 3 ? "Perfect! Shrine Puzzle Solved!" : "Shrine Puzzle Solved!")
      : "Not Quite...";
    $("feedback-title").textContent = titleText;
    $("feedback-title").className = "feedback-title " + (correct ? "correct" : "wrong");
    $("feedback-rewards").textContent = correct ? `+${xp} XP  +${coins} \u{1FA99}` : "";
    $("feedback-rewards").style.display = correct ? "block" : "none";
    $("feedback-stars").textContent = correct ? "\u2B50".repeat(stars) : "";

    // Streak display
    let streakHTML = "";
    if (correct && state.currentStreak >= 2) {
      streakHTML = `<div class="streak-display streak-fire">\uD83D\uDD25 ${state.currentStreak} streak!</div>`;
    }
    $("feedback-stars").insertAdjacentHTML("afterend", streakHTML);

    // Animated explanation steps with staggered delay
    const stepsEl = $("explanation-steps");
    stepsEl.innerHTML = "";
    if (prob.explanation) {
      prob.explanation.forEach((step, i) => {
        const div = document.createElement("div");
        div.className = "explanation-step";
        div.style.setProperty("--step-delay", (i * 0.2) + "s");
        div.innerHTML = renderMath(step);
        stepsEl.appendChild(div);
      });
    }
    $("btn-feedback-continue").onclick = function () {
      SFX.click();
      // Clean up any streak display we inserted
      const sd = overlay.querySelector(".streak-display");
      if (sd) sd.remove();
      overlay.style.display = "none";
      showScreen("island");
      renderIslandView(session.currentWorld);
      updateHUD();
    };
  }

  function showGameOver() {
    stopTimer();
    SFX.gameOver();
    $("overlay-gameover").style.display = "flex";
    $("btn-retry").onclick = function () {
      if (state.coins >= RETRY_COST) {
        state.coins -= RETRY_COST; saveGame();
        $("overlay-gameover").style.display = "none";
        startShrine(session.currentWorld, session.currentShrineIndex);
      } else {
        $("btn-retry").textContent = "Not enough coins!";
        setTimeout(() => { $("btn-retry").textContent = "Retry (15 \u{1FA99})"; }, 1500);
      }
    };
    $("btn-leave-shrine").onclick = function () {
      $("overlay-gameover").style.display = "none";
      showScreen("island"); renderIslandView(session.currentWorld); updateHUD();
    };
  }

  // ══════════════ BOSS BATTLE ══════════════

  function startBoss(worldId) {
    const world = WORLDS[worldId];
    // Track re-battles for badge system
    if (getWorldProgress(worldId).bossDefeated) {
      state.totalBossRebattles++;
      saveGame();
      checkBadges();
    }
    const sel = getWorldSelection(worldId);
    session.currentWorld = worldId;
    session.isBoss = true;
    session.problems = sel.boss.slice();
    session.currentProblemIndex = 0;
    session.hearts = BOSS_HEARTS;
    session.wrongThisShrine = 0;
    session.bossHP = session.problems.length;
    session.bossMaxHP = session.problems.length;

    showScreen("boss");
    SFX.bossStart();
    startTimer();
    // Reset boss elapsed display
    const bossElText = $("boss-elapsed-text");
    if (bossElText) bossElText.textContent = "0:00";
    renderBoss(world, worldId);
    renderBossProblem();
  }

  function renderBoss(world, worldId) {
    $("boss-name-display").textContent = world.bossName;
    $("boss-hp-fill").style.width = "100%";
    renderHearts($("boss-player-hearts"), session.hearts, BOSS_HEARTS);

    // Set unique boss CSS via data attribute
    const bossVisual = $("boss-visual");
    bossVisual.setAttribute("data-boss", worldId);

    // Reset any inline styles from previous boss (let CSS class handle it)
    const body = bossVisual.querySelector(".boss-body");
    body.style.background = "";
    body.style.boxShadow = "";

    // Reset hit/attack animations on sub-elements
    bossVisual.classList.remove("boss-hit", "boss-attack-anim");
  }

  function renderBossProblem() {
    if (session.currentProblemIndex >= session.problems.length) { bossDefeated(); return; }
    const prob = session.problems[session.currentProblemIndex];
    $("boss-question").innerHTML = renderMath(prob.question);
    const area = $("boss-answer-area");
    area.innerHTML = "";

    if (prob.type === "mc") {
      shuffle(prob.choices).forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn"; btn.innerHTML = renderMath(choice);
        btn.onclick = function () { handleAnswer(choice, prob, btn, area); };
        area.appendChild(btn);
      });
    } else if (prob.type === "numeric") {
      const wrap = document.createElement("div"); wrap.className = "answer-input-wrap";
      const input = document.createElement("input");
      input.type = "text"; input.inputMode = "decimal"; input.className = "answer-input";
      input.placeholder = "Your answer"; input.autocomplete = "off";
      const submit = document.createElement("button");
      submit.className = "answer-submit"; submit.textContent = "Submit";
      submit.onclick = function () { handleAnswer(input.value.trim(), prob, submit, area); };
      input.onkeydown = function (e) { if (e.key === "Enter") submit.click(); };
      wrap.appendChild(input); wrap.appendChild(submit);
      area.appendChild(wrap);
      setTimeout(() => input.focus(), 100);
    }

    // Start countdown for this question
    startBossCountdown();
  }

  function handleBossCorrect(prob) {
    stopBossCountdown();
    SFX.bossHit();
    session.bossHP--;
    saveGame();
    checkBadges();
    const bossVisual = $("boss-visual");
    bossVisual.classList.add("boss-hit");
    setTimeout(() => bossVisual.classList.remove("boss-hit"), 500);
    $("boss-hp-fill").style.width = ((session.bossHP / session.bossMaxHP) * 100) + "%";
    setTimeout(() => {
      session.currentProblemIndex++;
      session.wrongThisShrine = 0;
      session.hintsUsed = 0;
      renderBossProblem();
    }, 800);
  }

  function handleBossWrong() {
    SFX.bossAttack();
    SFX.heartLost();
    session.hearts--;
    renderHearts($("boss-player-hearts"), session.hearts, BOSS_HEARTS);
    stopBossCountdown();
    const bossVisual = $("boss-visual");
    bossVisual.classList.add("boss-attack-anim");
    const screen = $("screen-boss");
    screen.classList.add("screen-flash-red");
    setTimeout(() => {
      bossVisual.classList.remove("boss-attack-anim");
      screen.classList.remove("screen-flash-red");
    }, 600);
    if (session.hearts <= 0) {
      setTimeout(() => {
        showScreen("island"); renderIslandView(session.currentWorld); updateHUD();
      }, 800);
    }
  }

  function bossDefeated() {
    stopTimer();
    stopBossCountdown();
    SFX.victory();
    const worldId = session.currentWorld;
    const world = WORLDS[worldId];
    const wp = getWorldProgress(worldId);
    const isFirstDefeat = !wp.bossDefeated;
    wp.bossDefeated = true;
    if (!state.tearsCollected.includes(worldId)) state.tearsCollected.push(worldId);

    // Only award XP/coins on first defeat
    if (isFirstDefeat) {
      state.xp += XP_BOSS_DEFEAT;
      state.coins += COINS_BOSS;
    }

    // Record time
    const elapsedSecs = Math.floor((Date.now() - session.timerStart) / 1000);
    const prevBest = state.bossTimes[worldId];
    const isNewRecord = prevBest === undefined || elapsedSecs < prevBest;
    if (isNewRecord) {
      state.bossTimes[worldId] = elapsedSecs;
    }

    saveGame();
    checkBadges();

    // Big celebration
    launchConfetti(3500);

    // Victory overlay
    $("overlay-boss-victory").style.display = "flex";
    $("victory-title").textContent = isFirstDefeat
      ? "TEAR OF KNOWLEDGE OBTAINED"
      : "GUARDIAN DEFEATED";
    $("victory-world-name").textContent = world.name;

    // Show time
    $("victory-time-value").textContent = formatTime(elapsedSecs);
    $("victory-time").style.display = "block";

    // New record indicator
    const recordEl = $("victory-record");
    recordEl.style.display = isNewRecord ? "block" : "none";

    // Previous best (show when re-battling, not on first defeat)
    const prevBestEl = $("victory-prev-best");
    if (!isFirstDefeat && prevBest !== undefined) {
      prevBestEl.style.display = "block";
      $("victory-prev-best-value").textContent = formatTime(prevBest);
    } else {
      prevBestEl.style.display = "none";
    }

    // Challenge message
    const challengeEl = $("victory-challenge");
    if (isFirstDefeat) {
      challengeEl.style.display = "block";
      challengeEl.textContent = "Come back and challenge yourself to beat " + formatTime(elapsedSecs) + "!";
    } else if (!isNewRecord && prevBest !== undefined) {
      challengeEl.style.display = "block";
      const diff = elapsedSecs - prevBest;
      challengeEl.textContent = "You were " + diff + "s slower. Try again to beat your record!";
    } else {
      challengeEl.style.display = "none";
    }

    // Rewards text
    if (isFirstDefeat) {
      $("victory-rewards").textContent = `+${XP_BOSS_DEFEAT} XP  +${COINS_BOSS} \u{1FA99}`;
    } else {
      $("victory-rewards").textContent = ""; // no rewards on re-battle
    }

    $("btn-victory-continue").onclick = function () {
      $("overlay-boss-victory").style.display = "none";
      showScreen("world-map"); renderWorldMap(); updateHUD();
    };
  }

  // ══════════════ PROGRESS SCREEN (Purah Pad) ══════════════

  function initProgressTabs() {
    $$(".progress-tab").forEach((tab) => {
      tab.onclick = function () {
        $$(".progress-tab").forEach((t) => t.classList.remove("active"));
        $$(".tab-panel").forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        const panel = $("tab-" + tab.getAttribute("data-tab"));
        if (panel) panel.classList.add("active");
      };
    });
  }

  // ══════════════ HERO & SHOP SYSTEM ══════════════

  let activeShopCat = "weapon"; // current shop tab

  function renderHeroFigure() {
    const scene = $("hero-scene");
    scene.innerHTML = "";
    const charId = state.character || "warrior";

    // Build the figure
    const figure = document.createElement("div");
    figure.className = "hero-figure";
    figure.setAttribute("data-class", charId);

    // Magic aura layer (behind everything)
    if (state.equipped.magic) {
      const item = SHOP_ITEMS.find((i) => i.id === state.equipped.magic);
      if (item) {
        const magic = document.createElement("div");
        magic.className = "hero-magic";
        magic.setAttribute("data-tier", item.tier);
        for (let i = 0; i < 3; i++) {
          const orb = document.createElement("div");
          orb.className = "magic-orb";
          magic.appendChild(orb);
        }
        figure.appendChild(magic);
      }
    }

    // Cape
    const cape = document.createElement("div");
    cape.className = "hero-cape";
    figure.appendChild(cape);

    // Body
    const body = document.createElement("div");
    body.className = "hero-body";
    figure.appendChild(body);

    // Armor overlay (on top of body)
    if (state.equipped.armor) {
      const item = SHOP_ITEMS.find((i) => i.id === state.equipped.armor);
      if (item) {
        const armor = document.createElement("div");
        armor.className = "hero-armor";
        armor.setAttribute("data-tier", item.tier);
        figure.appendChild(armor);
      }
    }

    // Head
    const head = document.createElement("div");
    head.className = "hero-head";
    figure.appendChild(head);

    // Hair
    const hair = document.createElement("div");
    hair.className = "hero-hair";
    figure.appendChild(hair);

    // Accessory (hat/headband/glasses/scarf)
    const acc = document.createElement("div");
    acc.className = "hero-accessory";
    figure.appendChild(acc);

    // Arms
    const armL = document.createElement("div");
    armL.className = "hero-arm-l";
    figure.appendChild(armL);
    const armR = document.createElement("div");
    armR.className = "hero-arm-r";
    figure.appendChild(armR);

    // Weapon overlay (right hand)
    if (state.equipped.weapon) {
      const item = SHOP_ITEMS.find((i) => i.id === state.equipped.weapon);
      if (item) {
        const weapon = document.createElement("div");
        weapon.className = "hero-weapon";
        weapon.setAttribute("data-tier", item.tier);
        figure.appendChild(weapon);
      }
    }

    // Legs
    const legL = document.createElement("div");
    legL.className = "hero-leg-l";
    figure.appendChild(legL);
    const legR = document.createElement("div");
    legR.className = "hero-leg-r";
    figure.appendChild(legR);

    scene.appendChild(figure);

    // Ground shadow
    const shadow = document.createElement("div");
    shadow.className = "hero-shadow";
    scene.appendChild(shadow);
  }

  function renderEquipSlots() {
    ["weapon", "armor", "magic"].forEach((slotType) => {
      const slotEl = $("equip-slot-" + slotType);
      const itemId = state.equipped[slotType];
      const iconEl = slotEl.querySelector(".equip-slot-icon");
      const nameEl = slotEl.querySelector(".equip-slot-name");

      // Remove old unequip button
      const oldBtn = slotEl.querySelector(".equip-unequip-btn");
      if (oldBtn) oldBtn.remove();

      if (itemId) {
        const item = SHOP_ITEMS.find((i) => i.id === itemId);
        slotEl.classList.add("filled");
        iconEl.innerHTML = '<span style="display:inline-block;width:18px;height:18px;border-radius:4px;background:' + item.color + ';"></span>';
        nameEl.textContent = item.name;

        const btn = document.createElement("button");
        btn.className = "equip-unequip-btn";
        btn.textContent = "\u2715";
        btn.title = "Unequip";
        btn.onclick = function (e) {
          e.stopPropagation();
          unequipItem(slotType);
        };
        slotEl.appendChild(btn);
      } else {
        slotEl.classList.remove("filled");
        iconEl.textContent = "-";
        nameEl.textContent = "";
      }
    });
  }

  function renderInventory() {
    const grid = $("inventory-grid");
    grid.innerHTML = "";
    const countEl = $("inventory-count");
    const owned = state.inventory;

    countEl.textContent = owned.length + (owned.length === 1 ? " item" : " items");

    if (owned.length === 0) {
      const empty = document.createElement("div");
      empty.className = "inventory-empty";
      empty.textContent = "No items yet \u2014 visit the shop below!";
      grid.appendChild(empty);
      return;
    }

    owned.forEach((itemId) => {
      const item = SHOP_ITEMS.find((i) => i.id === itemId);
      if (!item) return;
      const isEquipped = state.equipped[item.cat] === item.id;

      const tile = document.createElement("div");
      tile.className = "inv-tile" + (isEquipped ? " inv-equipped" : "");
      tile.title = item.name + " \u2014 " + item.desc + (isEquipped ? " (Equipped)" : " (Click to equip)");
      tile.onclick = function () {
        if (isEquipped) {
          unequipItem(item.cat);
        } else {
          equipItem(item.id);
        }
      };

      // Item art swatch
      const swatch = document.createElement("div");
      swatch.className = "inv-tile-swatch item-art";
      swatch.setAttribute("data-item", item.id);

      // Name
      const name = document.createElement("div");
      name.className = "inv-tile-name";
      name.textContent = item.name;

      // Category label
      const cat = document.createElement("div");
      cat.className = "inv-tile-cat";
      cat.textContent = item.cat;

      tile.appendChild(swatch);
      tile.appendChild(name);
      tile.appendChild(cat);

      // Equipped badge
      if (isEquipped) {
        const badge = document.createElement("div");
        badge.className = "inv-tile-badge";
        badge.textContent = "E";
        tile.appendChild(badge);
      }

      grid.appendChild(tile);
    });
  }

  function renderShop() {
    const container = $("shop-items");
    container.innerHTML = "";
    $("shop-coins").textContent = "\u{1FA99} " + state.coins;

    const items = SHOP_ITEMS.filter((i) => i.cat === activeShopCat);
    items.forEach((item) => {
      const owned = state.inventory.includes(item.id);
      const equipped = state.equipped[item.cat] === item.id;
      const canAfford = state.coins >= item.cost;

      const row = document.createElement("div");
      row.className = "shop-item" + (equipped ? " equipped-item" : owned ? " owned" : "");

      // Item art swatch
      const swatch = document.createElement("div");
      swatch.className = "shop-item-color item-art";
      swatch.setAttribute("data-item", item.id);

      // Tier stars
      const tierStr = "\u2B50".repeat(item.tier);

      // Info
      const info = document.createElement("div");
      info.className = "shop-item-info";
      info.innerHTML = '<div class="shop-item-name">' + item.name + ' <span class="shop-tier">' + tierStr + '</span></div><div class="shop-item-desc">' + item.desc + '</div>';

      // Action button
      const action = document.createElement("div");
      action.className = "shop-item-action";

      if (equipped) {
        const btn = document.createElement("button");
        btn.className = "shop-btn shop-btn-equipped";
        btn.textContent = "Equipped";
        action.appendChild(btn);
      } else if (owned) {
        const btn = document.createElement("button");
        btn.className = "shop-btn shop-btn-equip";
        btn.textContent = "Equip";
        btn.onclick = function () { equipItem(item.id); };
        action.appendChild(btn);
      } else {
        const btn = document.createElement("button");
        btn.className = "shop-btn shop-btn-buy";
        btn.disabled = !canAfford;
        btn.innerHTML = '<span class="shop-btn-cost">\u{1FA99} ' + item.cost + '</span>';
        btn.onclick = function () { buyItem(item.id); };
        action.appendChild(btn);
      }

      row.appendChild(swatch);
      row.appendChild(info);
      row.appendChild(action);
      container.appendChild(row);
    });
  }

  function buyItem(itemId) {
    if (state.inventory.includes(itemId)) return;
    const item = SHOP_ITEMS.find((i) => i.id === itemId);
    if (!item || state.coins < item.cost) return;

    state.coins -= item.cost;
    state.inventory.push(itemId);
    SFX.buy();
    // Auto-equip if slot is empty
    if (!state.equipped[item.cat]) {
      state.equipped[item.cat] = itemId;
    }
    saveGame();
    updateHUD();
    renderHeroTab();
  }

  function equipItem(itemId) {
    const item = SHOP_ITEMS.find((i) => i.id === itemId);
    if (!item || !state.inventory.includes(itemId)) return;
    SFX.equip();
    state.equipped[item.cat] = itemId;
    saveGame();
    renderHeroTab();
  }

  function unequipItem(slotType) {
    state.equipped[slotType] = null;
    saveGame();
    renderHeroTab();
  }

  function initShopTabs() {
    $$(".shop-tab").forEach((tab) => {
      tab.onclick = function () {
        $$(".shop-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeShopCat = tab.getAttribute("data-shop-cat");
        renderShop();
      };
    });
  }

  function renderHeroTab() {
    const ch = CHARACTERS.find((c) => c.id === state.character) || CHARACTERS[0];
    const lvl = getPlayerLevel();
    $("hero-profile-name").textContent = ch.name;
    $("hero-profile-title").textContent = lvl.title;
    $("stat-hero-level").textContent = lvl.level;
    $("stat-hero-xp").textContent = state.xp;
    $("stat-hero-streak").textContent = state.bestStreak;
    $("stat-hero-tears").textContent = state.tearsCollected.length + " / 15";
    renderHeroFigure();
    renderEquipSlots();
    renderInventory();
    renderShop();
  }

  function renderProgressScreen() {
    // Tears tab
    const tearsEl = $("tears-display");
    tearsEl.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      const slot = document.createElement("div");
      slot.className = "tear-slot" + (state.tearsCollected.includes(i) ? " collected" : "");
      slot.textContent = "\uD83D\uDCA7"; slot.title = WORLDS[i].name;
      tearsEl.appendChild(slot);
    }

    // Badges tab — grouped by category
    const badgesEl = $("badges-grid");
    badgesEl.innerHTML = "";
    const unlockedCount = state.badges.length;
    const totalCount = BADGES.length;

    // Summary line
    const summary = document.createElement("div");
    summary.className = "badge-summary";
    summary.textContent = unlockedCount + " / " + totalCount + " badges unlocked";
    badgesEl.appendChild(summary);

    // Group badges by category, preserving order
    const categories = [];
    const catMap = {};
    BADGES.forEach((b) => {
      if (!catMap[b.cat]) { catMap[b.cat] = []; categories.push(b.cat); }
      catMap[b.cat].push(b);
    });

    categories.forEach((cat) => {
      const catBadges = catMap[cat];
      const catUnlocked = catBadges.filter((b) => state.badges.includes(b.id)).length;

      const header = document.createElement("div");
      header.className = "badge-cat-header";
      header.textContent = cat + " (" + catUnlocked + "/" + catBadges.length + ")";
      badgesEl.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "badge-cat-grid";
      catBadges.forEach((b) => {
        const unlocked = state.badges.includes(b.id);
        const slot = document.createElement("div");
        slot.className = "badge-slot " + (unlocked ? "unlocked" : "locked");
        slot.innerHTML = `<div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div><div class="badge-desc">${unlocked ? b.desc : "???"}</div>`;
        grid.appendChild(slot);
      });
      badgesEl.appendChild(grid);
    });

    // Hero tab (animated character + equipment + shop)
    renderHeroTab();

    // Stats tab
    const lvl = getPlayerLevel();
    $("stat-level").textContent = lvl.level;
    $("stat-title").textContent = lvl.title;
    $("stat-solved").textContent = state.totalSolved;
    $("stat-accuracy").textContent = state.totalAttempts > 0
      ? Math.round((state.totalSolved / state.totalAttempts) * 100) + "%" : "\u2014";
    $("stat-xp").textContent = state.xp;
    $("stat-coins").textContent = state.coins;
    $("stat-streak").textContent = state.currentStreak;
    $("stat-best-streak").textContent = state.bestStreak;
  }

  // ══════════════ NAVIGATION ══════════════

  function initNavigation() {
    $("btn-back-to-map").onclick = function () {
      showScreen("world-map"); renderWorldMap(); updateHUD();
    };
    $("btn-inventory").onclick = function () {
      showScreen("progress"); renderProgressScreen();
    };
    $("btn-back-from-progress").onclick = function () {
      showScreen("world-map"); renderWorldMap(); updateHUD();
    };
    $("btn-exit-shrine").onclick = function () {
      stopTimer();
      clearEncourageMsg();
      showScreen("island");
      renderIslandView(session.currentWorld);
      updateHUD();
    };
    // Mute toggle
    const muteBtn = $("btn-mute");
    function updateMuteBtn() {
      muteBtn.textContent = state.soundMuted ? "\uD83D\uDD07" : "\uD83D\uDD0A";
      muteBtn.classList.toggle("muted", state.soundMuted);
    }
    updateMuteBtn();
    muteBtn.onclick = function () {
      state.soundMuted = !state.soundMuted;
      SFX.setMuted(state.soundMuted);
      updateMuteBtn();
      saveGame();
    };
  }

  // ══════════════ INIT ══════════════

  function init() {
    initTitleScreen();
    initNavigation();
    initProgressTabs();
    initShopTabs();
    showScreen("title");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
