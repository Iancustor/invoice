import React from "react";

function InvoiceCompo({ data }) {
  //   console.log(data);
  return (
    <div className="  flex flex-col gap-5 px-8">
      {" "}
      <section className="flex flex-col gap-1">
        <div className=" flex justify-between">
          {" "}
          <h2 className="font-bold bg-black rounded-tr-2xl rounded-bl-2xl text-fuchsia-300 px-8 py-2">
            INVOICE
          </h2>
          <p className="text-[12px] font-bold">
            INVOICE # <br />
            <span className=" font-extralight">000El</span>
          </p>
        </div>
        <h2 className=" flex items center  justify-center font-bold text-fuchsia-700">
          {" "}
          {data.title}
        </h2>
        <div>
          <h2>BILLING TO</h2>
          <h3 className=" font-bold">{data.personName}</h3>
          <h3>Street Avenue 10019</h3>
          <h3>Miami,FL</h3>
        </div>
      </section>
      <section>
        <div className="relative flex flex-col gap-2 overflow-x-auto">
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  text-gray-50 uppercase bg-black ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  QTY
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {data.productName}
                </th>
                <td className="px-6 py-4 text-gray-900 ">{data.price}</td>
                <td className="px-6 py-4 text-gray-900 ">{data.quantity}</td>
                <td className="px-6 py-4 text-gray-900 ">{data.price}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-end justify-center">
            <h2>SUB TOTAL $0.00</h2>
            <h2>TAX 0.00%</h2>
            <h2> TOTAL $0.00</h2>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold">TERMS AND CONDITIONS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit dolor <br />
          sit amet dolor sit amet . Illo molestias totam <br /> vitae obcaecati
          quibusdam fugit ea dignissimos autem.
        </p>
      </section>
    </div>
  );
}

export default InvoiceCompo;
