import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[300px] p-8 rounded border">
        <form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>Submit</Button>
        </form>
      </div>
    </main>
  );
}
