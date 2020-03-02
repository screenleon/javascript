/**
 * 待辦事項的資料物件模型
 *
 * @export
 * @class Todo
 */
export class Todo {

    /**
     * 事項名稱
     *
     * @private
     * @memberof Todo
     */
    private title: string;

    /**
     * 完成與否
     * 
     * @private
     * @memberof Todo
     */
    private completed: boolean = false;

    /**
     * Creates an instance of Todo.
     * 
     * @param _title 
     * @memberof Todo
     */
    constructor(_title: string) {
        this.title = _title || '';
    }

    /**
     * 此事項是否已經完成
     *
     * @readonly
     * @type {boolean}
     * @memberof Todo
     */
    get done(): boolean {
        return this.completed;
    }

    /**
     * 取得事項名稱
     *
     * @returns {string}
     * @memberof Todo
     */
    getTitle(): string {
        return this.title;
    }

    /**
     * 來回切換完成狀態
     *
     * @memberof Todo
     */
    toggleCompletion(): void {
        this.completed = !this.completed;
    }

}
