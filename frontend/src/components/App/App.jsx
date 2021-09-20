import styles from './App.module.css';
import Expenses from '../Expenses/Expenses';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Expense tracker</h1>
      </header>
      <Expenses />
    </div>
  );
}

export default App;
