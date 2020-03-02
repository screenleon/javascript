import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  /**
   * 新增代辦事項
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement): void {

    const todo = inputRef.value.trim();

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  /**
   * 取得待辦事項清單
   *
   * @returns {string[]}
   * @memberof TodoListComponent
   */
  getList(): Todo[] {
    return this.todoListService.getList();
  }
  
  /**
   * 移除待辦事項
   * @param index {number} index - 待辦事項的索引位置
   * @memberof TodoListComponent
   */
  remove(index: number): void {
    return this.todoListService.remove(index);
  }
}
