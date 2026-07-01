import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Heading from "@/components/ui/Heading";
import InfoBox from "@/components/ui/InfoBox";
import Paragraph from "@/components/ui/Paragraph";
import Quote from "@/components/ui/Quote";
import Section from "@/components/ui/Section";
import SubHeading from "@/components/ui/SubHeading";

const Chapter04 = () => {
  return (
    <>
      {/* Hero */}
      <Section>
        <Badge>Chapter 4</Badge>

        <Heading>
          Positional Embeddings: Teaching GPT the Order of Words
        </Heading>

        <Paragraph>
          In the last chapter, GPT learned to give meaning to words using
          embeddings. Every token now has a rich vector that describes what it
          means.
        </Paragraph>

        <Paragraph>
          That feels like a big win. But there's still one major problem GPT
          hasn't solved yet.
        </Paragraph>

        <InfoBox title="A Quick Puzzle">
          <div className="space-y-3 py-1">
            <div className="font-mono text-sm font-semibold text-gray-800 bg-blue-50 rounded-lg px-4 py-3 border border-blue-100">
              Dog bites man
            </div>
            <div className="font-mono text-sm font-semibold text-gray-800 bg-purple-50 rounded-lg px-4 py-3 border border-purple-100">
              Man bites dog
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">
            Same words. Completely different meanings. Which one is which?
          </p>
        </InfoBox>

        <Quote>
          Word order is everything. But embeddings don't carry any position
          information.
        </Quote>
      </Section>

      <Divider />

      {/* What GPT Actually Sees */}
      <Section>
        <SubHeading>What GPT Sees After Embeddings</SubHeading>

        <Paragraph>
          After tokenization and embedding, both sentences produce the exact
          same three vectors — just in a different order.
        </Paragraph>

        <InfoBox title="Two Sentences, Same Vectors">
          <div className="flex flex-col gap-6 py-2">
            {/* Sentence 1 */}
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-3">
                Sentence 1 — Dog bites man
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { word: "Dog", emoji: "🐶", color: "green" },
                  { word: "Bites", emoji: "⚡", color: "red" },
                  { word: "Man", emoji: "👤", color: "blue" },
                ].map(({ word, emoji, color }) => (
                  <div
                    key={word}
                    className={`flex-1 bg-${color}-50 border border-${color}-100 rounded-xl p-3 flex flex-col items-center gap-1`}
                  >
                    <span className="text-xl">{emoji}</span>
                    <span
                      className={`font-mono text-sm font-bold text-${color}-700`}
                    >
                      {word}
                    </span>
                    <span className={`font-mono text-xs text-${color}-400`}>
                      vector
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-200" />

            {/* Sentence 2 */}
            <div>
              <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-3">
                Sentence 2 — Man bites dog
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { word: "Man", emoji: "👤", color: "blue" },
                  { word: "Bites", emoji: "⚡", color: "red" },
                  { word: "Dog", emoji: "🐶", color: "green" },
                ].map(({ word, emoji, color }) => (
                  <div
                    key={word + "2"}
                    className={`flex-1 bg-${color}-50 border border-${color}-100 rounded-xl p-3 flex flex-col items-center gap-1`}
                  >
                    <span className="text-xl">{emoji}</span>
                    <span
                      className={`font-mono text-sm font-bold text-${color}-700`}
                    >
                      {word}
                    </span>
                    <span className={`font-mono text-xs text-${color}-400`}>
                      vector
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 italic text-center">
            The same three colored blocks — just shuffled. Without position, GPT
            can't tell them apart.
          </p>
        </InfoBox>

        <Paragraph>
          GPT sees the 🐶 Dog vector, the ⚡ Bites vector, and the 👤 Man vector
          in both cases. There is nothing in the embeddings themselves that
          tells GPT which word came first.
        </Paragraph>

        <Quote>
          Embeddings describe what each word means. They don't describe where it
          appears.
        </Quote>
      </Section>

      <Divider />

      {/* The Solution: Position Numbers */}
      <Section>
        <SubHeading>The Solution: Give Every Word a Position</SubHeading>

        <Paragraph>
          GPT solves this elegantly. It gives every token one extra piece of
          information — its <strong>position</strong> in the sentence.
        </Paragraph>

        <Paragraph>Positions start from 0, like this:</Paragraph>

        <InfoBox title="Assigning Positions">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 460 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-lg h-auto"
            >
              {/* Sentence label */}
              <text
                x="230"
                y="22"
                textAnchor="middle"
                fill="#64748B"
                fontSize="11"
                fontStyle="italic"
              >
                "Hey, what's up?"
              </text>

              {/* Token boxes */}
              {[
                {
                  x: 20,
                  word: "Hey",
                  pos: "0",
                  fill: "#EFF6FF",
                  stroke: "#BFDBFE",
                  tc: "#1D4ED8",
                  pc: "#3B82F6",
                },
                {
                  x: 120,
                  word: "what's",
                  pos: "1",
                  fill: "#F5F3FF",
                  stroke: "#DDD6FE",
                  tc: "#6D28D9",
                  pc: "#7C3AED",
                },
                {
                  x: 240,
                  word: "up",
                  pos: "2",
                  fill: "#F0FDF4",
                  stroke: "#BBF7D0",
                  tc: "#15803D",
                  pc: "#16A34A",
                },
                {
                  x: 350,
                  word: "?",
                  pos: "3",
                  fill: "#FFF7ED",
                  stroke: "#FED7AA",
                  tc: "#C2410C",
                  pc: "#EA580C",
                },
              ].map(({ x, word, pos, fill, stroke, tc, pc }) => (
                <g key={word}>
                  {/* Word box */}
                  <rect
                    x={x}
                    y="35"
                    width="90"
                    height="44"
                    rx="10"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.5"
                  />
                  <text
                    x={x + 45}
                    y="60"
                    textAnchor="middle"
                    fill={tc}
                    fontSize="13"
                    fontWeight="700"
                  >
                    {word}
                  </text>

                  {/* Arrow down */}
                  <line
                    x1={x + 45}
                    y1="79"
                    x2={x + 45}
                    y2="100"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points={`${x + 39},98 ${x + 45},110 ${x + 51},98`}
                    fill="#CBD5E1"
                  />

                  {/* Position badge */}
                  <rect
                    x={x + 20}
                    y="110"
                    width="50"
                    height="30"
                    rx="8"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.5"
                  />
                  <text
                    x={x + 45}
                    y="120"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="8"
                    fontWeight="600"
                  >
                    POSITION
                  </text>
                  <text
                    x={x + 45}
                    y="134"
                    textAnchor="middle"
                    fill={pc}
                    fontSize="14"
                    fontWeight="800"
                  >
                    {pos}
                  </text>
                </g>
              ))}

              <text
                x="230"
                y="185"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="10"
                fontStyle="italic"
              >
                Every token knows exactly where it sits in the sentence.
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Now "Dog" in position 0 is different from "Dog" in position 2 — even
          though they're the same word. The position tells GPT who is doing the
          action and who is receiving it.
        </Paragraph>
      </Section>

      <Divider />

      {/* Meaning + Position */}
      <Section>
        <SubHeading>Meaning + Position = Understanding</SubHeading>

        <Paragraph>
          GPT takes the embedding vector and adds the position information
          directly into it. The result is one combined vector per token.
        </Paragraph>

        <InfoBox title="What Each Token Carries Into the Transformer">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 340 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-sm h-auto"
            >
              {/* Embedding box */}
              <rect
                x="20"
                y="20"
                width="130"
                height="70"
                rx="12"
                fill="#F0FDF4"
                stroke="#BBF7D0"
                strokeWidth="1.5"
              />
              <text
                x="85"
                y="46"
                textAnchor="middle"
                fill="#15803D"
                fontSize="11"
                fontWeight="700"
              >
                EMBEDDING
              </text>
              <text
                x="85"
                y="62"
                textAnchor="middle"
                fill="#16A34A"
                fontSize="9"
              >
                What the word means
              </text>
              <text
                x="85"
                y="78"
                textAnchor="middle"
                fill="#4ADE80"
                fontSize="9"
                fontFamily="monospace"
              >
                [0.18, -0.62, 0.91...]
              </text>

              {/* Plus sign */}
              <text
                x="170"
                y="62"
                textAnchor="middle"
                fill="#CBD5E1"
                fontSize="28"
                fontWeight="300"
              >
                +
              </text>

              {/* Position box */}
              <rect
                x="190"
                y="20"
                width="130"
                height="70"
                rx="12"
                fill="#EFF6FF"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
              <text
                x="255"
                y="46"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="11"
                fontWeight="700"
              >
                POSITION
              </text>
              <text
                x="255"
                y="62"
                textAnchor="middle"
                fill="#3B82F6"
                fontSize="9"
              >
                Where it sits
              </text>
              <text
                x="255"
                y="78"
                textAnchor="middle"
                fill="#60A5FA"
                fontSize="9"
                fontFamily="monospace"
              >
                Position 0
              </text>

              {/* Down arrow */}
              <line
                x1="170"
                y1="100"
                x2="170"
                y2="130"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="164,128 170,140 176,128" fill="#CBD5E1" />

              {/* Equals box */}
              <rect
                x="60"
                y="148"
                width="220"
                height="80"
                rx="14"
                fill="#F5F3FF"
                stroke="#DDD6FE"
                strokeWidth="2"
              />
              <text
                x="170"
                y="175"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="12"
                fontWeight="700"
              >
                FINAL TOKEN VECTOR
              </text>
              <text
                x="170"
                y="194"
                textAnchor="middle"
                fill="#7C3AED"
                fontSize="10"
              >
                Meaning + Position combined
              </text>
              <text
                x="170"
                y="212"
                textAnchor="middle"
                fill="#A78BFA"
                fontSize="9"
                fontFamily="monospace"
              >
                [0.18, -0.62, 0.91, pos:0...]
              </text>

              <text
                x="170"
                y="250"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="10"
                fontStyle="italic"
              >
                Ready for the Transformer
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Every word entering the transformer now carries both pieces of
          information — fused into a single vector.
        </Paragraph>

        <InfoBox title="Now GPT Knows Two Things About Every Word">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex gap-3 items-start">
              <span className="text-2xl">💡</span>
              <div>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">
                  What
                </p>
                <p className="text-sm text-gray-700">
                  What this word means — its relationships, its context, its
                  feeling.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                  Where
                </p>
                <p className="text-sm text-gray-700">
                  Where this word sits in the sentence — first, second, last, or
                  anywhere in between.
                </p>
              </div>
            </div>
          </div>
        </InfoBox>

        <Quote>
          With meaning and position combined, GPT can finally tell "Dog bites
          man" from "Man bites dog."
        </Quote>
      </Section>

      <Divider />

      {/* Full Pipeline */}
      <Section>
        <SubHeading>The Complete Pipeline So Far</SubHeading>

        <Paragraph>
          Let's look at everything GPT has done to your message before it even
          reaches the core of the model.
        </Paragraph>

        <InfoBox title="Your Message's Journey">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 300 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-xs h-auto"
            >
              {[
                {
                  y: 10,
                  fill: "#EFF6FF",
                  stroke: "#BFDBFE",
                  label: "Your Message",
                  sub: '"Hey, what\'s up?"',
                  labelColor: "#1D4ED8",
                  subColor: "#3B82F6",
                  tick: "✅",
                },
                {
                  y: 100,
                  fill: "#F5F3FF",
                  stroke: "#DDD6FE",
                  label: "Tokenizer",
                  sub: "Splits into tokens",
                  labelColor: "#6D28D9",
                  subColor: "#7C3AED",
                  tick: "✅",
                },
                {
                  y: 190,
                  fill: "#FFF7ED",
                  stroke: "#FED7AA",
                  label: "Token IDs",
                  sub: "[15496, 644, 338, 510, 30]",
                  labelColor: "#C2410C",
                  subColor: "#EA580C",
                  tick: "✅",
                },
                {
                  y: 280,
                  fill: "#F0FDF4",
                  stroke: "#BBF7D0",
                  label: "Embeddings",
                  sub: "Meaning added",
                  labelColor: "#15803D",
                  subColor: "#16A34A",
                  tick: "✅",
                },
                {
                  y: 370,
                  fill: "#FDF4FF",
                  stroke: "#E9D5FF",
                  label: "Positional Embeddings",
                  sub: "Position added",
                  labelColor: "#7E22CE",
                  subColor: "#9333EA",
                  tick: "✅",
                },
              ].map(
                (
                  { y, fill, stroke, label, sub, labelColor, subColor, tick },
                  i,
                ) => (
                  <g key={i}>
                    <rect
                      x="20"
                      y={y}
                      width="260"
                      height="68"
                      rx="12"
                      fill={fill}
                      stroke={stroke}
                      strokeWidth="1.5"
                    />
                    <text
                      x="38"
                      y={y + 28}
                      fill={labelColor}
                      fontSize="11"
                      fontWeight="800"
                    >
                      {tick}
                    </text>
                    <text
                      x="58"
                      y={y + 28}
                      fill={labelColor}
                      fontSize="12"
                      fontWeight="700"
                    >
                      {label}
                    </text>
                    <text
                      x="58"
                      y={y + 48}
                      fill={subColor}
                      fontSize="10"
                      fontStyle="italic"
                    >
                      {sub}
                    </text>
                    {i < 4 && (
                      <>
                        <line
                          x1="150"
                          y1={y + 68}
                          x2="150"
                          y2={y + 88}
                          stroke="#CBD5E1"
                          strokeWidth="2"
                        />
                        <polygon
                          points={`144,${y + 86} 150,${y + 98} 156,${y + 86}`}
                          fill="#CBD5E1"
                        />
                      </>
                    )}
                  </g>
                ),
              )}
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Every token is now fully prepared — it carries both its meaning and
          its position in a single vector.
        </Paragraph>

        <Paragraph>
          But GPT still hasn't started actually <em>understanding</em> the
          sentence. It knows what each word means individually and where each
          word sits. What it doesn't yet know is how words relate to each other.
        </Paragraph>

        <InfoBox title="The Next Question">
          <p className="text-sm text-gray-700 py-1">
            In the sentence <strong>"The dog is very cute"</strong> — how does
            GPT know that <strong>cute</strong> describes <strong>dog</strong>{" "}
            and not <strong>very</strong>?
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            How does one word know which other words matter to it?
          </p>
        </InfoBox>

        <Paragraph>
          That question takes us to the most powerful idea inside every Large
          Language Model.
        </Paragraph>

        <InfoBox title="Coming Up Next">
          Chapter 5 — The Transformer: Where Words Begin to Communicate
        </InfoBox>
      </Section>
    </>
  );
};

export default Chapter04;
