import * as z from "zod";

export const UserSchema = z.object({
  name: z.string().min(1),
  fname: z.string().min(1),
  lname: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  password: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
  loginStatus: z.string(),
});

export const CartSchema = z.object({
  user: z.string().min(1),
  product: z.string().min(1),
  quantity: z.string().min(1),
  payed: z.string().min(1),
  confirmed: z.boolean(),
});
