import { HiDotsHorizontal } from "react-icons/hi";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, User } from "lucide-react";

export default function PreviewFile() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <DropdownMenu>
          <div className="folder relative px-2.5 py-1.5 bg-gray-100">
            <DropdownMenuTrigger asChild>
              <button className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-300 absolute top-1.5 right-3 duration-500">
                <HiDotsHorizontal />
              </button>
            </DropdownMenuTrigger>

            <h3 className="pt-6 text-sm font-semibold truncate ">
              Project Berif Project Berif Project Berif
            </h3>

            <small className="text-xs">Edited 8m ago</small>
            <div className="w-full h-fit flex flex-col gap-3 bg-white p-2 rounded-lg mt-4">
              <div className="w-full h-4 bg-gray-50"></div>
              <div className="w-full h-4 bg-gray-50"></div>
            </div>
          </div>

          <DropdownMenuContent className="w-fit">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
