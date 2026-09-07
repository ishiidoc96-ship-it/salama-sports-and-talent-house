import { redirect } from "next/navigation";

export default function LandPage() {
  redirect("/properties?category=land");
}
