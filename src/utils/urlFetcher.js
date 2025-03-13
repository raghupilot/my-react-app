async function fetchUrlTitle(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const match = html.match(/<title>(.*?)<\/title>/i);
      return match ? match[1] : url;
    } catch (error) {
      console.error(`Error fetching title for ${url}:`, error);
      return url;
    }
  }
  
  async function updateJepsWithTitles(jepsData) {
    for (const version in jepsData) {
      const jeps = jepsData[version].jeps;
      for (const jep of jeps) {
        const updatedExamples = await Promise.all(
          jep.examples.map(async (url) => ({
            url: url,
            title: await fetchUrlTitle(url)
          }))
        );
        jep.examples = updatedExamples;
      }
    }
    return jepsData;
  }
  
  export { fetchUrlTitle, updateJepsWithTitles };