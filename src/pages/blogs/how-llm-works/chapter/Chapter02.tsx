import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Heading from "@/components/ui/Heading";
import InfoBox from "@/components/ui/InfoBox";
import Paragraph from "@/components/ui/Paragraph";
import Quote from "@/components/ui/Quote";
import Section from "@/components/ui/Section";
import SubHeading from "@/components/ui/SubHeading";

const Chapter02 = () => {
  return (
    <>
      {/* Hero */}
      <Section>
        <Badge>Chapter 2</Badge>

        <Heading>From Words to Numbers: How GPT Reads Language</Heading>

        <Paragraph>
          When you type "Hey, what's up?" into ChatGPT, you instantly understand
          what it means.
        </Paragraph>

        <Paragraph>GPT doesn't — at least not right away.</Paragraph>

        <Paragraph>
          GPT is a computer program. And computers don't understand English,
          Hindi, Odia, or any human language.
        </Paragraph>

        <Quote>Computers only understand numbers.</Quote>

        <Paragraph>
          So before GPT can think about your question, it must first translate
          your words into numbers. Every single conversation starts with this
          step — no exceptions.
        </Paragraph>
      </Section>

      <Divider />

      {/* The Core Problem */}
      <Section>
        <SubHeading>What GPT Actually Sees</SubHeading>

        <Paragraph>
          To a computer, the sentence <strong>"Hey, what's up?"</strong> is just
          a string of characters — nothing more.
        </Paragraph>

        <InfoBox title="What the Computer Sees">
          <div className="font-mono text-center tracking-widest leading-loose py-3 text-lg text-gray-700">
            H &nbsp; e &nbsp; y &nbsp;&nbsp; w &nbsp; h &nbsp; a &nbsp; t &nbsp;
            ' &nbsp; s &nbsp;&nbsp; u &nbsp; p &nbsp; ?
          </div>
          <p className="text-center text-sm text-gray-400 italic mt-1">
            Just symbols. No meaning. Not yet.
          </p>
        </InfoBox>

        <Paragraph>
          The computer doesn't know "Hey" is a greeting. It doesn't know "What's
          up?" is asking how someone is doing. To it, they are simply symbols on
          a screen.
        </Paragraph>

        <Paragraph>
          To make sense of this, GPT needs a translator — something that
          converts human language into numbers it can work with.
        </Paragraph>

        <Quote>That translator is called the Tokenizer.</Quote>
      </Section>

      <Divider />

      {/* What Is a Tokenizer */}
      <Section>
        <SubHeading>What Is a Tokenizer?</SubHeading>

        <Paragraph>
          The tokenizer is the very first component every message passes
          through. It does one job:
        </Paragraph>

        <Quote>
          Break your sentence into small pieces, then give each piece a number.
        </Quote>

        <Paragraph>
          Those pieces are called <strong>tokens</strong>. And each token gets a
          unique number called a <strong>token ID</strong>.
        </Paragraph>

        <InfoBox title="The Journey of Your Message">
          <div className="flex justify-center my-4">
            <svg
              width="100%"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-xs h-auto"
            >
              {/* Step 1 */}
              <rect
                x="50"
                y="10"
                width="200"
                height="46"
                rx="10"
                fill="#EFF6FF"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
              <text
                x="150"
                y="30"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="12"
                fontWeight="700"
              >
                Your Message
              </text>
              <text
                x="150"
                y="47"
                textAnchor="middle"
                fill="#3B82F6"
                fontSize="11"
                fontStyle="italic"
              >
                "Hey, what's up?"
              </text>

              {/* Arrow */}
              <line
                x1="150"
                y1="56"
                x2="150"
                y2="78"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="144,76 150,88 156,76" fill="#CBD5E1" />

              {/* Step 2 */}
              <rect
                x="50"
                y="88"
                width="200"
                height="46"
                rx="10"
                fill="#F5F3FF"
                stroke="#DDD6FE"
                strokeWidth="1.5"
              />
              <text
                x="150"
                y="108"
                textAnchor="middle"
                fill="#6D28D9"
                fontSize="12"
                fontWeight="700"
              >
                Tokenizer
              </text>
              <text
                x="150"
                y="125"
                textAnchor="middle"
                fill="#7C3AED"
                fontSize="11"
              >
                Splits into pieces
              </text>

              {/* Arrow */}
              <line
                x1="150"
                y1="134"
                x2="150"
                y2="156"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="144,154 150,166 156,154" fill="#CBD5E1" />

              {/* Step 3 */}
              <rect
                x="50"
                y="166"
                width="200"
                height="46"
                rx="10"
                fill="#F0FDF4"
                stroke="#BBF7D0"
                strokeWidth="1.5"
              />
              <text
                x="150"
                y="186"
                textAnchor="middle"
                fill="#15803D"
                fontSize="12"
                fontWeight="700"
              >
                Tokens
              </text>
              <text
                x="150"
                y="203"
                textAnchor="middle"
                fill="#16A34A"
                fontSize="11"
              >
                "Hey" · "what" · "'s" · "up" · "?"
              </text>

              {/* Arrow */}
              <line
                x1="150"
                y1="212"
                x2="150"
                y2="234"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <polygon points="144,232 150,244 156,232" fill="#CBD5E1" />

              {/* Step 4 */}
              <rect
                x="50"
                y="244"
                width="200"
                height="46"
                rx="10"
                fill="#FFF7ED"
                stroke="#FED7AA"
                strokeWidth="1.5"
              />
              <text
                x="150"
                y="264"
                textAnchor="middle"
                fill="#C2410C"
                fontSize="12"
                fontWeight="700"
              >
                Token IDs (Numbers)
              </text>
              <text
                x="150"
                y="281"
                textAnchor="middle"
                fill="#EA580C"
                fontSize="11"
                fontFamily="monospace"
              >
                [15496, 644, 338, 510, 30]
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          At the end of this process, your sentence has been fully converted
          into a list of numbers. That's what GPT actually works with.
        </Paragraph>
      </Section>

      <Divider />

      {/* Are Tokens the Same as Words */}
      <Section>
        <SubHeading>Are Tokens Just Words?</SubHeading>

        <Paragraph>
          Most people assume the tokenizer simply splits text by spaces — one
          word, one token. That's a reasonable guess.
        </Paragraph>

        <Paragraph>But real language is messier than that.</Paragraph>

        <Paragraph>Consider these examples:</Paragraph>

        <InfoBox title="How the Tokenizer Actually Splits">
          <div className="space-y-5 py-2">
            {/* playing */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="font-mono text-base font-semibold text-gray-800 w-44 shrink-0">
                playing
              </span>
              <span className="text-gray-400 hidden sm:block">→</span>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-sm font-mono px-3 py-1 rounded-full">
                  play
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-mono px-3 py-1 rounded-full">
                  ing
                </span>
              </div>
            </div>

            {/* unbelievable */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="font-mono text-base font-semibold text-gray-800 w-44 shrink-0">
                unbelievable
              </span>
              <span className="text-gray-400 hidden sm:block">→</span>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-purple-100 text-purple-800 text-sm font-mono px-3 py-1 rounded-full">
                  un
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-mono px-3 py-1 rounded-full">
                  believe
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-mono px-3 py-1 rounded-full">
                  able
                </span>
              </div>
            </div>

            {/* don't */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="font-mono text-base font-semibold text-gray-800 w-44 shrink-0">
                don't
              </span>
              <span className="text-gray-400 hidden sm:block">→</span>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-green-100 text-green-800 text-sm font-mono px-3 py-1 rounded-full">
                  don
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-mono px-3 py-1 rounded-full">
                  't
                </span>
              </div>
            </div>

            {/* emoji */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="font-mono text-base font-semibold text-gray-800 w-44 shrink-0">
                😀🔥
              </span>
              <span className="text-gray-400 hidden sm:block">→</span>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-orange-100 text-orange-800 text-sm font-mono px-3 py-1 rounded-full">
                  😀
                </span>
                <span className="bg-orange-100 text-orange-800 text-sm font-mono px-3 py-1 rounded-full">
                  🔥
                </span>
              </div>
            </div>
          </div>
        </InfoBox>

        <Paragraph>
          The tokenizer is not trying to understand meaning — it's just finding
          the best way to break text into known, reusable pieces. This is much
          smarter than splitting by spaces alone.
        </Paragraph>

        <Quote>
          Instead of memorizing every possible word, GPT stores pieces of words.
        </Quote>
      </Section>

      <Divider />

      {/* The Vocabulary */}
      <Section>
        <SubHeading>The Vocabulary: GPT's Giant Dictionary</SubHeading>

        <Paragraph>
          During training, GPT builds a <strong>vocabulary</strong> — a fixed
          list of every token it knows, each assigned a unique number.
        </Paragraph>

        <InfoBox title="A Small Sample of the Vocabulary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-6 font-semibold text-gray-500 uppercase text-xs tracking-wider">
                    Token
                  </th>
                  <th className="text-right py-2 font-semibold text-gray-500 uppercase text-xs tracking-wider">
                    Token ID
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Hello", "15496"],
                  ["buddy", "12567"],
                  ["play", "842"],
                  ["ing", "319"],
                  ["un", "902"],
                  ["believe", "4511"],
                  ["able", "299"],
                ].map(([token, id]) => (
                  <tr key={token}>
                    <td className="py-2 pr-6 font-mono text-blue-700">
                      {token}
                    </td>
                    <td className="py-2 text-right font-mono text-orange-600">
                      {id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 italic mt-3">
            GPT's real vocabulary contains around 50,000 tokens like these.
          </p>
        </InfoBox>

        <Paragraph>
          When your message arrives, the tokenizer simply looks up each token in
          this table and replaces it with its ID number.
        </Paragraph>

        <InfoBox title='How "Hello buddy" Becomes Numbers'>
          <div className="flex flex-col gap-3 py-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">
                Hello
              </span>
              <span className="text-gray-400">→</span>
              <span className="font-mono bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold">
                15496
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">
                buddy
              </span>
              <span className="text-gray-400">→</span>
              <span className="font-mono bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold">
                12567
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-gray-500 text-sm">Final result:</span>
              <span className="font-mono bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-bold">
                [15496, 12567]
              </span>
            </div>
          </div>
        </InfoBox>
      </Section>

      <Divider />

      {/* What If GPT Hasn't Seen the Word */}
      <Section>
        <SubHeading>What If GPT Has Never Seen a Word Before?</SubHeading>

        <Paragraph>
          Imagine someone types a word that has never appeared in any text GPT
          was trained on:
        </Paragraph>

        <Quote>hypercomputationalization</Quote>

        <Paragraph>Does GPT fail? No.</Paragraph>

        <Paragraph>
          The tokenizer breaks it into smaller pieces that already exist in the
          vocabulary:
        </Paragraph>

        <InfoBox title="Breaking Down an Unknown Word">
          <div className="flex gap-2 flex-wrap py-2">
            {["hyper", "computation", "al", "ization"].map((piece) => (
              <span
                key={piece}
                className="bg-purple-100 text-purple-800 text-sm font-mono px-3 py-1 rounded-full"
              >
                {piece}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Each piece already exists. So GPT can still process the word — even
            though it's never seen it whole.
          </p>
        </InfoBox>

        <Paragraph>
          The same applies to typos, new slang, technical terms, emojis, and
          even code. The tokenizer always finds a way to break it into known
          pieces.
        </Paragraph>

        <InfoBox title="GPT Handles All of This">
          <div className="grid grid-cols-2 gap-3 py-2">
            {[
              { label: "Typos", example: "Helo → He + lo" },
              { label: "Emojis", example: "🔥 → its own token" },
              { label: "Code", example: "console.log → tokens" },
              { label: "Any language", example: "नमस्ते → tokens" },
            ].map(({ label, example }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="font-mono text-sm text-gray-700">{example}</p>
              </div>
            ))}
          </div>
        </InfoBox>
      </Section>

      <Divider />

      {/* What's Next */}
      <Section>
        <SubHeading>So What Does GPT Do With These Numbers?</SubHeading>

        <Paragraph>
          After tokenization, your sentence looks something like this:
        </Paragraph>

        <InfoBox title="">
          <p className="text-center font-mono text-xl font-bold text-orange-600 py-4">
            [15496, 644, 338, 510, 30]
          </p>
          <p className="text-center text-sm text-gray-400 italic">
            "Hey, what's up?" — fully converted to numbers
          </p>
        </InfoBox>

        <Paragraph>
          But here's the problem: a number by itself has no meaning.
        </Paragraph>

        <Paragraph>
          GPT now knows that token <strong>15496</strong> represents "Hello" —
          but it still doesn't know what "Hello" <em>means</em>. It doesn't know
          that it's a greeting. It doesn't know it's friendly. It doesn't know
          it's similar to "Hi" or "Hey."
        </Paragraph>

        <Quote>
          To truly understand language, numbers need to carry meaning — not just
          identity.
        </Quote>

        <Paragraph>
          That's exactly what the next chapter is about. GPT solves this with a
          concept called <strong>Embeddings</strong> — a way to turn token IDs
          into rich, meaningful representations that the model can actually
          reason with.
        </Paragraph>

        <InfoBox title="Coming Up Next">
          Chapter 3 — Embeddings: Giving Numbers Meaning
        </InfoBox>
      </Section>
    </>
  );
};

export default Chapter02;
