export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export function closeInfoWindow(markerId) {
  return {
    type: CLOSE_INFO_WINDOW,
    payload: markerId
  };
}
