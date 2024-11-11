import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function Customer() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-4xl">Customer List</h1>
        <Link href='/customer/insert' className="btn btn-primary flex w-fit">
          <IconPlus/>
          Add Customer
        </Link>
      </div>
    </div>
  );
}
