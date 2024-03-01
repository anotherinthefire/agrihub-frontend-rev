import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import CaptureWithDelete from "@components/ui/custom/input/capture-with-delete";
import { AspectRatio } from "@components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

const breadcrumbItems = [
  {
    title: "Home Page",
    link: "/admin/website/home"
  }
];

const HomeAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Home page contents
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        This includes call to action section and our approach
      </p>
      <hr className="my-4" />
      <div className="mx-8">
        <h3 className="font-bold my-2">Carousel items</h3>
        <Carousel>
          <CarouselPrevious className="mt-[8rem]" />
          <CarouselNext className="mt-[8rem]" />
          <CarouselContent className="-ml-2 md:-ml-4 h-64">
            {/* 1 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 2 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 3 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 4 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 5 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
          </CarouselContent>
        </Carousel>

        <div className="my-4">
          <div className="w-full mb-4">
            <Label>Carousel Header Text</Label>
            <Input type="text" placeholder="input cta header here" />
          </div>

          <div className="mb-4">
            <Label>Carousel Body Text</Label>
            <Textarea />
          </div>

          <div className="mb-4">
            <Label>`Our Approach</Label>
            <Textarea />
          </div>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(HomeAdmin, ["admin", "asst_admin"]);
