import React from "react";

import useFarmDeleteGalleryMutation from "../../../../../hooks/api/post/useFarmDeleteGalleryMutaion";
import { toast } from "sonner";
import { GoArchive } from "react-icons/go";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../../ui/alert-dialog";
import useFarmArchiveCropMutation from "../../../../../hooks/api/post/useFarmArchiveCropMutation";

interface ArchiveCropAlertProps {
  cropId: string;
}

const ArchiveCropAlert: React.FC<ArchiveCropAlertProps> = ({ cropId }) => {
  const { mutateAsync: archiveCrop } = useFarmArchiveCropMutation();
  const handleDelete = () => {
    archiveCrop(cropId);
    toast.success("Archived Successfully!");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mt-2 text-white bg-red-600 rounded-full p-[.30rem] cursor-pointer">
          <GoArchive />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will archive the crop and all of its data in your
            community
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ArchiveCropAlert;
