// @flow

export type Student = {
    firstName: string,
    middleName: string,
    lastName: string,
    preferredName: string,
    guardianFirstName: string,
    guardianLastName: string,
    id: string
  };
  
  declare var module: {
    hot: {
      accept(path: string, callback: () => void): void
    }
  };