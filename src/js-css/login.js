const { signIn, signOut } = await import("auth-astro/client")
document.querySelector("#login").onclick = () => signIn("github")
document.querySelector("#logout").onclick = () => signOut()
document.querySelector("#logingoogle").onclick = () => signIn("google")