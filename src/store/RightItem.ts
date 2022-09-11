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
  name: "rightItemArray",
  stateFactory: true,
  namespaced: true,
})
class RightItem extends VuexModule {
  private itemsArray: string[] = ["Watermelon", "Banana", "Peach"];

  public get getRightItemsArray(): string[] {
    return this.itemsArray;
  }

  public get getLastRightItem(): string {
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

export const rightItemModule = getModule(RightItem);
