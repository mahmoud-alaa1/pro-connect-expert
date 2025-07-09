import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";

export default function ViewProfileButton({ id }: { id: string }) {
  return (
    <Button
      className="bg-gradient-to-r shadow-lg rounded-full  from-indigo-500 to-blue-600 hover:scale-105 "
      variant="default">
      <Link href={`/professionals/${id}`}>View Profile</Link>
    </Button>
  );
}
