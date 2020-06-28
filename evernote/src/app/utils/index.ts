export const hasReachedBottomOfPage = () => {
  const requestEarlier = 500;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.body.scrollHeight;

  return viewportHeight + window.scrollY >= pageHeight - requestEarlier;
};

export default { hasReachedBottomOfPage };