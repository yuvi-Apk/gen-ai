import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Heading from "@/components/ui/Heading";
import InfoBox from "@/components/ui/InfoBox";
import Paragraph from "@/components/ui/Paragraph";
import Quote from "@/components/ui/Quote";
import Section from "@/components/ui/Section";
import SubHeading from "@/components/ui/SubHeading";

const Chapter03 = () => {
  return (
    <>
      {/* Hero */}
      <Section>
        <Badge>Chapter 3</Badge>

        <Heading>Embeddings: Giving Numbers Meaning</Heading>

        <Paragraph>
          In the last chapter, GPT converted your sentence into a list of
          numbers called token IDs.
        </Paragraph>

        <InfoBox title="">
          <p className="text-center font-mono text-xl font-bold text-orange-600 py-4">
            [15496, 644, 338, 510, 30]
          </p>
          <p className="text-center text-sm text-gray-400 italic">
            "Hey, what's up?" — as token IDs
          </p>
        </InfoBox>

        <Paragraph>
          Looks like progress. But there's a problem — a big one.
        </Paragraph>

        <Quote>
          GPT now has numbers. But it still has no idea what those numbers
          actually mean.
        </Quote>
      </Section>

      <Divider />

      {/* The Problem: Numbers Are Just Labels */}
      <Section>
        <SubHeading>Numbers Are Just Labels</SubHeading>

        <Paragraph>
          Think about a football jersey. Lionel Messi wears the number{" "}
          <strong>10</strong>.
        </Paragraph>

        <InfoBox title="What Does the Number Tell You?">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
            {[
              { q: "How fast does Messi run?", a: "❌ No" },
              { q: "Is he a footballer?", a: "❌ No" },
              { q: "What position does he play?", a: "❌ No" },
              { q: "Is he the best player?", a: "❌ No" },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-gray-50 rounded-xl p-3 flex items-start gap-2"
              >
                <span className="text-red-400 font-bold shrink-0">{a}</span>
                <span className="text-sm text-gray-600">{q}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center italic">
            The number <strong>10</strong> only identifies him. It describes
            nothing about him.
          </p>
        </InfoBox>

        <Paragraph>Token IDs work exactly the same way.</Paragraph>

        <Paragraph>
          When GPT sees token ID <strong>15496</strong>, it knows that token
          exists — but it doesn't know the token is a greeting, that it's
          friendly, or that it's similar to "Hi" or "Hey."
        </Paragraph>

        <Quote>
          A token ID gives GPT identity. It does not give GPT understanding.
        </Quote>
      </Section>

      <Divider />

      {/* The Specific Problem with Similar Words */}
      <Section>
        <SubHeading>The Problem Gets Worse</SubHeading>

        <Paragraph>
          Look at these three words. As humans, we instantly know they mean
          almost the same thing.
        </Paragraph>

        <InfoBox title="Three Greetings — Three Random Numbers">
          <div className="flex flex-col gap-3 py-2">
            {[
              { word: "Hello", id: "15496", color: "blue" },
              { word: "Hi", id: "872", color: "purple" },
              { word: "Hey", id: "644", color: "green" },
            ].map(({ word, id, color }) => (
              <div key={word} className="flex items-center gap-3 flex-wrap">
                <span
                  className={`font-mono bg-${color}-50 text-${color}-800 px-4 py-1.5 rounded-lg text-sm font-semibold w-20 text-center`}
                >
                  {word}
                </span>
                <span className="text-gray-400">→</span>
                <span className="font-mono bg-orange-50 text-orange-700 px-4 py-1.5 rounded-lg text-sm font-bold">
                  {id}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">
            Is 15496 closer to 872 than to 644? There's no way to tell. The
            numbers have no relationship with each other.
          </p>
        </InfoBox>

        <Paragraph>
          The numbers 15496, 872, and 644 look completely unrelated. Nothing
          about them hints that all three words are greetings.
        </Paragraph>

        <Paragraph>
          Now imagine the same problem across an entire language — thousands of
          words, all with random IDs, none of them connected.
        </Paragraph>

        <Quote>GPT needs more than identity. It needs meaning.</Quote>
      </Section>

      <Divider />

      {/* The Brilliant Idea: Embeddings */}
      <Section>
        <SubHeading>The Brilliant Idea</SubHeading>

        <Paragraph>
          Instead of representing every word with <strong>one number</strong>...
          what if we used <strong>hundreds of numbers</strong>?
        </Paragraph>

        <Paragraph>
          Not to identify the word — but to <em>describe</em> it.
        </Paragraph>

        <InfoBox title="From One Number to Many">
          <div className="flex flex-col gap-6 py-2">
            {/* Before */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Before — Token ID only
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono bg-blue-50 text-blue-800 px-4 py-1.5 rounded-lg text-sm font-semibold">
                  Hello
                </span>
                <span className="text-gray-400">→</span>
                <span className="font-mono bg-orange-50 text-orange-700 px-4 py-1.5 rounded-lg text-sm font-bold">
                  15496
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* After */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                After — Embedding Vector
              </p>
              <div className="flex items-start gap-3 flex-wrap">
                <span className="font-mono bg-blue-50 text-blue-800 px-4 py-1.5 rounded-lg text-sm font-semibold">
                  Hello
                </span>
                <span className="text-gray-400 mt-1.5">→</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "0.18",
                    "-0.62",
                    "0.91",
                    "-0.07",
                    "0.44",
                    "...",
                    "768 values",
                  ].map((v, i) => (
                    <span
                      key={i}
                      className={`font-mono text-xs px-2 py-1 rounded ${
                        v === "..."
                          ? "text-gray-400"
                          : v === "768 values"
                            ? "bg-gray-100 text-gray-500 italic"
                            : "bg-green-50 text-green-700"
                      }`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 italic mt-3">
                This list of numbers is called an{" "}
                <strong>Embedding Vector</strong>.
              </p>
            </div>
          </div>
        </InfoBox>

        <Paragraph>
          Each number in the vector captures something about the word — its
          feeling, its context, what it's typically used near. Not as a label,
          but as a rich description.
        </Paragraph>

        <Quote>
          Think of an embedding as a word's personality — captured in hundreds
          of numbers.
        </Quote>
      </Section>

      <Divider />

      {/* Similar Words Become Similar Vectors */}
      <Section>
        <SubHeading>Similar Words Cluster Together</SubHeading>

        <Paragraph>
          Here's where it gets beautiful. Once words have embedding vectors, GPT
          can measure how similar two words are by comparing their vectors.
        </Paragraph>

        <Paragraph>
          Words with similar meanings end up with similar vectors. And when you
          plot them on a map, they naturally cluster into neighborhoods.
        </Paragraph>

        <InfoBox title="The Word Map">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 480 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-lg h-auto"
            >
              {/* Background grid lines - subtle */}
              <line
                x1="0"
                y1="180"
                x2="480"
                y2="180"
                stroke="gray"
                strokeWidth="1"
              />
              <line
                x1="240"
                y1="0"
                x2="240"
                y2="360"
                stroke="gray"
                strokeWidth="1"
              />

              {/* ── Greetings cluster ── */}
              <ellipse
                cx="100"
                cy="80"
                rx="78"
                ry="52"
                fill="#EFF6FF"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
              <text
                x="100"
                y="40"
                textAnchor="middle"
                fill="#93C5FD"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
              >
                GREETINGS
              </text>

              <circle cx="78" cy="72" r="4" fill="#3B82F6" />
              <text
                x="78"
                y="66"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="13"
                fontWeight="700"
              >
                Hello
              </text>

              <circle cx="116" cy="80" r="4" fill="#3B82F6" />
              <text
                x="116"
                y="74"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="13"
                fontWeight="700"
              >
                Hi
              </text>

              <circle cx="90" cy="96" r="4" fill="#3B82F6" />
              <text
                x="90"
                y="114"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="13"
                fontWeight="700"
              >
                Hey
              </text>

              {/* ── Animals cluster ── */}
              <ellipse
                cx="340"
                cy="100"
                rx="90"
                ry="60"
                fill="#F0FDF4"
                stroke="#BBF7D0"
                strokeWidth="1.5"
              />
              <text
                x="340"
                y="52"
                textAnchor="middle"
                fill="#86EFAC"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
              >
                ANIMALS
              </text>

              <circle cx="308" cy="88" r="4" fill="#16A34A" />
              <text
                x="308"
                y="82"
                textAnchor="middle"
                fill="#15803D"
                fontSize="13"
                fontWeight="700"
              >
                Dog
              </text>

              <circle cx="356" cy="82" r="4" fill="#16A34A" />
              <text
                x="356"
                y="76"
                textAnchor="middle"
                fill="#15803D"
                fontSize="13"
                fontWeight="700"
              >
                Cat
              </text>

              <circle cx="338" cy="112" r="4" fill="#16A34A" />
              <text
                x="338"
                y="130"
                textAnchor="middle"
                fill="#15803D"
                fontSize="13"
                fontWeight="700"
              >
                Tiger
              </text>

              {/* ── Fruits cluster ── */}
              <ellipse
                cx="130"
                cy="270"
                rx="90"
                ry="56"
                fill="#FFF7ED"
                stroke="#FED7AA"
                strokeWidth="1.5"
              />
              <text
                x="130"
                y="224"
                textAnchor="middle"
                fill="#FDBA74"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
              >
                FRUITS
              </text>

              <circle cx="96" cy="262" r="4" fill="#EA580C" />
              <text
                x="96"
                y="256"
                textAnchor="middle"
                fill="#C2410C"
                fontSize="13"
                fontWeight="700"
              >
                Apple
              </text>

              <circle cx="148" cy="258" r="4" fill="#EA580C" />
              <text
                x="148"
                y="252"
                textAnchor="middle"
                fill="#C2410C"
                fontSize="13"
                fontWeight="700"
              >
                Banana
              </text>

              <circle cx="120" cy="288" r="4" fill="#EA580C" />
              <text
                x="120"
                y="306"
                textAnchor="middle"
                fill="#C2410C"
                fontSize="13"
                fontWeight="700"
              >
                Orange
              </text>

              {/* ── Vehicles cluster ── */}
              <ellipse
                cx="370"
                cy="278"
                rx="86"
                ry="54"
                fill="#F5F3FF"
                stroke="#DDD6FE"
                strokeWidth="1.5"
              />
              <text
                x="370"
                y="234"
                textAnchor="middle"
                fill="#C4B5FD"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
              >
                VEHICLES
              </text>

              <circle cx="340" cy="268" r="4" fill="#7C3AED" />
              <text
                x="340"
                y="262"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="13"
                fontWeight="700"
              >
                Car
              </text>

              <circle cx="388" cy="262" r="4" fill="#7C3AED" />
              <text
                x="388"
                y="256"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="13"
                fontWeight="700"
              >
                Bus
              </text>

              <circle cx="368" cy="290" r="4" fill="#7C3AED" />
              <text
                x="368"
                y="308"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="13"
                fontWeight="700"
              >
                Train
              </text>
            </svg>
          </div>
          <div className="text-center">
            {/* Caption */}
            <span className="text-sm text-gray-600">
              Words with similar meanings cluster naturally — GPT learns this on
              its own.
            </span>
          </div>
        </InfoBox>

        <Paragraph>
          "Hello," "Hi," and "Hey" form one tight cluster. "Dog," "Cat," and
          "Tiger" form another. No human programmed this — GPT discovered these
          relationships by reading billions of sentences.
        </Paragraph>

        <Quote>
          Words that appear in similar situations end up with similar
          embeddings.
        </Quote>
      </Section>

      <Divider />

      {/* The Embedding Matrix */}
      <Section>
        <SubHeading>Where Are These Embeddings Stored?</SubHeading>

        <Paragraph>
          Remember the vocabulary from Chapter 2? Every token had an ID. Now
          imagine another giant table alongside it — the{" "}
          <strong>Embedding Matrix</strong>.
        </Paragraph>

        <InfoBox title="The Lookup Process">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 420 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-md h-auto"
            >
              {/* Token ID box */}
              <rect
                x="10"
                y="85"
                width="110"
                height="50"
                rx="10"
                fill="#FFF7ED"
                stroke="#FED7AA"
                strokeWidth="1.5"
              />
              <text
                x="65"
                y="106"
                textAnchor="middle"
                fill="#92400E"
                fontSize="11"
                fontWeight="700"
              >
                Token ID
              </text>
              <text
                x="65"
                y="124"
                textAnchor="middle"
                fill="#EA580C"
                fontSize="13"
                fontWeight="800"
                fontFamily="monospace"
              >
                15496
              </text>

              {/* Arrow */}
              <line
                x1="120"
                y1="110"
                x2="150"
                y2="110"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="148,104 160,110 148,116" fill="#CBD5E1" />

              {/* Embedding Matrix box */}
              <rect
                x="160"
                y="60"
                width="120"
                height="100"
                rx="10"
                fill="#F5F3FF"
                stroke="#DDD6FE"
                strokeWidth="1.5"
              />
              <text
                x="220"
                y="82"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="10"
                fontWeight="700"
              >
                EMBEDDING
              </text>
              <text
                x="220"
                y="96"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="10"
                fontWeight="700"
              >
                MATRIX
              </text>
              {[100, 114, 128, 142].map((y, i) => (
                <rect
                  key={i}
                  x="175"
                  y={y}
                  width="90"
                  height="9"
                  rx="3"
                  fill={i === 1 ? "#EDE9FE" : "#F3F4F6"}
                  stroke={i === 1 ? "#A78BFA" : "#E5E7EB"}
                  strokeWidth="1"
                />
              ))}
              <text
                x="220"
                y="120"
                textAnchor="middle"
                fill="#7C3AED"
                fontSize="8"
                fontWeight="600"
              >
                ← Hello row
              </text>

              {/* Arrow */}
              <line
                x1="280"
                y1="110"
                x2="310"
                y2="110"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="308,104 320,110 308,116" fill="#CBD5E1" />

              {/* Embedding Vector box */}
              <rect
                x="320"
                y="50"
                width="90"
                height="120"
                rx="10"
                fill="#F0FDF4"
                stroke="#BBF7D0"
                strokeWidth="1.5"
              />
              <text
                x="365"
                y="72"
                textAnchor="middle"
                fill="#15803D"
                fontSize="10"
                fontWeight="700"
              >
                EMBEDDING
              </text>
              <text
                x="365"
                y="84"
                textAnchor="middle"
                fill="#15803D"
                fontSize="10"
                fontWeight="700"
              >
                VECTOR
              </text>
              {["0.18", "-0.62", "0.91", "-0.07", "..."].map((v, i) => (
                <text
                  key={i}
                  x="365"
                  y={102 + i * 14}
                  textAnchor="middle"
                  fill={v === "..." ? "#94A3B8" : "#16A34A"}
                  fontSize="10"
                  fontFamily="monospace"
                >
                  {v}
                </text>
              ))}

              {/* Bottom label */}
              <text
                x="210"
                y="200"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="10"
                fontStyle="italic"
              >
                Token ID → instant lookup → vector of meaning
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Every row in the Embedding Matrix belongs to one token. When GPT sees
          a token ID, it looks up that row instantly — no searching, no
          calculation. Just a lookup.
        </Paragraph>

        <Paragraph>
          The result? A token that was just a number now has a rich vector of
          hundreds of values describing everything GPT knows about it.
        </Paragraph>
      </Section>

      <Divider />

      {/* Who Created These Vectors */}
      <Section>
        <SubHeading>Who Created These Vectors?</SubHeading>

        <Paragraph>Nobody. That's the fascinating part.</Paragraph>

        <Paragraph>
          Engineers did not sit down and manually write descriptions for 50,000
          tokens. When training begins, the embedding matrix starts out nearly
          random — every value is essentially noise.
        </Paragraph>

        <InfoBox title="How Embeddings Are Learned">
          <div className="space-y-4 py-2">
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-0.5 rounded shrink-0">
                1
              </span>
              <p className="text-sm text-gray-700">
                Training starts. All embedding values are random. Nothing means
                anything yet.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-purple-100 text-purple-700 font-bold text-sm px-2 py-0.5 rounded shrink-0">
                2
              </span>
              <p className="text-sm text-gray-700">
                GPT reads billions of sentences. It notices "Hello" and "Hi"
                keep appearing in the same kinds of situations.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-green-100 text-green-700 font-bold text-sm px-2 py-0.5 rounded shrink-0">
                3
              </span>
              <p className="text-sm text-gray-700">
                Slowly, their embedding vectors are adjusted until they look
                similar. "Dog" and "Cat" do the same. "Dog" and "Banana" don't.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-orange-100 text-orange-700 font-bold text-sm px-2 py-0.5 rounded shrink-0">
                4
              </span>
              <p className="text-sm text-gray-700">
                After months of training, the embedding matrix contains a
                complete map of how every token relates to every other token.
              </p>
            </div>
          </div>
        </InfoBox>

        <Paragraph>
          No human told GPT that "Hello" and "Hi" are greetings. It figured that
          out entirely from reading text — the same way a child learns language
          by hearing it used in context.
        </Paragraph>

        <Quote>
          The model discovers the meaning of words by itself, from experience.
        </Quote>
      </Section>

      <Divider />

      {/* The Pipeline So Far */}
      <Section>
        <SubHeading>The Pipeline So Far</SubHeading>

        <Paragraph>
          Let's look at how far your message has traveled inside GPT.
        </Paragraph>

        <InfoBox title="Your Message's Journey">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              viewBox="0 0 300 380"
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
                },
                {
                  y: 100,
                  fill: "#F5F3FF",
                  stroke: "#DDD6FE",
                  label: "Tokenizer",
                  sub: "Splits into pieces",
                  labelColor: "#6D28D9",
                  subColor: "#7C3AED",
                },
                {
                  y: 190,
                  fill: "#FFF7ED",
                  stroke: "#FED7AA",
                  label: "Token IDs",
                  sub: "[15496, 644, 338, 510, 30]",
                  labelColor: "#C2410C",
                  subColor: "#EA580C",
                },
                {
                  y: 280,
                  fill: "#F0FDF4",
                  stroke: "#BBF7D0",
                  label: "Embedding Vectors",
                  sub: "Numbers with meaning",
                  labelColor: "#15803D",
                  subColor: "#16A34A",
                },
              ].map(
                ({ y, fill, stroke, label, sub, labelColor, subColor }, i) => (
                  <g key={i}>
                    <rect
                      x="30"
                      y={y}
                      width="240"
                      height="60"
                      rx="10"
                      fill={fill}
                      stroke={stroke}
                      strokeWidth="1.5"
                    />
                    <text
                      x="150"
                      y={y + 26}
                      textAnchor="middle"
                      fill={labelColor}
                      fontSize="13"
                      fontWeight="700"
                    >
                      {label}
                    </text>
                    <text
                      x="150"
                      y={y + 44}
                      textAnchor="middle"
                      fill={subColor}
                      fontSize="10"
                      fontStyle="italic"
                    >
                      {sub}
                    </text>
                    {i < 3 && (
                      <>
                        <line
                          x1="150"
                          y1={y + 60}
                          x2="150"
                          y2={y + 80}
                          stroke="#CBD5E1"
                          strokeWidth="2"
                        />
                        <polygon
                          points={`144,${y + 78} 150,${y + 90} 156,${y + 78}`}
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
          We've solved a big problem. Token IDs were just labels. Embedding
          vectors now give those labels real meaning.
        </Paragraph>

        <Paragraph>But another challenge remains.</Paragraph>

        <InfoBox title="A Puzzle">
          <div className="space-y-3 py-1">
            <p className="font-mono text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2">
              Dog bites man
            </p>
            <p className="font-mono text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2">
              Man bites dog
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Same words. Same embeddings. But completely different meanings. How
            does GPT tell them apart?
          </p>
        </InfoBox>

        <Paragraph>
          The answer is that embeddings alone aren't enough — word order matters
          too. And that's exactly what the next chapter solves.
        </Paragraph>

        <InfoBox title="Coming Up Next">
          Chapter 4 — Positional Embeddings: Teaching GPT the Order of Words
        </InfoBox>
      </Section>
    </>
  );
};

export default Chapter03;
