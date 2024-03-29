import React from "react";

const Calculator = () => {
  return (
    <section className="p-5 h-auto my-[5rem]">
      <div className="shadow-lg border-2 shadow-gray-400/60 h-full rounded-lg  lg:grid lg:grid-cols-2 ">
        <div className="p-5 h-[45%]  flex flex-col gap-4">
          <h3 className="text-[34px] font-[600]  leading-[37px] lg:links">
            {" "}
            Loan Calculator
          </h3>
          <span className="text-gray-400 italic text-[15px]">
            What could your loan payments look like
          </span>
          <input
            type="text"
            placeholder="Where do you live ?"
            className="border border-gray-50 p-3 h-[50px] w-full bg-transparent rounded-lg "
          />
        </div>

        <div className="lg:flex lg:flex-col lg:gap-5 ">
          <div className="shadow-lg border-b-50 py-5 px-3 lg:shadow-gray-500 lg:shaow-sm shadow-slate-400/50 w-11/12 mx-auto rounded-2xl">
            <span className="text-gray-500  text-[15px]"> Loan Amount</span>
            <h1 className="text-[34px] font-[800]  leading-[37px] mt-2">
              $10,000{" "}
            </h1>
          </div>
          <p className="p-5">
            This tool offers example pricing and loan terms for standard
            personal loans. Actual terms will vary based on application
            information, credit profile and applicable state law. Displayed
            terms may change without prior notice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
