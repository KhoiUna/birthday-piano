export default class Wish {
  static async fetchWish(id: string) {
    const response = await (await fetch(`api/wish?id=${id}`)).json();
    return response;
  }
}
