import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArchiveIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useLocalStorage } from "@/utils/use-storage";
import { User } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DropDownMenu = () => {
  const router = useRouter();
  const userDetails = useLocalStorage("userDetails");
  const handleSignOut = async () => {
    try {
      const res = await axios.post("/api/logout");
      if (res.status === 200) {
        router.replace("/login");
        localStorage.clear();
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-blue-400 p-3 rounded-full flex items-center">
            <User />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled>
            <div className="flex flex-col space-y-1 leading-none">
              {userDetails?.name && (
                <p className="font-medium truncate text-sm text-zinc-800 cursor-pointer">
                  {userDetails?.name}
                </p>
              )}
              {userDetails?.email && (
                <p className="w-[200px] truncate text-sm text-zinc-800 cursor-pointer">
                  {userDetails?.email}
                </p>
              )}
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Link href={`/history/${userDetails?._id}`}>
            <DropdownMenuItem>
              <ArchiveIcon className="w-4 h-4 mr-2" />
              History
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="font-semibold cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenu;
