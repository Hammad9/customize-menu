export const getDomainNameFromUrl = (url: string) => {
  let formattedUrl = url;
  if (!url?.includes('http://') && !url?.includes('https://')) {
    formattedUrl = 'http://' + url;
  }
  try {
    const domain = new URL(formattedUrl).hostname;
    const parts = domain.split('.');
    if (parts.length >= 3 && parts[0] === 'www') {
      return parts[1]; // Return the part after "www"
    } else if (parts.length >= 2) {
      return parts[0]; // Return the first part
    }
    return domain;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return 'Unknown';
  }
};
