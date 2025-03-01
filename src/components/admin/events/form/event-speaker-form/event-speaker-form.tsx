import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";

import ProfileImageUpload from "../../../../ui/custom/image/profile-image-input";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/custom/input-admin/input";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../../../../ui/button";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewEventSpeaker } from "../../../../../api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEventSpeakerSchema } from "./schema";
import useEventsCreateSpeaker from "../../../../../hooks/api/post/useEventsCreateSpeaker";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import useGetEventsDraftView from "../../../../../hooks/api/get/useGetEventsDraftView";
import usePutEventsUpdateSpeaker from "../../../../../hooks/api/put/usePutEventsUpdateSpeaker";
interface formProps {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
  speakerId?: string;
}
const EventSpeakerForm: React.FC<formProps> = ({ setIsOpen, speakerId }) => {
  //get data
  const { eventId } = useParams();

  const { data: eventData } = useGetEventsDraftView(eventId || "");
  //get present speaker
  const activeSpeaker = useMemo(() => {
    return eventData?.speaker?.find(speaker => speaker.id === speakerId);
  }, [eventData, speakerId]);

  const form = useForm<NewEventSpeaker>({
    resolver: zodResolver(addEventSpeakerSchema),
    mode: "onBlur"
  });

  // validations
  useEffect(() => {
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
    if (form.formState.errors.profile) {
      toast.error(form?.formState?.errors?.profile?.message);
    }
  }, [form.formState.errors]);

  //create
  const { mutateAsync: createSpeakerMutate, isLoading: isSpeakerLoading } =
    useEventsCreateSpeaker();

  //create
  const { mutateAsync: updateSpeakerMutate, isLoading: isUpdateLoading } =
    usePutEventsUpdateSpeaker();

  const handleSubmitForm = async (data: NewEventSpeaker) => {
    const compiledData: NewEventSpeaker = {
      title: data.title,
      name: data.name,
      profile: data.profile
    };

    try {
      if (speakerId) {
        await updateSpeakerMutate({
          id: activeSpeaker?.id || "",
          formData: compiledData
        });
        toast.success("Speaker Edited Successfully!");
      } else {
        await createSpeakerMutate({
          id: eventId || "",
          formData: compiledData
        });
        toast.success("Speaker Added Successfully!");
      }

      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)} className="w-full">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-4">
          <div className="grid items-center gap-1.5">
            <Label className=" font-poppins-medium">Profile</Label>

            <FormField
              control={form.control}
              name="profile"
              render={() => (
                <ProfileImageUpload
                  defaultValue={activeSpeaker?.profile}
                  onChange={value => {
                    form.setValue("profile", value);
                  }}
                />
              )}
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" font-poppins-medium">Name</Label>
            <Input
              type="text"
              placeholder="Input speaker name"
              defaultValue={activeSpeaker?.name}
              {...form.register("name")}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className=" font-poppins-medium">Type</Label>
            <Input
              type="text"
              placeholder="Input event title"
              defaultValue={activeSpeaker?.title}
              {...form.register("title")}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="reset"
            variant={"outline"}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button disabled={isSpeakerLoading || isUpdateLoading} type="submit">
            Save
          </Button>
        </div>
        <Loader isVisible={isSpeakerLoading || isUpdateLoading} />
      </form>
    </Form>
  );
};

export default EventSpeakerForm;
