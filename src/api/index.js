

export default {
  candidates: {
    list: () => Promise.resolve(import('./candidates.json')).then(res => res.default),
  },
};
  

