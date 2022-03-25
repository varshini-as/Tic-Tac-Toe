import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = [];
  xIsNext!: Boolean;
  winner!: String | null;
  // player!: 'X' | 'O';
  gameOver!: Boolean;
  gameRunning!: Boolean;
  turnText!: String;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.gameOver = false;
    this.gameRunning = true;
  }

  get player() {
    
    return this.xIsNext? 'O' : 'X';
  }

  get currWinner(){
    return this.calculateWinner();
  }

  makeMove(idx: number) {
    
    if(!this.squares[idx]){
      this.squares.splice(idx,1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.getColor();
    this.winner = this.calculateWinner();

  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]){
          console.log(this.squares[a]);
          this.gameOver = true;
          this.gameRunning = false;
          return this.squares[a] + " won the game!";
        } 
    }
    if(this.checkBoard()){
      return "It's a draw!";
    }
    return null; 
  }

  getColor(){
    this.turnText = this.player == 'X'? '#008080' : '#FFA500';
  }

  checkBoard(){
    if(this.gameRunning){
      //  check for empty squares
      for(let i=0; i < this.squares.length; i++){
        // finds an empty square (no winner yet)
        if(this.squares[i] === null){
          return false;
        }
      }
      this.gameOver = true;
      this.gameRunning = false;
    }
    // returns true if all squares are filled and it's a draw
    return true;
  }


}


