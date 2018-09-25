"use strict";
// Exercise Lec 25
Object.defineProperty(exports, "__esModule", { value: true });
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
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
