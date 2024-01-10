import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";

export const FormInput = ({
  form,
  isPending = false,
  name,
  label,
  type = "text",
  placeholder,
}: {
  form: any;
  isPending?: boolean;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label || <span className="capitalize">{name}</span>}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={placeholder}
              type={type}
            />
          </FormControl>

          <FormMessage {...field} />
        </FormItem>
      )}
    />
  );
};
