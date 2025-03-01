import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BarDistrictOverview from "../charts/bar-district-overview";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@components/ui/card";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [{ title: "Farm Management", link: "/admin/farm" }];

const Farms = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">Farm Overview</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="flex justify-start items-center flex-wrap">
          <CardHeader>
            <CardTitle>10</CardTitle>
            <CardDescription>Pending Farm Applications</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <CardTitle>127</CardTitle>
            <CardDescription>Total Community Farm Registered</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <CardTitle>1840</CardTitle>
            <CardDescription>Total Registered Farmer</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-full p-5">
          <BarDistrictOverview />
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(Farms, ["admin", "asst_admin"]);
