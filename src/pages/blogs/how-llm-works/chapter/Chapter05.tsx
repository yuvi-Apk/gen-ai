import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Heading from "@/components/ui/Heading";
import InfoBox from "@/components/ui/InfoBox";
import Paragraph from "@/components/ui/Paragraph";
import Quote from "@/components/ui/Quote";
import Section from "@/components/ui/Section";
import SubHeading from "@/components/ui/SubHeading";

const Chapter05 = () => {
  return (
    <>
      {/* Hero */}
      <Section>
        <Badge>Chapter 5</Badge>

        <Heading>The Transformer: Where Words Begin to Communicate</Heading>

        <Paragraph>
          So far, GPT has done a lot of work on your sentence.
        </Paragraph>

        <InfoBox title="Everything GPT Has Done So Far">
          <div className="flex flex-col gap-2 py-1">
            {[
              {
                icon: "✅",
                label: "Tokenizer",
                desc: "Split your sentence into pieces",
              },
              {
                icon: "✅",
                label: "Token IDs",
                desc: "Gave each piece a number",
              },
              {
                icon: "✅",
                label: "Embeddings",
                desc: "Gave each number a meaning",
              },
              {
                icon: "✅",
                label: "Positional Embeddings",
                desc: "Told each word where it sits",
              },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-0"
              >
                <span className="text-base">{icon}</span>
                <span className="font-semibold text-sm text-gray-800 w-40 shrink-0">
                  {label}
                </span>
                <span className="text-sm text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </InfoBox>

        <Paragraph>
          Every word now carries its meaning and its position. That feels like
          GPT should finally understand the sentence.
        </Paragraph>

        <Paragraph>But there is still one problem left.</Paragraph>

        <Quote>Every word still knows nothing about the other words.</Quote>
      </Section>

      <Divider />

      {/* The Isolation Problem */}
      <Section>
        <SubHeading>Every Word Is an Island</SubHeading>

        <Paragraph>
          After embeddings and positional encoding, every word has been
          processed independently. Each word sits inside its own bubble, knowing
          only about itself.
        </Paragraph>

        <InfoBox title='Inside GPT Right Now: "The dog is very cute"'>
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 460 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-lg h-auto"
            >
              {[
                {
                  x: 14,
                  word: "The",
                  fill: "#F8FAFC",
                  stroke: "#E2E8F0",
                  tc: "#64748B",
                },
                {
                  x: 102,
                  word: "dog",
                  fill: "#F0FDF4",
                  stroke: "#BBF7D0",
                  tc: "#15803D",
                },
                {
                  x: 190,
                  word: "is",
                  fill: "#F8FAFC",
                  stroke: "#E2E8F0",
                  tc: "#64748B",
                },
                {
                  x: 278,
                  word: "very",
                  fill: "#FFF7ED",
                  stroke: "#FED7AA",
                  tc: "#C2410C",
                },
                {
                  x: 366,
                  word: "cute",
                  fill: "#FDF4FF",
                  stroke: "#E9D5FF",
                  tc: "#7E22CE",
                },
              ].map(({ x, word, fill, stroke, tc }) => (
                <g key={word}>
                  <circle
                    cx={x + 40}
                    cy="80"
                    r="36"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="2"
                    strokeDasharray="5 3"
                  />
                  <text
                    x={x + 40}
                    y="75"
                    textAnchor="middle"
                    fill={tc}
                    fontSize="13"
                    fontWeight="700"
                  >
                    {word}
                  </text>
                  <text
                    x={x + 40}
                    y="92"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="9"
                  >
                    isolated
                  </text>
                </g>
              ))}

              {[57, 145, 233, 321].map((cx) => (
                <g key={cx}>
                  <line
                    x1={cx - 7}
                    y1="73"
                    x2={cx + 7}
                    y2="87"
                    stroke="#FCA5A5"
                    strokeWidth="2"
                  />
                  <line
                    x1={cx + 7}
                    y1="73"
                    x2={cx - 7}
                    y2="87"
                    stroke="#FCA5A5"
                    strokeWidth="2"
                  />
                </g>
              ))}

              <text
                x="230"
                y="148"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="11"
                fontStyle="italic"
              >
                Each word is inside its own bubble. No communication allowed.
              </text>
              <text
                x="230"
                y="166"
                textAnchor="middle"
                fill="#FCA5A5"
                fontSize="11"
                fontWeight="600"
              >
                Words cannot see each other yet
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          "dog" knows it is an animal. "cute" knows it describes something
          attractive. But "dog" has no idea that "cute" is even in the same
          sentence — and "cute" does not know it is describing "dog."
        </Paragraph>

        <Quote>
          Words know what they mean individually. They do not yet know how they
          relate to each other.
        </Quote>
      </Section>

      <Divider />

      {/* Classroom Analogy */}
      <Section>
        <SubHeading>The Silent Classroom</SubHeading>

        <Paragraph>
          Imagine five students sitting in a classroom with one strict rule —
          nobody is allowed to talk to anyone else.
        </Paragraph>

        <InfoBox title="Before: No Communication">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-md h-auto"
            >
              {[
                { cx: 80, cy: 68, name: "Alice", emoji: "👧" },
                { cx: 200, cy: 68, name: "Bob", emoji: "👦" },
                { cx: 320, cy: 68, name: "Charlie", emoji: "👨" },
                { cx: 130, cy: 148, name: "Emma", emoji: "👩" },
                { cx: 270, cy: 148, name: "David", emoji: "👨" },
              ].map(({ cx, cy, name, emoji }) => (
                <g key={name}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="36"
                    fill="#F8FAFC"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    strokeDasharray="5 3"
                  />
                  <text x={cx} y={cy - 6} textAnchor="middle" fontSize="18">
                    {emoji}
                  </text>
                  <text
                    x={cx}
                    y={cy + 13}
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {name}
                  </text>
                </g>
              ))}
              {[
                { x: 140, y: 60 },
                { x: 260, y: 60 },
              ].map(({ x, y }) => (
                <g key={x}>
                  <circle cx={x} cy={y} r="11" fill="#FEE2E2" />
                  <text x={x} y={y + 4} textAnchor="middle" fontSize="11">
                    🚫
                  </text>
                </g>
              ))}
              <text
                x="200"
                y="192"
                textAnchor="middle"
                fill="#EF4444"
                fontSize="11"
                fontWeight="600"
              >
                Can they solve a group project? No.
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Now imagine the rule is lifted. Everyone can finally talk to everyone.
        </Paragraph>

        <InfoBox title="After: Free Communication">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 400 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-md h-auto"
            >
              {/* connection lines behind bubbles */}
              {[
                [80, 70, 200, 70],
                [200, 70, 320, 70],
                [80, 70, 130, 148],
                [80, 70, 270, 148],
                [200, 70, 130, 148],
                [200, 70, 270, 148],
                [320, 70, 130, 148],
                [320, 70, 270, 148],
                [130, 148, 270, 148],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#A7F3D0"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  opacity="0.9"
                />
              ))}
              {[
                { cx: 80, cy: 70, name: "Alice", emoji: "👧" },
                { cx: 200, cy: 70, name: "Bob", emoji: "👦" },
                { cx: 320, cy: 70, name: "Charlie", emoji: "👨" },
                { cx: 130, cy: 148, name: "Emma", emoji: "👩" },
                { cx: 270, cy: 148, name: "David", emoji: "👨" },
              ].map(({ cx, cy, name, emoji }) => (
                <g key={name}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="36"
                    fill="#F0FDF4"
                    stroke="#6EE7B7"
                    strokeWidth="2"
                  />
                  <text x={cx} y={cy - 6} textAnchor="middle" fontSize="18">
                    {emoji}
                  </text>
                  <text
                    x={cx}
                    y={cy + 13}
                    textAnchor="middle"
                    fill="#15803D"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {name}
                  </text>
                </g>
              ))}
              <text
                x="200"
                y="200"
                textAnchor="middle"
                fill="#15803D"
                fontSize="11"
                fontWeight="600"
              >
                ✓ Now they can solve the project together
              </text>
            </svg>
          </div>
        </InfoBox>

        <Quote>
          This is exactly what happens inside GPT — and the component that makes
          it possible is called the Transformer.
        </Quote>
      </Section>

      <Divider />

      {/* Words Start Talking */}
      <Section>
        <SubHeading>Words Start Talking to Each Other</SubHeading>

        <Paragraph>
          Inside the Transformer, every word is allowed to look at every other
          word and exchange information. Let's see what that looks like for our
          sentence.
        </Paragraph>

        <InfoBox title='"The dog is very cute" — After the Transformer'>
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 460 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-lg h-auto"
            >
              {(() => {
                const words = [
                  {
                    cx: 54,
                    cy: 88,
                    word: "The",
                    fill: "#F8FAFC",
                    stroke: "#CBD5E1",
                    tc: "#64748B",
                  },
                  {
                    cx: 142,
                    cy: 88,
                    word: "dog",
                    fill: "#F0FDF4",
                    stroke: "#6EE7B7",
                    tc: "#15803D",
                  },
                  {
                    cx: 230,
                    cy: 88,
                    word: "is",
                    fill: "#F8FAFC",
                    stroke: "#CBD5E1",
                    tc: "#64748B",
                  },
                  {
                    cx: 318,
                    cy: 88,
                    word: "very",
                    fill: "#FFF7ED",
                    stroke: "#FDBA74",
                    tc: "#C2410C",
                  },
                  {
                    cx: 406,
                    cy: 88,
                    word: "cute",
                    fill: "#FDF4FF",
                    stroke: "#D8B4FE",
                    tc: "#7E22CE",
                  },
                ];
                const connections = [
                  { from: 1, to: 4, color: "#A78BFA", width: 3, dash: "" },
                  { from: 3, to: 4, color: "#FCA5A5", width: 2, dash: "" },
                  { from: 0, to: 1, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 1, to: 2, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 2, to: 3, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 0, to: 4, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 0, to: 2, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 1, to: 3, color: "#CBD5E1", width: 1, dash: "4 3" },
                  { from: 2, to: 4, color: "#CBD5E1", width: 1, dash: "4 3" },
                ];
                return (
                  <>
                    {connections.map(({ from, to, color, width, dash }, i) => (
                      <line
                        key={i}
                        x1={words[from].cx}
                        y1={words[from].cy}
                        x2={words[to].cx}
                        y2={words[to].cy}
                        stroke={color}
                        strokeWidth={width}
                        strokeDasharray={dash}
                      />
                    ))}
                    {words.map(({ cx, cy, word, fill, stroke, tc }) => (
                      <g key={word}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="34"
                          fill={fill}
                          stroke={stroke}
                          strokeWidth="2"
                        />
                        <text
                          x={cx}
                          y={cy + 5}
                          textAnchor="middle"
                          fill={tc}
                          fontSize="13"
                          fontWeight="700"
                        >
                          {word}
                        </text>
                      </g>
                    ))}
                  </>
                );
              })()}

              {/* Legend */}
              <line
                x1="30"
                y1="168"
                x2="72"
                y2="168"
                stroke="#A78BFA"
                strokeWidth="3"
              />
              <text
                x="80"
                y="172"
                fill="#7C3AED"
                fontSize="10"
                fontWeight="600"
              >
                dog ↔ cute — strongest (describes it)
              </text>

              <line
                x1="30"
                y1="186"
                x2="72"
                y2="186"
                stroke="#FCA5A5"
                strokeWidth="2"
              />
              <text x="80" y="190" fill="#DC2626" fontSize="10">
                very ↔ cute — intensifies it
              </text>

              <line
                x1="30"
                y1="204"
                x2="72"
                y2="204"
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <text x="80" y="208" fill="#94A3B8" fontSize="10">
                others — light grammatical links
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          The strongest connection is between "dog" and "cute." The Transformer
          figured out that "cute" is describing "dog." "very" connects strongly
          to "cute" too — it intensifies the description. The grammatical words
          like "The" and "is" form lighter, supporting connections.
        </Paragraph>

        <Quote>
          For the first time, GPT understands the sentence as a whole — not just
          as a bag of separate words.
        </Quote>
      </Section>

      <Divider />

      {/* Before vs After */}
      <Section>
        <SubHeading>What Changes After the Transformer</SubHeading>

        <Paragraph>
          Let's look at what the word "dog" knows before and after passing
          through the Transformer.
        </Paragraph>

        <InfoBox title='"dog" — Before vs After'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                Before — Isolated
              </p>
              <div className="space-y-2">
                {[
                  ["✅", "Means: animal", false],
                  ["✅", "Sits at position 1", false],
                  ["❌", "Knows nothing about cute", true],
                  ["❌", "Knows nothing about very", true],
                  ["❌", "Doesn't know it's being described", true],
                ].map(([icon, text, isRed], index) => (
                  <p
                    key={index}
                    className={`text-sm ${isRed ? "text-red-400" : "text-gray-600"}`}
                  >
                    {icon} {text}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3">
                After — Connected
              </p>
              <div className="space-y-2">
                {[
                  "✅ Means: animal",
                  "✅ Sits at position 1",
                  "✅ cute is describing it",
                  "✅ very makes it more intense",
                  "✅ The is its article",
                ].map((line) => (
                  <p key={line} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </InfoBox>

        <Paragraph>
          After the Transformer, "dog" no longer just knows it is an animal. It
          knows it is a <em>very cute</em> animal. The context of the entire
          sentence has been folded into its vector.
        </Paragraph>

        <Quote>
          Every word exits the Transformer holding the context of the entire
          sentence — not just its own definition.
        </Quote>
      </Section>

      <Divider />

      {/* Full Pipeline */}
      <Section>
        <SubHeading>The Growing Pipeline</SubHeading>

        <Paragraph>Here is where we are in GPT's complete process.</Paragraph>

        <InfoBox title="Your Message's Journey">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 300 570"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-xs h-auto"
            >
              {[
                {
                  fill: "#EFF6FF",
                  stroke: "#BFDBFE",
                  label: "Your Message",
                  sub: '"Hey, what\'s up?"',
                  lc: "#1D4ED8",
                  sc: "#3B82F6",
                },
                {
                  fill: "#F5F3FF",
                  stroke: "#DDD6FE",
                  label: "Tokenizer",
                  sub: "Splits into tokens",
                  lc: "#6D28D9",
                  sc: "#7C3AED",
                },
                {
                  fill: "#FFF7ED",
                  stroke: "#FED7AA",
                  label: "Token IDs",
                  sub: "[15496, 644, 338, 510, 30]",
                  lc: "#C2410C",
                  sc: "#EA580C",
                },
                {
                  fill: "#F0FDF4",
                  stroke: "#BBF7D0",
                  label: "Embeddings",
                  sub: "Meaning added",
                  lc: "#15803D",
                  sc: "#16A34A",
                },
                {
                  fill: "#FDF4FF",
                  stroke: "#E9D5FF",
                  label: "Positional Embeddings",
                  sub: "Position added",
                  lc: "#7E22CE",
                  sc: "#9333EA",
                },
                {
                  fill: "#FFF1F2",
                  stroke: "#FECDD3",
                  label: "Transformer",
                  sub: "Words communicate ← NEW",
                  lc: "#BE123C",
                  sc: "#E11D48",
                },
              ].map(({ fill, stroke, label, sub, lc, sc }, i) => (
                <g key={i}>
                  <rect
                    x="20"
                    y={i * 90 + 10}
                    width="260"
                    height="68"
                    rx="12"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.5"
                  />
                  <text
                    x="38"
                    y={i * 90 + 38}
                    fill={lc}
                    fontSize="11"
                    fontWeight="800"
                  >
                    ✅
                  </text>
                  <text
                    x="58"
                    y={i * 90 + 38}
                    fill={lc}
                    fontSize="12"
                    fontWeight="700"
                  >
                    {label}
                  </text>
                  <text
                    x="58"
                    y={i * 90 + 56}
                    fill={sc}
                    fontSize="10"
                    fontStyle="italic"
                  >
                    {sub}
                  </text>
                  {i < 5 && (
                    <>
                      <line
                        x1="150"
                        y1={i * 90 + 78}
                        x2="150"
                        y2={i * 90 + 98}
                        stroke="#CBD5E1"
                        strokeWidth="2"
                      />
                      <polygon
                        points={`144,${i * 90 + 96} 150,${i * 90 + 108} 156,${i * 90 + 96}`}
                        fill="#CBD5E1"
                      />
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          GPT has now solved meaning, order, and relationships between words.
          But one fascinating question remains.
        </Paragraph>

        <InfoBox title="The Next Question">
          <p className="text-sm text-gray-700 py-1">
            When "cute" looks at the other words — how does it decide that "dog"
            matters most and "is" barely matters at all?
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            How does GPT decide which words to focus on?
          </p>
        </InfoBox>

        <Paragraph>
          That decision is made using one of the most revolutionary ideas in all
          of artificial intelligence.
        </Paragraph>

        <InfoBox title="Coming Up Next">
          Chapter 6 — Attention: How GPT Decides What to Focus On
        </InfoBox>
      </Section>
    </>
  );
};

export default Chapter05;
