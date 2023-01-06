export const OPEN_MENU = "[MENU] OPEN";
export const CLOSE_MENU = "[MENU] CLOSE";
export const SELECTED_MENUITEM = "[MENU] SELECTED";

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  };
}
export function openMenu(currentTarget, options) {
  return {
    type: OPEN_MENU,
    currentTarget,
    options,
  };
}
export function selectedMenuItem(selectedItem, time) {
  return {
    type: SELECTED_MENUITEM,
    payload: selectedItem,
    when: time,
  };
}
