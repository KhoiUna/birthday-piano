export default class Wish {
  static async fetchWish(id: number) {
    const response = await (await fetch(`api/wish?id=${id}`)).json();
    return response;
  }
}
