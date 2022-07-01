/// <reference types="react-scripts" />

declare module 'assets/providers.json' {
  import { ProviderCardData } from './types/provider';

  declare const data: ProviderCardData[];

  export default data;
}
