import { UserBalance } from "../interfaces";
import { supabase } from "./db";

export const getUsers = async () => {
  // fetch users from Users table
  try {
    const { data, error } = await supabase.from("users").select();
    if (error) throw error;

    const users = data as Omit<UserBalance, "balance">[];
    console.info(`Retrieved ${users.length} users.`);
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
};
