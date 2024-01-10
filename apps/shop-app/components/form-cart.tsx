"use client";

import { Form } from "@ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";
import { CartSchema, UserSchema } from "@/schemas";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { FormInput } from "@/components/form-input";
import { FormSelect } from "@/components/form-select";
import { Button } from "@ui/components/ui/button";
import { createUser, updateUser } from "@/app/actions/users";
import { FormError } from "@ui/components/ui/form-error";
import { FormSuccess } from "@ui/components/ui/form-success";
import { useRouter } from "next/navigation";
import { logger } from "@/lib/logger";
import { FormCheckbox } from "./form-checkbox";
import { createCart, updateCart } from "@/app/actions/cart";

export const FormCart = ({
  products,
  users,
  cart,
}: {
  products: Record<string, any>[];
  users: Record<string, any>;
  cart?: Record<string, any>;
}) => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const defaultValues = cart
    ? {
        user: cart.idUser.toString(),
        product: cart.idProduct.toString(),
        quantity: cart.quantity.toString(),
        payed: cart.payed.toString(),
        confirmed: cart.confirmed,
      }
    : {
        user: users[0].id.toString(),
        product: products[0].productId.toString(),
        quantity: "0",
        payed: "0",
        confirmed: false,
      };

  const form = useForm<z.infer<typeof CartSchema>>({
    resolver: zodResolver(CartSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof CartSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      if (cart) {
        updateCart(cart.idCart, values)
          .then((res) => {
            logger.info("Cart updated successfully, cart id: " + cart.idCart);
            setSuccess("Cart updared successfully");
          })
          .catch((err) => {
            logger.error("Cart updated failed, cart id: " + cart.idCart);
            setError(err.message);
          });
      } else {
        createCart(values)
          .then((res) => {
            logger.info("Cart created successfully");
            setSuccess("Cart created successfully");
            router.push("/cart");
          })
          .catch((err) => {
            logger.error("Cart create failed");
            setError(err.message);
          });
      }
    });
  };

  return (
    <div className="max-w-2xl p-10 mx-auto">
      <Button className="mb-10" asChild>
        <Link href="/cart">Back to cart</Link>
      </Button>

      <Heading className="text-start">
        {cart ? "Update" : "Create"} Cart
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormSelect
              name="user"
              form={form}
              options={users.map((user) => ({
                value: user.id,
                label: user.userName,
              }))}
            />
            <FormSelect
              name="product"
              form={form}
              options={products.map((product) => ({
                value: product.productId,
                label: product.productId,
              }))}
            />
            <FormInput name="quantity" type="number" form={form} />
            <FormSelect
              name="payed"
              form={form}
              options={[
                {
                  value: "1",
                  label: "Payed",
                },
                {
                  value: "0",
                  label: "Not payed",
                },
              ]}
            />
            <FormCheckbox name="confirmed" form={form} />
          </div>

          {error ? (
            <FormError message={error} />
          ) : (
            success && <FormSuccess message={success} />
          )}

          <Button disabled={isPending} type="submit" className="w-full">
            {cart ? "Update" : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
