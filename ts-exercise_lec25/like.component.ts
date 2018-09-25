// Exercise Lec 25

/* my solution
export class Like {
    private likeNum: number = 0;
    private isOn: boolean = false;

    constructor(){

    }

    clickLike(){
        if(this.isOn == false){
            this.isOn = true;
            this.likeNum ++;
        }
        else{
            this.isOn = false;
            this.likeNum --;
        }
    }
}
*/

// Lecturer's solution
export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    onClick(){
        this._likesCount += (this._isSelected) ? -1: 1;
        this._isSelected = !this._isSelected;
    }
    get likesCount(){
        return this._likesCount
    }
    get isSelected(){
        return this._isSelected
    }
}
  