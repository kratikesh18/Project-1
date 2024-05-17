import { signIn } from "@/auth";

export function Login() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Login with google </button>
    </form>
  );
}
