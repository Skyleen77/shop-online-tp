"use client";

import { HomeCard } from "@/components/home-card";
import {
  User,
  ShoppingCart,
  List,
  Building,
  Globe,
  ScanBarcode,
} from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-screen max-w-4xl p-10 mx-auto">
      <div className="flex flex-wrap items-start justify-center gap-8">
        <HomeCard icon={User} title="Users" link="/users" />
        <HomeCard icon={ShoppingCart} title="Cart" link="/cart" />
        <HomeCard icon={List} title="Categories" link="/categories" />
        <HomeCard icon={Building} title="City" link="/city" />
        <HomeCard icon={Globe} title="Country" link="/country" />
        <HomeCard icon={ScanBarcode} title="Products" link="/products" />
      </div>
    </div>
  );
}
