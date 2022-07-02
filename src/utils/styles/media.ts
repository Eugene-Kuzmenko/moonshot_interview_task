import { BREAKPOINTS } from 'constants/breakpoints';
import { BreakpointName } from 'types/styles';

export function onMinScreenWidth(breakpoint: BreakpointName) {
  return `@media screen and (min-width: ${BREAKPOINTS[breakpoint]})`
}

export function onMaxScreenWidth(breakpoint: BreakpointName) {
  return `@media screen and (max-width: ${BREAKPOINTS[breakpoint]})`
}
