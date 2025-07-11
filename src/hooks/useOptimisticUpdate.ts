import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHookTranslations } from "./useHookTranslations";

interface OptimisticUpdateConfig<TData, TInput> {
  updateFn: (data: TInput) => Promise<TData>;
  queryKey: unknown[];
  matcher: (item: TData, input: TInput) => boolean;
  updater: (item: TData, input: TInput) => TData;
  messages?: {
    success?: string;
    error?: string;
  };
}

export default function useOptimisticUpdate<
  TData extends Record<string, unknown>,
  TInput
>({
  updateFn,
  queryKey,
  matcher,
  updater,
  messages,
}: OptimisticUpdateConfig<TData, TInput>) {
  const queryClient = useQueryClient();
  const t = useHookTranslations();

  const defaultMessages = {
    success: messages?.success || t.optimistic.update_success,
    error: messages?.error || t.optimistic.update_error,
  };

  return useMutation({
    mutationFn: updateFn,

    onMutate: async (input) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      // Handle paginated data
      if (
        previousData &&
        typeof previousData === "object" &&
        "pages" in previousData
      ) {
        queryClient.setQueryData(queryKey, (old: unknown) => {
          const oldData = old as { pages: { data: TData[] }[] };
          return {
            ...oldData,
            pages: oldData.pages.map((page: { data: TData[] }) => ({
              ...page,
              data: page.data.map((item: TData) =>
                matcher(item, input) ? updater(item, input) : item
              ),
            })),
          };
        });
      }

      // Handle non-paginated object data
      else if (previousData && matcher(previousData as TData, input)) {
        queryClient.setQueryData(queryKey, (old: TData) => updater(old, input));
      }

      return { previousData };
    },

    onError: (error, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
      toast.error(
        error instanceof Error ? error.message : defaultMessages.error
      );
    },

    onSuccess: () => {
      toast.success(defaultMessages.success);
    },
  });
}
