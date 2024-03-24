import { StorageKeys } from './storage-keys.ts';

export class BaseStorage {
  private static instance: BaseStorage | null;
  private readonly storage: Storage | undefined;

  private constructor(type: BaseStorageType) {
    if (type === BaseStorageType.LOCAL) {
      this.storage = window.localStorage;
    }
    if (type === BaseStorageType.SESSION) {
      this.storage = window.sessionStorage;
    }
  }

  public get(key: StorageKeys) {
    if (!this.storage) {
      return;
    }

    const data = this.storage.getItem(key);

    if (!data) {
      return;
    }

    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('error while parsing');
    }
  }
  public set<T>(key: StorageKeys, value: T) {
    if (!this.storage) {
      return;
    }

    try {
      const data = JSON.stringify(value);
      this.storage.setItem(key, data);
    } catch (error) {
      console.error('error while stringifying');
    }
  }
  public remove(key: StorageKeys) {
    if (!this.storage) {
      return;
    }

    this.storage.removeItem(key);
  }

  public static created(type: BaseStorageType): BaseStorage {
    if (!this.instance) {
      this.instance = new this(type);
    }
    return this.instance;
  }

  public static destroyed(): void {
    if (this.instance) {
      this.instance = null;
    }
  }
}

export const enum BaseStorageType {
  LOCAL = 'local',
  SESSION = 'session',
}
