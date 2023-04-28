import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const combineElements = (element1, element2) => {
  if (element1 === 'Earth' && element2 === 'Water') return 'Mud';
  if (element1 === 'Fire' && element2 === 'Air') return 'Heat';
  if (element1 === 'Mud' && element2 === 'Heat') return 'Clay';
  if (element1 === 'Clay' && element2 === 'Heat') return 'Bricks';
  return null;
};

const initialGrid = [
  ['Earth', 'Water', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['Fire', 'Air', '', '', ''],
];

export default function Levels() {
  const [grid, setGrid] = useState(initialGrid);
  const [selected, setSelected] = useState(null);

  const handleElementPress = (row, col) => {
    if (!selected && grid[row][col]) {
      setSelected({ row, col, element: grid[row][col] });
    } else if (selected) {
      if (grid[row][col]) {
        const newElement = combineElements(selected.element, grid[row][col]);
        if (newElement) {
          const newGrid = grid.map((row, rowIndex) => {
            return row.map((element, colIndex) => {
              if (rowIndex === selected.row && colIndex === selected.col) {
                return '';
              }
              if (rowIndex === row && colIndex === col) {
                return newElement;
              }
              return element;
            });
          });
          setGrid(newGrid);
        }
      } else {
        const newGrid = grid.map((row, rowIndex) => {
          return row.map((element, colIndex) => {
            if (rowIndex === selected.row && colIndex === selected.col) {
              return '';
            }
            if (rowIndex === row && colIndex === col) {
              return selected.element;
            }
            return element;
          });
        });
        setGrid(newGrid);
      }
      setSelected(null);
    }
  };

  return (
    <View style={styles.container}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((element, colIndex) => (
            <TouchableOpacity
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.element,
                element
                  ? styles.elementFilled
                  : {},
                selected && selected.row === rowIndex && selected.col === colIndex
                  ? styles.elementSelected
                  : {},
              ]}
              onPress={() => handleElementPress(rowIndex, colIndex)}
            >
              <Text style={styles.elementText}>{element}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  element: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementFilled: {
    backgroundColor: '#ccc',
  },elementSelected: {
    borderColor: '#f00',
    borderWidth: 2,
    },
    elementText: {
    fontSize: 12,
    },
    });
    