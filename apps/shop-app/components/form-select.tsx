import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";

export const FormSelect = ({
  form,
  isPending = false,
  name,
  label,
  options,
}: {
  form: any;
  isPending?: boolean;
  name: string;
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
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
            <select
              {...field}
              disabled={isPending}
              className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormControl>

          <FormMessage {...field} />
        </FormItem>
      )}
    />
  );
};
