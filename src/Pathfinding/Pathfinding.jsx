import React, { Component } from 'react';

import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';

import './Pathfinding.css';

const START_ROW = 6;
const START_COL = 6;
const FINISH_ROW = 15;
const FINISH_COL = 45;

export default class Pathfinding extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

  componentDidMount() {
    const grid = initialGrid();
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;

    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }   

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);

        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];

        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];

        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;

    const startNode = grid[START_ROW][START_COL];
    const finishNode = grid[FINISH_ROW][FINISH_COL];

    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <div style={{ background: '#0E0F10' }} >
      <div
        style={{ 
          height: 60,
          background: '#1A1C1D',
        }}
      >
        <img 
          style={{ 
            height: 30,
            width: 30,
            marginRight: 50,
            marginTop: 10
          }}
          src="https://www.multiimagem.com.br/wp-content/uploads/2019/10/Como-fazer-o-seu-posto-aparecer-no-Google-Maps.png" 
          alt="Icone mapa"
        />
        <span
          style={{ 
            fontWeight: 800,
            fontSize: 24,
            color: '#FFFFFF',
            marginRight: '50%'
          }}
        >Pathfinding com dijkstra</span>
          <button 
            style={{ 
              height: 35,
              width: 120,
              fontWeight: 800,
              fontSize: 16,
              border: 0,
              borderRadius: 8,
              color: '#E8E6E3',
              background: '#404491',
            }}
            onClick={() => this.visualizeDijkstra()}
          >
            Iniciar
          </button>
          
        </div>
        <span
            style={{ 
              marginRight: '57%',
              color: '#E8E6E3',
              fontWeight: 800,
            }}
          >Guilherme Bafica - 171030428</span>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;

                  return (
                    <Node
                      key={nodeIdx} 
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const initialGrid = () => {
  const grid = [];

  for (let row = 0; row < 20; row++) {
    const currentRow = [];

    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }

    grid.push(currentRow);
  }

  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_ROW && col === START_COL,
    isFinish: row === FINISH_ROW && col === FINISH_COL,
    distance: Infinity,
    isVisited: false, 
    isWall: false, 
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];

  const newNode = {
    ...node,
    isWall: !node.isWall,
  };

  newGrid[row][col] = newNode;
  
  return newGrid;
};
