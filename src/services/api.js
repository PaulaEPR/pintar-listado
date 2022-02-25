const callToApi = () => {

  return fetch(`https://paulaepr.github.io/recursos-adalab/apis/adalabers.json`)
    .then(response => response.json())
    .then(response => {
      const result = response.results.map(adalaber => {
        return {
          name: adalaber.name,
          counselor: adalaber.counselor,
          speciality: adalaber.speciality,
        };
      });
      return result;
    });
};

export default callToApi;