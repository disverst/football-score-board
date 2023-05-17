function isPageSelected(pathname: string | null, pagePath: string | string[]) {
  if (!pathname) {
    return false;
  }

  if (Array.isArray(pagePath)) {
    return pagePath.includes(pathname);
  }

  return pathname === pagePath;
}

export default isPageSelected;
