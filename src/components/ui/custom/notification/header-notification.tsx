import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import useAuth from "@hooks/useAuth";
import { PiBell, PiBellFill } from "react-icons/pi";
import React, { useMemo, useState } from "react";
import useGetUserNotifications from "@hooks/api/get/useGetUserNotifications";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import usePutUserNotificationRead from "../../../../hooks/api/put/usePutUserNotificationRead";

//Refactor nalang dapat dito naka .map pero ang mahalaga masaya tayong mga pilipino
const HeaderNotification = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const { data } = useAuth();
  // const { mutateAsync: deleteAuthData } = useDeleteAuthMutate();
  const navigate = useNavigate();
  const { data: userNotifications, isLoading } = useGetUserNotifications({
    search: undefined,
    page: undefined,
    perpage: undefined,
    filter: undefined
  });

  const { mutateAsync: readNotificationMutate } = usePutUserNotificationRead();

  const handleReadNotification = async (
    redirect: string | undefined,
    id: string | undefined
  ) => {
    try {
      readNotificationMutate(id ?? "");
      if (redirect !== "") {
        navigate(redirect ?? "");
      }
      return;
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  const unreadNotifications = useMemo(
    () => userNotifications?.notifications?.filter(item => !item.viewed).length,
    [userNotifications]
  );

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen(prev => !prev)}>
        <div
          className={`${
            isOpen && "bg-gray-200/80 text-blue-500 "
          } bg-gray-200/40 transform active:scale-75 transition-transform focus:outline-0 text-xl cursor-pointer p-2 rounded-full my-auto flex`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <DropdownMenuTrigger></DropdownMenuTrigger>
          {isOpen ? (
            <PiBellFill />
          ) : (
            <>
              <div className="relative">
                {(unreadNotifications || 0) > 0 && (
                  <div className="absolute left-4 bottom-4 w-[20px] text-center text-white bg-red-600 text-[9px] rounded-full p-1 font-extrabold">
                    {unreadNotifications}
                  </div>
                )}
                <PiBell />
              </div>
            </>
          )}
        </div>

        <DropdownMenuContent
          className="w-[22rem] sm:w-[25rem] ms-5 mt-3"
          align="end"
        >
          <DropdownMenuLabel>
            <span className="line-clamp-1 capitalize text-lg font-poppins-semibold">
              Notifications
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {isLoading ? (
            <>Loading</>
          ) : (
            <>
              {userNotifications?.notifications?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <DropdownMenuItem
                      className="flex flex-col  justify-start items-start cursor-pointer min-h-20"
                      onClick={() =>
                        handleReadNotification(item.redirect_to, item.id)
                      }
                    >
                      <span className="font-poppins-medium text-sm mt-2 opacity-70">
                        {item.body}
                      </span>
                    </DropdownMenuItem>
                  </React.Fragment>
                );
              })}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderNotification;
