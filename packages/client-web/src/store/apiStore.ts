import { observable, action } from 'mobx';

import { ActionStatus } from 'src/constants';

import RootStore from './RootStore';

class ApiStore {
  @observable status: ActionStatus = ActionStatus.Initial;
  @observable error?: string;
  rootStore?: RootStore;

  @action.bound
  onRequest(): void {
    this.status = ActionStatus.Request;
  }

  @action.bound
  onSuccess(): void {
    this.status = ActionStatus.Success;
  }

  @action.bound
  onFailure(error?: string): void {
    this.status = ActionStatus.Failure;

    if (error) {
      this.error = error;
    }
  }
}

export default ApiStore;
