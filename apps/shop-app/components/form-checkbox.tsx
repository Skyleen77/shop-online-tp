import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Checkbox } from "@ui/components/ui/checkbox";

export const FormCheckbox = ({
  form,
  isPending = false,
  name,
  label,
}: {
  form: any;
  isPending?: boolean;
  name: string;
  label?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
          <FormControl>
            <Checkbox
              disabled={isPending}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              {label || <span className="capitalize">{name}</span>}
            </FormLabel>
          </div>

          <FormMessage {...field} />
        </FormItem>
      )}
    />
  );
};
