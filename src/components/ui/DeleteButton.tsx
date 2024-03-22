import { Trash2 } from "lucide-react";
import { Button } from "./button";
import { deleteCartItem } from "@/lib/actions";
import { toast } from "react-toastify";

type Props = { cartItemId: string };

export default function DeleteButton({ cartItemId }: Props) {
  return (
    <Button
      onClick={() => {
        try {
          deleteCartItem(cartItemId);
          toast("Successfully deleted item.");
        } catch (error) {
          toast("Failed to delete item.");
        }
      }}
      size={"icon"}
      variant={"destructive"}
      className="bg-red-900"
    >
      <Trash2 />
    </Button>
  );
}
