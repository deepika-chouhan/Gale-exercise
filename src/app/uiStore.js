import { observable } from 'mobx'

export default class UiStore {
  @observable ui = {
    startScreen: true,
    chatHome: true,
  }

}
