import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function UserCard(props) {
  return (
    <Card>
      <div className="h-15 bg-card rounded-lg p-4 relative">
        <img src={props.image} className="block rounded-lg" />
      </div>
      <div className="flex px-4 mt-4  items-center justify-between">
        <h2 className="text-2xl  font-semibold">{props.name}</h2>
      </div>
      <div className="mt-1 p-4">
        <Button variant="outline" className="w-full">{props.email}</Button>
      </div>
    </Card>
  );
}

export default UserCard;
