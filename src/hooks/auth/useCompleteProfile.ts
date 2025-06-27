import { createUserAction } from "@/app/actions/createUserAction";
import { useRouter } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCompleteProfile() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (user_type: string) => {
      return await createUserAction(user_type);
    },
    onSuccess: () => {
      toast.success("تم إكمال الملف الشخصي بنجاح!");
      router.replace("/");
    },
    onError: (error) => {
      console.error("Error completing profile:", error);
      toast.error("فشل إكمال الملف الشخصي: " + error.message);
    },
  });
}
