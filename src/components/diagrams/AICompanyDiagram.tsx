import {
  BrainCircuit,
  Building2,
  MonitorSmartphone,
} from "lucide-react";

const AICompanyDiagram = () => {
  return (
    <div className="mx-auto mt-10 max-w-5xl">

      {/* Company */}

      <div className="flex justify-center">
        <div
          className="
          flex items-center gap-3
          rounded-2xl
          bg-slate-900
          px-8
          py-5
          text-white
          shadow-xl
          "
        >
          <Building2 className="h-7 w-7" />

          <span className="text-xl font-semibold">
            AI Company
          </span>
        </div>
      </div>

      {/* Vertical Line */}

      <div className="mx-auto h-12 w-px bg-stone-400" />

      {/* Horizontal Line */}

      <div className="mx-auto h-px max-w-xl bg-stone-400" />

      {/* Small Vertical Lines */}

      <div className="mx-auto flex max-w-xl justify-between px-16">
        <div className="h-8 w-px bg-stone-400" />
        <div className="h-8 w-px bg-stone-400" />
      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {/* ML */}

        <div
          className="
          rounded-3xl
          border
          border-blue-100
          bg-blue-50
          p-8
          shadow-sm
          "
        >
          <div className="mb-6 flex justify-center">
            <div
              className="
              flex h-20 w-20
              items-center
              justify-center
              rounded-full
              bg-blue-100
              "
            >
              <BrainCircuit
                className="h-10 w-10 text-blue-600"
              />
            </div>
          </div>

          <h3 className="text-center text-2xl font-bold">
            Machine Learning
            <br />
            Engineers
          </h3>

          <p className="mt-2 text-center font-medium text-stone-600">
            (Build the Brain)
          </p>

          <p className="mt-6 text-center leading-7 text-stone-700">
            They build the intelligence and train
            the language model.
          </p>
        </div>

        {/* App */}

        <div
          className="
          rounded-3xl
          border
          border-green-100
          bg-green-50
          p-8
          shadow-sm
          "
        >
          <div className="mb-6 flex justify-center">
            <div
              className="
              flex h-20 w-20
              items-center
              justify-center
              rounded-full
              bg-green-100
              "
            >
              <MonitorSmartphone
                className="h-10 w-10 text-green-600"
              />
            </div>
          </div>

          <h3 className="text-center text-2xl font-bold">
            Application
            <br />
            Engineers
          </h3>

          <p className="mt-2 text-center font-medium text-stone-600">
            (Build the Product)
          </p>

          <p className="mt-6 text-center leading-7 text-stone-700">
            They build the application and
            user experience.
          </p>
        </div>

      </div>

    </div>
  );
};

export default AICompanyDiagram;