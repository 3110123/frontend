import {
  getModule,
  Module,
  VuexModule,
  Mutation,
} from "vuex-module-decorators";
import store from "@/store";

@Module({
  dynamic: true,
  store,
  name: "leftItemArray",
  stateFactory: true,
  namespaced: true,
})
class LeftItem extends VuexModule {
  private itemsArray: string[] = [
    "Apple",
    "Grape",
    "Strawberry",
    "Cherry",
    "Plum",
  ];

  public get getLeftItemsArray(): string[] {
    return this.itemsArray;
  }

  public get getLastLeftItem(): string {
    return this.itemsArray.slice(-1)[0];
  }

  @Mutation
  public add(item: string): void {
    this.itemsArray.push(item);
  }

  @Mutation
  public remove(): void {
    this.itemsArray.pop();
  }
}

export const leftItemModule = getModule(LeftItem);
