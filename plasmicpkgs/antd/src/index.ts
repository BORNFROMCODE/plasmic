import { Registerable } from "./registerable";
import { registerButton } from "./registerButton";
import { registerCheckbox, registerCheckboxGroup } from "./registerCheckbox";
import { registerCollapse, registerCollapsePanel } from "./registerCollapse";
import {
  registerMenu,
  registerMenuDivider,
  registerMenuItem,
  registerMenuItemGroup,
  registerSubMenu,
} from "./registerMenu";
import { registerOptGroup, registerOption } from "./registerOption";
import { registerSelect } from "./registerSelect";
import { registerSlider } from "./registerSlider";
import { registerSwitch } from "./registerSwitch";

export * from "./registerable";
export * from "./registerButton";
export * from "./registerCheckbox";
export * from "./registerCollapse";
export * from "./registerMenu";
export * from "./registerOption";
export * from "./registerSelect";
export * from "./registerSlider";
export * from "./registerSwitch";

export function registerAll(loader?: Registerable) {
  registerButton(loader);
  registerSlider(loader);
  registerSwitch(loader);
  registerOption(loader);
  registerOptGroup(loader);
  registerSelect(loader);
  registerCollapsePanel(loader);
  registerCollapse(loader);
  registerCheckbox(loader);
  registerCheckboxGroup(loader);
  registerMenuDivider(loader);
  registerMenuItem(loader);
  registerMenuItemGroup(loader);
  registerSubMenu(loader);
  registerMenu(loader);
}