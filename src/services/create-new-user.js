import supabaseClient from "./supabase-cient.js";

export async function createNewUser(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password

    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
}
