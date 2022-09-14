export class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUsername(name) {
    if(/[^\w_-]/.test(name)){
      return false
    }
    if(/\d{4,}/.test(name)){
      return false
    }
    if(/^[\d_-].*[\d_-]$/.test(name)){
      return false
    }
    if(/^[\d_-].*$/.test(name)){
      return false
    }
    if(/^.*[\d_-]$/.test(name)){
      return false
    }
    return true
  }
}
export const eks1 = new Validator()