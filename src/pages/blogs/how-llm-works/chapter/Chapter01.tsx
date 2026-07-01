import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Heading from "@/components/ui/Heading";
import InfoBox from "@/components/ui/InfoBox";
import Paragraph from "@/components/ui/Paragraph";
import Quote from "@/components/ui/Quote";
import Section from "@/components/ui/Section";
import SubHeading from "@/components/ui/SubHeading";
import { FileText, Code2, Layers, TrendingUp, Bot, Brain } from "lucide-react";

const Chapter01 = () => {
  return (
    <>
      {/* Hero */}

      <Section>
        <Badge>Chapter 1</Badge>

        <Heading>GPT vs ChatGPT: What Are We Actually Using?</Heading>

        <Paragraph>
          Before we learn how ChatGPT works internally, we first need to answer
          one simple question:
        </Paragraph>

        <Quote>What exactly are we using when we open ChatGPT?</Quote>

        <Paragraph>
          Many people use the following terms interchangeably:
        </Paragraph>

        <div className="mt-6 flex flex-wrap gap-3">
          <Badge>AI</Badge>
          <Badge>Generative AI</Badge>
          <Badge>LLM</Badge>
          <Badge>GPT</Badge>
          <Badge>ChatGPT</Badge>
        </div>

        <Paragraph>
          Although these terms are related, they do not mean the same thing.
          Understanding the difference now will make the rest of this book much
          easier.
        </Paragraph>
      </Section>

      <Divider />

      {/* AI Company */}

      <Section>
        <SubHeading>Imagine You're Building an AI Company</SubHeading>

        <Paragraph>
          Suppose tomorrow you decide to build your own AI company. To create a
          product similar to ChatGPT, you would need two completely different
          engineering teams.
        </Paragraph>

        <InfoBox title="">
          <div className="flex justify-center my-6">
            <svg
              width="100%"
              height="260"
              viewBox="0 0 620 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full h-auto"
            >
              {/* Title */}
              <text
                x="310"
                y="35"
                textAnchor="middle"
                fill="#111"
                fontSize="22"
                fontWeight="700"
              >
                Two Engineering Teams
              </text>

              {/* AI Company */}
              <text
                x="310"
                y="75"
                textAnchor="middle"
                fill="#333"
                fontSize="18"
                fontWeight="600"
              >
                AI Company
              </text>
              <line
                x1="310"
                y1="85"
                x2="310"
                y2="115"
                stroke="#666"
                strokeWidth="3"
              />

              {/* Horizontal line */}
              <line
                x1="140"
                y1="115"
                x2="480"
                y2="115"
                stroke="#666"
                strokeWidth="3"
              />

              {/* Left branch */}
              <line
                x1="140"
                y1="115"
                x2="140"
                y2="165"
                stroke="#666"
                strokeWidth="3"
              />
              <polygon points="135,165 140,175 145,165" fill="#333" />

              {/* Right branch */}
              <line
                x1="480"
                y1="115"
                x2="480"
                y2="165"
                stroke="#666"
                strokeWidth="3"
              />
              <polygon points="475,165 480,175 485,165" fill="#333" />

              {/* ML Engineers */}
              <text
                x="140"
                y="200"
                textAnchor="middle"
                fill="#111"
                fontSize="15"
                fontWeight="600"
              >
                Machine Learning Engineers
              </text>
              <text
                x="140"
                y="220"
                textAnchor="middle"
                fill="#666"
                fontSize="13"
              >
                (Build the Brain)
              </text>

              {/* Application Engineers */}
              <text
                x="480"
                y="200"
                textAnchor="middle"
                fill="#111"
                fontSize="15"
                fontWeight="600"
              >
                Application Engineers
              </text>
              <text
                x="480"
                y="220"
                textAnchor="middle"
                fill="#666"
                fontSize="13"
              >
                (Build the Product)
              </text>
            </svg>
          </div>
        </InfoBox>

        <Paragraph>
          Although both teams work on the same product, their responsibilities
          are completely different.
        </Paragraph>
      </Section>

      <Divider />

      {/* ML Engineers */}

      <Section>
        <SubHeading>Team 1 — Machine Learning Engineers</SubHeading>

        <Paragraph>
          Machine Learning Engineers build the intelligence itself. Their job is
          not to build a chatbot or a website. Instead, they focus on making the
          model understand language.
        </Paragraph>

        <InfoBox title="Questions They Solve">
          <ul className="list-disc space-y-2 pl-6">
            <li>How should the model understand language?</li>
            <li>How can the model learn from billions of documents?</li>
            <li>How do embeddings work?</li>
            <li>How does attention work?</li>
            <li>How do we train the model efficiently?</li>
            <li>How do we reduce prediction errors?</li>
          </ul>
        </InfoBox>

        <Paragraph>
          Their final output is a trained Large Language Model (LLM).
        </Paragraph>

        <Quote>They build the brain—not the application.</Quote>

        <InfoBox title="2. Team 1 — Machine Learning Engineers">
          <div className="my-8 px-4">
            <p className="text-center text-sm text-gray-600 mb-8 max-w-md mx-auto">
              They build the intelligence itself (the model).
            </p>

            {/* Flow Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 md:left-0 md:top-1/2 w-0.5 md:w-full h-full md:h-0.5 bg-gray-200 -z-10" />

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 w-full md:w-auto">
                {/* Text Data */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3 border border-blue-200">
                    <FileText className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="font-medium text-sm">Text Data</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-gray-800 hidden md:block -mt-2">
                  →
                </div>
                <div className="text-4xl text-gray-800 md:hidden rotate-90 -mt-1">
                  →
                </div>

                {/* Tokenizer */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-3 border border-sky-200">
                    <Code2 className="w-7 h-7 text-sky-600" />
                  </div>
                  <p className="font-medium text-sm">Tokenizer</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-gray-800 hidden md:block -mt-2">
                  →
                </div>
                <div className="text-4xl text-gray-800 md:hidden rotate-90 -mt-1">
                  →
                </div>

                {/* Embeddings */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-3 border border-emerald-200">
                    <Layers className="w-7 h-7 text-emerald-600" />
                  </div>
                  <p className="font-medium text-sm">Embeddings</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-gray-800 hidden md:block -mt-2">
                  →
                </div>
                <div className="text-4xl text-gray-800 md:hidden rotate-90 -mt-1">
                  →
                </div>

                {/* Transformer */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3 border border-amber-200">
                    <Brain className="w-7 h-7 text-amber-600" />
                  </div>
                  <p className="font-medium text-sm">Transformer</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-gray-800 hidden md:block -mt-2">
                  →
                </div>
                <div className="text-4xl text-gray-800 md:hidden rotate-90 -mt-1">
                  →
                </div>

                {/* Training */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3 border border-orange-200">
                    <TrendingUp className="w-7 h-7 text-orange-600" />
                  </div>
                  <p className="font-medium text-sm">Training</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-gray-800 hidden md:block -mt-2">
                  →
                </div>
                <div className="text-4xl text-gray-800 md:hidden rotate-90 -mt-1">
                  →
                </div>

                {/* GPT Model */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-3 border border-rose-200">
                    <Bot className="w-7 h-7 text-rose-600" />
                  </div>
                  <p className="font-medium text-sm">GPT Model</p>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-10 italic max-w-md mx-auto">
              After months of training on enormous datasets,
              <br />
              the result is a trained language model.
            </p>
          </div>
        </InfoBox>
      </Section>

      <Divider />

      {/* App Engineers */}

      <Section>
        <SubHeading>Team 2 — Application Engineers</SubHeading>

        <Paragraph>
          Once the model is trained, another engineering team takes over.
          Instead of improving the intelligence, they focus on building a
          complete product around it.
        </Paragraph>

        <InfoBox title="Questions They Solve">
          <ul className="list-disc space-y-2 pl-6">
            <li>How do users interact with the model?</li>
            <li>How do we build a chat interface?</li>
            <li>How do we connect company documents?</li>
            <li>How do we search the web?</li>
            <li>How do we generate images?</li>
            <li>How do we use external APIs and tools?</li>
            <li>How do we remember previous conversations?</li>
          </ul>
        </InfoBox>
        <br />
        <InfoBox title="3. Team 2 — Application Engineers">
          <div className="my-10 md:px-4">
            <div className="max-w-2xl mx-auto">
              <img
                src="/blogs/applied_engineer_work_flow.png"
                alt="Team 2 - Application Engineers Architecture"
                className="w-full h-auto rounded-2xl shadow-md border border-gray-100"
              />
            </div>

            <p className="text-center text-xs text-gray-500 mt-6 italic">
              This complete experience is what users know as ChatGPT.
            </p>
          </div>
        </InfoBox>
      </Section>

      <Divider />

      {/* GPT vs ChatGPT */}

      <Section>
        <SubHeading>GPT vs ChatGPT</SubHeading>

        <Paragraph>
          One of the biggest misconceptions is believing that GPT and ChatGPT
          are the same thing. They are not.
        </Paragraph>

        <InfoBox title="Difference">
          <div className="md:my-10 md:px-4">
            <div className="max-w-2xl mx-auto">
              <img
                src="/blogs/chatgpt-vs-gpt-diagram.png"
                alt="Difference between ChatGPT, GPT Model, and Next Token Prediction"
                className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
          </div>
        </InfoBox>

        <Quote>
          GPT is the intelligence. ChatGPT is the application that lets humans
          interact with that intelligence.
        </Quote>

        <Paragraph>
          Without GPT, ChatGPT cannot think. Without ChatGPT, GPT is simply a
          trained model with no user interface.
        </Paragraph>
      </Section>

      <Divider />

      {/* Why It Matters */}

      <Section>
        <SubHeading>Why We Started Here</SubHeading>

        <Paragraph>
          Now that you understand the difference between GPT and ChatGPT, we can
          focus on the part that actually makes all the magic possible—the GPT
          model itself.
          <br />
          <br />
          Throughout the rest of this guide, we'll temporarily ignore the chat
          interface, web search, memory, image generation, and other application
          features.
        </Paragraph>

        <Quote>
          Instead, we'll open the GPT model like engineers and understand what
          happens inside when you send a simple message.
        </Quote>

        <Paragraph>
          By the end, you'll know exactly how a sentence travels through the
          model, how it is transformed into numbers, how those numbers become
          meaningful representations, and how GPT generates a response one token
          at a time.
        </Paragraph>
      </Section>

      <Divider />

      {/* Journey */}

      <Section>
        <SubHeading>Where Our Journey Begins</SubHeading>

        <Paragraph>
          Imagine you open ChatGPT and type just one sentence:
        </Paragraph>

        <Quote>"Hey, what's up?"</Quote>

        <Paragraph>
          To you, it's just four simple words.
          <br />
          To GPT, it's the beginning of a fascinating journey.
        </Paragraph>

        <Paragraph>
          Before the model can understand your message, it must first convert it
          into something a computer can process. It cannot read English
          directly—it only understands numbers. So our next chapter begins with
          a simple but important question:
        </Paragraph>

        <Quote>
          How does a sentence like "Hey, what's up?" become something that GPT
          can understand?
        </Quote>

        <InfoBox title="Note">
          That single question leads us to the first building block of every
          Large Language Model: Tokenization.
        </InfoBox>
      </Section>
    </>
  );
};

export default Chapter01;
