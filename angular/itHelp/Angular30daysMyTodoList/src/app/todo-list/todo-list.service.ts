import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: string[] = [];
  constructor() { }

  /**
 * 新增待辦事項
 * @param {string} title - 待辦事項的標題
 * @memberof TodoListService
 */
  add(title: string): void {
    // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
    if (title || title.trim()) {
      this.list.push(title);
    }
  }

  /**
   * get todo list
   * 
   * @returns {string[]}
   * @memberof TodoListService
   */
  getList(): string[] {
    return this.list;
  }
}
