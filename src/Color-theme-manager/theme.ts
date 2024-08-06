// theme.ts
export interface Theme {
    backgroundColor: string;
    color: string;
  }
  
  export const lightTheme: Theme = {
    backgroundColor: '#ffffff',
    color: '#000000',
  };
  
  export const darkTheme: Theme = {
    backgroundColor: '#000000',
    color: '#ffffff',
  };
  