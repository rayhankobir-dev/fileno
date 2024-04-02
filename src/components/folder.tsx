"use client";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Folder() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <DropdownMenu>
          <div
            onDoubleClick={() => console.log("folder clicked")}
            className="folder relative px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 duration-300"
          >
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
              <div className="w-full h-2 bg-gray-50"></div>
              <div className="w-full h-2 bg-gray-50"></div>
            </div>
          </div>

          <DropdownMenuContent className="w-fit">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Share</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Rename</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
