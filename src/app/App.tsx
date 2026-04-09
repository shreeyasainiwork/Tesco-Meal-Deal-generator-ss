import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import tescoLogo from "../imports/Start/383565c08dd9637f7fd57bc69359abb6224288e8.png";

type Item = {
  name: string;
  type: string;
  value: number;
};

type MealCombo = {
  main: Item & { emoji: string };
  snack: Item & { emoji: string };
  drink: Item & { emoji: string };
  justification: string;
};

const mains: Item[] = [
  { name: "Tesco Chicken Triple Sandwich", type: "protein", value: 4.2 },
  { name: "Tesco Chicken & Bacon Wrap", type: "protein", value: 3.8 },
  { name: "Tesco Cheese Triple Sandwich", type: "comfort", value: 3.5 },
  { name: "Tesco Chicken & Chorizo Pasta 285g", type: "comfort", value: 4.0 },
  { name: "Tesco Tuna Crunch Sub", type: "balanced", value: 3.7 },
  { name: "Tesco Smoked Salmon Sushi", type: "balanced", value: 3.9 },
{ name: "Tesco Korean Style Chicken Dragon Roll 175g", type: "comfort", value: 4.1 },
{ name: "Pollen & Grace Mezze Houmous + Rainbow", type: "veg", value: 3.6 },
{ name: "Grain Bowl", type: "veg", value: 2.75 },
{ name: "Tesco Cheese & Onion Sandwich", type: "veg", value: 3.2 },
{ name: "Itsu Vegetable Crunch Dragon Roll", type: "veg", value: 3.5 },
{ name: "YO! Chicken Katsu Dragon Rolls", type: "comfort", value: 4.2 },
{ name: "Tesco Korean Style Chicken Dragon Roll", type: "comfort", value: 4.0 }
];

const snacks: Item[] = [
  { name: "Fridge Raiders Chicken Bites 45g", type: "protein", value: 3.5 },
  { name: "Tesco Carrot & Houmous 100g", type: "light", value: 3.0 },
  { name: "Wall's Sausage Roll 100g", type: "comfort", value: 3.8 },
  { name: "Doritos Cool Original 44g", type: "comfort", value: 3.2 },
  { name: "Kettle Cheddar Chips", type: "comfort", value: 3.4 },
  { name: "Itsu Chicken Gyoza Snack Pot 47g", type: "protein", value: 3.8 },
  { name: "Tesco Egg & Salad Cream 130g", type: "balanced", value: 3.4 },
  { name: "Tesco Vegetable Sushi Snack 70g", type: "light", value: 3.3 }
];
];

const drinks: Item[] = [
  { name: "For Goodness Shakes Protein Shake", type: "protein", value: 3.9 },
  { name: "Naked Blue Machine Smoothie", type: "balanced", value: 3.6 },
  { name: "Jimmy's Iced Coffee", type: "energy", value: 3.5 },
  { name: "Monster Energy Zero", type: "energy", value: 3.3 },
  { name: "Shaken Udder Double Choc Milkshake 330ml", type: "comfort", value: 3.6 },
  { name: "For Goodness Shakes Protein Chocolate 471ml", type: "protein", value: 4.0 },
  { name: "Arla Protein Chocolate Milk 482ml", type: "protein", value: 3.9 },
  { name: "Arla Protein Caramel Meal Shake 500ml", type: "protein", value: 4.1 }
];
 
];

];

