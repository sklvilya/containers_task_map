export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[405, 'Method Not Allowed'], [404, 'Not Found'], [502, 'Bad Gateway']]);
  }

  translate(code) {
    let result;
    this.errors.forEach((value, key) => {
      if (key === code) {
        result = value;
      }
    });
    return result || 'Unknown error';
  }
}
