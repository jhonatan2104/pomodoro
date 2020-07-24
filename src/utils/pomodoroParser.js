export default function (data) {
  return {
    name: data.name,
    config: {
      duration: data.workIntervalMin,

      long_interval: data.longIntervalMin,

      short_interval: data.shortIntervalMin,

      cicle_size: data.cicleSize,
    },
  };
}
