import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  router.redirect("home");

  return null;
}
