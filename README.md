# Data Structures & Algorithms Visualizer

An interactive web application for visualizing data structures and algorithms with step-by-step animations and explanations.

## Features

- **Interactive Visualizations**: Step-through animations for sorting algorithms and data structure operations
- **Multiple Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Binary Search, Linear Search
- **Data Structures**: Arrays, Linked Lists, Stacks, Queues, Binary Trees, Heaps, Graphs, Hash Tables
- **Graph Algorithms**: BFS, DFS, Dijkstra's Algorithm
- **Controls**: Step, Play, Pause, Reset functionality for each visualization
- **Code Display**: Real-time code/pseudocode display for each algorithm

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Styling**: CSS with inline styles

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dsa-visualizer
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. In a new terminal, start the frontend:
```bash
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Select a data structure or algorithm from the sidebar
2. Use the controls to:
   - **Step**: Move through the algorithm one step at a time
   - **Play**: Automatically run the visualization
   - **Pause**: Pause the current animation
   - **Reset**: Return to the initial state

## Project Structure

```
dsa-visualizer/
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   └── routes/
│   │       ├── algorithms.js
│   │       └── datastructures.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.js
│   │   │   ├── Visualizer.js
│   │   │   ├── BubbleSortVisualizer.js
│   │   │   ├── SelectionSortVisualizer.js
│   │   │   └── ... (other visualizer components)
│   │   └── App.js
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and Node.js
- Inspired by the need for better algorithm visualization tools 