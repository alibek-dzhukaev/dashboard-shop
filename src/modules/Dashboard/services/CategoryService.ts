import { BaseService } from './BaseService.ts';
import { Category } from '../types.ts';

export class CategoryService extends BaseService {
  public async get() {
    const data = await this.instance.get<Category[]>('categories');
    return data.data;
  }

  public async getOne(categoryId: string) {
    const data = await this.instance.get<Category[]>(
      `categories/${categoryId}`,
    );
    return data.data;
  }

  public async remove(categoryId: string) {
    return this.instance.delete(`categories/${categoryId}`);
  }
}
