import React from 'react';
import {connect} from 'react-redux';
import Column from './Column';
import {moveLeft, moveRight, addItem} from "./actions";
import './Board.css';

class Board extends React.Component{

    moveLeft=(columnIndex, taskIndex)=>{
        this.props.moveLeft({columnIndex, taskIndex});
    };

    moveRight=(columnIndex, taskIndex)=>{
        this.props.moveRight({columnIndex, taskIndex});
    };

    addItem=(columnIndex)=>{
        const item=window.prompt('please add new task');
        item && this.props.addItem({item, columnIndex})
    };

    renderBoard(){
        const {board} = this.props;
        console.log('board is', board);
        const events = {moveLeft:this.moveLeft,
                        moveRight:this.moveRight,
                        addItem:this.addItem
                        };
        return board.map((item, index)=>(<Column item={item}
                                                 key={item.name}
                                                 index={index}
                                                 columns={board.length}
                                                 events={events}
        />));
    }


    render(){
        return (<div className={"board"}>
            {this.renderBoard()}
        </div>);
    }
}


const mapStateToProps=(state)=>{

    return {
        board: state.board
    }
};

export default connect(mapStateToProps, {moveLeft, moveRight, addItem})(Board);



