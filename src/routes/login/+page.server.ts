import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"
import type { PageServerLoad } from './$types';

export let actions: Actions = {
  async default(event) {
    event.locals.user

    let data = await event.request.formData()
    let mail = data.get("email") as string;
    let password = data.get("password")

    if (password == "password") {
        event.cookies.set("user", mail.split("@")[0], { path: "/", httpOnly: true })
        return redirect(303, "/")
    } else {
      return fail(400, { message: "Invalid password: try 'password'" })
    }
  },
}

export const load = (async ({ cookies }) => {
  const cookie = cookies.get('user');
  if (cookie) {
    return {cookie};
  }
  return {};
}) satisfies PageServerLoad;

