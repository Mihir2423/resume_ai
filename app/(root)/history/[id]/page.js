import HistoryBody from "@/components/root/history-body";
import { Table, TableHead, TableHeader } from "@/components/ui/table";
import { unstable_noStore } from "next/cache";
import React from "react";

const tableHead = ["Role", "Date", "View"];

const getUserHistory = async (id) => {
  unstable_noStore();
  const result = await fetch(`http://localhost:3000/api/resume/user/${id}`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  if (result.ok) {
    const { data } = await result.json();
    return data;
  }
  return [];
};

const History = async ({ params }) => {
  const history = await getUserHistory(params.id);
  console.log(params.id);
  return (
    <div className="min-h-screen py-32 md:p-24 md:pt-32 flex justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-zinc-900">
      <div className="md:w-[60vw] w-full max-md:px-4">
        <Table className="p-3 rounded-md overflow-hidden w-full">
          <TableHeader className="bg-gradient-to-r from-zinc-50 to-zinc-400">
            {tableHead?.map((item, i) => (
              <TableHead
                className="py-4 px-4 text-black text-xl font-[500] capitalize text-center"
                key={i}
              >
                {item}
              </TableHead>
            ))}
          </TableHeader>
          <HistoryBody history={history} />
        </Table>
      </div>
    </div>
  );
};

export default History;
