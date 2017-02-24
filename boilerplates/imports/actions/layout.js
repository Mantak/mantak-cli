export const INFO_WINDOW = 'INFO_WINDOW';
export function infoWindow(markerId) {
  return {
    type: INFO_WINDOW,
    payload: markerId
  };
}