const emojiMap: Record<string, string> = {
  "Tesco Chicken Triple Sandwich": "🥪",
  "Tesco Chicken & Bacon Wrap": "🌯",
  "Tesco Cheese Triple Sandwich": "🥪",
  "Tesco Chicken & Chorizo Pasta 285g": "🍝",
  "Tesco Tuna Crunch Sub": "🥖",
  "Tesco Cheese & Onion Sandwich": "🥪",
  "Fridge Raiders Chicken Bites 45g": "🍗",
  "Tesco Carrot & Houmous 100g": "🥕",
  "Wall's Sausage Roll": "🌭",
  "Doritos Cool Original": "🔶",
  "Kettle Cheddar Chips": "🧀",
  "For Goodness Shakes Protein Shake": "🥛",
  "Naked Blue Machine Smoothie": "💙",
  "Jimmy's Iced Coffee": "☕",
  "Monster Energy Zero": "⚡",
"Tesco Smoked Salmon Sushi": "🍣",
"Tesco Korean Style Chicken Dragon Roll 175g": "🍱",
"Tesco Korean Style Chicken Dragon Roll": "🍱",
"Pollen & Grace Mezze Houmous + Rainbow": "🥙",
"Grain Bowl": "🥗",
"Itsu Vegetable Crunch Dragon Roll": "🍣",
"YO! Chicken Katsu Dragon Rolls": "🍱",

"Itsu Chicken Gyoza Snack Pot 47g": "🥟",
"Tesco Egg & Salad Cream 130g": "🥚",
"Tesco Vegetable Sushi Snack 70g": "🍣",

"Shaken Udder Double Choc Milkshake 330ml": "🥤",
"For Goodness Shakes Protein Chocolate 471ml": "🥤",
"Arla Protein Chocolate Milk 482ml": "🥛",
"Arla Protein Caramel Meal Shake 500ml": "🥤"
};

const justifications: Record<string, string[]> = {
  protein: ["High protein, keeps you full", "Pure fuel, won't slow you down", "Clean protein hit, sorted"],
  light: ["Light, fresh, easy choice", "Won't weigh you down", "Clean and simple, feels good"],
  comfort: ["Comfort food, hits the spot", "Proper treat, you deserve it", "Classic combo, can't go wrong"],
  balanced: ["Balanced, filling, not heavy", "Just right, nothing extra", "Solid choice, covers it all"],
  energy: ["Bold flavours, proper energy", "Kicks in fast, keeps you going", "Energy when you need it"]
};

const titleEmojis = ["🍔", "🥗", "🍕", "🌮", "🥙", "🍱", "🥡", "🥪", "🌯", "🍝"];
const foodDrinkEmojis = ["🥪", "🌯", "🍗", "🍝", "🥤", "🍫", "🥔", "🍇", "☕", "⚡", "🥕", "🌭", "🧀", "🥛"];

