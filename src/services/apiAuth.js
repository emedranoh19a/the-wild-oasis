import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    //TODO remove the console log
    console.log(error);
    throw new Error(error.message);
  }
  //TODO remove the console log.
  console.log(data);
  return data;
}
//We are checking if the user exists and it is already authenticated.
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  //this is essentially the name
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  //TODO get rid of the console log
  console.log(data);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data.user;
}
