import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHookTranslations } from "./useHookTranslations";

interface OptimisticDeleteConfig<TData, TId> {
  deleteFn: (id: TId) => Promise<void>;
  queryKey: unknown[];
  matcher: (item: TData, id: TId) => boolean;
  messages?: {
    success?: string;
    error?: string;
  };
}

export default function useOptimisticDelete<
  TData extends Record<string, unknown>,
  TId = number | string
>({
  deleteFn,
  queryKey,
  matcher,
  messages,
}: OptimisticDeleteConfig<TData, TId>) {
  const queryClient = useQueryClient();
  const t = useHookTranslations();

  const defaultMessages = {
    success: messages?.success || t.optimistic.delete_success,
    error: messages?.error || t.optimistic.delete_error,
  };

  return useMutation({
    mutationFn: deleteFn,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<{ pages: { data: TData[] }[] }>(
        queryKey,
        (old) => {
          if (!old?.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              data: page.data.filter((item) => !matcher(item, id)),
            })),
          };
        }
      );

      return { previousData };
    },

    onSuccess: () => {
      toast.success(defaultMessages.success);
      queryClient.invalidateQueries({ queryKey });
    },

    onError: (error, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }

      toast.error(
        error instanceof Error ? error.message : defaultMessages.error
      );
    },
  });
}
