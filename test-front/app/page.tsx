import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-12">
      <div className="flex gap-4">
        <Button size="sm" variant="default">Create</Button>
        <Button size="sm" variant="secondary">Cancel</Button>
        <Button size="sm" variant="outline">Cancel</Button>
        <Button size="sm" variant="ghost">Create</Button>
        <Button size="sm" variant="destructive">Create</Button>
        <Button size="sm" variant="link">Create</Button>
      </div>
      <div className="flex gap-2">
      <Button size="sm" variant="default">Create</Button>
      <Button size="sm" variant="outline">Cancel</Button>
      <Button size="sm" variant="outline" className="gap-2">
        New event
        <ArrowRightIcon className="h-6 w-4 text-gray-500" />
      </Button>
      </div>
    </div>
  );
}
