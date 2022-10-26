export default function attackOPtions(obj) {
  const arr = [];
  const { special } = obj;
  special.forEach((item) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = item;
    arr.push({
      id,
      name,
      icon,
      description,
    });
  });
  return arr;
}
