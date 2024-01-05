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
