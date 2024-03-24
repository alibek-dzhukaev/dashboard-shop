import axios from 'axios';

export class BaseService {
  private static instance: BaseService | null;

  protected readonly instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 1000,
  });

  public static created() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

  public static destroyed(): void {
    if (this.instance) {
      this.instance = null;
    }
  }
}
