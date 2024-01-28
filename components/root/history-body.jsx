import React from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { Eye } from "lucide-react";
import Link from "next/link";

const HistoryBody = ({ history }) => {
  return (
    <TableBody>
      {history.length === 0 ? (
        <TableRow>
          <TableCell colSpan={3} className="py-4 text-center">
            No history found
          </TableCell>
        </TableRow>
      ) : (
        history.map((item) => (
          <TableRow
            key={item._id}
            className="text-white bg-gradient-to-r from-black to-blue-400 hover:bg-black"
          >
            <TableCell className="text-center select-none">
              {item?.role}
            </TableCell>
            <TableCell className="text-center select-none">
              {formatDate(item?.created_at)} {formatTime(item?.created_at)}
            </TableCell>
            <TableCell className="text-center flex items-center gap-2 justify-center cursor-pointer">
              <Link
                href={`/view/${item._id}`}
                className=" flex items-center gap-2 justify-center "
              >
                <Eye />
                View
              </Link>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
};

export default HistoryBody;
