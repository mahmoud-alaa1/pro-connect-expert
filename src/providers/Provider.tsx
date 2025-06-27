import ReactQueryProvider from "./ReactQueryProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
