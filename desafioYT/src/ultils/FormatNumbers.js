function formatViwes(views) {
  views = parseInt(views);

  const formats = { 10e5: "K", 10e8: "M", 10e11: "B" };
  for (const [limit, simbol] of Object.entries(formats)) {
    if (views < 10e2) {
      return `${views}`;
    }
    if (views < limit) {
      const numberFormated = ((views / limit) * 1000).toFixed(1);
      return `${numberFormated}${simbol}`;
    }
  }
}

export { formatViwes };