export default function App() {
  const [state, setState] = useState<"start" | "result" | "confirmation">("start");
  const [input, setInput] = useState("");
  const [currentCombo, setCurrentCombo] = useState<MealCombo | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [titleEmoji, setTitleEmoji] = useState(titleEmojis[0]);
  const [decisionTime, setDecisionTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleEmoji(titleEmojis[Math.floor(Math.random() * titleEmojis.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate all possible combinations with scores
  const generateAllCombinations = () => {
    const combinations: Array<{
      main: Item;
      snack: Item;
      drink: Item;
      score: number;
      dominantType: string;
    }> = [];

    mains.forEach(main => {
      snacks.forEach(snack => {
        drinks.forEach(drink => {
          // Calculate type match score
          const types = [main.type, snack.type, drink.type];
          const typeCounts: Record<string, number> = {};
          types.forEach(type => {
            typeCounts[type] = (typeCounts[type] || 0) + 1;
          });

          const dominantType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0][0];
          const typeMatchBonus = typeCounts[dominantType] * 0.5;

          // Calculate total value score
          const totalValue = main.value + snack.value + drink.value;
          const score = totalValue + typeMatchBonus;

          combinations.push({
            main,
            snack,
            drink,
            score,
            dominantType
          });
        });
      });
    });

    return combinations.sort((a, b) => b.score - a.score);
  };

  const allCombinations = generateAllCombinations();

  const getMatchedCombo = (userInput: string, excludeCurrent?: MealCombo): MealCombo => {
    const normalizedInput = userInput.toLowerCase();
    let preferredType = "";

    // Detect user preference
    if (normalizedInput.includes("protein") || normalizedInput.includes("gym") || normalizedInput.includes("workout")) {
      preferredType = "protein";
    } else if (normalizedInput.includes("light") || normalizedInput.includes("fresh") || normalizedInput.includes("healthy")) {
      preferredType = "light";
    } else if (normalizedInput.includes("comfort") || normalizedInput.includes("treat") || normalizedInput.includes("hungry")) {
      preferredType = "comfort";
    } else if (normalizedInput.includes("energy") || normalizedInput.includes("tired") || normalizedInput.includes("boost")) {
      preferredType = "energy";
    }

    // Filter combinations by preferred type or get top combinations
    let filteredCombos = preferredType
      ? allCombinations.filter(c => c.dominantType === preferredType)
      : allCombinations;

    // If we have a current combo to exclude, filter it out
    if (excludeCurrent && filteredCombos.length > 1) {
      filteredCombos = filteredCombos.filter(c =>
        c.main.name !== excludeCurrent.main.name ||
        c.snack.name !== excludeCurrent.snack.name ||
        c.drink.name !== excludeCurrent.drink.name
      );
    }

    // Get top 5 combinations and pick randomly from them for variety
    const topCombos = filteredCombos.slice(0, Math.min(5, filteredCombos.length));
    const selectedCombo = topCombos[Math.floor(Math.random() * topCombos.length)];

    const comboType = selectedCombo.dominantType;
    const justificationList = justifications[comboType] || justifications.balanced;
    const justification = justificationList[Math.floor(Math.random() * justificationList.length)];

    return {
      main: { ...selectedCombo.main, emoji: emojiMap[selectedCombo.main.name] || "🍽️" },
      snack: { ...selectedCombo.snack, emoji: emojiMap[selectedCombo.snack.name] || "🍿" },
      drink: { ...selectedCombo.drink, emoji: emojiMap[selectedCombo.drink.name] || "🥤" },
      justification
    };
  };

  const handleHitMe = () => {
    const startTime = Date.now();
    setIsSpinning(true);
    setTimeout(() => {
      const combo = getMatchedCombo(input);
      setCurrentCombo(combo);
      setState("result");
      setIsSpinning(false);
      setDecisionTime(Date.now() - startTime);
    }, 1400);
  };

  const handleTryAnother = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const combo = getMatchedCombo(input, currentCombo || undefined);
      setCurrentCombo(combo);
      setIsSpinning(false);
    }, 1400);
  };

  const handleLoveThis = () => {
    setState("confirmation");
  };

  const handleStartOver = () => {
    setState("start");
    setInput("");
    setCurrentCombo(null);
    setDecisionTime(0);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex items-center justify-center p-6">
      <div className="w-full max-w-[500px] space-y-6">
        <AnimatePresence mode="wait">
          {state === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[4px] p-8 shadow-sm"
            >
              <div className="mb-7">
                <img src={tescoLogo} alt="Tesco" className="h-6 mb-3" />
                <h1 className="text-lg font-semibold text-[#32363a]">
                  Meal Deal Matchmaker {titleEmoji}
                </h1>
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What do you feel like? (protein, light, comfort…)"
                className="w-full bg-[#e0e3e5] rounded-[4px] px-4 py-3 text-sm mb-4 outline-none focus:ring-2 focus:ring-[#32363a]/20"
                onKeyDown={(e) => e.key === "Enter" && handleHitMe()}
              />
              <button
                onClick={handleHitMe}
                className="bg-[#32363a] text-white px-6 py-2.5 rounded-[4px] text-sm font-medium hover:bg-[#32363a]/90 transition-colors"
              >
                Hit me
              </button>
            </motion.div>
          )}

          {state === "result" && currentCombo && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[4px] p-8 shadow-sm"
            >
              <div className="mb-2">
                <img src={tescoLogo} alt="Tesco" className="h-6 mb-3" />
                <h1 className="text-lg font-semibold text-[#32363a]">
                  How about this?
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-[#8c8c8c] mb-6"
              >
                {currentCombo.justification}
              </motion.p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <ResultCard
                  label="MAIN"
                  item={currentCombo.main}
                  delay={0}
                  isSpinning={isSpinning}
                />
                <ResultCard
                  label="SNACK"
                  item={currentCombo.snack}
                  delay={100}
                  isSpinning={isSpinning}
                />
                <ResultCard
                  label="DRINK"
                  item={currentCombo.drink}
                  delay={200}
                  isSpinning={isSpinning}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-3 w-full">
                  <button
                    onClick={handleTryAnother}
                    disabled={isSpinning}
                    className="flex-1 border border-[#32363a] text-[#32363a] px-6 py-2.5 rounded-[4px] text-sm font-medium hover:bg-[#32363a]/5 transition-colors disabled:opacity-50"
                  >
                    Try another combo
                  </button>
                  <button
                    onClick={handleLoveThis}
                    disabled={isSpinning}
                    className="flex-1 bg-[#32363a] text-white px-6 py-2.5 rounded-[4px] text-sm font-medium hover:bg-[#32363a]/90 transition-colors disabled:opacity-50"
                  >
                    I'll take this
                  </button>
                </div>
                <button
                  onClick={handleStartOver}
                  className="text-[10px] text-[#8c8c8c] hover:text-[#32363a] transition-colors underline"
                >
                  Start over
                </button>
              </div>
            </motion.div>
          )}

          {state === "confirmation" && currentCombo && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[4px] p-8 shadow-sm"
            >
              <div className="mb-2">
                <img src={tescoLogo} alt="Tesco" className="h-6 mb-3" />
                <h1 className="text-lg font-semibold text-[#32363a]">
                  Your Best Combo, Made Better
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-[#8c8c8c] mb-1"
              >
                {decisionTime < 3000 ? "Quick decision, good instincts" : "Considered choice, nice one"} — {currentCombo.justification.toLowerCase()}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="my-6 space-y-2"
              >
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">{currentCombo.main.emoji}</span>
                  <div>
                    <p className="text-[10px] text-[#8c8c8c] uppercase tracking-wide">Main</p>
                    <p className="text-[#32363a] font-medium">{currentCombo.main.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">{currentCombo.snack.emoji}</span>
                  <div>
                    <p className="text-[10px] text-[#8c8c8c] uppercase tracking-wide">Snack</p>
                    <p className="text-[#32363a] font-medium">{currentCombo.snack.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">{currentCombo.drink.emoji}</span>
                  <div>
                    <p className="text-[10px] text-[#8c8c8c] uppercase tracking-wide">Drink</p>
                    <p className="text-[#32363a] font-medium">{currentCombo.drink.name}</p>
                  </div>
                </div>
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleStartOver}
                className="text-[10px] text-[#8c8c8c] hover:text-[#32363a] transition-colors w-full text-center underline"
              >
                Start again, when you fancy another one
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


function ResultCard({
  label,
  item,
  delay,
  isSpinning,
}: {
  label: string;
  item: { name: string; emoji: string };
  delay: number;
  isSpinning: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.4 }}
      className="bg-[#e0e3e5] rounded-[4px] p-4 min-h-[120px] flex flex-col overflow-hidden relative"
    >
      <AnimatePresence mode="wait">
        {isSpinning ? (
          <motion.div
            key="spinning"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center pt-4"
          >
            <motion.div
              animate={{
                y: [0, -400],
              }}
              transition={{
                duration: 1.2,
                delay: delay / 1000,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="blur-[2px] opacity-70 space-y-3"
            >
              {foodDrinkEmojis.map((emoji, idx) => (
                <div key={idx} className="text-2xl">
                  {emoji}
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full"
          >
            <span className="text-[10px] font-medium text-[#8c8c8c] uppercase tracking-wide mb-2">
              {label}
            </span>
            <div className="text-3xl mb-2">{item.emoji}</div>
            <p className="text-xs text-[#32363a] leading-tight font-medium">
              {item.name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
