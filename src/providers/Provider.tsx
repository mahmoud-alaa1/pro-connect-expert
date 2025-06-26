import InternationalizationProvider from "./InternationalizationProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <InternationalizationProvider>{children}</InternationalizationProvider>
    </ReactQueryProvider>
  );
}
