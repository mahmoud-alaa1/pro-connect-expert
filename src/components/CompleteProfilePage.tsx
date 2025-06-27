"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import FormRadioGroup from "./form-fields/FormRadioGroup";
import { User } from "lucide-react";
import { Form } from "./ui/form";
import useCompleteProfile from "@/hooks/auth/useCompleteProfile";

const schema = z.object({
  user_type: z.enum(["client", "expert"], {
    required_error: "من فضلك اختر نوع الحساب",
  }),
});

type FormValues = z.infer<typeof schema>;

export default function CompleteProfilePage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      user_type: "client",
    },
  });

  const {  isPending, mutate } = useCompleteProfile();

  const onSubmit = (values: FormValues) => {
    console.log(values);
    mutate(values.user_type);
  };

  return (
    <Form {...form}>
      <div className="max-w-md mx-auto py-20 text-center space-y-6">
        <h1 className="text-2xl font-bold">أكمل إعداد حسابك</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="p-4 bg-white shadow-lg rounded-lg flex justify-center ">
            <FormRadioGroup<FormValues>
              control={form.control}
              name="user_type"
              options={[
                { value: "client", label: "عميل", icon: <User /> },
                { value: "expert", label: "خبير", icon: <User /> },
              ]}
              direction="horizontal"
            />
          </div>
          <Button
            className="w-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:from-gray-400 disabled:hover:to-gray-400"
            disabled={isPending}
            type="submit"
          >
            {isPending ? <Spinner /> : "متابعة"}
          </Button>
        </form>
      </div>
    </Form>
  );
}
