export interface SwiplOptions {
  print?: (str: string) => void;
  printErr?: (str: string) => void;
  arguments?: string[];
  noInitialRun?: boolean;
  locateFile?: (str: string) => string;
  [key: string | symbol]: any;
}

export interface FS {
  writeFile(fileName: string, file: string): void;
  [key: string | symbol]: any;
}

export interface Prolog {
  // call_string(str: string): void;
  query(str: string): any;
}

export interface SwiplModule {
  FS: FS;
  prolog: Prolog;
}

declare function SWIPL(options: SwiplOptions): Promise<SwiplModule>;

export default SWIPL;