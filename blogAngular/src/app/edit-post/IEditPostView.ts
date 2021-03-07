
export interface IEditPostView {
  onClose(): void;
  afterSaveActions(saveAndClose: boolean): void;
  displayErrors(errors: string[]): void;
  getPropertyFromUrl(property: string): string;
  displayInfo(message: string): void;
  getCurrentUser(): any;
}
