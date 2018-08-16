// @flow

export type Student = {
    firstName: string,
    middleName: string,
    lastName: string,
    preferredName: string,
    guardianFirstName: string,
    guardianLastName: string,
    id: string,
    gender: string,
    grade: string,
    race: string,
    ethnicity: string,
    nationality: string,
    countryOfRefuge: string,
    vulnerabilityStatus: string,
    teacherName: string,
    cpaName: string, 
  };
  
  declare var module: {
    hot: {
      accept(path: string, callback: () => void): void
    }
  };