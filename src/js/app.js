// TODO: write your code here
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[\w-]+$/i.test(this.name) && !/^[\d\-_]/.test(this.name) && !/[\d_-]$/.test(this.name) && !/(\d{3,})/.test(this.name);
  }
}
