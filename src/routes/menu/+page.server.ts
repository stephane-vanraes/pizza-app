import { pizzas } from "$lib/server/data";

export async function load() {
  return {
    pizzas
  }
}
